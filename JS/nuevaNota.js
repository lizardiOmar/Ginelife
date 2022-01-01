let params = new URLSearchParams(location.search);
var idPaciente = params.get('idPaciente');
var hoy = new Date();
var MM=hoy.getMonth() + 1;
var DD=hoy.getDate().toString();
var YYYY=hoy.getFullYear();
document.getElementById('fecha').innerHTML='Fecha: '+DD+'-'+MM+'-'+YYYY;
document.getElementById('volver').addEventListener('click', volver);
var host='C:/Users/heand/Desktop/GINELIFE';
function volver(e){
    window.location.href=host+"/HTML/NotasMedicas.html?idPaciente="+idPaciente;
}
document.getElementById('crear').addEventListener('click', crear);
function crear(e){
    var titulo=document.getElementById('tituloN').value;
    var ta=document.getElementById('ta').value;
    var fc=document.getElementById('fc').value;
    var fr=document.getElementById('fr').value;
    var t=document.getElementById('t').value;
    var descripcion=document.getElementById('descripcion').value;
    if(titulo){
        if(ta){
            if(fc){
                if(fr){
                    if(t){
                        if(descripcion){
                            axios.get('http://localhost/PHP/NotasMedicasColntroller.php?idNotaMedica=0&titulo='+titulo+'&TA='+ta+'&FC='+fc+'&FR='+fr+'&T='+t+'&descripcion='+descripcion+'&DD='+DD+'&MM='+MM+'&YYYY='+YYYY+'&idPaciente='+idPaciente)
                            .then(function (response) {
                                console.log('http://localhost/PHP/NotasMedicasColntroller.php?idNotaMedica=0&titulo='+titulo+'&TA='+ta+'&FC='+fc+'&FR='+fr+'&T='+t+'&descripcion='+descripcion+'&DD='+DD+'&MM='+MM+'&YYYY='+YYYY+'&idPaciente='+idPaciente);
                                //alert("Cargando información Dra. "+doctora.Nombres);
                                window.location.href=host+"/HTML/NotasMedicas.html?idPaciente="+idPaciente;
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                                alert("Error inesperado");
                            });
                        }else{
                            alert('Escriba la descripción de la nota médica.');
                        }
                    }else{
                        alert('Escriba la temperatura de la paciente.');
                    }
                }else{
                    alert('Escriba la frecuencia respiratoria de la paciente.');
                }
            }else{
                alert('Escriba la frecuencia cárdiaca de la paciente.');
            }
        }else{
            alert('Escriba la tensión arterial de la paciente.');
        }
    }else{
        alert('Escriba el título de la nota médica.');
    }


}