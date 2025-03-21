// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from "starlight-image-zoom";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://labs.thamizhiniyancs.me",
  integrations: [
    starlight({
      title: "Thamizhiniyan C S",
      description:
        "A collection and configuration of lab environments that I use.",
      social: {
        github: "https://github.com/ThamizhiniyanCS",
        linkedin: "https://www.linkedin.com/in/ThamizhiniyanCS/",
      },
      sidebar: [
        {
          label: "Malware Analysis Lab Setup",
          autogenerate: {
            directory: "malware-analysis-lab-setup",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      components: {
        Header: "./src/overrides/Header.astro",
      },
      expressiveCode: {
        styleOverrides: { borderRadius: "0.5rem" },
      },
      plugins: [starlightImageZoom()],
      lastUpdated: true,
      head: [
        // Adding google analytics
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=G-Y9ZQ579ZHL`,
          },
        },
        {
          tag: "script",
          content: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Y9ZQ579ZHL');
          `,
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap(),
  ],
});
