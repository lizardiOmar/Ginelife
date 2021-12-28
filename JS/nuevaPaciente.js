let params = new URLSearchParams(location.search);
var correo = params.get('correo');
var doctora;
axios.get('http://localhost/PHP/DoctoraController.php?correo='+correo)
.then(function (response) {
    console.log(response);
    doctora=JSON.parse(JSON.stringify(response.data));
    //alert("Cargando información Dra. "+doctora.Nombres);
    document.title="Nueva paciente de la Dra. "+doctora.Nombres;
})
.catch(function (error) {
    // handle error
    console.log(error);
    alert("Error inesperado");
});
document.getElementById('cancelar').addEventListener('click', cancelar);
function cancelar(e) {
    alert("Registro cancelado, Dra. "+doctora.Nombres+".");
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Main.html?correo="+doctora.Email;
}

document.getElementById('Registrar_paciente').addEventListener('click', nuevaPaciente);
function nuevaPaciente(e) {
    var idPaciente=0;
    var Nombres=document.getElementById('Nombres').value;
    var Apellidos=document.getElementById('Apellidos').value;
    var Edad=document.getElementById('Edad').value;
    var EstadoCivil=document.getElementById('Estado_civil').value;
    var Ocupacion=document.getElementById('Ocupacion').value;
    var Escolaridad=document.getElementById('Escolaridad').value;
    var CiudadNacimiento=document.getElementById('CiudadNacimiento').value;
    var idDoctora=doctora.idDoctora;
    if(Nombres!=''){
        if(Apellidos!=''){
            if(Edad!=''){
                if(EstadoCivil!=''){
                    if(Ocupacion!=''){
                        if(Escolaridad!=''){
                            if(CiudadNacimiento!=''){
                                axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+idPaciente+'&Nombres='+Nombres+'&Apellidos='+Apellidos+'&Edad='+Edad+'&EstadoCivil='+EstadoCivil+'&Ocupacion='+Ocupacion+'&Escolaridad='+Escolaridad+'&CiudadDeNacimiento='+CiudadNacimiento+'&idDoctora='+idDoctora)
                                .then(function (response) {
                                    alert("Paciente creado.");
                                    console.log(response);
                                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/DireccionPaciente.html?idDoctora="+doctora.idDoctora+'&Nombre='+Nombres+'&Apellido='+Apellidos+'&Edad='+Edad+'&CiudadNacimiento='+CiudadNacimiento;
                                })
                                .catch(function (error) {
                                    
                                    console.log(error);
                                });
                            }else{
                                alert("Falta la ciudad de nacimiento del paciente, doctora.");
                            }
                        }else{
                            alert("Falta la escolaridad del paciente, doctora.");
                        }
                    }else{
                        alert("Falta la ocupación del paciente, doctora.");
                    }
                }else{
                    alert("Falta el estado civil del paciente, doctora.");
                }
            }else{
                alert("Falta la edad del paciente, doctora.");
            }
        }else{
            alert("Faltan los apellidos del paciente, doctora.");
        }
    }else{
        alert("Falta el nombre del paciente, doctora.");
    }
}