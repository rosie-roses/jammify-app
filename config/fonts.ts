import { Roboto_Mono as FontMono, Roboto as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"]
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"]
});
