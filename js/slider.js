"user strict";
let slider=document.querySelectorAll('.article-service');
console.log(slider)
let next=document.querySelector('.next');
next.addEventListener('click',clicked);
var pev=document.querySelector('.prev')
pev.addEventListener('click',Prevs)
let j=0;
function clicked()
{ 
   if(j==slider.length-1){
      slider[j].classList.remove('show');
      slider[j].classList.add('hide');


    j=0
    slider[j].classList.remove('hide')
    slider[j].classList.add('show');


   }
   else{
      slider[j].classList.remove('show');
      slider[j].classList.add('hide');


    j++
    slider[j].classList.remove('hide');
    slider[j].classList.add('show');

   }
  
}
function Prevs()
{ 
      if(j==0){
      slider[j].classList.remove('show');
      slider[j].classList.add('hide');
      j=slider.length-1
      slider[j].classList.remove('hide');
      slider[j].classList.add('show')

   }
   else{
      slider[j].classList.remove('show');
      slider[j].classList.add('hide');
    j--
    slider[j].classList.remove('hide');
    slider[j].classList.add('show');
   }
   
    
}
let myineterval 
function play() {
   myineterval= setInterval( 
       
    
      function clicked()
      { 
         if(j==slider.length-1){
            slider[j].classList.remove('show');
            slider[j].classList.add('hide');



          j=0
          slider[j].classList.remove('hide')
          slider[j].classList.add('show');

         }
         else{
            slider[j].classList.remove('show');
            slider[j].classList.add('hide');

          j++
          slider[j].classList.remove('hide');
          slider[j].classList.add('show');

         }
        
      },4000);
}
play()

function mouseOver(){
   clearInterval(myineterval);

}
for(let j=0; j<slider.length;j++){

slider[j].addEventListener('mouseover',mouseOver);
}
function mouseAout(){
   play();

}
for(let j=0; j<slider.length;j++){

   slider[j].addEventListener('mouseout',mouseAout)
}
   


