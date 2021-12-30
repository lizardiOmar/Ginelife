let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//Registrar inmunizaciones
document.getElementById('Continuar').addEventListener('click', registrarInmunizaciones);
function registrarInmunizaciones(e){
    var r;
    var i;
    var a;
    var c;
    if(document.getElementById('Rubeola').checked){
        r=1;
    }else{
        r=0;
    }
    if(document.getElementById('Influenza').checked){
        i=1;
    }else{
        i=0;
    }
    if(document.getElementById('Antitetanica').checked){
        a=1;
    }else{
        a=0;
    }
    if(document.getElementById('Covid19').checked){
        c=1;
    }else{
        c=0;
    }
    axios.get('http://localhost/PHP/InmunizacionesController.php?idInmunizaciones=0&Rubeola='+r+'&Influenza='+i+'&Antitetanica='+a+'&Covid19='+c+'&idHistoriaClinica='+idHistoriaClinica)
    .then(function (response) {
        console.log(response.data);
        window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesGinecologicosObstetricos.html?idHistoriaClinica="+idHistoriaClinica;
        
    })
    .catch(function (error) {
        console.log(error);
        alert("Error inesperado");
    });
}