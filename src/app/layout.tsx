import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title:"SLV Infra | Built for Generations",
 description:"SLV Infra — considered construction for exceptional homes, villas, farmhouses and commercial spaces.",
 openGraph:{title:"SLV Infra | Built for Generations",description:"Distinctive spaces. Enduring craftsmanship.",type:"website"}
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
