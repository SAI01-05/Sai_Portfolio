// Edit this file to update the site. Empty url/repo = no button shown (no broken links).
export const me={name:"Sai Halwai",role:"ML Engineer",email:"saihalwai01@gmail.com",
 github:"https://github.com/SAI01-05",linkedin:"https://linkedin.com/in/sai-halwai-179923289",
 about:"B.Sc. Computer Science student (Game Design and Development) moving from game development into machine learning. I work in Python and SQL, ship with Docker and Vercel, and I'm learning ML, deep learning, NLP and MLOps."};
export type Project={title:string;desc:string;tech:string[];status:"live"|"built"|"sample";url?:string;repo?:string};
export const projects:Project[]=[
 {title:"Betting App",desc:"Full-stack app, deployed and running, containerised with Docker.",tech:["Docker","PostgreSQL","Vercel"],status:"live",url:"",repo:""},
 {title:"NLP App",desc:"Desktop NLP app with login and register screens, NLP through an API.",tech:["Python","Tkinter","NLP"],status:"built",repo:""},
 {title:"Pandas Case Studies",desc:"Data analysis case studies and core pandas concepts.",tech:["Python","pandas"],status:"built",repo:""},
 {title:"Sentiment Classifier",desc:"Sample slot. The real project will replace this.",tech:["NLP","scikit-learn"],status:"sample"},
 {title:"Churn Prediction",desc:"Sample slot. The real project will replace this.",tech:["ML","pandas"],status:"sample"}];
export const skills=[{n:"Python",on:true},{n:"pandas",on:true},{n:"SQL",on:true},{n:"PostgreSQL",on:true},{n:"Docker",on:true},{n:"Git",on:true},
 {n:"Machine Learning",on:false},{n:"Deep Learning",on:false},{n:"NLP",on:false},{n:"MLOps",on:false}];
export const games=[["FPS Shooter","NavMesh enemy AI, health system, doors, UI"],["Car Racing","Lap system, waypoint AI cars, drifting, camera modes"],["Beat 'em Up (in progress)","Combos, enemy AI, health and damage"]];
export const roadmap=[{n:"Docker and deployment",on:true},{n:"Model serving APIs",on:false},{n:"CI/CD pipelines",on:false},{n:"Experiment tracking",on:false},{n:"Monitoring",on:false}];
