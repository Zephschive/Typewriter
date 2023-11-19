const text = document.querySelector(".dynamic")

const TextLoader = () => 
{
    setTimeout(()=>{
        text.innerHTML = "amazing";
    },0);
    setTimeout(()=>{
        text.textContent = "A Great Web Developer"
    },3000);
    setTimeout(()=>{
        text.textContent = "The Best Web Designer"
    },6000);
    setTimeout(()=>{
        TextLoader();
    },9000 );
} 
TextLoader();
