export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "relative", width: "85%", margin: "0 auto", height: "13px" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          background:
            "linear-gradient(90deg,rgba(10,43,98,0.15),rgba(25,123,242,0.35),rgba(4,224,240,0.45),rgba(10,43,98,0.15),rgba(25,123,242,0.35),rgba(4,224,240,0.45),rgba(10,43,98,0.15))",
          filter: "blur(5px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "6px",
          left: 0,
          width: "96%",
          height: "1px",
          background:
            "linear-gradient(90deg,#0a2b62,#197bf2,#04e0f0,#0a2b62,#197bf2,#04e0f0,#0a2b62)",
        }}
      />
    </div>
  );
}
