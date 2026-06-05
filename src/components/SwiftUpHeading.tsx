"use client";
import { Fragment } from "react";

const WORDS = [
  { text: "Intelligence", em: false },
  { text: "That", em: false },
  { text: "Makes", em: true },
  { text: "Things", em: true },
  { text: "Easy", em: true },
  { text: "in", em: false },
  { text: "Your", em: false },
  { text: "Business", em: false },
] as const;

const STAGGER = 75;
const DURATION = 700;

export default function SwiftUpHeading() {
  return (
    <h1
      className="font-display text-white-soft text-[clamp(32px,4.2vw,54px)] font-semibold tracking-[-0.025em]"
      style={{ lineHeight: 1.15 }}
    >
      {WORDS.map(({ text, em }, i) => {
        const animStyle: React.CSSProperties = {
          display: "inline-block",
          animation: `swiftUp ${DURATION}ms cubic-bezier(0.22,1,0.36,1) ${i * STAGGER}ms both`,
        };
        return (
          <Fragment key={i}>
            {i > 0 && " "}
            <span
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                paddingBottom: "0.12em",
                marginBottom: "-0.12em",
              }}
            >
              {em ? (
                <em className="heading-italic not-italic" style={animStyle}>
                  {text}
                </em>
              ) : (
                <span style={animStyle}>{text}</span>
              )}
            </span>
          </Fragment>
        );
      })}
    </h1>
  );
}
