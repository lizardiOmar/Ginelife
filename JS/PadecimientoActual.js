let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//Terminar historia clinica
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
//Registrar solo un padecimiento
document.getElementById('Continuar').addEventListener('click', registrarAntecedentesGO);
function registrarAntecedentesGO (e){
    var nombre=document.getElementById('Nombre').value;
    var descripcion=document.getElementById('Descripcion').value;
    if(nombre){
        if(descripcion){
            //alert("Todo listo.");
            axios.get('http://localhost/PHP/PadecimientoActualController.php?idPadecimientoActual=0&nombre='+nombre+'&Descripcion='+descripcion+'&idHistoriaClinica='+idHistoriaClinica)
            .then(function (response) {
                console.log(response.data);
                console.log('http://localhost/PHP/PadecimientoActualController.php?idPadecimientoActual=0&nombre='+nombre+'&Descripcion='+descripcion+'&idHistoriaClinica='+idHistoriaClinica);
                //alert("Todo listo.");
                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Exploracion.html?idHistoriaClinica="+idHistoriaClinica;
            })
            .catch(function (error) {
                console.log(error);
                console.log('http://localhost/PHP/PadecimientoActualController.php?idPadecimientoActual=0&nombre='+nombre+'&Descripcion='+descripcion+'&idHistoriaClinica='+idHistoriaClinica);
            });
        }else{
            alert("La descripción no ha sido especificada.");
        }
    }else{
        alert("Nombre del padecimiento no especificado.");
    }
}
//Registrar un padecimiento adicional
document.getElementById('Otro').addEventListener('click', OtroAntecedentesGO);
function OtroAntecedentesGO (e){
    var nombre=document.getElementById('Nombre').value;
    var descripcion=document.getElementById('Descripcion').value;
    if(nombre){
        if(descripcion){
            //alert("Todo listo.");
            axios.get('http://localhost/PHP/PadecimientoActualController.php?idPadecimientoActual=0&nombre='+nombre+'&Descripcion='+descripcion+'&idHistoriaClinica='+idHistoriaClinica)
            .then(function (response) {
                console.log(response.data);
                console.log('http://localhost/PHP/PadecimientoActualController.php?idPadecimientoActual=0&nombre='+nombre+'&Descripcion='+descripcion+'&idHistoriaClinica='+idHistoriaClinica);
                //alert("Todo listo.");
                window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/PadecimientoActual.html?idHistoriaClinica="+idHistoriaClinica;
            })
            .catch(function (error) {
                console.log(error);
                console.log('http://localhost/PHP/PadecimientoActualController.php?idPadecimientoActual=0&nombre='+nombre+'&Descripcion='+descripcion+'&idHistoriaClinica='+idHistoriaClinica);
            });
        }else{
            alert("La descripción no ha sido especificada.");
        }
    }else{
        alert("Nombre del padecimiento no especificado.");
    }
}