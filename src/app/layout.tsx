import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Meridian Family Clinic — Care for every age, wherever you are",
  description:
    "Meridian Family Clinic — family doctors, paediatrics, women's health, skin checks and physiotherapy in New York, London, Dubai, Sydney and Toronto. Same-day appointments; most insurance plans accepted.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <head>
        {/* ============================================================
            LogicMate chatbot widget — paste the <script> snippet from
            your chatbot's Channels → Website tab here, right before
            </head>. It self-injects a floating chat bubble, nothing
            else on this page needs to change.

            <script>
              window.LMChatbot = { embedKey: "YOUR_EMBED_KEY", ... };
            </script>
            <script src="https://YOUR-FRONTEND-DOMAIN/chatbot-widget.js" async></script>
           ============================================================ */}
      </head>
      <body className="flex min-h-full flex-col bg-background font-sans text-[15px] text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
