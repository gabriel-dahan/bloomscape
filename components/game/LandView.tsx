'use client';

import { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';

export default function Game() {
  const gameRef = useRef<HTMLDivElement>(null);
  const gameInstance = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && gameRef.current && !gameInstance.current) {
      // Import the Scene dynamically to avoid SSR issues
      import('./scenes/LandScene.ts').then(({ default: MainScene }) => {
        const config: Phaser.Types.Core.GameConfig = {
          type: Phaser.AUTO, // Will try WebGL, fallback to Canvas
          width: 800,
          height: 600,
          parent: gameRef.current, // Mount to our ref
          pixelArt: true, // Crisper isometric sprites & cheaper rendering
          backgroundColor: '#2d2d2d',
          
          // LOW POWER SETTINGS
          powerPreference: 'default', // Let browser decide (often balances power/perf)
          fps: {
            target: 30, // Cap at 30 FPS for a cozy, low-power game
            forceSetTimeOut: false
          },
          
          scene: [MainScene]
        };

        gameInstance.current = new Phaser.Game(config);
      });
    }

    return () => {
      // Cleanup on unmount to prevent memory leaks (and double-instances)
      gameInstance.current?.destroy(true);
      gameInstance.current = null;
    };
  }, []);

  return <div ref={gameRef} style={{ width: '800px', height: '600px' }} />;
}