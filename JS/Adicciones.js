let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//Registrar adicciones
document.getElementById('Continuar').addEventListener('click', registrarAdicciones);
function registrarAdicciones(e){
    var t;
    var a;
    var d;
    if(document.getElementById('Tabaquismo').checked){
        t=1;
    }else{
        t=0;
    }
    if(document.getElementById('Aloholismo').checked){
        a=1;
    }else{
        a=0;
    }
    if(document.getElementById('Drogas').checked){
        d=1;
    }else{
        d=0;
    }
    axios.get('http://localhost/PHP/AdiccionesController.php?idAdicciones=0&Tabaquismo='+t+'&Alcoholismo='+a+'&Drogas='+d+'&idHistoriaClinica='+idHistoriaClinica)
    .then(function (response) {
        console.log(response.data);
        window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Inmunizaciones.html?idHistoriaClinica="+idHistoriaClinica;
        
    })
    .catch(function (error) {
        console.log(error);
        alert("Error inesperado");
    });
}
