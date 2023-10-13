function calculate (){
    const result = document.getElementById('result')
    try {
        result.value = eval(result.value);
    }
    catch(error){
        result.value = '${result.value}';
    }
}

function back(){
    let res = document.getElementById("result")
    res.value = res.value.slice(0,-1)
}