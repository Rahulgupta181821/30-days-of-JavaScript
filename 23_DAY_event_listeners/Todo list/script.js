let h1= document.querySelector("h1");
let inp= document.querySelector('input');
let btn = document.querySelector('button');
let ul =document.querySelector("ul");
btn.addEventListener('click', function(){
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.innerText='delete'
    button.classList.add('delete');
    li.innerHTML=inp.value;
    li.appendChild(button)
    inp.value="";
    ul.appendChild(li);
});
// let delBtn =document.querySelectorAll('.delete');
// for(let btn of delBtn){
//     btn.addEventListener('click',function(){
//         let parLi=this.parentElement
//         console.log("delete btn");
//         parLi.remove();
//     })
// }
// it does not work for creating new elment
ul.addEventListener('click', function(e){
    console.log(e.target.parentElement);
    let parLi= e.target.parentElement;
    console.dir(e.target);
    if(e.target.tagName=='BUTTON'){
     console.log('deleted')
     parLi.remove();
    }
    
})
