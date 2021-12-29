let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//Omitir adicciones
document.getElementById('Omitir').addEventListener('click', omitir);
function omitir(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Inmunizaciones.html?idHistoriaClinica="+idHistoriaClinica;
}
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
        if(response.data==='creado'){
            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Inmunizaciones.html?idHistoriaClinica="+idHistoriaClinica;
        }
    })
    .catch(function (error) {
        console.log(error);
        alert("Error inesperado");
    });
}
//Terminar historia clinica
document.getElementById('Terminado').addEventListener('click', Terminado);
function Terminado(e){
    axios.get('http://localhost/PHP/HistoriaClinicaController.php?idHistoriaClinica='+idHistoriaClinica)
    .then(function (response) {
        console.log("RESP: "+response.data);
        var historiaClinica=JSON.parse(JSON.stringify(response.data));
        axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+historiaClinica.idPaciente)
        .then(function (response) {
            console.log(response);
            var paciente=JSON.parse(JSON.stringify(response.data));
            axios.get('http://localhost/PHP/DoctoraController.php?idDoctora='+paciente.idDoctora)
            .then(function (response) {
                console.log(response);
                var doctora=JSON.parse(JSON.stringify(response.data));
                alert("Registro terminado, Dra. "+doctora.Nombres+".");
                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Main.html?correo="+doctora.Email;
            })
        })
        .catch(function (error) {
            console.log(error);
            alert("Error inesperado");
        });
    })
    .catch(function (error) {
        console.log(error);
        alert("Error inesperado");
    });
}