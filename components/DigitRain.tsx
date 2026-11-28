"use client";
import {useEffect,useRef} from "react";
export default function DigitRain(){
 const r=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const c=r.current!,x=c.getContext("2d")!,calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const G=15,LEN=10,GAP=G*1.9;type C={y:number;v:number;s:string[]};
  let w=0,h=0,raf=0,last=0,vis=true,cols:C[]=[];
  const ch=()=>Math.random()<0.7?(Math.random()<0.5?"0":"1"):String(Math.floor(Math.random()*10));
  const mk=(fresh:boolean):C=>({y:fresh?0:Math.random()*(h+LEN*G),v:4.4+Math.random()*2,s:Array.from({length:LEN},ch)});
  const paint=()=>{x.clearRect(0,0,w,h);cols.forEach((p,i)=>{for(let k=0;k<LEN;k++){const y=p.y-k*G;if(y<0||y>h)continue;const a=k===0?0.55:0.24*(1-k/LEN);x.fillStyle=k===0?`rgba(167,243,255,${a})`:`rgba(34,211,238,${a})`;x.fillText(p.s[k],i*GAP,y)}})};
  const fit=()=>{w=c.offsetWidth;h=c.offsetHeight;c.width=w;c.height=h;x.font="12px monospace";cols=Array.from({length:Math.floor(w/GAP)},()=>mk(false));if(calm)paint()};
  fit();addEventListener("resize",fit);
  const draw=(ts:number)=>{if(!vis){raf=0;return}raf=requestAnimationFrame(draw);if(ts-last<42)return;last=ts;
   cols.forEach((p,i)=>{p.y+=p.v;if(Math.random()<0.1)p.s[Math.floor(Math.random()*LEN)]=ch();if(p.y-LEN*G>h)cols[i]=mk(true)});paint()};
  const io=new IntersectionObserver(([e])=>{vis=e.isIntersecting;if(vis&&!raf&&!calm)raf=requestAnimationFrame(draw)});io.observe(c);
  if(!calm)raf=requestAnimationFrame(draw);
  return()=>{io.disconnect();cancelAnimationFrame(raf);removeEventListener("resize",fit)}},[]);
 return <canvas ref={r} aria-hidden className="h-full w-full"/>;
}