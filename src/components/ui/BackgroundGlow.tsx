
export const BackgroundGlow = ({
    left = 43,
    top = 335,
    width = 330,
    height = 330,
  }: {
    left: number | string;
    top: number | string;
    width: number | string;
    height: number | string;
  }) => (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{
        left,
        top,
        width,
        height,
        borderRadius: 20,
        opacity: 0.46,
        filter: "blur(160px)",
        mixBlendMode: "screen",
        border: "0.64px solid rgba(255,255,255,0.75)",
        background:
          "radial-gradient(circle at center, #1E4325 0%, #1E4325 80%, #1E4325 100%)",
      }}
    >
      <div
        className="absolute h-[330px] w-[330px] rounded-[20px] opacity-[0.46] mix-blend-plus-lighter blur-[150px] md:blur-[200px] lg:blur-[300px]"
        style={{
          background:
            "radial-gradient(70% 70% at 50% 50%, #1E4325 0%, #1E4325 50%, #1E4325 100%)",
          border: "0.64px solid rgba(255,255,255,0.75)",
        }}
      />
    </div>
  );
  