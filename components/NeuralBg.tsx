"use client";
import {useEffect,useRef} from "react";
export default function NeuralBg(){
 const r=useRef<HTMLCanvasElement>(null);
 useEffect(()=>{
  const c=r.current!,x=c.getContext("2d")!,d=devicePixelRatio||1,L=[4,6,6,3];let raf=0,t=0;
  const fit=()=>{c.width=c.offsetWidth*d;c.height=c.offsetHeight*d};fit();addEventListener("resize",fit);
  const draw=()=>{t+=0.012;const w=c.width,h=c.height;x.clearRect(0,0,w,h);
   const P=L.map((n,i)=>Array.from({length:n},(_,j)=>[w*(0.08+0.84*i/(L.length-1)),h*(0.12+0.76*(j+0.5)/n)]));
   P.forEach((l,i)=>i&&l.forEach((b,j)=>P[i-1].forEach((a,k)=>{x.strokeStyle=`rgba(34,211,238,${0.05+0.14*Math.max(0,Math.sin(t*2+i+j+k))})`;x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()})));
   P.flat().forEach(([a,b],i)=>{x.fillStyle=i%2?"#a78bfa":"#22d3ee";x.beginPath();x.arc(a,b,3*d,0,7);x.fill()});
   raf=requestAnimationFrame(draw)};
  draw();return()=>{cancelAnimationFrame(raf);removeEventListener("resize",fit)}},[]);
 return <canvas ref={r} aria-hidden className="absolute inset-0 h-full w-full opacity-60"/>;
}
