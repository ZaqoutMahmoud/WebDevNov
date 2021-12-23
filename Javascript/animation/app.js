let squareEl = document.querySelector('.square')
//squareEl.style.top='20vh'
var getPropValue = squareEl.computedStyleMap().get('top');

console.log(getPropValue)



document.querySelector('.btn').addEventListener('click',function(e){
    e.preventDefault();
    for(let i=0; i<100;i++){
    
        setInterval(()=>{
            squareEl.style.top = `${i}px`
        },1000)
    }
})

// document.querySelector('.square').style.setProperty("background-color", "red", "important");