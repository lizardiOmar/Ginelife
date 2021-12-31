let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
document.getElementById('Continuar').addEventListener('click', Continuar);
function Continuar(e){
    var planManejo=document.getElementById('planManejo').value;
    var pronostico=document.getElementById('pronostico').value;
    if(planManejo){
        if(pronostico){
            console.log('http://localhost/PHP/PlanController.php?idplan=0&planManejo='+planManejo+'&pronostico='+pronostico+'&idHistoriaClinica='+idHistoriaClinica);
            axios.get('http://localhost/PHP/PlanController.php?idplan=0&planManejo='+planManejo+'&pronostico='+pronostico+'&idHistoriaClinica='+idHistoriaClinica)
            .then(function (response) {
                console.log(response);
                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/HistoriaClinicaPersonal.html?idHistoriaClinica="+idHistoriaClinica;
            })
        }else{
            alert('Debe especificar un pronóstico');
        }
    }else{
        alert('Debe especificar un plan de manejo');
    }

}