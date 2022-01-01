let params = new URLSearchParams(location.search);
var idPaciente = params.get('idPaciente');
var idDoctora = params.get('idDoctora');
var host='C:/Users/heand/Desktop/GINELIFE';
document.getElementById('volver').addEventListener('click', volver);
function volver(e){
    window.location.href=host+"/HTML/Pacientes.html?idDoctora="+idDoctora;
}
document.getElementById('nueva').addEventListener('click', nuevaNota);
function nuevaNota(e){
    //NuevaNotaMedica.html
    window.location.href=host+"/HTML/ColposcopiaNueva.html?idPaciente="+idPaciente+'&idDoctora='+idDoctora;
}