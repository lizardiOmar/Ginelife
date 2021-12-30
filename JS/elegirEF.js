let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
document.getElementById('Omitir').addEventListener('click', omitir);
function omitir(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/HistoriaClinicaPersonal.html?idHistoriaClinica="+idHistoriaClinica;
}
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