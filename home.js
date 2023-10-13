// function (){
//     if (text === '.' && value.includes('.')) return;//Won't allow multiple decimals
//     if (this.value === '') return
//     if (this.value !== ''){
//         this.eval()//If the problem need to be done with multiple numbers it will add them and provide the answer while calculating
//     }
//   }
// }

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