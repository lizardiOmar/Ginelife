let params = new URLSearchParams(location.search);
var idPaciente = params.get('paciente');
var paciente;
var hoy = new Date();
var MM=hoy.getMonth() + 1;
var DD=hoy.getDate().toString();
var YYYY=hoy.getFullYear();
var HHMM=hoy.getHours() + ':' + hoy.getMinutes();
//alert('Mes: '+MM+' DD: '+DD+' YYYY: '+YYYY+' HH:MM='+HHMM);
document.getElementById('DD').value=DD;
document.getElementById('MM').value=MM;
document.getElementById('YYYY').value=YYYY;
document.getElementById('HHMM').value=HHMM;
axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+idPaciente)
.then(function (response) {
    console.log(response);
    paciente=JSON.parse(JSON.stringify(response.data));
    //alert("Cargando información Dra. "+doctora.Nombres);
    document.title="Nueva Historia Clinica para "+paciente.Nombres;
    document.getElementById('historiaClinica').addEventListener('click', crearHistoriaClinica);
    var titulo=document.getElementById('tituloH1');
    titulo.innerHTML='Historia clinica para '+paciente.Nombres+' '+paciente.Apellidos;
    function crearHistoriaClinica(e) {
        axios.get('http://localhost/PHP/HistoriaClinicaController.php?idHistoriaClinica=0&DD='+DD+'&MM='+MM+'&YYYY='+YYYY+'&hora='+HHMM+'&idPaciente='+idPaciente)
        .then(function (response) {
            console.log(response);
            paciente=JSON.parse(JSON.stringify(response.data));
            //alert("Cargando información Dra. "+doctora.Nombres);
            //
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert("Error inesperado");
        });
        alert("Cargando formulario de antecedentes heredo-familiares para "+paciente.Nombres);
        window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesHeredoFamiliares.html?idPaciente="+idPaciente+'&hora='+HHMM;
    }
})
.catch(function (error) {
    // handle error
    console.log(error);
    alert("Error inesperado");
});

