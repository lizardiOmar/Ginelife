let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
var paciente;
var doctora;
var historiaClinica;
axios.get('http://localhost/PHP/HistoriaClinicaController.php?idHistoriaClinica='+idHistoriaClinica)
.then(function (response) {
    console.log(response.data);
    historiaClinica=JSON.parse(JSON.stringify(response.data));
    axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+historiaClinica.idPaciente)
    .then(function (response) {
        console.log("RESP: "+response.data);
        paciente=JSON.parse(JSON.stringify(response.data));
        document.title="Agregar alergia de "+paciente.Nombres+' '+paciente.Apellidos;
        var titulo=document.getElementById('tituloH1');
        titulo.innerHTML='Agregar alergia de '+paciente.Nombres+' '+paciente.Apellidos;
        //Añadir otra alergia
        document.getElementById('Otro').addEventListener('click', otro);
        function otro(e){
            var nombre=document.getElementById('Nombre').value;
            if(nombre){
                axios.get('http://localhost/PHP/AlergiasController.php?idAlergias=0&Nombre='+nombre+'&idHistoriaClinica='+idHistoriaClinica)
                .then(function (response) {
                    console.log(response);
                    console.log('http://localhost/PHP/AlergiasController.php?idAlergias=0&Nombre='+nombre+'&idHistoriaClinica='+idHistoriaClinica);
                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Alergias.html?idHistoriaClinica="+idHistoriaClinica;
                })
            }else{
                alert('Doctora, por favor, especifique el nombre de la alergia.');
            }
        }
        //Continuar a los antecedentes traumaticos
        document.getElementById('Continuar').addEventListener('click', Continuar);
        function Continuar(e){
            var nombre=document.getElementById('Nombre').value;
            if(nombre){
                axios.get('http://localhost/PHP/AlergiasController.php?idAlergias=0&Nombre='+nombre+'&idHistoriaClinica='+idHistoriaClinica)
                .then(function (response) {
                    console.log(response);
                    console.log('http://localhost/PHP/AlergiasController.php?idAlergias=0&Nombre='+nombre+'&idHistoriaClinica='+idHistoriaClinica);
                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesPersonalesTraumaticos.html?idHistoriaClinica="+idHistoriaClinica;
                })
            }else{
                alert('Doctora, por favor, especifique el nombre de la alergia.');
            }
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);   
    });
})
.catch(function (error) {
    // handle error
    console.log(error);   
});