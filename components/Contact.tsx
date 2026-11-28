"use client";
import {useState} from "react";
const f="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 transition focus:border-[rgb(var(--c1))]";
export default function Contact(){
 const [s,setS]=useState<"idle"|"sending"|"ok"|"err">("idle"),[len,setLen]=useState(0);
 async function send(e:React.FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget;setS("sending");
  const r=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))}).catch(()=>null);
  setS(r?.ok?"ok":"err");if(r?.ok)setLen(0)}
 if(s==="ok")return <div className="card p-6"><p className="text-lg font-semibold text-emerald-300">Message sent</p><p className="mt-1 text-[color:var(--mut)]">Thanks for reaching out. I'll reply to the email you gave.</p><button onClick={()=>setS("idle")} className="mono mt-4 text-sm text-cyan-300 underline">Send another</button></div>;
 return <form onSubmit={send} className="card space-y-4 p-5 sm:p-6">
  <div><h3 className="text-lg font-semibold">Send a message</h3><p className="text-sm text-[color:var(--mut)]">Roles, projects or questions are all welcome.</p></div>
  <div className="grid gap-4 sm:grid-cols-2"><label className="block text-sm">Name<input name="name" required autoComplete="name" className={f}/></label><label className="block text-sm">Email<input name="email" type="email" required autoComplete="email" className={f}/></label></div>
  <label className="block text-sm">Message<textarea name="message" required rows={5} maxLength={2000} onChange={e=>setLen(e.target.value.length)} className={f}/><span className="mono mt-1 block text-right text-xs text-slate-400">{len}/2000</span></label>
  <button disabled={s==="sending"} className="w-full rounded-lg bg-[rgb(var(--c1))] px-4 py-3 font-semibold text-black transition hover:brightness-110 disabled:opacity-60">{s==="sending"?"Sending...":"Send message"}</button>
  {s==="err"&&<p className="text-sm text-rose-400">Could not send. Please email me directly instead.</p>}</form>;
}