const buttons = document.querySelectorAll(".nums")
const output = document.querySelector(".inputNums")
const ops = document.querySelectorAll(".ops")
const del= document.querySelector(".delete")
const ce = document.querySelector(".ce")
let resultingNumber=0
let num1=0
let num2=0
let num3=0
let num4=0

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        output.append(button.innerText)
        num1=output.innerText
        
        console.log(num1)
        num4=0
        num4=Number(num3)+Number(num1)
        console.log(num4)

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
                num2=num1
                num3= result(opertaion.innerText)
                num1=''
                console.log(num4)
                output.innerText=''
                

    } )
})

function result(op){
    if(op=="+"){
        resultingNumber=Number(resultingNumber)+Number(num2)
        return resultingNumber
    }
    if(op=="-"){
        if(resultingNumber==0){
            resultingNumber=Number(num2)-Number(resultingNumber)
        }
        else{
            resultingNumber=Number(resultingNumber)-Number(num2)
        }
        
    }
    
}