import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revelación Espiritual Interactiva",
  description: "Quiz espiritual interativo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Pixel Utmify */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68bdb8b58e919d275589459c";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
