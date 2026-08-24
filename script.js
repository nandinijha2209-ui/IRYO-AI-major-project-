const nav=document.getElementById("nav"),toggle=document.getElementById("menuToggle");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

const glow=document.getElementById("cursorGlow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

document.querySelectorAll(".journey-card,.floating-card,.metric-cards>div").forEach(card=>{
 card.addEventListener("mousemove",e=>{
  const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  card.style.transform=`perspective(600px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-5px)`;
 });
 card.addEventListener("mouseleave",()=>card.style.transform="");
});

document.querySelectorAll('a[href="#download"]').forEach(btn=>{
 btn.addEventListener("click",()=>{});
});
