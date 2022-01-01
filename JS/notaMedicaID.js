let params = new URLSearchParams(location.search);
var  idNota = params.get('idNota');
var idPaciente = params.get('idPaciente');
document.getElementById('volver').addEventListener('click', volver);
var host='C:/Users/heand/Desktop/GINELIFE';
function volver(e){
    window.location.href=host+"/HTML/NotasMedicas.html?idPaciente="+idPaciente;
}
document.getElementById('imprimir').addEventListener('click', imprimir);
function imprimir(e){
    document.getElementById('imprimir').style.visibility = 'hidden';
    document.getElementById('volver').style.visibility = 'hidden';
    window.print();
    setTimeout(function () { 
        document.getElementById('imprimir').style.visibility = 'visible';
        document.getElementById('volver').style.visibility = 'visible';
    }, 100);
}
var nota_medica=document.getElementById('nota_medica');
var titulo=document.getElementById('titulo');
titulo.innerHTML="Nota medica";

//Obtener datos del paciente
axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+idPaciente).then(function (response) {
    console.log("PACIENTE");
    paciente=JSON.parse(JSON.stringify(response.data));
    console.log(paciente);
    var pacienteN=document.getElementById('paciente');
    pacienteN.innerHTML='Paciente: '+paciente.Nombres+' '+paciente.Apellidos;
    var pacienteData=document.createElement('p');
    pacienteData.innerHTML="Edad: "+paciente.Edad+' | Estado civil: '+paciente.EstadoCivil+' | Ocupación: '+paciente.Ocupacion;
    nota_medica.appendChild(pacienteData);
    //Obtener doctora encargada del paciente
    axios.get('http://localhost/PHP/DoctoraController.php?idDoctora='+paciente.idDoctora).then(function (response) {
        console.log("DOCTORA");
        doctora=JSON.parse(JSON.stringify(response.data));
        console.log("DOCTORA"+doctora); 
        var nombreD=document.getElementById('nombreD');
        nombreD.innerHTML='Dra. '+doctora.Nombres+' '+doctora.Apellidos;
        
    })
    //Obtener nota medica
    axios.get('http://localhost/PHP/NotasMedicasColntroller.php?idNotaMedica='+idNota).then(function (response) {
        console.log("NOTA");
        nota=JSON.parse(JSON.stringify(response.data));
        console.log(nota);
        var titulo=document.getElementById('titulo');
        titulo.innerHTML=nota.titulo;

        var notaData=document.createElement('p');
        notaData.innerHTML="T.A. "+nota.TA+' || F.C. '+nota.FC+' || F.R. '+nota.FR+' || Temperatura '+nota.T+'°C';
        nota_medica.appendChild(notaData);
        var descripcion=document.createElement('h4');
        descripcion.innerHTML=nota.descripcion;
        nota_medica.appendChild(descripcion);
    });
});
