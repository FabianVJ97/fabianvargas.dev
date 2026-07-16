const nodes = [
  { id: 1, x: 45, y: 60, delay: "0s" },
  { id: 2, x: 120, y: 30, delay: "0.4s" },
  { id: 3, x: 130, y: 105, delay: "0.8s" },
  { id: 4, x: 215, y: 55, delay: "1.2s" },
  { id: 5, x: 215, y: 135, delay: "1.6s" },
  { id: 6, x: 300, y: 85, delay: "2s" },
  { id: 7, x: 355, y: 30, delay: "2.4s" },
  { id: 8, x: 365, y: 145, delay: "2.8s" },
];

const connections = [
  [45, 60, 120, 30],
  [45, 60, 130, 105],
  [120, 30, 215, 55],
  [120, 30, 215, 135],
  [130, 105, 215, 55],
  [130, 105, 215, 135],
  [215, 55, 300, 85],
  [215, 135, 300, 85],
  [300, 85, 355, 30],
  [300, 85, 365, 145],
];

export default function NetworkVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>

          <p className="font-mono text-xs text-slate-500">
            neural-network.model
          </p>
        </div>

        <svg
          viewBox="0 0 410 180"
          role="img"
          aria-label="Representación animada de una red neuronal"
          className="h-auto w-full"
        >
          <defs>
            <linearGradient
              id="connection-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.15" />
            </linearGradient>

            <filter id="node-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connections.map(([x1, y1, x2, y2], index) => (
            <line
              key={`${x1}-${y1}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#connection-gradient)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              className="network-line"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            />
          ))}

          {nodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="13"
                fill="#22d3ee"
                fillOpacity="0.08"
                className="network-pulse"
                style={{ animationDelay: node.delay }}
              />

              <circle
                cx={node.x}
                cy={node.y}
                r="5"
                fill="#67e8f9"
                filter="url(#node-glow)"
                className="network-node"
                style={{ animationDelay: node.delay }}
              />
            </g>
          ))}
        </svg>

        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-800 pt-5">
          <div>
            <p className="font-mono text-lg font-semibold text-cyan-300">
              4-10-20-5-3
            </p>
            <p className="mt-1 text-xs text-slate-500">Arquitectura</p>
          </div>

          <div>
            <p className="font-mono text-lg font-semibold text-cyan-300">
              MATLAB
            </p>
            <p className="mt-1 text-xs text-slate-500">Origen</p>
          </div>

          <div>
            <p className="font-mono text-lg font-semibold text-cyan-300">
              Python
            </p>
            <p className="mt-1 text-xs text-slate-500">Destino</p>
          </div>
        </div>
      </div>
    </div>
  );
}