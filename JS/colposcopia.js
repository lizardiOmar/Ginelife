let params = new URLSearchParams(location.search);
var idPaciente = params.get('idPaciente');
var idDoctora=params.get('idDoctora');
var hoy = new Date();
var MM=hoy.getMonth() + 1;
var DD=hoy.getDate().toString();
var YYYY=hoy.getFullYear();
var host="C:/Users/heand/Desktop/GINELIFE/";
//alert('Mes: '+MM+' DD: '+DD+' YYYY: '+YYYY);
document.getElementById('fecha').innerHTML='FECHA: '+DD+'/'+MM+'/'+YYYY;


document.getElementById('colposcopia').addEventListener('click', iniciarColposcopia);
function iniciarColposcopia(e){
    axios.get('http://localhost/PHP/ColposcopiaController.php?idColposcopia=0&DD='+DD+'&MM='+MM+'&YYYY='+YYYY+'&idPaciente='+idPaciente)
    .then(function (response){
        //console.log('http://localhost/PHP/ColposcopiaController.php?idColposcopia=0&DD='+DD+'&MM='+MM+'&YYYY='+YYYY+'&idPaciente='+idPaciente);
        window.location.href = host+"HTML/FotosColposcopia.html?idPaciente="+idPaciente+'?DD='+DD+'?MM='+MM;
    
    })
    .catch(function (error) {
        console.log(error);
        alert("Error inesperado");
    });
}
document.getElementById('volver').addEventListener('click', volver);
function volver(e){
    window.location.href=host+"/HTML/Colposcopias.html?idPaciente="+idPaciente+'&idDoctora='+idDoctora;
}