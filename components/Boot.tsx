"use client";
import {useEffect,useRef,useState} from "react";
import {play,setSound} from "@/lib/sound";
type P={x:number;y:number};
export default function Boot(){
 const r=useRef<HTMLCanvasElement>(null);
 const [n,setN]=useState(0),[tot,setTot]=useState(0),[ready,setReady]=useState(false),[leave,setLeave]=useState(false),[gone,setGone]=useState(false);
 useEffect(()=>{
  const c=r.current!,x=c.getContext("2d")!,d=Math.min(devicePixelRatio||1,2),W=innerWidth,H=innerHeight;
  c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
  const calm=matchMedia("(prefers-reduced-motion: reduce)").matches,N=Math.min(46,Math.max(20,Math.floor(W/24)));setTot(N);
  const P:P[]=[],E:[number,number,number][]=[];let raf=0,k=0,done=false;const t0=performance.now();
  const add=()=>{const p={x:40+Math.random()*(W-80),y:60+Math.random()*(H-120)};
   const near=P.map((q,i)=>[i,Math.hypot(q.x-p.x,q.y-p.y)] as [number,number]).sort((a,b)=>a[1]-b[1]).slice(0,2);
   P.push(p);near.forEach(([i])=>E.push([i,P.length-1,performance.now()]));k++;setN(k)};
  if(calm){while(k<N)add();done=true;setReady(true)}
  const draw=(now:number)=>{raf=requestAnimationFrame(draw);
   if(!calm&&k<N&&now-t0>k*65+300)add();
   if(!done&&k===N&&now-t0>N*65+800){done=true;setReady(true)}
   x.clearRect(0,0,W,H);
   E.forEach(([a,b,t])=>{const g=Math.min(1,(now-t)/350),A=P[a],B=P[b];x.strokeStyle="rgba(34,211,238,.45)";x.beginPath();x.moveTo(A.x,A.y);x.lineTo(A.x+(B.x-A.x)*g,A.y+(B.y-A.y)*g);x.stroke()});
   P.forEach((p,i)=>{x.fillStyle=i%2?"rgba(167,139,250,.18)":"rgba(34,211,238,.18)";x.beginPath();x.arc(p.x,p.y,8,0,7);x.fill();x.fillStyle=i%2?"#a78bfa":"#22d3ee";x.beginPath();x.arc(p.x,p.y,3,0,7);x.fill()})};
  raf=requestAnimationFrame(draw);return()=>cancelAnimationFrame(raf)},[]);
 const go=(snd:boolean)=>{if(leave)return;setSound(snd);if(snd)play("start");setLeave(true);setTimeout(()=>setGone(true),800)};
 useEffect(()=>{if(!ready)return;const f=(e:KeyboardEvent)=>{if(e.key==="Enter")go(true)};addEventListener("keydown",f);return()=>removeEventListener("keydown",f)});
 if(gone)return null;
 return <div className={`fixed inset-0 z-50 bg-[#080b14] transition-opacity duration-700 ${leave?"pointer-events-none opacity-0":""}`}>
  <canvas ref={r} className="absolute inset-0 h-full w-full"/>
  <div className="mono absolute inset-x-0 bottom-[12%] flex flex-col items-center gap-4 px-5 text-center text-sm">
   <p className="text-cyan-300">{ready?"graph ready. model online.":`building graph... ${n} nodes`}</p>
   <div className="h-1 w-56 overflow-hidden rounded bg-white/10"><div className="h-full bg-cyan-400 transition-all" style={{width:`${tot?Math.min(100,n/tot*100):0}%`}}/></div>
   {ready&&<div className="flex flex-wrap justify-center gap-3"><button onClick={()=>go(true)} className="rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-black">Enter with sound</button><button onClick={()=>go(false)} className="rounded-lg border border-white/20 px-5 py-2.5">Enter silent</button></div>}
  </div></div>;
}