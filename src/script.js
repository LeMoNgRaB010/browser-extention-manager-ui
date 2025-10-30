 
 const swtbtn=document.getElementById("switch_btn");


 swtbtn.addEventListener("click", ()=>{
       
        let theme=swtbtn.dataset.theme;

      if(theme=="dark"){
           
         swtbtn.dataset.theme="light";
         swtbtn.src="/assets/images/icon-moon.svg";
         document.documentElement.dataset.theme="light";
      }else{

         swtbtn.dataset.theme="dark";
         swtbtn.src="/assets/images/icon-sun.svg";
         document.documentElement.dataset.theme="dark";
         
        }


 } );


 
 const all=document.getElementById("all");
const btns=document.querySelectorAll(".buttons span");

const check=document.querySelectorAll("input[type=checkbox]");

const card=Array.from(document.getElementsByClassName("tool-card"));

function update_cards(){ 
check.forEach( (toggle)=>{       // data satate for th cards
       
   
     const element=toggle.closest('.tool-card');  
       if(toggle.checked){
           element.dataset.state="Active";
           
       }else{
            element.dataset.state="Inactive";
       }
      
 });
}

check.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    update_cards();
    filtercard(temp);  // temp holds current filter, so display updates live
  });
});



 
let temp="All";
btns.forEach( btn=>{   // buttons styles
   
   btn.addEventListener("click", ()=>{
         btns.forEach( button =>{
            button.classList.remove('active') 
             
         });
       
       
         update_cards();
         btn.classList.add('active'); 
         temp=btn.dataset.type;
             
            filtercard(temp);
        
      });

});



function filtercard(filtertype){

       card.forEach(element =>{ 
         const state=element.dataset.state;
         
         if(filtertype=== "All"){
             
             element.classList.remove("hidden") ;  
         }else if(filtertype==="Active"){
            element.classList.remove("hidden") ;  
              if(state==="Inactive"){
               element.classList.add("hidden"); 
              }

         }else if(filtertype==="Inactive"){
            element.classList.remove("hidden") ;  
            if(state==="Active"){
               element.classList.add("hidden"); 
               
            }
               
            
         }

      });

}

