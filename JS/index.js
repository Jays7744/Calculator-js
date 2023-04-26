
let Num = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{ 
    button.addEventListener("click", (e)=>{
    

        if(e.target.innerHTML == "=" && Num != "" ){
            Num = eval(Num);
            document.querySelector("input").value = Num; 
            
        }
       
        else if (e.target.innerHTML == "C"){
            Num= "";
            document.querySelector("input").value=Num;}
            
        else if (e.target.innerHTML == "←" ){
            Num = Num.slice(0,-1);
            document.querySelector("input").value=Num;
        }
        else if (e.target.innerHTML == "Enter" ){
            Num = '=';
            document.querySelector("input").value=Num;
        }
        else{
            Num = Num + e.target.innerHTML;
            document.querySelector("input").value = Num;
            
        }
    })
})

// let input = document.querySelector("input");
// window.addEventListener("keypress",(e)=>{
//     console.log(e.key);
//     input += e.key; 

// })
 
let input = document.querySelector("input");

 document.addEventListener("keypress", (e)=> {
    console.log(e.key);
     input +=e.key;
 });