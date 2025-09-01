export const BackgroundGlow = ({
  left = "43%",
  top = "335px",
  width = "330px",
  height = "330px",
}: {
  left?: number | string;
  top?: number | string;
  width?: number | string;
  height?: number | string;
}) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute hidden md:block"
    style={{
      left,
      top,
      width,
      height,
      willChange: "transform",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 20,
        opacity: 0.46,
        filter: "blur(160px)",
        mixBlendMode: "screen",
        border: "0.64px solid rgba(255,255,255,0.75)",
        background:
          "radial-gradient(circle at center, #1E4325 0%, #1E4325 80%, #1E4325 100%)",
      }}
    />
  </div>
);
