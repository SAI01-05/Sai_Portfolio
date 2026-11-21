import type {Metadata} from "next";
import {Space_Grotesk,JetBrains_Mono} from "next/font/google";
import "./globals.css";
const sans=Space_Grotesk({subsets:["latin"],variable:"--font-sans"});
const mono=JetBrains_Mono({subsets:["latin"],variable:"--font-mono"});
export const metadata:Metadata={title:"Sai Halwai, ML Engineer",description:"Portfolio of Sai Halwai: Python, SQL, machine learning and deployment."};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
