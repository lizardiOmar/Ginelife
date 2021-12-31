let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
document.getElementById('Continuar').addEventListener('click', registrarEstudios);
function registrarEstudios (e){
    var grupoSanguineo=document.getElementById('grupoSanguineo').value;
    var RH=document.getElementById('RH').value;
    var hemoglobina=document.getElementById('hemoglobina').value;
    var Hematocrito=document.getElementById('Hematocrito').value;
    var Leucocitos=document.getElementById('Leucocitos').value;
    var Plaquetas=document.getElementById('Plaquetas').value;
    var TP=document.getElementById('TP').value;
    var TPT=document.getElementById('TPT').value;
    var Glucosa=document.getElementById('Glucosa').value;
    var VDRL=document.getElementById('VDRL').value;
    var HIV=document.getElementById('HIV').value;
    if(grupoSanguineo){
        if(RH){
            if(hemoglobina){
                if(Hematocrito){
                    if(Leucocitos){
                        if(Plaquetas){
                            if(TP){
                                if(TPT){
                                    if(Glucosa){
                                        if(VDRL){
                                            if(HIV){
                                                console.log('http://localhost/PHP/EstudiosLController.php?idestudios_lab=0&'+'grupoSanguineo='+grupoSanguineo+'&RH='+RH+'&hemoglobina='+hemoglobina+'&Hematocrito='+Hematocrito+'&Leucocitos='+Leucocitos+'&Plaquetas='+Plaquetas+'&TP='+TP+'&TPT='+TPT+'&Glucosa='+Glucosa+'&VDRL='+VDRL+'&HIV='+HIV+'&idHistoriaClinica='+idHistoriaClinica);
                                                axios.get('http://localhost/PHP/EstudiosLController.php?idestudios_lab=0&'+'grupoSanguineo='+grupoSanguineo+'&RH='+RH+'&hemoglobina='+hemoglobina+'&Hematocrito='+Hematocrito+'&Leucocitos='+Leucocitos+'&Plaquetas='+Plaquetas+'&TP='+TP+'&TPT='+TPT+'&Glucosa='+Glucosa+'&VDRL='+VDRL+'&HIV='+HIV+'&idHistoriaClinica='+idHistoriaClinica)
                                                .then(function (response) {
                                                    console.log(response.data);
                                                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/ElegirExploracionFisica.html?idHistoriaClinica="+idHistoriaClinica;
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                });
                                            } else{
                                                alert("Falta agregar anti HIV");
                                            }
                                        } else{
                                            alert("Falta agregar VDRL");
                                        }
                                    } else{
                                        alert("Falta agregar Glúcosa");
                                    }
                                } else{
                                    alert("Falta agregar TPT");
                                }
                            } else{
                                alert("Falta agregar TP");
                            }
                        } else{
                            alert("Falta agregar Plaquetas");
                        }
                    } else{
                        alert("Falta agregar Leucocitos");
                    }
                } else{
                    alert("Falta agregar Hematocrito");
                }
            } else{
                alert("Falta agregar hemoglobina");
            }
        } else{
            alert("Falta agregar el RH.");
        }
    } else{
        alert("Falta agregar grupo sangíneo.");
    }

}
