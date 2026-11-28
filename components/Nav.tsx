"use client";
import {useEffect,useRef,useState} from "react";
import {isOn,play,setSound} from "@/lib/sound";
const IDS=["home","skills","projects","next","contact"];
export default function Nav(){
 const [a,setA]=useState("home"),[snd,setSnd]=useState(false),prev=useRef("home"),ul=useRef<HTMLUListElement>(null);
 useEffect(()=>{
  const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setA(e.target.id)}),{rootMargin:"-40% 0px -55% 0px"});
  IDS.forEach(id=>{const el=document.getElementById(id);if(el)o.observe(el)});
  const s=()=>setSnd(isOn());addEventListener("snd",s);
  let last=0;const q="a,button";
  const dn=(e:PointerEvent)=>{if((e.target as Element).closest(q))play("click")};
  const ov=(e:PointerEvent)=>{const now=performance.now();if(e.pointerType==="mouse"&&(e.target as Element).closest(q)&&now-last>90){last=now;play("tick")}};
  addEventListener("pointerdown",dn);addEventListener("pointerover",ov);
  return()=>{o.disconnect();removeEventListener("snd",s);removeEventListener("pointerdown",dn);removeEventListener("pointerover",ov)}},[]);
 useEffect(()=>{if(prev.current!==a){play("scene");prev.current=a}ul.current?.querySelector("[aria-current]")?.scrollIntoView({inline:"center",block:"nearest"})},[a]);
 return <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-[#080b14]/90 backdrop-blur-sm">
  <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-3 px-5 py-2.5 text-sm">
   <a href="#home" className="mono font-bold text-cyan-300">sai.ml</a>
   <ul ref={ul} className="order-last mt-2 flex w-full gap-1 overflow-x-auto lg:order-none lg:mt-0 lg:w-auto">{IDS.map((s,i)=><li key={s}><a href={`#${s}`} aria-current={a===s?"true":undefined} className={`mono flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 transition ${a===s?"bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/40":"text-[color:var(--mut)] hover:bg-white/5 hover:text-white"}`}><span className="text-[10px] opacity-60">{String(i+1).padStart(2,"0")}</span>{s}</a></li>)}</ul>
   <div className="flex items-center gap-2"><button onClick={()=>setSound(!isOn())} aria-pressed={snd} className="mono rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400">sound {snd?"on":"off"}</button>
   <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-cyan-400/50 px-4 py-1.5 text-cyan-300 transition hover:bg-cyan-400/10">Resume</a></div></nav></header>;
}