import Phaser from "phaser";

export default class JuegoScene extends Phaser.Scene {
  constructor() {
    super("JuegoScene");
    this.score = 0;
    this.started = false;
    this.timeLeft = 75; 
    this.difficulty = 1;

    this.isDragging = false;
    this.allowMovement = false;
    this.ignoreNextMovement = false;

    this.INITIAL_SPAWN_DELAY = 400; 
    this.MIN_SPAWN_DELAY = 120;     
    this.MAX_SPAWN_PER_TICK = 2;   
    this.BASE_MAX_GRAINS = 60;     
    this.EXTRA_MAX_GRAINS = 60;    

  }

  preload() {
    this.load.image("fondo", "/assets/fondo.png");
    this.load.image("taza", "/assets/taza.png");
    this.load.image("grano", "/assets/grano.png");
    this.load.audio("music", "/assets/sonido.mp3");
  }

  create() {
    const fondo = this.add.image(0, 0, "fondo").setOrigin(0, 0);
    const scaleX = this.scale.width / fondo.width;
    const scaleY = this.scale.height / fondo.height;
    const scale = Math.max(scaleX, scaleY);
    fondo.setScale(scale).setScrollFactor(0);

    const poolSize = this.BASE_MAX_GRAINS + Math.floor(this.EXTRA_MAX_GRAINS * 0.2);
    this.granos = this.physics.add.group({ defaultKey: "grano", maxSize: poolSize });

    this.taza = this.physics.add.image(this.scale.width / 2, this.scale.height - 100, "taza");
    this.taza.setScale(0.25);
    this.taza.setCollideWorldBounds(true);

    this.scoreText = this.add.text(20, 20, "Puntos: 0", {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 4,

    }).setOrigin(0, 0);

    this.timerText = this.add.text(this.scale.width - 30, 20, "Tiempo: 1:15", {
      fontFamily: "Arial",
      fontSize: "24px",
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 4,
    }).setOrigin(1, 0);

    this.music = null;
    try {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      this.audioCtx = null;
    }

    this.titulo = this.add.text(this.scale.width / 2, this.scale.height / 2 - 40, "🐉 Dragón Dorado 🐉", {
      fontSize: "46px",
      fill: "#FFD700",
      stroke: "#8B0000",
       strokeThickness: 6 ,
       arch: 180 ,
    }).setOrigin(0.5);

    this.botonInicio = this.add.text(this.scale.width / 2, this.scale.height / 2 + 20, "¡Atrapa al Dragón!", {
      fontSize: "28px",
      backgroundColor: "#8B0000",
      color: "#FFD700",
      padding: { x: 20, y: 10 },
    }).setOrigin(0.5).setInteractive();

    this.botonInicio.on("pointerdown", () => {
      this.botonInicio.destroy();
      this.titulo.destroy();
      this.iniciarJuego();
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.input.on("pointerdown", (pointer) => {
      const dx = pointer.x - this.taza.x;
      const dy = pointer.y - this.taza.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const touchRadius = Math.max(this.taza.displayWidth, this.taza.displayHeight) * 0.6;
      if (dist <= touchRadius) {
        this.isDragging = true;
        this.ignoreNextMovement = true;
      }
    });

    this.input.on("pointerup", () => {
      this.isDragging = false;
      this.ignoreNextMovement = false;
    });

    this.input.on("pointermove", (pointer) => {
      if (!this.started || !this.allowMovement || !this.isDragging || !pointer.isDown) return;
      const x = Phaser.Math.Clamp(pointer.x, 40, this.scale.width - 40);
      this.taza.x = x;
      if (this.ignoreNextMovement) this.ignoreNextMovement = false;
    });

    const canvas = this.game.canvas;
    if (canvas) {
      this._touchMoveHandler = (e) => {
        if (!this.started || !this.allowMovement || !this.isDragging) return;
        const t = e.touches ? e.touches[0] : null;
        if (!t) return;
        const rect = canvas.getBoundingClientRect();
        const x = (t.clientX - rect.left) * (this.scale.width / rect.width);
        this.taza.x = Phaser.Math.Clamp(x, 40, this.scale.width - 40);
        if (this.ignoreNextMovement) this.ignoreNextMovement = false;
        e.preventDefault();
      };
      this._touchStartHandler = (e) => {
        const t = e.touches ? e.touches[0] : null;
        if (!t) return;
        const rect = canvas.getBoundingClientRect();
        const x = (t.clientX - rect.left) * (this.scale.width / rect.width);
        const y = (t.clientY - rect.top) * (this.scale.height / rect.height);
        const dx = x - this.taza.x;
        const dy = y - this.taza.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const touchRadius = Math.max(this.taza.displayWidth, this.taza.displayHeight) * 0.6;
        if (dist <= touchRadius) {
          this.isDragging = true;
          this.ignoreNextMovement = true;
        }
        e.preventDefault();
      };
      this._touchEndHandler = (e) => {
        this.isDragging = false;
        this.ignoreNextMovement = false;
        e.preventDefault();
      };

      canvas.addEventListener("touchstart", this._touchStartHandler, { passive: false });
      canvas.addEventListener("touchmove", this._touchMoveHandler, { passive: false });
      canvas.addEventListener("touchend", this._touchEndHandler, { passive: false });

      this.events.on("shutdown", () => {
        canvas.removeEventListener("touchstart", this._touchStartHandler);
        canvas.removeEventListener("touchmove", this._touchMoveHandler);
        canvas.removeEventListener("touchend", this._touchEndHandler);
      });
    }
  }

  iniciarJuego() {
    this.started = true;

    this.allowMovement = false;
    this.time.delayedCall(400, () => { this.allowMovement = true; });

    if (!this.music || !this.music.isPlaying) {
      try {
        if (this.music) { try { this.music.stop(); } catch {} try { this.music.destroy(); } catch {} this.music = null; }
        this.music = this.sound.add("music", { loop: true, volume: 0.42 });
        this.music.play();
      } catch (e) {
        this.music = null;
      }
    }

    this.score = 0;
    this.timeLeft = 75;
    this.difficulty = 1;
    this.scoreText.setText("Puntos: 0");
    this.timerText.setText("Tiempo: 1:15");

    const initialPool = this.BASE_MAX_GRAINS + Math.floor(this.EXTRA_MAX_GRAINS * 0.2);
    if (this.granos.maxSize < initialPool) this.granos.maxSize = initialPool;

    this.spawnEvent = this.time.addEvent({
      delay: this.INITIAL_SPAWN_DELAY,
      callback: this.crearGrano,
      callbackScope: this,
      loop: true,
    });

    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.timeLeft--;
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerText.setText(`Tiempo: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);

        const progreso = (75 - this.timeLeft) / 75;

        this.difficulty = 1 + Math.pow(progreso, 1.8) * 18;

        const lerp = Math.pow(progreso, 1.6);
        const nuevaDelay = Math.max(this.MIN_SPAWN_DELAY, Math.round(this.INITIAL_SPAWN_DELAY * (1 - lerp) + this.MIN_SPAWN_DELAY * lerp));
        this.spawnEvent.delay = nuevaDelay;

        const targetPool = this.BASE_MAX_GRAINS + Math.floor(this.EXTRA_MAX_GRAINS * progreso);
        if (this.granos.maxSize < targetPool) this.granos.maxSize = targetPool;

        if (progreso > 0.6 && Math.random() < Math.min(0.9, progreso)) {
          this.spawnBurst(Math.floor(4 + progreso * 12)); // entre 4 y ~16 granos
        }

        if (this.timeLeft <= 0) this.finalizarJuego();
      },
      callbackScope: this,
      loop: true,
    });
  }

  spawnBurst(count = 6) {
    for (let i = 0; i < count; i++) {
      const offset = Phaser.Math.Between(-60, 60);
      const x = Phaser.Math.Clamp(Phaser.Math.Between(40, this.scale.width - 40) + offset, 40, this.scale.width - 40);
      this._spawnSingle(x);
    }
  }

  crearGrano() {
    const progreso = (75 - this.timeLeft) / 75;
    const spawnCount = 1 + Math.floor(progreso * (this.MAX_SPAWN_PER_TICK - 1));
    for (let i = 0; i < spawnCount; i++) {
      const delay = Phaser.Math.Between(0, 120);
      this.time.delayedCall(delay, () => {
        const x = Phaser.Math.Between(40, this.scale.width - 40);
        this._spawnSingle(x);
      });
    }
  }

  _spawnSingle(x) {
    const r = Math.random();
    let tipo = "normal";
    if (r < 0.10) tipo = "gold";
    else if (r < 0.25) tipo = "bad";

    const grano = this.granos.get(x, 0, "grano");
    if (!grano) return; // pool vacío, saltar

    grano.setActive(true).setVisible(true);
    const baseMin = 300; // mínimo más alto
    const baseMax = 420 + Math.floor(this.difficulty * 45); 
    const vel = Phaser.Math.Between(baseMin, baseMax);
    grano.setVelocityY(vel);

    grano.tipo = tipo;
    grano.clearTint();
    if (tipo === "gold") {
      grano.setTint(0xFF0000);
      grano.setScale(0.16);
      
      // Efecto pulsante en el tinte para destacar
      grano.scaleTween = this.tweens.add({
        targets: grano,
        scaleX: 0.18,
        scaleY: 0.18,
        duration: 400,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'
      });
    } else if (tipo === "bad") {
      grano.setTint(0x666666);
      grano.setScale(0.12);
    } else {
      grano.setScale(0.12);
    }

    this.physics.add.overlap(this.taza, grano, this.atraparGrano, null, this);
  }

  atraparGrano(taza, grano) {
    if (!grano.active) return;
    const tipo = grano.tipo || "normal";
    grano.destroy();

    if (tipo === "normal") this.score += 5;
    else if (tipo === "gold") this.score += 45;
    else if (tipo === "bad") {
      this.score -= 25;
      if (this.score < 0) this.score = 0;
    }

    this.playGrabSound(tipo);
    this.scoreText.setText("Puntos: " + this.score);
  }

  playGrabSound(tipo = "normal") {
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);

    let freq = 700;
    if (tipo === "gold") freq = 1200;
    if (tipo === "bad") freq = 300;

    o.type = "sine";
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.005);

    o.start(ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
    o.stop(ctx.currentTime + 0.09);
  }

  resetMusicAndRestart() {
    try {
      if (this.music) {
        if (this.music.isPlaying) {
          try { this.music.stop(); } catch {}
        }
        try { this.music.destroy(); } catch {}
        this.music = null;
      }
    } catch (e) {}
    this.scene.restart();
  }

  finalizarJuego() {

    this.started = false;
    this.granos.clear(true, true);
    this.time.removeAllEvents();
    try {
    this.events.emit("gameOver", { score: this.score });
    } catch (e) { /* noop */ }

    this.add.rectangle(this.scale.width / 2, this.scale.height / 2, 400, 200, 0x000000, 0.7);
    this.add.text(this.scale.width / 2, this.scale.height / 2 - 30, "¡Tiempo terminado!", {
      fontSize: "32px",
      fill: "#ffffff",
    }).setOrigin(0.5);

    this.add.text(this.scale.width / 2, this.scale.height / 2 + 10, `Puntaje final: ${this.score}`, {
      fontSize: "28px",
      fill: "#ffcc00",
    }).setOrigin(0.5);

    const botonReiniciar = this.add.text(this.scale.width / 2, this.scale.height / 2 + 60, "Jugar otra vez", {
      fontSize: "26px",
      backgroundColor: "#ffcc00",
      color: "#000",
      padding: { x: 20, y: 10 },
    }).setOrigin(0.5).setInteractive();

    botonReiniciar.on("pointerdown", () => this.resetMusicAndRestart());
  }

  update() {
    if (!this.started) return;

    if (this.cursors.left.isDown) this.taza.setVelocityX(-300);
    else if (this.cursors.right.isDown) this.taza.setVelocityX(300);
    else this.taza.setVelocityX(0);
  }
}
