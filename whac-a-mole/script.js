let g=document.getElementById('grid')
let score=document.getElementById('score')
let timer=document.getElementById('timer')
let stop
create()
function create(){
    for(let i=0;i<9;i++){
        let n=document.createElement('div')
        n.setAttribute('id',i)
        n.setAttribute('class','square')
        n.addEventListener('click',check)
        g.appendChild(n)
    }
}
function start(){
    let c=Math.floor(Math.random()*9)
    let s=document.getElementsByClassName('square')
    s[c].classList.add('mole')
     stop=setInterval(movement,500)
    setInterval(ti,1000)

}
function movement(){
    s=document.getElementsByClassName('square')
    Array.from(s).forEach((element)=>{
        if(element.classList.contains('mole')){
            element.classList.remove('mole')
        }
    })
    let r=Math.floor(Math.random()*9)
    s[r].classList.add('mole')


}
function check(){
    if(this.classList.contains('mole')){
        score.innerHTML=Number.parseInt(score.innerHTML)+1
    }
}
function ti(){
    
    timer.innerHTML=Number.parseInt(timer.innerHTML)-1
    if(timer.innerHTML==0){
        timer.outerHTML='<h1>Time is Up!</h1>'
        clearInterval(stop)
        hello()

    }

}
function hello(){
    s=document.getElementsByClassName('square')
    Array.from(s).forEach((element)=>{
        if(element.classList.contains('mole')){
            element.classList.remove('mole')
        }
    })
}