import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  const target = document.querySelector(".landing-h2-info");
  if (!target) {
    console.warn("initialFX targets not found, retrying in 100ms...");
    setTimeout(initialFX, 100);
    return;
  }

  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText3, landingText2);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  gsap.set(Text2.chars, { opacity: 0, y: 80 });
  gsap.set(Text1.chars, { opacity: 1, y: 0 });

  var tl = gsap.timeline({ repeat: -1 });

  tl.to(
    Text1.chars,
    {
      y: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.05,
    },
    "+=3"
  )
    .to(
      Text2.chars,
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      "<"
    )
    .set(Text1.chars, { y: 80, opacity: 0 })
    .to(
      Text2.chars,
      {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      "+=3"
    )
    .to(
      Text1.chars,
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.05,
      },
      "<"
    )
    .set(Text2.chars, { y: 80, opacity: 0 });
}
