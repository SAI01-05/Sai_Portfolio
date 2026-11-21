"use client";
import {useState} from "react";
export default function Contact(){
 const [s,setS]=useState<"idle"|"sending"|"ok"|"err">("idle");
 async function send(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const f=e.currentTarget;setS("sending");
  const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))}).catch(()=>null);
  setS(r?.ok?"ok":"err");if(r?.ok)f.reset()}
 const i="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2";
 return <form onSubmit={send} className="card space-y-3 p-5">
  <input name="name" required placeholder="Your name" aria-label="Name" className={i}/>
  <input name="email" type="email" required placeholder="Your email" aria-label="Email" className={i}/>
  <textarea name="message" required rows={4} maxLength={2000} placeholder="Message" aria-label="Message" className={i}/>
  <button disabled={s==="sending"} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-black">{s==="sending"?"Sending...":"Send message"}</button>
  {s==="ok"&&<p className="text-sm text-emerald-400">Message sent.</p>}
  {s==="err"&&<p className="text-sm text-rose-400">Could not send. Email me directly instead.</p>}</form>;
}
