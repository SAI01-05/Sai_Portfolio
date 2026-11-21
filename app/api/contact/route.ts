import {NextResponse} from "next/server";
import {supabase} from "@/lib/supabase";
export async function POST(req:Request){
 const {name,email,message}=await req.json().catch(()=>({}));
 if(!name||!email||!message||String(message).length>2000)return NextResponse.json({error:"bad input"},{status:400});
 if(!supabase)return NextResponse.json({error:"db not configured"},{status:503});
 const {error}=await supabase.from("contact_messages").insert({name,email,message});
return error?NextResponse.json({error:"db error"},{status:500}):NextResponse.json({ok:true});
}
