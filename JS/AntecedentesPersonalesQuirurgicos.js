let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
var paciente;
var doctora;
var historiaClinica;
axios.get('http://localhost/PHP/HistoriaClinicaController.php?idHistoriaClinica='+idHistoriaClinica)
.then(function (response) {
    console.log("RESP: "+response.data);
    historiaClinica=JSON.parse(JSON.stringify(response.data));
    axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+historiaClinica.idPaciente)
    .then(function (response) {
        console.log("RESP: "+response.data);
        paciente=JSON.parse(JSON.stringify(response.data));
        document.title="Agregar antecedente traumático de "+paciente.Nombres+' '+paciente.Apellidos;
        var titulo=document.getElementById('tituloH1');
        titulo.innerHTML='Agregar antecedente traumático de '+paciente.Nombres+' '+paciente.Apellidos;
        //Funcion para terminar el registro de la historia clinica
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
        //Funcion para omitir el registro de antecedentes Qirurgicos
        document.getElementById('Omitir').addEventListener('click', omitir);
        function omitir(e){
            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Adicciones.html?idHistoriaClinica="+historiaClinica.idHistoriaClinica;
        }
        
        //Añadir otro evento traumático
        document.getElementById('Otro').addEventListener('click', otro);
        function otro(e){
            var nombre=document.getElementById('Nombre').value;
            var descripcion=document.getElementById('Descripcion').value;
            var YYYY=document.getElementById('YYYY').value;
            if(nombre){
                if(descripcion){
                    if(YYYY){
                        //alert('Antecedente traumático adicional.'); 
                        axios.get('http://localhost/PHP/AntecedentesPersonalesQirurgicosController.php?idAntecedentesPersonalesQuirurgicos=0&Nombre='+nombre+'&Descripcion='+descripcion+'&YYYY='+YYYY+'&idHistoriaClinica='+idHistoriaClinica)
                        .then(function (response) {
                            console.log(response);
                            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesPersonalesQuirurgicos.html?idHistoriaClinica="+idHistoriaClinica;
                        })
                    }else{
                        alert('¿En qué año sucedió el antecedente?');
                    }
                }else{
                    alert('Doctora, por favor, especifique una descripción del antecedente.');
                }
            }else{
                alert('Doctora, por favor, especifique el nombre del antecedente.');
            }
        }
        //Continuar a los antecedentes quirurgicos
        document.getElementById('Continuar').addEventListener('click', Continuar);
        function Continuar(e){
            var nombre=document.getElementById('Nombre').value;
            var descripcion=document.getElementById('Descripcion').value;
            var YYYY=document.getElementById('YYYY').value;
            if(nombre){
                if(descripcion){
                    if(YYYY){
                        //alert('Antecedente traumático adicional.'); 
                        axios.get('http://localhost/PHP/AntecedentesPersonalesQirurgicosController.php?idAntecedentesPersonalesQuirurgicos=0&Nombre='+nombre+'&Descripcion='+descripcion+'&YYYY='+YYYY+'&idHistoriaClinica='+idHistoriaClinica)
                        .then(function (response) {
                            console.log(response);
                            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Adicciones.html?idHistoriaClinica="+idHistoriaClinica;
                        })
                    }else{
                        alert('¿En qué año sucedió el antecedente?');
                    }
                }else{
                    alert('Doctora, por favor, especifique una descripción del antecedente.');
                }
            }else{
                alert('Doctora, por favor, especifique el nombre del antecedente.');
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