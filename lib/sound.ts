// Synthesized UI sounds (Web Audio). No audio files needed. Browsers only allow audio after a tap, so Boot enables it.
let ctx:AudioContext|null=null,on=false;
export const isOn=()=>on;
export function setSound(v:boolean){
 on=v;if(v){ctx=ctx??new AudioContext();ctx.resume()}
 window.dispatchEvent(new Event("snd"))}
function tone(f:number,t:number,d:number,v=0.05,type:OscillatorType="sine",f2?:number){
 if(!ctx)return;const o=ctx.createOscillator(),g=ctx.createGain(),s=ctx.currentTime+t;
 o.type=type;o.frequency.setValueAtTime(f,s);if(f2)o.frequency.exponentialRampToValueAtTime(f2,s+d);
 g.gain.setValueAtTime(0.0001,s);g.gain.exponentialRampToValueAtTime(v,s+0.01);g.gain.exponentialRampToValueAtTime(0.0001,s+d);
 o.connect(g);g.connect(ctx.destination);o.start(s);o.stop(s+d+0.05)}
export function play(k:"start"|"click"|"tick"|"scene"){
 if(!on||!ctx)return;
 if(k==="start"){tone(120,0,0.7,0.05,"sine",700);[392,523,659,784,1047].forEach((f,i)=>tone(f,0.1+i*0.11,0.12,0.05,"triangle"));[523,659,784].forEach(f=>tone(f,0.75,0.8,0.035))}
 if(k==="click")tone(660,0,0.08,0.04,"triangle",990);
 if(k==="tick")tone(1400,0,0.04,0.015);
 if(k==="scene"){tone(300,0,0.35,0.04,"sine",900);tone(900,0.06,0.2,0.015,"triangle")}}