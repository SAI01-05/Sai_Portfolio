import Boot from "@/components/Boot";
import NeuralBg from "@/components/NeuralBg";
import TrainDemo from "@/components/TrainDemo";
import Contact from "@/components/Contact";
import {me,projects,skills,games,roadmap} from "@/data/site";
const H=({id,t,sub}:{id:string;t:string;sub?:string})=><div id={id} className="scroll-mt-20 pt-20"><h2 className="text-3xl font-bold tracking-tight">{t}</h2>{sub&&<p className="mt-1 max-w-prose text-[color:var(--mut)]">{sub}</p>}</div>;
const btn="rounded-lg px-4 py-2 font-semibold";
export default function Home(){
 return <>
 <Boot/><div className="xp" aria-hidden/>
 <header className="sticky top-0 z-30 border-b border-white/5 bg-[#080b14]/85 backdrop-blur">
  <nav className="mx-auto flex max-w-5xl items-center gap-5 overflow-x-auto px-5 py-3 text-sm whitespace-nowrap">
   <a href="#top" className="mono font-bold text-cyan-300">sai.ml</a>
   {["skills","projects","games","lab","next","contact"].map(s=><a key={s} href={`#${s}`} className="text-[color:var(--mut)] hover:text-white">{s}</a>)}
   <a href="/resume.pdf" className="ml-auto rounded-md border border-cyan-400/50 px-3 py-1 text-cyan-300">Resume</a></nav></header>
 <main id="top" className="mx-auto max-w-5xl px-5 pb-24">
  <section className="relative grid min-h-[78vh] items-center overflow-hidden"><NeuralBg/>
   <div className="relative py-16"><p className="mono text-sm text-cyan-300">Hi, I'm</p>
    <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">{me.name}</h1>
    <p className="mt-4 text-2xl text-violet-300">{me.role} in training</p>
    <p className="mt-4 max-w-xl text-[color:var(--mut)]">{me.about}</p>
    <div className="mt-7 flex flex-wrap gap-3"><a href="/resume.pdf" className={`${btn} bg-cyan-400 text-black`}>Download resume</a>
     <a href="#projects" className={`${btn} border border-white/15`}>See projects</a><a href={me.github} className={`${btn} border border-white/15`}>GitHub</a></div></div></section>

  <H id="skills" t="Skill network" sub="Lit nodes are skills I use now. Dim nodes are what I'm training next."/>
  <div className="mt-6 flex flex-wrap gap-3">{skills.map(s=><span key={s.n} className={`mono rounded-full border px-4 py-1.5 text-sm ${s.on?"border-cyan-400 text-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.35)]":"border-white/10 text-slate-500"}`}>{s.n}{s.on?"":" (learning)"}</span>)}</div>

  <H id="projects" t="Projects" sub="Each project is a level. Locked levels are still in training."/>
  <div className="mt-6 grid gap-4 sm:grid-cols-2">{projects.map(p=>
   <article key={p.title} className={`card p-5 ${p.status==="sample"?"opacity-55":""}`}>
    <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-semibold">{p.title}</h3>
     <span className={`mono rounded px-2 py-0.5 text-xs ${p.status==="live"?"bg-emerald-400/15 text-emerald-300":p.status==="built"?"bg-cyan-400/15 text-cyan-300":"bg-white/10 text-slate-400"}`}>{p.status==="live"?"Live":p.status==="built"?"Built":"Locked"}</span></div>
    <p className="mt-2 text-[color:var(--mut)]">{p.desc}</p>
    <p className="mono mt-3 text-xs text-slate-400">{p.tech.join(", ")}</p>
    <div className="mt-4 flex gap-3 text-sm">{p.url&&<a href={p.url} className="text-cyan-300 underline">Live demo</a>}{p.repo&&<a href={p.repo} className="text-cyan-300 underline">Source code</a>}</div></article>)}</div>

  <H id="games" t="Simulation and real-time AI" sub="Unity and C# games where I built enemy AI, physics and game systems. This is the base I'm moving into reinforcement learning from."/>
  <div className="mt-6 grid gap-4 sm:grid-cols-3">{games.map(([t,d])=><div key={t} className="card p-5"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-[color:var(--mut)]">{d}</p></div>)}</div>

  <H id="lab" t="Train the model" sub="Move the slider. Too low and it crawls, too high and the loss explodes."/>
  <div className="mt-6 max-w-xl"><TrainDemo/></div>

  <H id="next" t="Next level: MLOps" sub="My next goal after ML engineering is deployment and pipelines."/>
  <ul className="mt-6 grid gap-2 sm:grid-cols-2">{roadmap.map(r=><li key={r.n} className={`card px-4 py-3 ${r.on?"border-cyan-400/60":"opacity-55"}`}>{r.on?"Unlocked: ":"Locked: "}{r.n}</li>)}</ul>

  <H id="contact" t="Contact" sub="Open to ML engineer roles and fresher openings."/>
  <div className="mt-6 grid gap-6 sm:grid-cols-2"><Contact/>
   <div className="space-y-2"><a className="block text-cyan-300 underline" href={`mailto:${me.email}`}>{me.email}</a>
    <a className="block text-cyan-300 underline" href={me.linkedin}>LinkedIn</a><a className="block text-cyan-300 underline" href={me.github}>GitHub</a></div></div>
 </main></>;
}
