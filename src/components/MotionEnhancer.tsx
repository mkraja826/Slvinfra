"use client";
import { useEffect } from "react";
export default function MotionEnhancer(){
 useEffect(()=>{
  const root=document.documentElement;
  root.classList.add("motion-ready");
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return ()=>root.classList.remove("motion-ready");
  const items=document.querySelectorAll<HTMLElement>("[data-reveal]");
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}},{threshold:0.12,rootMargin:"0px 0px -35px 0px"});
  items.forEach(item=>observer.observe(item));
  return ()=>{observer.disconnect();root.classList.remove("motion-ready")};
 },[]);
 return null;
}
