
let btn = document.getElementsByClassName('btn');


for(let i =0; i< btn.length; i++){
    btn[i].addEventListener('click', ()=>{
        btn[i].classList.toggle("active");
        let Content =document.getElementsByClassName('content');
       if( Content[i].style.display == "block"){
            Content[i].style.display = "none"
       }else{
        Content[i].style.display = "block"
       }
    })
    
}

