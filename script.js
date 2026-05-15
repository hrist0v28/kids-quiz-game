
let i=0,score=0;
const app=document.getElementById('app');
const loading=document.getElementById('loading');

setTimeout(()=>{loading.style.display='none';app.style.display='block';load();},800);

function shuffle(a){return a.sort(()=>Math.random()-0.5)}

function load(){
let q=questions[i];
document.getElementById('cat').innerText="Сфера: "+q.category;
document.getElementById('progress').innerText=(i+1)+"/"+questions.length;
document.getElementById('emoji').innerText=q.emoji;
document.getElementById('q').innerText=q.question;

let ans=[...q.answers.map((a,idx)=>({text:a,idx}))];
shuffle(ans);

let box=document.getElementById('answers');
box.innerHTML="";

ans.forEach((a,pos)=>{
let b=document.createElement('div');
b.className='answer';
b.innerText=a.text;
b.onclick=()=>{
if(a.idx===q.correct){
b.classList.add('correct');score++;confetti();
}else{
b.classList.add('wrong');
}
setTimeout(()=>{i++;if(i<questions.length)load();else end();},700);
};
box.appendChild(b);
});
}

function end(){
document.getElementById('card').innerHTML="<h1>⭐ "+score+"/"+questions.length+" ⭐</h1>";
}

function confetti(){
for(let i=0;i<30;i++){
let d=document.createElement('div');
d.innerHTML="⭐";
d.style.position="fixed";
d.style.left=Math.random()*100+"vw";
d.style.top="-20px";
document.body.appendChild(d);
setTimeout(()=>d.remove(),1000);
}
}
