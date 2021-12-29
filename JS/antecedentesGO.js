let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
//Omitir adicciones
document.getElementById('Omitir').addEventListener('click', omitir);
function omitir(e){
    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/PadecimientoActual.html?idHistoriaClinica="+idHistoriaClinica;
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
//Registrar antecedentes GO
document.getElementById('Continuar').addEventListener('click', registrarAntecedentesGO);
function registrarAntecedentesGO (e){
    var menarca=document.getElementById('menarca').value;
    var ritmo=document.getElementById('ritmo').value;
    var IVS=document.getElementById('IVS').value;
    var NoCompSex=document.getElementById('NoCompSex').value;
    var G=document.getElementById('G').value;
    var P=document.getElementById('P').value;
    var A=document.getElementById('A').value;
    var C=document.getElementById('C').value;
    var ectopico=document.getElementById('ectopico').value;
    var molar=document.getElementById('molar').value;
    var FUP=document.getElementById('FUP').value;
    var FUM=document.getElementById('FUM').value;
    var FPP=document.getElementById('FPP').value;
    if(menarca){
        if(ritmo){
            if(IVS){
                if(NoCompSex){
                    if(G){
                        if(P){
                            if(A){
                                if(C){
                                    if(ectopico){
                                        if(molar){
                                            if(FUP){
                                                if(FUM){
                                                    if(FPP){
                                                        //alert("Todo listo.");
                                                        axios.get('http://localhost/PHP/AntecedentesGOController.php?idAntecedentesGO=0&Menarca='+menarca+'&Ritmo='+ritmo+'&IVS='+IVS+'&NoCompSex='+NoCompSex+'&G='+G+'&P='+P+'&A='+A+'&C='+C+'&Ectopico='+ectopico+'&Molar='+molar+'&FUP='+FUP+'&FUM='+FUM+'&FPP='+FPP+'&idHistoriaClinica='+idHistoriaClinica)
                                                        .then(function (response) {
                                                            console.log(response.data);
                                                            //console.log('http://localhost/PHP/AntecedentesGOController.php?idAntecedentesGO=0&Menarca'+menarca+'&Ritmo='+ritmo+'&IVS='+IVS+'&NoCompSex='+NoCompSex+'&G='+G+'&P='+P+'&A='+A+'&C='+C+'&Ectopico='+ectopico+'&Molar='+molar+'&FUP='+FUP+'&FUM='+FUM+'&FPP='+FPP+'&idHistoriaClinica='+idHistoriaClinica);
                                                            //alert("Todo listo.");
                                                            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/PadecimientoActual.html?idHistoriaClinica="+idHistoriaClinica;
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        });
                                                    }else{
                                                        alert("FPP no especificado.");
                                                    }
                                                }else{
                                                    alert("FUM no especificado.");
                                                }
                                            }else{
                                                alert("FUP no especificado.");
                                            }
                                        }else{
                                            alert("Molar no especificado.");
                                        }
                                    }else{
                                        alert("Ectópico no especificado.");
                                    }
                                }else{
                                    alert("C no especificado.");
                                }
                            }else{
                                alert("A no especificado.");
                            }
                        }else{
                            alert("P no especificado.");
                        }
                    }else{
                        alert("G no especificado.");
                    }
                }else{
                    alert("Número de compañeros sexuales no especificado. El minimo es 0");
                }
            }else{
                alert("IVS no especificado.");
            }
        }else{
            alert("Ritmo no especificado.");
        }
    }else{
        alert("Menarca no especificada.");
    }
}