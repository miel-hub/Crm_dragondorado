const express = require("express");
const router = express.Router();
const prisma = require("../config/db");

router.post("/score", async (req, res) => {
  try {
    const id_usuario = Number(req.body.id_usuario);
    const score = Number(req.body.score);

    if (!id_usuario || Number.isNaN(score)) {
      return res.status(400).json({ error: "id_usuario y score requeridos" });
    }

    const usuario = await prisma.usuarios.findUnique({
      where: { id_usuario },
      select: { id_usuario: true, nombre_usuario: true, score: true },
    });

    if (!usuario) return res.status(404).json({ error: "usuario no existe" });

    const current = Number(usuario.score) || 0;
    let updated = false;
    if (score > current) {
      await prisma.usuarios.update({
        where: { id_usuario },
        data: { score },
      });
      updated = true;
    }

    return res.json({ ok: true, updated, best: Math.max(current, score) });
  } catch (err) {
    console.error("POST /api/score error:", err);
    return res.status(500).json({ error: "internal" });
  }
});


router.get("/leaderboard", async (req, res) => {
  try {
    const rows = await prisma.$queryRaw`
      SELECT id_usuario, nombre_usuario, score AS best
      FROM usuarios
      ORDER BY best DESC
      LIMIT 5
    `;

    // Convertir BigInt → Number
    const cleanRows = rows.map(row => ({
      ...row,
      id_usuario: typeof row.id_usuario === 'bigint' ? Number(row.id_usuario) : row.id_usuario,
      best: typeof row.best === 'bigint' ? Number(row.best) : row.best
    }));

    return res.json(cleanRows);
  } catch (err) {
    console.error("GET /api/leaderboard error:", err);
    return res.status(500).json({ error: "internal" });
  }
});



module.exports = router;
