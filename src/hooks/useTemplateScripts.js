import { useEffect, useState } from "react";

const scripts = [
  "/assets/js/vendor/jquery-3.7.1.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/jquery.counterup.min.js",
  "/assets/js/jquery-ui.min.js",
  "/assets/js/imagesloaded.pkgd.min.js",
  "/assets/js/isotope.pkgd.min.js",
  "/assets/js/scrollCue.min.js",
  "/assets/js/gsap.min.js",
  "/assets/js/ScrollTrigger.min.js",
  "/assets/js/SplitText.min.js",
  "/assets/js/lenis.min.js",
  "/assets/js/main.js",
];

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-template-src="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", resolve, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.templateSrc = src;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(new Error(`Could not load ${src}`)), {
      once: true,
    });
    document.body.appendChild(script);
  });

export default function useTemplateScripts() {
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const initialize = async () => {
      try {
        for (const script of scripts) {
          await loadScript(script);
        }

        if (!active) return;
      } catch (scriptError) {
        if (active) {
          setError(scriptError);
        }
      }
    };

    requestAnimationFrame(initialize);

    return () => {
      active = false;
    };
  }, []);

  return error;
}
