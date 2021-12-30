let params = new URLSearchParams(location.search);
var idPaciente = params.get('idPaciente');
var hora = params.get('hora');
var HistoriaClinica;
var paciente;
axios.get('http://localhost/PHP/HistoriaClinicaController.php?idPaciente='+idPaciente+'&hora='+hora)
.then(function (response) {
    console.log(response);
    HistoriaClinica=JSON.parse(JSON.stringify(response.data));
    //alert(HistoriaClinica.idHistoriaClinica);
    axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+idPaciente)
    .then(function (response) {
        console.log(response);
        paciente=JSON.parse(JSON.stringify(response.data));
        //alert(paciente.Nombres);
        document.title="Antecedentes heredo familiares de "+paciente.Nombres;
        var titulo=document.getElementById('tituloH1');
        titulo.innerHTML='Antecedentes heredo familiares de '+paciente.Nombres+' '+paciente.Apellidos;
        document.getElementById('Continuar').addEventListener('click', registrarAntecedentes);    
        function registrarAntecedentes(e){
            var inputDiabetes=document.getElementById('diabetes').checked;
            var inputCardio=document.getElementById('cardiopatias').checked;
            var inputHTA=document.getElementById('HTA').checked;
            var inputTiroides=document.getElementById('tiroides').checked;  
            var inputNeoplasticos=document.getElementById('neoplasticos').checked;
            var especificaciones=document.getElementById('especificaciones').value;
            var diabetes;
            var cardio;
            var HTA;
            var tiroides;
            var neoplasticos;
            if(inputDiabetes){
                diabetes=1;
            }else{
                diabetes=0;
            }
            if(inputCardio){
                cardio=1;
            }else{
                cardio=0;
            }
            if(inputHTA){
                HTA=1;
            }else{
                HTA=0;
            }
            if(inputTiroides){
                tiroides=1;
            }else{
                tiroides=0;
            }
            if(inputNeoplasticos){
                neoplasticos=1;
            }else{
                neoplasticos=0;
            }
            axios.get('http://localhost/PHP/AntecedentesHeredoFamiliaresController.php?idAntecedentesHeredoFamiliares=0&Diabetes='+diabetes+'&Cardiopatias='+cardio+'&HTA='+HTA+'&Tiroides='+tiroides+'&Neoplasticos='+neoplasticos+'&Especificaciones='+especificaciones+'&idHistoriaClinica='+HistoriaClinica.idHistoriaClinica)
            .then(function (response) {
                console.log(response);
                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesPersonalesPatologicos.html?idHistoriaClinica="+HistoriaClinica.idHistoriaClinica;
            })
            .catch(function (error) {
                console.log(error);
                alert("Error inesperado");
            });
        }
    })
})
