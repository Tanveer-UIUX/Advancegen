export default function HeroDashboard() {
  return (
    <div
      className="relative overflow-hidden rounded-[24px] p-[22px]"
      style={{
        background: "#102235",
        border: "1px solid rgba(0,194,255,0.22)",
        boxShadow: "0 0 60px rgba(0,194,255,0.10), 0 30px 80px rgba(0,0,0,0.5)",
        animation: "fadeUp 0.8s ease 0.3s both",
      }}
    >
      {/* top shimmer */}
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#00C2FF,transparent)" }}
      />

      {/* window controls */}
      <div className="mb-[18px] flex items-center gap-[6px]">
        <span className="block h-2 w-2 rounded-full bg-[#FF6B6B]" />
        <span className="block h-2 w-2 rounded-full bg-[#FFD93D]" />
        <span className="block h-2 w-2 rounded-full bg-[#00E5A8]" />
        <span
          className="ml-2 text-[11px] font-medium tracking-[0.04em]"
          style={{ color: "#5A7A94" }}
        >
          Business Intelligence · Live
        </span>
      </div>

      {/* metric cards 2×2 */}
      <div className="mb-[14px] grid grid-cols-2 gap-[10px]">
        {[
          {
            val: "98%",
            label: "Queries answered",
            note: "↑ Was 42% after hours",
            em: false,
          },
          { val: "11d", label: "Avg payment time", note: "↓ Was 34 days", em: true },
          {
            val: "2.5h",
            label: "Time saved daily",
            note: "↑ Per team member",
            em: false,
          },
          { val: "30d", label: "To first results", note: "Guaranteed", em: true },
        ].map(({ val, label, note, em }) => (
          <div
            key={label}
            className="rounded-[12px] p-[13px]"
            style={{ background: "#152B40", border: "1px solid rgba(0,194,255,0.10)" }}
          >
            <div
              className="mb-[2px] text-[21px] font-medium"
              style={{
                color: em ? "#00E5A8" : "#00C2FF",
                fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
              }}
            >
              {val}
            </div>
            <div className="text-[11px]" style={{ color: "#5A7A94" }}>
              {label}
            </div>
            <div className="mt-[2px] text-[10px]" style={{ color: "#00E5A8" }}>
              {note}
            </div>
          </div>
        ))}
      </div>

      {/* progress bars */}
      {[
        { label: "Response efficiency", pct: 94, color: "#00C2FF" },
        { label: "Cash flow improvement", pct: 78, color: "#00E5A8" },
      ].map(({ label, pct, color }) => (
        <div key={label} className="mb-[12px]">
          <div
            className="mb-[5px] flex justify-between text-[11px]"
            style={{ color: "#5A7A94" }}
          >
            <span>{label}</span>
            <span style={{ color }}>{pct}%</span>
          </div>
          <div
            className="h-[5px] overflow-hidden rounded-full"
            style={{ background: "#08131F" }}
          >
            <div
              className="h-[5px] rounded-full"
              style={{
                width: `${pct}%`,
                background: `linear-gradient(90deg, ${color}, ${color === "#00C2FF" ? "#00E5A8" : "#00C2FF"})`,
              }}
            />
          </div>
        </div>
      ))}

      {/* activity list */}
      <div className="flex flex-col gap-[8px]">
        {[
          {
            dot: "#00E5A8",
            text: "Invoice reminder sent · Client: Acme Corp",
            time: "2m ago",
          },
          { dot: "#00C2FF", text: "Customer query resolved · WhatsApp", time: "4m ago" },
          { dot: "#00E5A8", text: "Appointment confirmed · John D.", time: "7m ago" },
          { dot: "#00C2FF", text: "Daily briefing · 5 actions flagged", time: "1h ago" },
        ].map(({ dot, text, time }) => (
          <div key={text} className="flex items-center gap-[9px]">
            <span
              className="h-[6px] w-[6px] shrink-0 rounded-full"
              style={{ background: dot }}
            />
            <span className="flex-1 text-[11px]" style={{ color: "#A8B8C8" }}>
              {text}
            </span>
            <span className="text-[10px]" style={{ color: "#5A7A94" }}>
              {time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
