

// function numbers(){
//     if(value === "1"){
//         a = document.getElementById("result").innerHTML += 1;
//     }

// }

// function operations(){

// }
function calculate(){
    if (value === '.' && value.includes('.')) return;//Won't allow multiple decimals

    if (this.value === '') return
    if (this.value !== ''){
        this.compute()//If the problem need to be done with multiple numbers it will add them and provide the answer while calculating
    }
}

function clear(){
document.getElementById("result").value=""
}

function back(){
    let result = document.getElementById("result")
    result.value = result.value.pop()
    // result.value = result.value.length -1;
    // result.value = result.value.slice();
}