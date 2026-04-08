'use client';

export default function Particles() {
  const particles = [
    { x: '5%', y: '15%', d: '22s', s: '4px' },
    { x: '12%', y: '45%', d: '28s', s: '3px' },
    { x: '20%', y: '70%', d: '19s', s: '5px' },
    { x: '30%', y: '25%', d: '25s', s: '3px' },
    { x: '40%', y: '80%', d: '30s', s: '5px' },
    { x: '50%', y: '10%', d: '20s', s: '4px' },
    { x: '60%', y: '55%', d: '26s', s: '5px' },
    { x: '70%', y: '35%', d: '18s', s: '6px' },
    { x: '80%', y: '65%', d: '23s', s: '4px' },
    { x: '88%', y: '20%', d: '27s', s: '5px' },
    { x: '95%', y: '50%', d: '21s', s: '4px' },
    { x: '15%', y: '90%', d: '24s', s: '5px' },
    { x: '55%', y: '40%', d: '29s', s: '3px' },
    { x: '75%', y: '85%', d: '17s', s: '6px' },
    { x: '35%', y: '60%', d: '31s', s: '4px' },
    { x: '10%', y: '30%', d: '22s', s: '6px' },
    { x: '85%', y: '80%', d: '26s', s: '5px' },
    { x: '45%', y: '45%', d: '20s', s: '8px' },
    { x: '25%', y: '10%', d: '25s', s: '4px' },
  ];

  return (
    <div className="global-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          style={
            {
              '--x': p.x,
              '--y': p.y,
              '--d': p.d,
              '--s': p.s,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
