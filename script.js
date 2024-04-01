const buttons = document.querySelectorAll(".nums")
const output = document.querySelector(".inputNums")
const ops = document.querySelectorAll(".ops")
const del= document.querySelector(".delete")
const ce = document.querySelector(".ce")

let num1=0
let num2=0
let resultingNumber=0
let operand=""
let num3=0

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        output.innerText=""
        output.append(button.innerText)
        num1=output.innerText
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

ops.forEach(operation=>{
                operation.addEventListener("click",()=>{
                num2=num1
                console.log(operand)
                resultingNumber=operate(operand,Number(resultingNumber),Number(num2))
                console.log(resultingNumber)
                output.innerText=resultingNumber
                num1=''
                operand=operation.innerText

                
                

    } )
})



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