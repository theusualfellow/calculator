const buttons = document.querySelectorAll(".nums")
const output = document.querySelector(".inputNums")
const ops = document.querySelectorAll(".ops")
const del= document.querySelector(".delete")
const ce = document.querySelector(".ce")
const sign = document.querySelector(".sign")
const equal = document.querySelector(".equal")
const allButtons = document.querySelectorAll("button")
let isClicked = false

let num1=''
let num2=''
let resultingNumber=0
let operand=""
let num3=''
let equalNum=''
output.innerText='0'


function setStyles(el, styles) {
    Object.entries(styles).map(
      ([property, value]) => el.style[property] = value
    )
  }

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
allButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const origStyles = {
            background: button.style.background,
            border: button.style.border,
        }
        setStyles(button,{
            background:"grey",
            border:"5px solid orange"
        })
        window.setTimeout(()=> setStyles(button, origStyles), 100)
    })
})


buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        output.innerText=''
        output.append(button.innerText)
        num1=output.innerText
        num3=num3+num1
        output.innerText=num3
        isClicked=false
      
    }
       
    )})


ops.forEach(operation=>{
    operation.addEventListener("click",()=>{
        console.log(num2)
        num2=num3
        if(isClicked ==false){
            resultingNumber=operate(operand,Number(resultingNumber),Number(num2))
            num3=''
            num2=''
        }
        output.innerText=resultingNumber
        operand=operation.innerText
          
        isClicked=true        


        
       
})})

del.addEventListener("click", ()=>{
    let str = num3
    let newStr = Math.floor(str/10)
    num3=Number(newStr)
    num2=Number(newStr)
    output.innerText=num2
    

})
ce.addEventListener("click", ()=>{
    output.innerText="0"
    resultingNumber=0
    num3=''
    num2=''
    operand=''
})
sign.addEventListener("click",()=>{
    num3=Number(-num3)
    output.innerText=num3

})
equal.addEventListener("click", ()=>{
    resultingNumber=operate(operand,Number(resultingNumber),Number(num3))
    output.innerText=resultingNumber
    if(operand=="+"||operand=="-"){
        num2=''
        num3=''
    }
    else{
        num2='1'
        num3='1'
    }
    
})

