/* =====================================
        AOS Animation
===================================== */

AOS.init({
    duration:1000,
    once:true
});


/* =====================================
        Typing Animation
===================================== */

const words=[
    "Aspiring Software Developer",
    "Web Developer",
    "AI & ML Enthusiast",
    "BCA Student"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

    const currentWord=words[wordIndex];

    if(!deleting){

        typing.textContent=currentWord.substring(0,charIndex++);

        if(charIndex>currentWord.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent=currentWord.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            wordIndex++;

            if(wordIndex>=words.length){

                wordIndex=0;
            }

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();


/* =====================================
      Back To Top Button
===================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});


topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* =====================================
      Active Navbar
===================================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(scrollY>=top){

            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* =====================================
      Smooth Scroll
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* =====================================
      Animate Progress Bars
===================================== */

const progressBars=document.querySelectorAll(".progress-bar");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const bar=entry.target;

            const width=bar.style.width;

            bar.style.width="0";

            setTimeout(()=>{

                bar.style.width=width;

            },200);

        }

    });

});

progressBars.forEach(bar=>observer.observe(bar));


/* =====================================
      Navbar Shadow
===================================== */

const navbar=document.querySelector(".glass-nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.boxShadow="none";

    }

});


/* =====================================
      Floating Mouse Glow
===================================== */

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.background="rgba(0,229,255,.08)";
glow.style.filter="blur(60px)";
glow.style.pointerEvents="none";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-120+"px";
    glow.style.top=e.clientY-120+"px";

});


/* =====================================
      Console Message
===================================== */

console.log("%cWelcome to Bikash Shaw's Portfolio 🚀",
"font-size:20px;color:cyan;font-weight:bold;");
