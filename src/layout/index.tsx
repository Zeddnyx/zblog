import { Inter, Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" });

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${noto.variable} `}>{children}</div>
  );
}
