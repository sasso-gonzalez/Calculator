function numbers(){
    
}

function operations(){
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