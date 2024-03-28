const buttons = document.querySelectorAll(".nums")
const output = document.querySelector(".inputNums")
const ops = document.querySelectorAll(".ops")


buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        output.innerText=button.innerText}

    )})

ops.forEach(operation=>{
    operation.addEventListener("click", ()=>{
        const someOpertaion=operation.innerText
        if(output.innerText != ''){
            output.append(someOpertaion)
        }
        
    })
})