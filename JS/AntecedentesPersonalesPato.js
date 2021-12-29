let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//alert(idHistoriaClinica);
var historiaClinica;
var paciente;
var doctora;
axios.get('http://localhost/PHP/HistoriaClinicaController.php?idHistoriaClinica='+idHistoriaClinica)
    .then(function (response) {
        console.log("RESP: "+response.data);
        historiaClinica=JSON.parse(JSON.stringify(response.data));
        axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+historiaClinica.idPaciente)
        .then(function (response) {
            console.log(response);
            paciente=JSON.parse(JSON.stringify(response.data));
            document.title="Antecedentes personales patológicos de "+paciente.Nombres;
            var titulo=document.getElementById('tituloH1');
            titulo.innerHTML='Antecedentes personales patológicos de '+paciente.Nombres+' '+paciente.Apellidos;
            document.getElementById('Terminado').addEventListener('click', Terminado);
            function Terminado(e) {
                axios.get('http://localhost/PHP/DoctoraController.php?idDoctora='+paciente.idDoctora)
                .then(function (response) {
                    console.log(response);
                    var doctora=JSON.parse(JSON.stringify(response.data));
                    alert("Registro terminado, Dra. "+doctora.Nombres+".");
                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Main.html?correo="+doctora.Email;
                })
            }
            document.getElementById('Omitir').addEventListener('click', omitir);
            function omitir(e){
                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesPersonalesTraumaticos.html?idHistoriaClinica="+historiaClinica.idHistoriaClinica;
            }
            document.getElementById('Continuar').addEventListener('click', registrarAntecedentes);
            function registrarAntecedentes(e){
                var inputDiabetes=document.getElementById('diabetes').checked;
                var inputCardio=document.getElementById('cardiopatias').checked;
                var inputHTA=document.getElementById('HTA').checked;
                var inputNeoplasticos=document.getElementById('neoplasticos').checked;
                var inputEpilepsia=document.getElementById('Epilepsia').checked;
                var diabetes;
                var cardio;
                var HTA;
                var epilepsia;
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
                if(inputEpilepsia){
                    epilepsia=1;
                }else{
                    epilepsia=0;
                }
                if(inputNeoplasticos){
                    neoplasticos=1;
                }else{
                    neoplasticos=0;
                }
                axios.get('http://localhost/PHP/AntecedentesPersonalesPatologicosController.php?idAntecedentesPersonalesPatologicos=0&Diabetes='+diabetes+'&Cardiopatias='+cardio+'&HTA='+HTA+'&Epilepsia='+epilepsia+'&Neoplasticos='+neoplasticos+'&idHistoriaClinica='+idHistoriaClinica)
                .then(function (response) {
                    console.log(response);
                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesPersonalesTraumaticos.html?idHistoriaClinica="+historiaClinica.idHistoriaClinica;
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Error inesperado");
                });
            }
        })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
       
    });