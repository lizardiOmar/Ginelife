let params = new URLSearchParams(location.search);
var correo = params.get('correo');
var doctora;
axios.get('http://localhost/PHP/DoctoraController.php?correo='+correo)
.then(function (response) {
    console.log(response);
    doctora=JSON.parse(JSON.stringify(response.data));
    //alert("Cargando información Dra. "+doctora.Nombres);
    document.title="Bienvenida a Ginelife Dra. "+doctora.Nombres;
    var draName=document.getElementById('nombre_dra');
    draName.innerHTML='Dra. '+doctora.Nombres+' '+doctora.Apellidos;
    var draCed=document.getElementById('ced_prof');
    draCed.innerHTML="Cédula Profesional: "+doctora.CedulaProfesional+" Cédula Especialista: "+doctora.CedulaEspecialista;
})
.catch(function (error) {
    // handle error
    console.log(error);
    alert("Error inesperado");
});
document.getElementById('Salir').addEventListener('click', salir);
function salir(e) {
    alert("Hasta pronto doctora "+doctora.Nombres+", ¡Qué tenga un exelente día!");
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Login.html";
}



document.getElementById('Paciente_nuevo').addEventListener('click', nuevoPaciente);
function nuevoPaciente(e) {
    alert("Accediendo al fórmulario para registrar una paciente nueva.");
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/NuevaPaciente.html?correo="+doctora.Email;
}

document.getElementById('Pacientes').addEventListener('click', Pacientes);
function Pacientes(e) {
    alert("Ver todos los pacientes de la Dra. "+doctora.Nombres);
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Pacientes.html?idDoctora="+doctora.idDoctora;
}