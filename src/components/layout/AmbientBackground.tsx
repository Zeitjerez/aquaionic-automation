/**
 * Ambient Background Component
 * Animated background blobs for visual interest
 * Uses CSS animations defined in animations.css
 */

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
      aria-hidden="true"
    >
      {/* Cyan blob - top right */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-cyan blur-[100px] -top-[10%] -right-[5%] animate-drift"
        style={{ animationDuration: '25s' }}
      />

      {/* Green blob - bottom left */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent-green blur-[100px] -bottom-[5%] -left-[5%] animate-drift-reverse"
        style={{ animationDuration: '20s' }}
      />

      {/* Ocean blob - center */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-ocean-mid blur-[100px] top-[40%] left-[30%] animate-drift-slow"
        style={{ animationDuration: '30s' }}
      />
    </div>
  );
}
