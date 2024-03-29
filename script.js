const buttons = document.querySelectorAll(".nums")
const output = document.querySelector(".inputNums")
const ops = document.querySelectorAll(".ops")
const del= document.querySelector(".delete")
const ce = document.querySelector(".ce")
const equal = document.querySelector("equal")
let number=0
let num1=0
let num2=0


let buttonText = button.innerText
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        output.append(buttonText)
        
        
    }
        
     
    )})

del.addEventListener("click", ()=>{
    let str = output.innerText
    let newStr = str.substr(0, str.length - 1)
    output.innerText=newStr

})
ce.addEventListener("click", ()=>{
    output.innerText=""
})

ops.forEach(opertaion=>{
    opertaion.addEventListener("click",()=>{
        
        console.log(num1)
        output.append(opertaion.innerText)
        num2+=buttons.innerText
        
        
    } )
})

equal.addEventListener("click", ()=>{
    const result= Number(num1)+Number(num2)
    output.innerText=result
})