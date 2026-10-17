import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import InnerPage from "@/components/InnerPage";
import {company} from "@/data/company";
import ProjectArchive from "@/components/ProjectArchive";
export const metadata:Metadata={title:"Projects",description:"Twenty-six historical civil and infrastructure project records documented in the SLV company portfolio.",alternates:{canonical:"/projects"}};
export default function Projects(){return <InnerPage index="03" eyebrow="PROJECT ARCHIVE" title="Civil construction project records" lead="Explore 26 historical project entries from the company brochure. Search clients and work descriptions, or filter by whether a contract value was recorded."><section className="inner-content"><div className="section-wrap"><ProjectArchive/><p className="archive-note">{company.note} Project names and descriptions are taken from historical materials and should be confirmed before publication. No stock photography is represented as completed SLV work.</p><div className="inner-cta"><h2>Discuss your civil infrastructure project</h2><Link href="/contact">Prepare a project brief <ArrowUpRight size={20}/></Link></div></div></section></InnerPage>}
