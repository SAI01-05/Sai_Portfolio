"use client";
import {useState} from "react";
export default function TrainDemo(){
 const [lr,setLr]=useState(0.3);
 let w=1;const ls:number[]=[];for(let i=0;i<20;i++){ls.push(Math.min(w*w,4));w-=lr*2*w}
 const pts=ls.map((l,i)=>`${i*15+5},${95-l*22}`).join(" ");
 const s=lr>=1?"diverged: learning rate too high":lr<0.08?"too slow: learning rate too low":"converged";
 return <div className="card p-5">
  <div className="mono flex flex-wrap justify-between gap-2 text-sm"><span>learning_rate = {lr.toFixed(2)}</span><span className={lr>=1?"text-rose-400":"text-emerald-400"}>{s}</span></div>
  <input aria-label="Learning rate" type="range" min={0.01} max={1.1} step={0.01} value={lr} onChange={e=>setLr(+e.target.value)} className="my-4 w-full accent-cyan-400"/>
  <svg viewBox="0 0 300 100" className="w-full" role="img" aria-label="Loss curve"><polyline points={pts} fill="none" stroke="#22d3ee" strokeWidth="2"/></svg></div>;
}
