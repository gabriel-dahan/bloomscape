import * as Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  private controls: Phaser.Cameras.Controls.SmoothedKeyControl | null = null;
  private cursor!: Phaser.GameObjects.Image;
  private player!: Phaser.GameObjects.Image;
  
  // BLOOMSCAPE ECONOMY STATE
  private waterSupply = 100; // Finite resource
  private plants = 0;

  constructor() {
    super('MainScene');
  }

  preload() {
    // Load simple placeholders (colored squares work fine for testing)
    this.load.image('tile', 'https://labs.phaser.io/assets/tilemaps/iso/iso-64x64-outside.png');
    this.load.image('hero', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
  }

  create() {
    // 1. DRAW THE GRID
    const mapWidth = 10;
    const mapHeight = 10;
    const tileW = 38; // Adjust based on your asset
    const tileH = 38; // Adjust based on your asset

    for (let x = 0; x < mapWidth; x++) {
      for (let y = 0; y < mapHeight; y++) {
        // --- THE ISOMETRIC FORMULA ---
        // Iso X = (CartX - CartY) * 0.5 * Width
        // Iso Y = (CartX + CartY) * 0.5 * Height
        const isoX = (x - y) * tileW;
        const isoY = (x + y) * (tileH / 2);

        const tile = this.add.image(400 + isoX, 100 + isoY, 'tile');
        
        // --- DEPTH SORTING ---
        // Objects lower on screen (higher Y) must be drawn last (on top)
        tile.setDepth(tile.y);
      }
    }

    // 2. PLAYER SETUP
    this.player = this.add.image(400, 100, 'hero');
    this.player.setOrigin(0.5, 1); // Feet at the anchor point
    
    // 3. UI for Economy
    this.add.text(10, 10, 'BloomScape: Closed Economy', { font: '16px Arial', color: '#ffffff' });
    this.add.text(10, 30, `Water: ${this.waterSupply} (Cannot be created)`, { font: '14px Arial', color: '#00ccff' });
  }

  update(time: number, delta: number) {
    const speed = 2;
    const cursors = this.input.keyboard?.createCursorKeys();

    if (cursors) {
        if (cursors.left.isDown) { this.player.x -= speed; this.player.y -= speed / 2; }
        if (cursors.right.isDown) { this.player.x += speed; this.player.y += speed / 2; }
        if (cursors.up.isDown) { this.player.x += speed; this.player.y -= speed / 2; }
        if (cursors.down.isDown) { this.player.x -= speed; this.player.y += speed / 2; }
        
        // Re-calculate depth every frame so player walks behind/in-front of tiles correctly
        this.player.setDepth(this.player.y);
    }
  }

  // Add this inside your MainScene class

  plantFlower() {
    const cost = 10;
    if (this.waterSupply >= cost) {
      this.waterSupply -= cost; 
      this.plants += 1;
      console.log("Flower planted. Water is trapped in the plant.");
    } else {
      console.log("Not enough water! The ecosystem is dry.");
    }
  }

  compostPlant() {
    if (this.plants > 0) {
      this.plants -= 1;
      // You recover 90% of water, 10% is lost to evaporation (entropy)
      this.waterSupply += 9; 
      console.log("Plant composted. Water returned to the system.");
    }
  }
}