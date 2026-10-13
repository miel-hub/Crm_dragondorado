"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "../../lib/user-context";

export default function JuegoPage() {
  const gameRef = useRef<any>(null);
  const { user } = useUser();
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loadingBoard, setLoadingBoard] = useState(false);
  const [generatingTicket, setGeneratingTicket] = useState(false);

  const API_URL = (import.meta.env.VITE_API_URL as string) ?? "http://localhost:3000";

  useEffect(() => {
    let gameInstance: any;
    let isMounted = true;

    async function startGame() {
      const PhaserModule = await import("phaser");
      const Phaser = PhaserModule.default || PhaserModule;

      // Import dinámico del scene JS (casteado a any)
      // La escena Phaser está en JavaScript para conservar compatibilidad con el juego existente.
      // @ts-expect-error El módulo legacy no tiene declaraciones TypeScript.
      const GameSceneModule = await import("../../game/game");
      const GameScene: any = (GameSceneModule as any).default || GameSceneModule;

      const config = {
        type: Phaser.AUTO,
        parent: "phaser-container",
        width: 420,
        height: 630,
        physics: {
          default: "arcade",
          arcade: { gravity: { x: 0, y: 0 }, debug: false },
        },
        scene: GameScene,
        scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
      };

      if (!isMounted) return;
      gameInstance = new Phaser.Game(config);
      gameRef.current = gameInstance;

      setTimeout(() => {
        try {
          const scene = (gameInstance.scene as any).keys["JuegoScene"];
          if (scene && scene.events) {
            scene.events.on("gameOver", async (data: { score: number }) => {
              await submitScore(data.score);
              await fetchLeaderboard();
            });
          }
        } catch (e) {
          console.error(e);
        }
      }, 300);
    }

    startGame();
    fetchLeaderboard();

    return () => {
      isMounted = false;
      if (gameRef.current) {
        try { gameRef.current.destroy(true); } catch (e) {}
        gameRef.current = null;
      }
    };
  }, []); // eslint-disable-line

  async function submitScore(score: number) {
    if (!user?.id_usuario) {
      console.warn("Usuario no autenticado: no se guarda puntaje");
      return;
    }
    try {
      const res = await fetch(`${API_URL}/api/score`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           id_usuario: user.id_usuario,
            score: score,
           }),

      });
      if (!res.ok) {
        console.error("Error guardando puntaje", await res.text());
      } else {
        const data = await res.json();
        console.log("Score guardado", data);
      }
    } catch (e) {
      console.error("Error enviando score:", e);
    }
  }

  async function fetchLeaderboard() {
    setLoadingBoard(true);
    try {
      const res = await fetch(`${API_URL}/api/leaderboard`, { credentials: "include" });
      if (!res.ok) throw new Error("Error fetching leaderboard");
      const data = await res.json();
      setLeaderboard(data);
    } catch (e) {
      console.error("Error leaderboard:", e);
    } finally {
      setLoadingBoard(false);
    }
  }

  async function generateTicketForWinner() {
    if (leaderboard.length === 0) {
      alert("No hay usuarios en el ranking");
      return;
    }

    const winner = leaderboard[0];
    setGeneratingTicket(true);

    try {
      // Generar un código único para el ticket
      const codigoTicket = `WIN-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      const res = await fetch(`${API_URL}/api/tickets`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_usuario: winner.id_usuario,
          nombre_ticket: "🥡 Plato Especial 30% OFF - Top 1 Dragón Dorado",
          codigo_ticket: codigoTicket,
          descuento: 30,
          descripcion: `Ticket ganador del Dragón - Top 1 Ranking con ${winner.best} puntos. Descuento 30% en tu próxima experiencia chifa.`,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const data = await res.json();
      alert(`✅ Ticket generado para ${winner.nombre_usuario}\n🎁 Descuento: 30%\n🔑 Código: ${data.codigo_ticket || codigoTicket}`);
    } catch (e: any) {
      console.error("Error generando ticket:", e);
      alert(`❌ Error: ${e.message}`);
    } finally {
      setGeneratingTicket(false);
    }
  }

    return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 16,
        overflow: "auto",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/assets/CafeGarden.mp4" type="video/mp4" />
      </video>
      <div style={{ width: "min(420px, 90vw)", textAlign: "center", color: "#fff", padding: "0 10px" }}>
        <h1 style={{
          fontFamily: "'Georgia', 'Times New Roman', serif",
          fontSize: "2rem",
          fontWeight: 900,
          margin: 0,
          color: "#FFD700",
          textShadow: "3px 3px 0 #8B0000, 6px 6px 10px rgba(0,0,0,0.6)"
        }}>
          🐉 Juego del Dragón
        </h1>
        <p style={{ margin: "6px 0 0 0", color: "#fff", fontSize: "0.95rem", fontWeight: 500, textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
          Atrapa la sazón dorada y sube al Top 5 — ¡Gana un Plato Especial!
        </p>
      </div>
      <div
        style={{
          width: "min(420px, 90vw)",
          height: "min(630px, calc(100vh - 360px))",
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          background: "rgba(0,0,0,0.4)",
          boxShadow: "0 8px 24px rgba(139,0,0,0.5), 0 0 0 3px #FFD700",
        }}
      >
        <div id="phaser-container" style={{ width: "100%", height: "100%" }} />
      </div>

      <div style={{ width: "min(420px, 90vw)", background: "linear-gradient(135deg, #8B0000 0%, #5c0000 100%)", color: "#fff", padding: 14, borderRadius: 10, border: "2px solid #FFD700" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h3 style={{ margin: "6px 0", color: "#FFD700", fontFamily: "'Georgia', serif", fontWeight: 900, letterSpacing: "0.5px" }}>🏆 Top 5 — Dragón Dorado</h3>
          <button
            onClick={generateTicketForWinner}
            disabled={generatingTicket || leaderboard.length === 0}
            style={{
              padding: "8px 16px",
              background: leaderboard.length > 0 ? "#FFD700" : "#666",
              color: "#8B0000",
              border: "none",
              borderRadius: 6,
              cursor: leaderboard.length > 0 ? "pointer" : "not-allowed",
              fontSize: 14,
              fontWeight: "bold",
              transition: "all 0.3s",
              opacity: generatingTicket ? 0.6 : 1,
              boxShadow: leaderboard.length > 0 ? "0 2px 8px rgba(255,215,0,0.4)" : "none",
            }}
            onMouseEnter={(e) => {
              if (leaderboard.length > 0 && !generatingTicket) {
                e.currentTarget.style.background = "#FFC700";
                e.currentTarget.style.transform = "scale(1.03)";
              }
            }}
            onMouseLeave={(e) => {
              if (leaderboard.length > 0) {
                e.currentTarget.style.background = "#FFD700";
                e.currentTarget.style.transform = "scale(1)";
              }
            }}
          >
            {generatingTicket ? "Generando..." : "🥡 Ticket 1°"}
          </button>
        </div>

        {loadingBoard ? (
          <div style={{ color: "#FFD700" }}>cargando ranking dragón...</div>
        ) : (
          <ol style={{ paddingLeft: 18, margin: 0 }}>
            {leaderboard.length === 0 ? (
              <li style={{ color: "#ffd5a0" }}>Sin dragones en el ranking aún. ¡Sé el primero!</li>
            ) : (
              leaderboard.map((row: any, idx: number) => (
                <li key={row.id_usuario} style={{ marginBottom: 6, display: "flex", justifyContent: "space-between", padding: "3px 6px", borderRadius: 4, background: idx === 0 ? "rgba(255,215,0,0.15)" : "transparent" }}>
                  <span style={{ fontWeight: idx === 0 ? 700 : 500 }}>{idx === 0 ? "👑 " : ""}{idx + 1}. {row.nombre_usuario}</span>
                  <span style={{ color: "#FFD700", fontWeight: 800 }}>{row.best} pts</span>
                </li>
              ))
            )}
          </ol>
        )}
      </div>
      <br />
    </div>
  );
}
