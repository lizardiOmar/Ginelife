let params = new URLSearchParams(location.search);
var idPaciente = params.get('idPaciente');
var doctora;
var notasMedicas;
var paciente;
var host='C:/Users/heand/Desktop/GINELIFE';
document.getElementById('nueva').addEventListener('click', nuevaNota);
function nuevaNota(e){
    //NuevaNotaMedica.html
    window.location.href=host+"/HTML/NuevaNotaMedica.html?idPaciente="+idPaciente;
}
//Obtener paciente
axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+idPaciente).then(function (response) {
    console.log('http://localhost/PHP/PacienteController.php?idPaciente='+idPaciente);
    paciente=JSON.parse(JSON.stringify(response.data));
    console.log(paciente); 
    document.title='Notas médicas de  '+paciente.Nombres;
    var titulo= document.getElementById('titulo');
    titulo.innerHTML="Notas médicas de "+paciente.Nombres;

    document.getElementById('volver').addEventListener('click', volver);
    function volver(e){
        window.location.href=host+"/HTML/Pacientes.html?idDoctora="+paciente.idDoctora;
    }


});
//Obtener notas por paciente
axios.get('http://localhost/PHP/NotasMedicasColntroller.php?idPaciente='+idPaciente).then(function (response) {
    console.log('http://localhost/PHP/NotasMedicasColntroller.php?idPaciente='+idPaciente);
    notasMedicas=JSON.parse(JSON.stringify(response.data));
    console.log(notasMedicas); 
    var notas_list=document.getElementById('notas_list');
    var texto = document.createElement('h3');
    if(notasMedicas!=null){
        notasMedicas.forEach(element => {
            var divNota=document.createElement('div');
            var tituloN = document.createElement('h3');
            notas_list.appendChild(divNota);
            tituloN.innerHTML=element.titulo;
            divNota.appendChild(tituloN);
            var fecha=document.createElement('h4');
            divNota.style.borderBottom="solid #ff6666";
            
            fecha.innerHTML='Fecha: '+element.DD+'/'+element.MM+'/'+element.YYYY;
            var descripcion=document.createElement('p');
            descripcion.innerHTML=element.descripcion;
            var btnDetalles=document.createElement('button');
            btnDetalles.innerHTML="Detalles";
            btnDetalles.style.backgroundColor="#ffe6ff";
            btnDetalles.addEventListener('click', detalles);
            function detalles(e){
                
                console.log(host+'/HTML/NotaByID.html?idNota='+element.idnotaMedica);
                window.location.href=host+'/HTML/NotaByID.html?idNota='+element.idnotaMedica+'&idPaciente='+idPaciente;
            }
            divNota.appendChild(fecha);
            divNota.appendChild(descripcion);
            divNota.appendChild(btnDetalles);

        });
    }else{
        texto.innerHTML="No existen notas médicas para este paciente.";
    }
    
    notas_list.appendChild(texto);
    
    
});