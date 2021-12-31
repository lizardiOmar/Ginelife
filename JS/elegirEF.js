let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
function omitir(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/HistoriaClinicaPersonal.html?idHistoriaClinica="+idHistoriaClinica;
}
document.getElementById('Ginecologica').addEventListener('click', Ginecologica);
function Ginecologica(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/PlanDeAccion.html?idHistoriaClinica="+idHistoriaClinica;
}
document.getElementById('Obstetrica').addEventListener('click', Obstetrica);
function Obstetrica(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Abdomen.html?idHistoriaClinica="+idHistoriaClinica;
}
