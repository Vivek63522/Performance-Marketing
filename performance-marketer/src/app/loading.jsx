import PinwheelLoader from "@/components/ui/PinwheelLoader";

/**
 * Next.js App Router Loading Boundary
 * Automatically displayed by Next.js during route streaming & suspense.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white pointer-events-auto">
      {/* Ambient background glow matching brand palette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,170,23,0.12)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center select-none">
        {/* Pinwheel with soft radiant glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -m-3 bg-brand-base/20 rounded-full blur-xl animate-pulse pointer-events-none" />
          <PinwheelLoader size={54} lineWeight={4.5} color="#ffaa17" speed="0.8s" />
        </div>

        {/* Agency Brand Text & Loading Indicator */}
        <div className="flex flex-col items-center gap-2.5 mt-6">
          <span className="text-[13px] font-bold tracking-[0.28em] text-brand-secondary uppercase font-heading">
            Performance Marketer
          </span>

          {/* Minimalist animated progress track */}
          <div className="w-28 h-[2.5px] bg-brand-border rounded-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-full bg-brand-base rounded-full animate-loader-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
