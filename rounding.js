function round(number){
    number=Math.round(number);
    number/=100;
    number=Math.round(number);
    number*=100;
    return number;
}
document.querySelector("input[type='submit']").addEventListener("click",
    function(e){
    var number=document.querySelector("input[type='text']").value
    document.querySelector(".response").innerHTML=`${round(number)}`

    }
    
)