import { Inter, Roboto_Mono, Kanit, Sarabun } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export const sarabun = Sarabun({
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-sarabun",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});
