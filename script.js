const buttons = document.querySelectorAll(".nums")
const output = document.querySelector(".inputNums")
const ops = document.querySelectorAll(".ops")
const del= document.querySelector(".delete")
const ce = document.querySelector(".ce")

let num1=''
let num2=''
let resultingNumber=0
let operand=""
let num3=''
output.innerText='0'

function operate(operand, num1,num2){
    if(operand==""){
        return num2
    }
    if(operand=="+"){
        return num1+num2
    }
    if(operand=="-"){
        return num1-num2
    }
    if(operand=="*"){
        return num1*num2
    }
    if(operand=="/"){
        return num1/num2
    }
    
}

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        output.innerText=''
        output.append(button.innerText)
        num1=output.innerText
        num3=num3+num1
        output.innerText=num3

    }    
    )})


ops.forEach(operation=>{
    operation.addEventListener("click",()=>{
    num2=num3
    num3=''
    console.log(operand)
    resultingNumber=operate(operand,Number(resultingNumber),Number(num2))
    console.log(resultingNumber)
    output.innerText=resultingNumber
    operand=operation.innerText
   

} )
})


del.addEventListener("click", ()=>{
    let str = output.innerText
    let newStr = str.substr(0, str.length - 1)
    output.innerText=newStr

})
ce.addEventListener("click", ()=>{
    output.innerText="0"
    resultingNumber=0
    num3=''
    num2=''
    operand=''
})

