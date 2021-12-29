let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//Omitir adicciones
document.getElementById('Omitir').addEventListener('click', omitir);
function omitir(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesGinecologicosObstetricos.html?idHistoriaClinica="+idHistoriaClinica;
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
//Registrar inmunizaciones
document.getElementById('Continuar').addEventListener('click', registrarInmunizaciones);
function registrarInmunizaciones(e){
    var r;
    var i;
    var a;
    var c;
    if(document.getElementById('Rubeola').checked){
        r=1;
    }else{
        r=0;
    }
    if(document.getElementById('Influenza').checked){
        i=1;
    }else{
        i=0;
    }
    if(document.getElementById('Antitetanica').checked){
        a=1;
    }else{
        a=0;
    }
    if(document.getElementById('Covid19').checked){
        c=1;
    }else{
        c=0;
    }
    axios.get('http://localhost/PHP/InmunizacionesController.php?idInmunizaciones=0&Rubeola='+r+'&Influenza='+i+'&Antitetanica='+a+'&Covid19='+c+'&idHistoriaClinica='+idHistoriaClinica)
    .then(function (response) {
        console.log(response.data);
        if(response.data==='creado'){
            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/AntecedentesGinecologicosObstetricos.html?idHistoriaClinica="+idHistoriaClinica;
        }else{
            console.log(response);
            alert('Error en el servidor de MySQL');

        }
        
    })
    .catch(function (error) {
        console.log(error);
        alert("Error inesperado");
    });
}