import Boot from "@/components/Boot";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import {me,projects,skills,games,pipeline} from "@/data/site";
const ext={target:"_blank",rel:"noopener noreferrer"};
const st={done:["border-emerald-400/60","text-emerald-300","unlocked"],learning:["border-cyan-400/40","text-cyan-300","training"],next:["opacity-60","text-slate-400","next"]};
const links=[["Email",me.email,`mailto:${me.email}`],["LinkedIn","in/sai-halwai-179923289",me.linkedin],["GitHub","github.com/SAI01-05",me.github],["Game design portfolio","sai01-05.github.io",me.gamePortfolio]];
const stack=[["Next.js","https://nextjs.org"],["TypeScript","https://www.typescriptlang.org"],["Tailwind CSS","https://tailwindcss.com"],["Supabase","https://supabase.com"],["Vercel","https://vercel.com"],["GitHub","https://github.com"]];
function Scene({id,n,t,sub,cls,pat,children}:{id:string;n:string;t:string;sub:string;cls:string;pat:string;children:React.ReactNode}){
 return <section id={id} className={`scene ${cls} relative isolate overflow-hidden px-5 py-16 sm:py-20`}>
  <div aria-hidden className="bg-aurora absolute inset-0 -z-10"/>
  <div aria-hidden className={`${pat} absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]`}/>
  <div className="mx-auto w-full min-w-0 max-w-5xl">
   <h2 className="flex items-baseline gap-3 text-3xl font-bold tracking-tight sm:text-4xl"><span className="mono text-base font-normal" style={{color:"rgb(var(--c1))"}}>{n}</span>{t}</h2>
   <p className="mt-2 max-w-prose text-[color:var(--mut)]">{sub}</p>
   <div className="mt-8">{children}</div></div></section>;
}
export default function Home(){
 return <>
 <Boot/><div className="xp" aria-hidden/><Nav/>
 <main className="pt-[var(--hh)]">
  <Hero/>
  <Scene id="skills" n="02" t="Skill network" sub="Lit cards are skills I use now. Dim cards are what I'm training next." cls="s-skills" pat="pat-dots">
   <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{skills.map(s=><li key={s.n} className={`card min-w-0 px-4 py-4 transition duration-200 hover:-translate-y-0.5 ${s.on?"border-cyan-400/60 shadow-[0_0_22px_rgba(34,211,238,.18)]":"opacity-60"}`}><p className="mono break-words font-semibold">{s.n}</p><p className={`mono mt-1 text-xs ${s.on?"text-cyan-300":"text-slate-400"}`}>{s.on?"unlocked":"training"}</p></li>)}</ul>
  </Scene>
  <Scene id="projects" n="03" t="Projects" sub="Each project is a level. Locked levels are still in training." cls="s-projects" pat="pat-grid">
   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map((p,i)=>
    <article key={p.title} className={`card min-w-0 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 ${i===0?"lg:col-span-2":""} ${p.status==="sample"?"opacity-55":""}`}>
     <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-semibold">{p.title}</h3>
      <span className={`mono shrink-0 rounded px-2 py-0.5 text-xs ${p.status==="live"?"bg-emerald-400/15 text-emerald-300":p.status==="built"?"bg-cyan-400/15 text-cyan-300":"bg-white/10 text-slate-400"}`}>{p.status==="live"?"Live":p.status==="built"?"Built":"Locked"}</span></div>
     <p className="mt-2 text-[color:var(--mut)]">{p.desc}</p><p className="mono mt-3 text-xs text-slate-400">{p.tech.join(", ")}</p>
     <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">{p.url&&<a href={p.url} {...ext} className="text-cyan-300 underline">Live demo</a>}{p.repo&&<a href={p.repo} {...ext} className="text-cyan-300 underline">Source code</a>}{!p.repo&&p.status!=="sample"&&<span className="mono text-xs text-slate-400">source link: coming soon</span>}</div></article>)}</div>
   <h3 className="mono mt-10 text-sm text-slate-400">Simulation and real-time AI (Unity, C#)</h3>
   <div className="mt-3 grid gap-3 sm:grid-cols-3">{games.map(([t,d,r])=><div key={t} className="card min-w-0 p-4"><p className="font-semibold">{t}</p><p className="mt-1 text-sm text-[color:var(--mut)]">{d}</p>{r&&<a href={r} {...ext} className="mt-2 inline-block text-sm text-cyan-300 underline">Source code</a>}</div>)}</div>
  </Scene>
  <Scene id="next" n="04" t="Next level: MLOps" sub="The ML lifecycle I'm building toward, from data to monitoring. Green stages are done, cyan are in training." cls="s-next" pat="pat-diag">
   <ol className="pipe grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{pipeline.map((p,i)=>{const [b,c,l]=st[p.s as keyof typeof st];return <li key={p.n} className={`card relative min-w-0 p-4 ${b}`}><span className="mono text-xs text-slate-400">{String(i+1).padStart(2,"0")}</span><p className="mt-1 font-semibold">{p.n}</p><p className="mono mt-1 text-xs text-slate-400">{p.tools}</p><p className={`mono mt-3 text-xs ${c}`}>{l}</p></li>})}</ol>
   <div className="card mt-6 p-5"><p className="mono text-xs text-emerald-300">Current focus</p><p className="mt-1">Building models in ML, deep learning and NLP. Next: wrap a trained model in an API, containerise it with Docker and deploy it with a pipeline.</p></div>
  </Scene>
  <Scene id="contact" n="05" t="Contact" sub="Open to ML engineer roles and fresher openings. Reach me anywhere below." cls="s-contact" pat="pat-big">
   <div className="grid gap-6 lg:grid-cols-5">
    <div className="grid min-w-0 content-start gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">{links.map(([k,v,h])=><a key={k} href={h} {...(h.startsWith("mailto")?{}:ext)} className="card block px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-amber-400/50"><span className="mono block text-xs text-slate-400">{k}</span><span className="break-words">{v}</span></a>)}</div>
    <div className="min-w-0 lg:col-span-3"><Contact/></div></div>
   <div className="mt-12 border-t border-white/10 pt-6"><p className="mono text-xs text-slate-400">How this site is built</p>
    <ul className="mt-3 flex flex-wrap gap-2">{stack.map(([k,h])=><li key={k}><a href={h} {...ext} className="mono block rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300 transition hover:border-amber-400/60 hover:text-white">{k}</a></li>)}</ul>
    <p className="mono mt-4 text-xs text-slate-400">Code on GitHub, hosted on Vercel, messages stored in Supabase. {me.name}.</p></div>
  </Scene>
 </main></>;
}