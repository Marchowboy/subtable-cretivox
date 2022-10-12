

const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

function Sept() {
   var table = document.getElementById("tableId");
   var rows =   parseInt(document.getElementById("value1").innerHTML);
   var rows2 =  parseInt(document.getElementById("value2").innerHTML);
   var rows3 =  parseInt(document.getElementById("value3").innerHTML);
   var rows4 =  parseInt(document.getElementById("value4").innerHTML);
   var rows5 =  parseInt(document.getElementById("value5").innerHTML);
   var rows6 =  parseInt(document.getElementById("value6").innerHTML);
   var rows7 =  parseInt(document.getElementById("value7").innerHTML);
   console.log(rows+rows2+rows3+rows4+rows5+rows6+rows7)
   var Total = rows+rows2+rows3+rows4+rows5+rows6+rows7
   return rupiah(Total);    
};
function Okto() {
  var table = document.getElementById("tableId");
   var rows =   parseInt(document.getElementById("value1Okt").innerHTML);
   var rows2 =  parseInt(document.getElementById("value2Okt").innerHTML);
   var rows3 =  parseInt(document.getElementById("value3Okt").innerHTML);
   var rows4 =  parseInt(document.getElementById("value4Okt").innerHTML);
   var rows5 =  parseInt(document.getElementById("value5Okt").innerHTML);
   var rows6 =  parseInt(document.getElementById("value6Okt").innerHTML);
   var rows7 =  parseInt(document.getElementById("value7Okt").innerHTML);
   console.log(rows+rows2+rows3+rows4+rows5+rows6+rows7)
   var Total = rows+rows2+rows3+rows4+rows5+rows6+rows7
   return rupiah(Total);    

};


console.log(rupiah(20000))
document.getElementById('totalvalue').innerHTML = Sept();
document.getElementById('totalvalueOkt').innerHTML = Okto();

