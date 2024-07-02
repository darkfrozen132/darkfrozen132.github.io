function hallarporcentajeimpuesto(){
var numero1=parseFloat(document.getElementById('numero1').value);
var numero2=parseFloat(document.getElementById('numero2').value);

var impuesto=numero1*(1+numero2/100);

//alert("La suma de los numeros es :"+suma);

    document.getElementById('resultado').innerText = impuesto;



}
