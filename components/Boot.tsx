"use client";
import {useEffect,useState} from "react";
const L=["> initializing model...","> loading skills.csv, projects.csv","> training... epoch 10/10, loss 0.02","> training complete. welcome."];
export default function Boot(){
 const [n,setN]=useState(0),[off,setOff]=useState(false);
 useEffect(()=>{const i=setInterval(()=>setN(v=>v+1),450),o=setTimeout(()=>setOff(true),2300);return()=>{clearInterval(i);clearTimeout(o)}},[]);
 if(off)return null;
 return <div onClick={()=>setOff(true)} className="mono fixed inset-0 z-50 grid cursor-pointer place-items-center bg-[#080b14] text-sm text-cyan-300">
  <div className="w-[min(90vw,28rem)] space-y-2">{L.slice(0,n).map(l=><p key={l}>{l}</p>)}
  <div className="h-1 overflow-hidden rounded bg-white/10"><div className="h-full bg-cyan-400 transition-all duration-[2200ms]" style={{width:n?"100%":"0"}}/></div>
  <p className="text-xs text-slate-500">tap to skip</p></div></div>;
}
