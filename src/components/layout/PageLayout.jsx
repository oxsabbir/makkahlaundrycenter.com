import { useEffect } from "react";
import useTemplateScripts from "../../hooks/useTemplateScripts";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function PageLayout({
  title,
  description,
  children,
}) {
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
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      {scriptError && (
        <div className="template-script-error" role="alert">
          One of the interactive features could not start.
        </div>
      )}
    </>
  );
}
