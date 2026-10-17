import Image from "next/image";

export function IsometricHero() {
  return (
    <div className="perspective-1000 relative mx-auto h-[360px] w-full max-w-md sm:h-[420px]">
      <div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ transform: "rotateX(52deg) rotateZ(45deg)" }}
      >
        {/* Ground / paving */}
        <div className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-[#9aa3af]/30" />
      </div>

      {/* Building block, flattened isometric feel via skew + perspective */}
      <div
        className="absolute top-1/2 left-1/2 h-48 w-40 -translate-x-1/2 -translate-y-[58%] rounded-md"
        style={{
          background: "linear-gradient(135deg, #2b2b2b, #13233d 70%)",
          transform: "rotateX(8deg) rotateY(-18deg)",
          boxShadow: "20px 30px 60px rgba(15,29,51,0.45)",
        }}
      >
        {/* Wood-slat screen with orange glow */}
        <div className="absolute inset-y-6 left-3 flex gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="h-full w-1 rounded-full bg-orange/70 shadow-[0_0_8px_rgba(234,125,23,0.8)]" />
          ))}
        </div>
        {/* Flat roof overhang */}
        <div className="absolute -top-3 -left-4 h-3 w-[calc(100%+2rem)] rounded-sm bg-navy-darkest" />
      </div>

      {/* Floating gear/T icon */}
      <div className="animate-float absolute top-4 right-6 drop-shadow-[0_0_12px_rgba(234,125,23,0.6)]">
        <Image
          src="/assets/logos/Tapcord_Logo_Icon_Transparent.png"
          alt=""
          width={48}
          height={48}
          className="animate-spin-slow h-12 w-12"
        />
      </div>

      {/* Wi-Fi AP disc, pulsing blue */}
      <div
        className="animate-float absolute top-16 left-4 h-6 w-6 rounded-full bg-blue-400"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="animate-pulse-glow h-full w-full rounded-full bg-blue-400" />
      </div>

      {/* CCTV dome, rotating amber */}
      <div className="animate-float absolute bottom-24 right-10" style={{ animationDelay: "1.2s" }}>
        <div className="animate-amber-pulse h-8 w-8 rounded-full border-2 border-orange bg-orange/30" />
      </div>

      {/* Floating info cards */}
      <div
        className="animate-float absolute bottom-10 left-2 rounded-lg border border-white/10 bg-navy-deep/90 px-3 py-2 font-mono text-[10px] text-white shadow-lg backdrop-blur"
        style={{ animationDelay: "0.3s" }}
      >
        DB-West Low
      </div>
      <div
        className="animate-float absolute top-28 right-0 rounded-lg border border-white/10 bg-navy-deep/90 px-3 py-2 font-mono text-[10px] text-white shadow-lg backdrop-blur"
        style={{ animationDelay: "0.9s" }}
      >
        Card Pocket &middot; 1100mm Latch Side
      </div>
    </div>
  );
}
