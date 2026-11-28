"use client";
import {useEffect,useRef,useState} from "react";
import {me,skills} from "@/data/site";
import DigitRain from "@/components/DigitRain";
const ROLES=["builds models in Python","ships apps with Docker","is learning NLP and deep learning","is training for MLOps"];
function useTyping(){
 const [t,setT]=useState(ROLES[0]);
 useEffect(()=>{
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  let i=0,j=0,del=false,id:ReturnType<typeof setTimeout>;
  const tick=()=>{const w=ROLES[i];j+=del?-1:1;setT(w.slice(0,j));let d=del?25:55;
   if(!del&&j===w.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%ROLES.length;d=300}
   id=setTimeout(tick,d)};
  tick();return()=>clearTimeout(id)},[]);
 return t;
}
const TOK=["Turn","data","into","models","that","ship"];
function weights(i:number){const s=TOK.map((_,j)=>Math.sin(i*2.1+j*1.3+1)*1.6-Math.abs(i-j)*0.3),m=Math.max(...s),e=s.map(v=>Math.exp(v-m)),z=e.reduce((a,b)=>a+b,0);return e.map(v=>Math.round(v/z*1000)/1000)}
function Attention(){
 const [a,setA]=useState(3),hold=useRef(false);
 useEffect(()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i=setInterval(()=>{if(!hold.current)setA(v=>(v+1)%TOK.length)},1800);return()=>clearInterval(i)},[]);
 const w=weights(a),n=TOK.length,X=(i:number)=>(i+0.5)/n*600;
 return <div className="card overflow-hidden shadow-[0_0_60px_rgba(34,211,238,.12)]">
  <div className="mono flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-slate-400"><span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-rose-400/80"/><i className="h-2.5 w-2.5 rounded-full bg-amber-400/80"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"/></span><span>transformer.attention (demo)</span></div>
  <div className="px-4 pb-4 pt-5" onPointerLeave={()=>{hold.current=false}}>
   <p className="mono mb-2 text-[11px] text-slate-400">query: hover or tap a token</p>
   <div className="flex gap-1">{TOK.map((t,i)=><button key={t} onPointerEnter={()=>{hold.current=true;setA(i)}} onClick={()=>setA(i)} className={`mono min-w-0 flex-1 rounded-md py-1.5 text-xs transition sm:text-sm ${i===a?"bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-400/60":"text-slate-400 hover:text-white"}`}>{t}</button>)}</div>
   <svg viewBox="0 0 600 120" preserveAspectRatio="none" className="my-1 h-28 w-full sm:h-40" aria-hidden>{w.map((v,j)=><path key={j} d={`M${X(a)} 0 C${X(a)} 60 ${X(j)} 60 ${X(j)} 120`} fill="none" stroke="#a78bfa" strokeWidth={1+v*9} strokeOpacity={Math.min(1,0.15+v*1.1)} vectorEffect="non-scaling-stroke"/>)}</svg>
   <div className="flex gap-1">{TOK.map((t,j)=><span key={t} className="mono min-w-0 flex-1 text-center text-xs sm:text-sm" style={{opacity:Math.min(1,0.35+w[j]*1.6)}}>{t}<i className="mx-auto mt-1 block h-1 rounded bg-violet-400" style={{width:`${Math.max(8,w[j]*100)}%`}}/></span>)}</div>
   <p className="mono mt-2 text-[11px] text-slate-400">key: attention weight (illustration)</p></div>
  <div className="mono flex flex-wrap justify-between gap-x-3 border-t border-white/10 px-4 py-2 text-xs"><span className="text-cyan-300">layer 6, head 3/8</span><span className="text-violet-300">softmax(QK^T / sqrt(d)) V</span></div></div>;
}
const btn="block text-center rounded-lg px-5 py-2.5 font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0";
const pri=`${btn} bg-cyan-400 text-black hover:shadow-[0_0_24px_rgba(34,211,238,.55)]`;
const sec=`${btn} border border-white/15 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300`;
const ext={target:"_blank",rel:"noopener noreferrer"};
export default function Hero(){
 const role=useTyping(),on=skills.filter(s=>s.on).map(s=>s.n),off=skills.filter(s=>!s.on).map(s=>s.n);
 return <section id="home" className="scene relative isolate flex min-h-[calc(100svh-var(--hh))] items-center overflow-hidden px-5 py-10">
  <div aria-hidden className="bg-aurora absolute inset-0 -z-10"/>
  <div aria-hidden className="absolute inset-0 -z-10 opacity-45 [mask-image:linear-gradient(to_left,black,transparent_75%)]"><DigitRain/></div>
  <div className="mx-auto w-full min-w-0 max-w-5xl">
   <div className="grid items-center gap-10 lg:grid-cols-2">
    <div className="min-w-0">
     <p className="mono inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/>Open to ML engineer roles</p>
     <p className="mono mt-5 text-sm text-slate-400">{me.name} // ML engineer in training</p>
     <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">Turning data into <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">models that ship.</span></h1>
     <p className="mono mt-5 min-h-8 text-base text-cyan-300 sm:text-lg">&gt; {me.name.split(" ")[0].toLowerCase()} {role}<span className="animate-pulse">_</span></p>
     <p className="mt-4 max-w-xl text-[color:var(--mut)]">B.Sc. Computer Science student moving from game development into machine learning, with Python, SQL, Docker and a live deployed app already behind me.</p>
     <div className="mt-7 grid max-w-md grid-cols-2 gap-3"><a href="/resume.pdf" {...ext} className={pri}>Download resume</a><a href="#projects" className={sec}>View projects</a><a href={me.github} {...ext} className={sec}>GitHub</a><a href={me.linkedin} {...ext} className={sec}>LinkedIn</a></div>
    </div>
    <Attention/>
   </div>
   <div className="mt-10 grid gap-3 sm:grid-cols-3">{[["Unlocked",on.join(", "),"text-cyan-300"],["Training",off.join(", "),"text-violet-300"],["Origin story","Unity, C#, Blender, game AI","text-slate-300"]].map(([a,b,c])=><div key={a} className="card px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50"><p className={`mono text-xs ${c}`}>{a}</p><p className="mt-1 text-sm text-slate-200">{b}</p></div>)}</div>
  </div></section>;
}