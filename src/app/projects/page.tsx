import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import InnerPage from "@/components/InnerPage";
import ProjectArchive from "@/components/ProjectArchive";
export const metadata:Metadata={title:"Projects",description:"Explore civil construction and infrastructure projects from the SLV Infra company portfolio.",alternates:{canonical:"/projects"}};
export default function Projects(){return <InnerPage index="03" eyebrow="PROJECT ARCHIVE" title="Civil construction project records" lead="Explore 26 project records across civil construction and infrastructure. Search by client or project and compare recorded contract values."><section className="inner-content"><div className="section-wrap"><ProjectArchive/><p className="archive-note">Contract values reflect the original project records and are not current quotations.</p><div className="inner-cta"><h2>Discuss your civil infrastructure project</h2><Link href="/contact">Prepare a project brief <ArrowUpRight size={20}/></Link></div></div></section></InnerPage>}
