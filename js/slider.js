"user strict";


let slider=document.querySelectorAll('.article-service');
// console.log(slider)
let next=document.querySelector('.next');
next.addEventListener('click',clicked);
let pev=document.querySelector('.prev');
pev.addEventListener('click',Prevs)
let j=0;
function clicked()
{ 
   if(j==slider.length-1){
      slider[j].classList.remove('show-service');
      slider[j].classList.add('hide');



    j=0
    slider[j].classList.remove('hide')
    slider[j].classList.add('show-service');



   }
   else{
      slider[j].classList.remove('show-service');
      slider[j].classList.add('hide');


    j++
    slider[j].classList.remove('hide');
    slider[j].classList.add('show-service');

   }
   
  
}
function Prevs()
{ 
      if(j==0){
      slider[j].classList.remove('show-service');
      slider[j].classList.add('hide');
      j=slider.length-1
      slider[j].classList.remove('hide');
      slider[j].classList.add('show-service')

   }
   else{
      slider[j].classList.remove('show-service');
      slider[j].classList.add('hide');
    j--
    slider[j].classList.remove('hide');
    slider[j].classList.add('show-service');
   }
   
    
}
let myineterval 
function play( progress) {
   myineterval= setInterval( 
       
    
      function clicked()
      { 
         if(j==slider.length-1){
            slider[j].classList.remove('show-service');
            slider[j].classList.add('hide');
            slider[j].style.right =j + 'px';




          j=0
          slider[j].classList.remove('hide')
          slider[j].classList.add('show-service');
          slider[j].style.right =j + 'px';


         }
         else{
            slider[j].classList.remove('show-service');
            slider[j].classList.add('hide');
            slider[j].style.right =j + 'px';


          j++
          slider[j].classList.remove('hide');
          slider[j].classList.add('show-service');
          slider[j].style.right =j + 'px';


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
   


