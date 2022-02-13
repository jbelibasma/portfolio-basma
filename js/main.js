"user strict";
// typed texed
const typedtext=document.querySelector('.typedtext');
let arraytext=[' Jbeli Basma',' Web Developer',' Full Stack PHP'];
const typingDelay =80;
const erasingDelay=100;
const newTextDelay=150;
let index=0;
let charIndex=0;
   
function set(){
    

    if(charIndex<arraytext[index].length)
    {
        typedtext.textContent += arraytext[index].charAt(charIndex);
        charIndex++;
        setTimeout(set,typingDelay);
    }
    else{
        setTimeout(delet,newTextDelay);
    }}
        function delet() 
        {

            if(charIndex>0){
                typedtext.textContent=arraytext[index].substring(0,charIndex-1);
                charIndex--;
                setTimeout(delet,erasingDelay);
            }
            else{
                index++;
                if(index>=arraytext.length)
                    index=0;
                    setTimeout(set,typingDelay+10);

                
            }
        }

    


 document.addEventListener("DOMContentLoaded",function(){
     
setTimeout(set, newTextDelay + 10);

 })
 // end typed text

 // fixed nav when scroll

 let nav=document.querySelector('.nav');

function scrol() {
    // console.log(window.scrollY)
    if(window.scrollY>30){
     let result=nav.classList.add("active");
     return result;
    }
    else{
        let result=nav.classList.remove("active");
        return result;
    }
};
window.addEventListener('scroll',scrol)

// end scroll nav

// add color in icon when hover
// let slider=document.querySelector('.article-service');
// let single=slider.getElementsByClassName('single-services');
 let link=document.querySelectorAll('.link-box');
 let service=document.querySelectorAll('.single-services .services-text');
//  let i=1;
 function servicecolor(){
     for (let index = 0; index < link.length; index++) {
        link[index].style.bacgroundColor="#ffc209";
    }
        }
  
    // }
 
//  for (let i = 0; i < service.length; i++) {
//      service[i].addEventListener('mouseover',servicecolor);   
//  }
for(var elt of service ){
    elt.addEventListener('mouseover',servicecolor);  
}

function serviceaout(){
     for (let index = 0; index < link.length; index++) {
        link[index].style.bacgroundColor="#38393d";
 
        }
        }
   
    // }

    for(var elt of service ){
        elt.addEventListener('mouseout',serviceaout);   
    }
        



// for (let i = 0; i < service.length; i++) {
//     service[i].addEventListener('mouseout',serviceaout);
    
// }
// for(var elt of service ){
    // elt.currentTarget.addEventListener('mouseout',serviceaout);   

// }



// skills
let prog=document.getElementById('skils') ;
// console.log(prog);
let skil=document.querySelectorAll('.skill-progress-bar');
// console.log(skil);
function skills(){
 let sectionPos=prog.getBoundingClientRect().top;
 let screenPos=window.innerHeight;
//  console.log(screenPos)
 if(screenPos>sectionPos){
     skil.forEach(pr=>{
        const value=pr.dataset.progress;
    //  console.log(value);
        pr.style.opacity=1;
        pr.style.width=`${value}%`;
    });

 }
 else{
    skil.forEach(p=>{
        p.style.opacity=0;
        p.style.width=0;
    });


 }
}  
window.addEventListener('scroll',skills)
/*** contact */
let btn=document.querySelector('.after-btn');
btn.onmousemove=function(e){
    const x=e.page-btn.offsetLeft;
    const y=e.page-btn.offsetTop;
    btn.style.setProperty('--x',x+'px');
    btn.style.setProperty('--y',y+'px');
}
/** projet */
let links=document.querySelectorAll('.link-projet');
console.log(links)
let contenu=document.querySelectorAll('.section1-portfolio');
console.log(contenu);

for (let lien = 0; lien < links.length; lien++) {
    links[lien].addEventListener("click", (e)=>
        {
            e.preventDefault();
            const navitem=links[lien].dataset.link;
            for (let l = 0; l < contenu.length; l++) {
                contenu[l].style.display="none";
                if(navitem==contenu[l].dataset.link){
                    contenu[l].style.display="flex";
        
                }
                // else if(navitem=="all"){
                //     contenu[l].style.display="flex";
        
                // }
            }
        
        }
    );
  }

// console.log(window.scrollY);

