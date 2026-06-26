const words=['Cyber Security Enthusiast'];
let wi=0,ci=0,del=false;const el=document.getElementById('typing');
function tick(){
 const w=words[wi];
 if(!del){el.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(tick,1200);return;}}
 else{el.textContent=w.slice(0,--ci);if(ci===0){del=false;wi=(wi+1)%words.length;}}
 setTimeout(tick,del?50:100);
}
tick();
