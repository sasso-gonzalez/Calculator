

// function numbers(){
//     if(value === "1"){
//         a = document.getElementById("result").innerHTML += 1;
//     }

// }

// function operations(){

// }
function calculate(){

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