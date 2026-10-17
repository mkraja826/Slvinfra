import type {Metadata} from "next";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import InnerPage from "@/components/InnerPage";
import {company} from "@/data/company";
import ProjectArchive from "@/components/ProjectArchive";
export const metadata:Metadata={title:"Projects",description:"Twenty-six historical civil and infrastructure project records documented in the SLV company portfolio.",alternates:{canonical:"/projects"}};
export default function Projects(){return <InnerPage index="03" eyebrow="PROJECT ARCHIVE" title="The work speaks." lead="An archive of 26 engagements documented in the company brochure, from civil infrastructure to land development."><section className="inner-content"><div className="section-wrap"><ProjectArchive/><p className="archive-note">{company.note} Project names and descriptions are taken from historical materials and should be confirmed before publication. No stock photography is represented as completed SLV work.</p><div className="inner-cta"><h2>What can we build together?</h2><Link href="/contact">Prepare a project brief <ArrowUpRight size={20}/></Link></div></div></section></InnerPage>}
