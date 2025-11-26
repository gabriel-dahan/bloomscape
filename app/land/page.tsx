import dynamic from 'next/dynamic';

// 1. Dynamic Import
// We load the component lazily and turn off Server Side Rendering (ssr: false)
// so it only loads in the browser.
const BloomScapeGame = dynamic(() => import('@/components/game/LandView'), { 
  loading: () => <p>Loading BloomScape...</p> // Optional loading state
});

export default function Home() {
  return (
    <main style={styles.main}>
      {/* Header / UI outside the canvas */}
      <div style={styles.header}>
        <h1>BloomScape</h1>
        <p>Closed Economy System</p>
      </div>

      {/* The Game Container */}
      <div style={styles.gameContainer}>
        <BloomScapeGame />
      </div>

      {/* Instructions */}
      <div style={styles.footer}>
        <p>Use Arrow Keys to Move</p>
      </div>
    </main>
  );
}

// Simple CSS-in-JS for layout (or use Tailwind if you have it)
const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  gameContainer: {
    border: '4px solid #444',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
  },
  footer: {
    marginTop: '20px',
    color: '#888',
    fontSize: '0.9rem',
  }
};