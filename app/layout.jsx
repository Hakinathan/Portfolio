import { Montserrat } from "next/font/google";
import "@/app/styles/globals.css";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"], fallback: ["Arial"] });

export const metadata = {
  metadataBase: new URL("https://nathan-lemoine.be"),
  title: {
    template: "%s | Nathan Lemoine",
    default: "Nathan Lemoine - Développeur web freelance",
  },
  description:
    "Bienvenue sur mon site portfolio ! Je suis Nathan Lemoine, développeur web. J'aide les TPE et PME à développer leur présence sur le web.",
  keywords: [
    "Nathan Lemoine",
    "nathan lemoine",
    "nathan",
    "Nathan",
    "lemoine",
    "Lemoine",
    "développeur web",
    "TPE",
    "PME",
    "site web",
    "site vitrine",
    "conception de sites",
    "maintenance de sites",
    "hébergement web",
    "création de sites",
    "gestion de sites",
    "sites pour petites entreprises",
    "services web",
    "développeur web indépendant",
    "freelance",
    "Liège",
    "liège",
    "liege",
    "Liege",
    "belgique",
    "Belgique",
    "HELMo",
    "HELMo Liège",
    "conception de sites sur mesure",
    "développement web",
    "optimisation de sites",
    "design web",
    "sites professionnels",
    "aide aux entreprises",
    "présence en ligne",
    "soutien technique",
    "gestion de contenu",
    "assistance web",
    "solutions numériques",
    "entreprise belge",
    "sites sur mesure en Belgique",
    "services web pour PME",
    "développement de sites web en Belgique",
    "maintenance de sites belges",
    "secteurs d'entreprises, industrie",
    "technologie",
    "commerce",
    "éducation",
    "santé",
    "tourisme",
    "alimentation",
    "immobilier",
    "finance",
    "sport",
    "art",
    "divertissement",
    "services professionnels",
    "secteurs variés",
    "design responsive",
    "sites web modernes",
    "optimisation de site",
    "performance web",
    "développement web responsive",
    "sites adaptatifs",
    "design moderne",
  ],
  referrer: "origin-when-cross-origin",
  authors: ["Nathan Lemoine"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  OpenGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://nathan-lemoine.be",
    site_name: "Nathan Lemoine - Développeur web freelance",
    title: "Nathan Lemoine - Développeur web freelance",
    description:
      "Bienvenue sur mon site portfolio ! Je suis Nathan Lemoine, développeur web. J'aide les TPE et PME à développer leur présence sur le web.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  name: "viewport",
  content: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-BE">
      <body className={montserrat.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
