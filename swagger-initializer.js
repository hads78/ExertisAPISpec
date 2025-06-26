/* ───────── swagger-initializer.js ─────────
   Load local spec:  openapi.yaml
   Place this file in the same folder as index.html
   and keep openapi.yaml alongside it.
*/
window.onload = function () {

  // ─── Configurable block ──────────────────────────────────
  window.ui = SwaggerUIBundle({
    // 👉 Change this path/filename if your spec file
    //     has a different name or location.
    url: "./openapi.yaml",

    dom_id: "#swagger-ui",
    deepLinking: true,

    // Collapse/expand behaviour:  none | list | full
    docExpansion: "none",

    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],

    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],

    layout: "StandaloneLayout"
  });
  // ─────────────────────────────────────────────────────────
};