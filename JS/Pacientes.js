let params = new URLSearchParams(location.search);
var idDoctora = params.get('idDoctora');
var doctora;
var pacientes;
var historiaClinicaPersonal;
var host='C:/Users/heand/Desktop/GINELIFE';

//Obtener doctora
axios.get('http://localhost/PHP/DoctoraController.php?idDoctora='+idDoctora).then(function (response) {
    console.log("DOCTORA");
    doctora=JSON.parse(JSON.stringify(response.data));
    console.log("DOCTORA"+doctora); 
    document.title='Pacientes de la dra. '+doctora.Nombres;
    document.getElementById('volver').addEventListener('click', volver);
    function volver(e){
        window.location.href=host+"/HTML/Main.html?correo="+doctora.Email;
    }
});

//Obtener pacientes
axios.get('http://localhost/PHP/PacienteController.php?idDoctora='+idDoctora).then(function (response) {
            console.log("Pacientes");
            pacientes=JSON.parse(JSON.stringify(response.data));
            var pacientes_list=document.getElementById('pacientes_list');
            var titulo=document.getElementById('titulo');
            if(pacientes!=null){
                pacientes.forEach(element => {
                    console.log(element);

                    var item = document.createElement('p');
                    var buttons=document.createElement('div');
                    var button = document.createElement('button');
                    var btnNotaMedica=document.createElement('button');
                    button.style.backgroundColor="#ff9999";
                    btnNotaMedica.style.backgroundColor="#ff9999";
                    var colpos=document.createElement('button');
                    btnNotaMedica.innerHTML="Notas médicas";
                    colpos.innerHTML="Colposcopías";
                    axios.get('http://localhost/PHP/HistoriaClinicaController.php?idPaciente='+element.idPacientes).then(function (response) {
                        historiaClinicaPersonal=JSON.parse(JSON.stringify(response.data));
                        //console.log(element.Nombres);
                        console.log(historiaClinicaPersonal[0].idPaciente+'/'+element.idPacientes+'/'+historiaClinicaPersonal[0].idHistoriaClinica);
                        var idHC=historiaClinicaPersonal[0].idHistoriaClinica;
                        if(historiaClinicaPersonal!=null){
                            button.innerHTML="Historia clinica";
                            button.addEventListener('click', historiaClinica);
                            function historiaClinica(e){
                                window.location.href=host+"/HTML/HistoriaClinicaPersonal.html?idHistoriaClinica="+idHC;
                            }
                        }else{
                            button.innerHTML="No hay historia clinica";
                        }
                        btnNotaMedica.addEventListener('click', verNotasMedicas);
                        function verNotasMedicas(e){
                            alert("Notas médicas de la paciente "+element.Nombres);
                            window.location.href=host+"/HTML/NotasMedicas.html?idPaciente="+element.idPacientes;
                        }
                    });
                   
                    colpos.addEventListener('click', colposcopia);
                    function colposcopia(e){
                        window.location.href=host+"/HTML/Colposcopias.html?idPaciente="+element.idPacientes+'&idDoctora='+idDoctora;
                    }
                    
                    item.innerHTML=element.Apellidos+', '+element.Nombres+':';
                    pacientes_list.appendChild(item);
                    pacientes_list.appendChild(buttons);
                    buttons.appendChild(button);
                    buttons.appendChild(colpos);
                    buttons.appendChild(btnNotaMedica);
                    
                });
            }else{
                titulo.innerHTML="Sin pacientes registradas.";
            }

        })