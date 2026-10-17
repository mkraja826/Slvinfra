export const company = {
 name: "Sri Laxmi Venkateshwara Enterprises",
 brand: "SLV Infra",
 domain: "slvinfra.com",
 founded: 1987,
 founder: "Mr. Venkateshwara Rao",
 introduction: "Established in Hyderabad in 1987 and subsequently active in Bangalore from 1992, SLV's brochure documents experience in infrastructure development, civil works, landscaping and site development.",
 capabilities: ["Land development and residential layouts","Road construction and walkways","Underground drainage and stormwater systems","Water supply and storage tanks","Retaining and boundary walls","Landscaping and granite paving","Sewage treatment plants","Civil construction and site infrastructure"],
 note: "Project details and contract values are transcribed from historical company brochure materials. Values are not current quotations."
};
export type Project = {id:number;client:string;project:string;costLakhs:number|null};
export const projects:Project[] = [
{id:1,client:"Vasundara Builders & Developers",project:"Rajankunte, Bangalore",costLakhs:48},
{id:2,client:"Upkar Developers",project:"Hosur Road",costLakhs:600},
{id:3,client:"L&T Bangalore",project:"Watch Tower",costLakhs:null},
{id:4,client:"Air Force Naval Housing Board",project:"Phase-11",costLakhs:95},
{id:5,client:"Jai Prakash Associates",project:"Nagarjuna Sagar, Hyderabad",costLakhs:45},
{id:6,client:"S.B. Group Baglur",project:"Phase-I",costLakhs:472.5},
{id:7,client:"S.B. Group Baglur",project:"Phase-II",costLakhs:432},
{id:8,client:"Sukhdevraj Sharma Eng",project:"Nalgonda, Hyderabad",costLakhs:null},
{id:9,client:"Paras Builders/Developers",project:"Hill in School",costLakhs:360},
{id:10,client:"M.A. Constructions",project:"IOC-BIA",costLakhs:85},
{id:11,client:"Nagarjuna Cont Co",project:"Hyderabad",costLakhs:700},
{id:12,client:"JMC Projects",project:"Nalgonda, Hyderabad",costLakhs:550},
{id:13,client:"Nila Bauart Eng. Ltd.",project:"ITC Sunrise",costLakhs:450},
{id:14,client:"Shapoorji Pallonji",project:"ITC Sunrise",costLakhs:40},
{id:15,client:"N.C.C. Company",project:"Stadium, Hyderabad",costLakhs:25},
{id:16,client:"Group1 Defence Medows",project:"Bangalore",costLakhs:65},
{id:17,client:"Air Force Naval Housing Board Bangalore",project:"Phase-III",costLakhs:210},
{id:18,client:"Jupiter Infrastructure Pvt. Ltd. Bangalore",project:"Commanders 7th Avenue",costLakhs:800},
{id:19,client:"Upkar Green Valley",project:"Nelamangala",costLakhs:2250},
{id:20,client:"Azcap Realty Venture Pvt. Ltd.",project:"Commanders 7th Avenue",costLakhs:315},
{id:21,client:"Jambhala Transcity Developers",project:"Malemchanahalli",costLakhs:145.5},
{id:22,client:"S.N. Nandy and Co.",project:"Road Construction",costLakhs:null},
{id:23,client:"Trident Homes",project:"Vijayapura",costLakhs:750},
{id:24,client:"Step to Stair Services",project:"Land Development",costLakhs:null},
{id:25,client:"Nayana Groups",project:"Not specified in brochure",costLakhs:null},
{id:26,client:"Telanagan Tourism, Development Corporation",project:"Buddhavanam, Nagarjuna Sagar",costLakhs:750}
];
