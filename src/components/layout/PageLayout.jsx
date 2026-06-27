import { useEffect } from "react";
import * as DefaultChrome from "../generated/DefaultChrome";
import * as HomeOneChrome from "../generated/HomeOneChrome";
import * as HomeOnePageChrome from "../generated/HomeOnePageChrome";
import * as HomeTwoChrome from "../generated/HomeTwoChrome";
import * as HomeTwoPageChrome from "../generated/HomeTwoPageChrome";
import * as HomeThreeChrome from "../generated/HomeThreeChrome";
import * as HomeThreePageChrome from "../generated/HomeThreePageChrome";
import useTemplateScripts from "../../hooks/useTemplateScripts";

const layouts = {
  default: {
    Before: DefaultChrome.DefaultChromeBefore,
    Header: DefaultChrome.DefaultChromeHeader,
    Footer: DefaultChrome.DefaultChromeFooter,
    After: DefaultChrome.DefaultChromeAfter,
  },
  homeOne: {
    Before: HomeOneChrome.HomeOneChromeBefore,
    Header: HomeOneChrome.HomeOneChromeHeader,
    Footer: HomeOneChrome.HomeOneChromeFooter,
    After: HomeOneChrome.HomeOneChromeAfter,
  },
  homeOnePage: {
    Before: HomeOnePageChrome.HomeOnePageChromeBefore,
    Header: HomeOnePageChrome.HomeOnePageChromeHeader,
    Footer: HomeOnePageChrome.HomeOnePageChromeFooter,
    After: HomeOnePageChrome.HomeOnePageChromeAfter,
  },
  homeTwo: {
    Before: HomeTwoChrome.HomeTwoChromeBefore,
    Header: HomeTwoChrome.HomeTwoChromeHeader,
    Footer: HomeTwoChrome.HomeTwoChromeFooter,
    After: HomeTwoChrome.HomeTwoChromeAfter,
  },
  homeTwoPage: {
    Before: HomeTwoPageChrome.HomeTwoPageChromeBefore,
    Header: HomeTwoPageChrome.HomeTwoPageChromeHeader,
    Footer: HomeTwoPageChrome.HomeTwoPageChromeFooter,
    After: HomeTwoPageChrome.HomeTwoPageChromeAfter,
  },
  homeThree: {
    Before: HomeThreeChrome.HomeThreeChromeBefore,
    Header: HomeThreeChrome.HomeThreeChromeHeader,
    Footer: HomeThreeChrome.HomeThreeChromeFooter,
    After: HomeThreeChrome.HomeThreeChromeAfter,
  },
  homeThreePage: {
    Before: HomeThreePageChrome.HomeThreePageChromeBefore,
    Header: HomeThreePageChrome.HomeThreePageChromeHeader,
    Footer: HomeThreePageChrome.HomeThreePageChromeFooter,
    After: HomeThreePageChrome.HomeThreePageChromeAfter,
  },
};

export default function PageLayout({
  variant = "default",
  title,
  description,
  children,
}) {
  const { Before, Header, Footer, After } = layouts[variant] || layouts.default;
  const scriptError = useTemplateScripts();

  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
    window.scrollTo(0, 0);
  }, [description, title]);

  return (
    <>
      <Before />
      <Header />
      <main>{children}</main>
      <Footer />
      <After />
      {scriptError && (
        <div className="template-script-error" role="alert">
          One of the interactive features could not start.
        </div>
      )}
    </>
  );
}
