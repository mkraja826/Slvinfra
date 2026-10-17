import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 metadataBase: new URL("https://slvinfra.com"),
 title: {default:"SLV Infra | Sri Laxmi Venkateshwara Enterprises",template:"%s | SLV Infra"},
 description:"Sri Laxmi Venkateshwara Enterprises (SLV Infra) — civil construction, infrastructure, land development, roads, drainage, water systems and landscaping. Heritage since 1987.",
 alternates:{canonical:"/"},
 openGraph:{siteName:"SLV Infra",url:"https://slvinfra.com",title:"SLV Infra | Sri Laxmi Venkateshwara Enterprises",description:"Building the foundations of progress since 1987.",type:"website"},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}
