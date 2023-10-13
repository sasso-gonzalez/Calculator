

// function numbers(){
//     if(value === "1"){
//         a = document.getElementById("result").innerHTML += 1;
//     }

// }

// function operations(){

// }
function calculate(){
    // x = document.getElementById("result").value
    // let operation = x.value    //what i was working on to actually calculate problems -serena

    appendNumber(number){
        if (value === '.' && value.includes('.')) return;//Won't allow multiple decimals
    }

    if (this.value === '') return
    if (this.value !== ''){
        this.compute()//If the problem need to be done with multiple numbers it will add them and provide the answer while calculating
    }
}

function clear(){
document.getElementById("result").value=""

}

function back(){
    let res = document.getElementById("result")
    res.value = res.value.slice(0,-1)
}