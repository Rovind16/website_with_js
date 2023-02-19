function calculate(){
    var qty = document.getElementsByClassName("num");
    arr = [];
    for(var i=0;i<qty.length;i++){
        arr.push(qty[i].value);
    }
    console.log(arr);
   localStorage.setItem("names", JSON.stringify(arr));
   var totalrate=0;
   var rate=[120,100,60,200]
    for(i=0;i<arr.length;i++){
       totalrate=totalrate+(rate[i]*arr[i]);
    }
    console.log(totalrate);
  window.localStorage.setItem('bill', totalrate);
    const prod = JSON.parse(localStorage.getItem('names'));
    document.getElementById("biriyani").innerHTML = "Biriyani Quantity: "+prod[0]+" and Rate: "+prod[0]*120;
    document.getElementById("Noodles").innerHTML = "Noodles Quantity: "+prod[1]+" and Rate: "+prod[1]*100;
    document.getElementById("Sandwich").innerHTML = "Sandwich Quantity: "+prod[2]+" and Rate: "+prod[2]*60;
    document.getElementById("pizza").innerHTML = "Pizza Quantity: "+prod[3]+" and Rate: "+prod[3]*200;
    document.getElementById("total").innerHTML = "Total: "+totalrate;

}
function paybill(){
    document.location.href = "payment.html";
}