let params = new URLSearchParams(location.search);
var idDoctora = params.get('idDoctora');
var nombreP = params.get('Nombre');
var apellidoP = params.get('Apellido');
var edadP = params.get('Edad');
var ciudadNacimientoP = params.get('CiudadNacimiento');
var idPaciente;
var paciente;

axios.get('http://localhost/PHP/PacienteController.php?Nombres='+nombreP+'&Apellidos='+apellidoP+'&Edad='+edadP+'&CiudadDeNacimiento='+ciudadNacimientoP)
.then(function (response) {
    console.log(response);
    paciente=JSON.parse(JSON.stringify(response.data));
    console.log(paciente);
    document.title="Nueva paciente "+paciente.Nombres;
    //idPaciente=paciente.idPaciente;
    var tituloH1=document.getElementById('tituloH1');
    tituloH1.innerHTML='Dirección de '+paciente.Nombres;
    document.getElementById('Registrar_direccion').addEventListener('click', registrar_dirección);
    function registrar_dirección(e) {
        var idPaciente=paciente.idPaciente;
        var municipio=document.getElementById('Municipio').value;
        var colonia=document.getElementById('Colonia').value;
        var calle=document.getElementById('Calle').value;
        var numero=document.getElementById('Numero').value;
        var cp=document.getElementById('CP').value;
        if(municipio!=''){
            if(colonia!=''){
                if(calle!=''){
                    if(numero!=''){
                        if(cp!=''){
                            alert("Registrando la dirección de "+paciente.Nombres);
                            axios.get('http://localhost/PHP/DomicilioPacienteController.php?idDomicilioPaciente=0&Municipio='+municipio+'&Colonia='+colonia+'&Calle='+calle+'&Numero='+numero+'&CP='+cp+'&idPaciente='+idPaciente)
                            .then(function(response){
                                console.log(response);
                                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/HistoriaClinica.html?paciente="+idPaciente;
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                                alert("Error inesperado");
                            });
                        }else{
                            alert("Falta el código postal de la vivienda de "+paciente.Nombres);
                        }
                    }else{
                        alert("Falta el número de vivienda de "+paciente.Nombres);
                    }
                }else{
                    alert("Falta la calle donde vive "+paciente.Nombres);
                }
            }else{
                alert("Falta la colonia donde vive "+paciente.Nombres);
            }
        }else{
            alert("Falta el municipio donde vive "+paciente.Nombres);
        }
    }
})
.catch(function (error) {
    // handle error
    console.log(error);
    alert("Error inesperado");
});
