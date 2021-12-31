let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
document.getElementById('Continuar').addEventListener('click', registrarExplo);
function registrarExplo (e){
    var consciente=document.getElementById('consciente').value;
    var habitus=document.getElementById('habitus').value;
    var peso=document.getElementById('peso').value;
    var estatura=document.getElementById('estatura').value;

    var ta=document.getElementById('ta').value;
    var fc=document.getElementById('fc').value;
    var fr=document.getElementById('fr').value;
    var temperatura=document.getElementById('temperatura').value;

    var pulmonB=document.getElementById('pulmonB').value;
    var pulmonT=document.getElementById('pulmonT').value;

    var corazonB=document.getElementById('corazonB').value;
    var corazonT=document.getElementById('corazonT').value;

    var cabezaB=document.getElementById('cabezaB').value;
    var cabezaT=document.getElementById('cabezaT').value;

    var cuelloB=document.getElementById('cuelloB').value;
    var cuelloT=document.getElementById('cuelloT').value;
    
    if(habitus){
        if(peso){
            if(estatura){
                if(ta){
                    if(fc){
                        if(fr){
                            if(temperatura){
                                console.log('http://localhost/PHP/ExploracionController.php?idexploracionG=0&'+'consciente='+consciente+'&habitus='+habitus+'&peso='+peso+'&estatura='+estatura+'&ta='+ta+'&fc='+fc+'&fr='+fr+'&temperatura='+temperatura+'&pulmonesB='+pulmonB+'&pulmonesT='+pulmonT+'&corazonB='+corazonB+'&corazonT='+corazonT+'&cabezaB='+cabezaB+'&cabezaT='+cabezaT+'&cuelloB='+cuelloB+'&cuelloT='+cuelloT+'&idHistoriaClinica='+idHistoriaClinica);
                                axios.get('http://localhost/PHP/ExploracionController.php?idexploracionG=0&'+'consciente='+consciente+'&habitus='+habitus+'&peso='+peso+'&estatura='+estatura+'&ta='+ta+'&fc='+fc+'&fr='+fr+'&temperatura='+temperatura+'&pulmonesB='+pulmonB+'&pulmonesT='+pulmonT+'&corazonB='+corazonB+'&corazonT='+corazonT+'&cabezaB='+cabezaB+'&cabezaT='+cabezaT+'&cuelloB='+cuelloB+'&cuelloT='+cuelloT+'&idHistoriaClinica='+idHistoriaClinica)
                                .then(function (response) {
                                    console.log(response.data);
                                    window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/EstudiosLab.html?idHistoriaClinica="+idHistoriaClinica;
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                            }else{
                                alert("Falta agregar temperatura");
                            }
                        }else{
                            alert("Falta agregar F.R.");
                        }
                    }else{
                        alert("Falta agregar F.C.");
                    }
                }else{
                    alert("Falta agregar T.A.");
                }
            }else{
                alert("Falta agregar la estatura");
            }
        }else{
            alert("Falta agregar el peso");
        }
    }else{
        alert("Falta agregar habitus");
    }
    //alert(consciente);
    //var consciente=document.getElementById('').value;
}
