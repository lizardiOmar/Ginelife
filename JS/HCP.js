
let params = new URLSearchParams(location.search);
var idHistoriaClinica = params.get('idHistoriaClinica');
var historiaClinica;
var paciente;
var doctora;
var domicilio;
var antecedentesHF;
var antecedentesPP;
var adicciones;
var inmunizaciones;
var antecedentesGO;
var alergias;
var quirurgicos;
var traumaticos;
var padecimientos;
var exploracion;
var estudios;
var plan;
var host="C:/Users/heand/Desktop/GINELIFE";
//Obtener historia clinica
axios.get('http://localhost/PHP/HistoriaClinicaController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
    console.log("HISTORIA CLINICA");
    historiaClinica=JSON.parse(JSON.stringify(response.data));
    console.log(historiaClinica);
    var fecha_hora=document.getElementById('fecha_hora');
    fecha_hora.innerHTML='Fecha de elaboración: '+historiaClinica.DD+'-'+historiaClinica.MM+'-'+historiaClinica.YYYY+' Hora: '+historiaClinica.hora;
    document.getElementById('imprimir').addEventListener('click', imprimir);
    document.getElementById('finalizar').addEventListener('click', finalizar);
    function imprimir(e){
        document.getElementById('imprimir').style.visibility = 'hidden';
        document.getElementById('finalizar').style.visibility = 'hidden';
        window.print();
        setTimeout(function () { 
            document.getElementById('imprimir').style.visibility = 'visible';
            document.getElementById('finalizar').style.visibility = 'visible';
        }, 100);
    }
    function finalizar(e){
        window.location.href = host+"/HTML/Main.html?correo="+doctora.Email;
    }
    //Obtener datos del paciente
    axios.get('http://localhost/PHP/PacienteController.php?idPaciente='+historiaClinica.idPaciente).then(function (response) {
        console.log("PACIENTE");
        paciente=JSON.parse(JSON.stringify(response.data));
        console.log(paciente);
        var nombreP=document.getElementById('nombreP');
        nombreP.innerHTML='Paciente: '+paciente.Nombres+' '+paciente.Apellidos;
        //Obtener domicilio del paciente
        axios.get('http://localhost/PHP/DomicilioPacienteController.php?idPaciente='+paciente.idPaciente).then(function (response) {
            console.log("DOMICILIO");
            domicilio=JSON.parse(JSON.stringify(response.data));
            console.log(domicilio); 
            var domicilio_info=document.getElementById('domicilio_info');
            domicilio_info.innerHTML="Municipio: "+domicilio.Municipio+" | Colonia: "+domicilio.Colonia+"<br> Calle: "+domicilio.Calle+" #"+domicilio.Numero+" | C.P. "+domicilio.CP;
        })
        //obtener Antecedentes heredo familiares
        axios.get('http://localhost/PHP/AntecedentesHeredoFamiliaresController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("ANTECEDENTES HF");
            antecedentesHF=JSON.parse(JSON.stringify(response.data));
            console.log(antecedentesHF);
            var diabetes=document.getElementById('diabetes');
            if(antecedentesHF.Diabetes==='1'){
                diabetes.innerHTML="Diabetes:SI";
            }else{
                diabetes.innerHTML="Diabetes:NO";
            }
            var cardio=document.getElementById('cardio');
            if(antecedentesHF.Diabetes==='1'){
                cardio.innerHTML="|Cardiopatías:SI";
            }else{
                cardio.innerHTML="|Cardiopatías:NO";
            }
            var hta=document.getElementById('hta');
            if(antecedentesHF.HTA==='1'){
                hta.innerHTML="|HTA:SI";
            }else{
                hta.innerHTML="|HTA:NO";
            }
            var tiroides=document.getElementById('tiroides');
            if(antecedentesHF.Tiroides==='1'){
                tiroides.innerHTML="|Tiroides:SI";
            }else{
                tiroides.innerHTML="|Tiroides:NO";
            }
            var neoplasticos=document.getElementById('neoplasticos');
            if(antecedentesHF.Neoplasticos==='1'){
                neoplasticos.innerHTML="|Neoplásicos:SI";
            }else{
                neoplasticos.innerHTML="|Neoplásicos:NO";
            }
            var especificaciones=document.getElementById('especificaciones');
            if(antecedentesHF.Especificaciones){
                especificaciones.innerHTML="Especificaciones: "+antecedentesHF.Especificaciones;
            }else{
                especificaciones.innerHTML="Sin especificaciones particulares.";
            }
        })
        //obtener los Antecedentes personales patológicos
        axios.get('http://localhost/PHP/AntecedentesPersonalesPatologicosController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("ANTECEDENTES PP");
            antecedentesPP=JSON.parse(JSON.stringify(response.data));
            console.log(antecedentesPP);
            var diabetesP=document.getElementById('diabetesP');
            if(antecedentesPP.Diabetes==='1'){
                diabetesP.innerHTML="Diabetes:SI";
            }else{
                diabetesP.innerHTML="Diabetes:NO";
            }
            var cardioP=document.getElementById('cardioP');
            if(antecedentesPP.Cardiopatias==='1'){
                cardioP.innerHTML="|Cardiopatías:SI";
            }else{
                cardioP.innerHTML="|Cardiopatías:NO";
            }
            var htaP=document.getElementById('htaP');
            if(antecedentesPP.HTA==='1'){
                htaP.innerHTML="|HTA:SI";
            }else{
                htaP.innerHTML="|HTA:NO";
            }
            var epilepsia=document.getElementById('epilepsia');
            if(antecedentesPP.Epilepsia==='1'){
                epilepsia.innerHTML="|Epilepsia:SI";
            }else{
                epilepsia.innerHTML="|Epilepsia:NO";
            }
            var nefropatias=document.getElementById('nefropatias');
            if(antecedentesPP.Nefropatias==='1'){
                nefropatias.innerHTML="|Nefropatías:SI";
            }else{
                nefropatias.innerHTML="|Nefropatías:NO";
            }
        })
        //obtener los Antecedentes personales no patológicos
        //Adicciones
        axios.get('http://localhost/PHP/AdiccionesController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("ADICCIONES");
            adicciones=JSON.parse(JSON.stringify(response.data));
            console.log(adicciones);
            var tabaquismo=document.getElementById('tabaquismo');
            if(adicciones.Tabaquismo==='1'){
                tabaquismo.innerHTML="Tabaquismo:SI";
            }else{
                tabaquismo.innerHTML="Tabaquismo:NO";
            }
            var alcoholismo=document.getElementById('alcoholismo');
            if(adicciones.Alcoholismo==='1'){
                alcoholismo.innerHTML="|Alcoholismo:SI";
            }else{
                alcoholismo.innerHTML="|Alcoholismo:NO";
            }
            var drogas=document.getElementById('drogas');
            if(adicciones.Drogas==='1'){
                drogas.innerHTML="|Drogas:SI";
            }else{
                drogas.innerHTML="|Drogas:NO";
            }
        })
        //Inmunizaciones
        axios.get('http://localhost/PHP/InmunizacionesController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("INMUNIZACIONES");
            inmunizaciones=JSON.parse(JSON.stringify(response.data));
            console.log(inmunizaciones);
            var rubeola=document.getElementById('rubeola');
            if(inmunizaciones.rubeola==='1'){
                rubeola.innerHTML="Rubéola:SI";
            }else{
                rubeola.innerHTML="Rubéola:NO";
            }
            var influenza=document.getElementById('influenza');
            if(inmunizaciones.influenza==='1'){
                influenza.innerHTML="|Influenza:SI";
            }else{
                influenza.innerHTML="|Influenza:NO";
            }
            var antitetanica=document.getElementById('antitetanica');
            if(inmunizaciones.antitetanica==='1'){
                antitetanica.innerHTML="|Antitétanica:SI";
            }else{
                antitetanica.innerHTML="|Antitétanica:NO";
            }
            var covid19=document.getElementById('covid19');
            if(inmunizaciones.covid19==='1'){
                covid19.innerHTML="|Covid-19:SI";
            }else{
                covid19.innerHTML="|Covid-19:NO";
            }
        })
        //Obtener antecedentes GO
        axios.get('http://localhost/PHP/AntecedentesGOController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Antecedentes GO");
            antecedentesGO=JSON.parse(JSON.stringify(response.data));
            console.log(antecedentesGO);
            var menarca=document.getElementById('menarca');
            menarca.innerHTML=antecedentesGO.Menarca;
            var menarca=document.getElementById('ritmo');
            ritmo.innerHTML=antecedentesGO.Ritmo;
            var ivs=document.getElementById('ivs');
            ivs.innerHTML=antecedentesGO.IVS;
            //2da linea
            var noParejas=document.getElementById('noParejas');
            noParejas.innerHTML=antecedentesGO.NoCompSex;
            var G=document.getElementById('G');
            G.innerHTML=antecedentesGO.G;
            var P=document.getElementById('P');
            P.innerHTML=antecedentesGO.P;
            var A=document.getElementById('A');
            A.innerHTML=antecedentesGO.A;
            var C=document.getElementById('C');
            C.innerHTML=antecedentesGO.C;
            var ectopico=document.getElementById('ectopico');
            ectopico.innerHTML=antecedentesGO.Ectopico;
            var molar=document.getElementById('molar');
            molar.innerHTML=antecedentesGO.Molar;
        })
        //Obtener alergias del paciente
        axios.get('http://localhost/PHP/AlergiasController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Alergias");
            alergias=JSON.parse(JSON.stringify(response.data));
            var alergias_list=document.getElementById('alergias_ul');
            if(alergias!=null){
                alergias.forEach(element => {
                    console.log(element);
                    var item = document.createElement('p');
                    if(alergias[alergias.length-1]===element){
                        item.innerHTML=element.alergiaN+'.';
                    }
                    else{
                        item.innerHTML=element.alergiaN+',';
                    }
                    alergias_list.appendChild(item);
                });
            }else{
                var item = document.createElement('p');
                item.innerHTML="Sin alergias registradas.";
                alergias_list.appendChild(item);
            }

        })
        //Obtener exploración del paciente
        axios.get('http://localhost/PHP/ExploracionController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Exploración");
            exploracion=JSON.parse(JSON.stringify(response.data));
            if(exploracion!=null){
                var L1=document.getElementById('L1');
                var conciente;
                if(exploracion[0].consciente==1){
                    conciente='SI';
                }else if(exploracion[0].consciente==0){
                    conciente='NO';
                }
                var pulmonesB;
                if(exploracion[0].pulmonesB==1){
                    pulmonesB='NORMAL';
                }else if(exploracion[0].pulmonesB==0){
                    pulmonesB='ANORMAL';
                }
                var corazonB;
                if(exploracion[0].corazonB==1){
                    corazonB='NORMAL';
                }else if(exploracion[0].corazonB==0){
                    corazonB='ANORMAL';
                }
                var cabezaB;
                if(exploracion[0].cabezaB==1){
                    cabezaB='NORMAL';
                }else if(exploracion[0].cabezaB==0){
                    cabezaB='NORMAL';
                }

                var cuelloB;
                if(exploracion[0].cuelloB==1){
                    cuelloB='NORMAL';
                }else if(exploracion[0].cuelloB==0){
                    cuelloB='NORMAL';
                }
                L1.innerHTML='Conciente: '+conciente+'|Habitus: '+exploracion[0].habitus;
                var L2=document.getElementById('L2');
                L2.innerHTML='Peso: '+exploracion[0].peso+'kg |Estatura: '+exploracion[0].estatura+'cm | T.A. '+exploracion[0].TA+'mm Hg. | F.C. '+exploracion[0].FC+' por min.';
                var L3=document.getElementById('L3');
                L3.innerHTML='F:R '+exploracion[0].FR+' por min. | Temperatura: '+exploracion[0].temperatura+'°C';
                var L4=document.getElementById('L4');
                L4.innerHTML='Pulmones: '+pulmonesB+', '+exploracion[0].pulmonesT;
                var L5=document.getElementById('L5');
                L5.innerHTML='Corazón: '+corazonB+', '+exploracion[0].corazonT;
                var L6=document.getElementById('L6');
                L6.innerHTML='Cabeza: '+cabezaB+', '+exploracion[0].cabezaT;
                var L7=document.getElementById('L7');
                L7.innerHTML='Cuello: '+cuelloB+', '+exploracion[0].cuelloT;
            }
        })
        //Obtener padecimientos actuales
        axios.get('http://localhost/PHP/PadecimientoActualController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Padecimientos actuales");
            padecimientos=JSON.parse(JSON.stringify(response.data));
            var padecimientos_list=document.getElementById('padecimientos_ul');
            if(padecimientos!=null){
                padecimientos.forEach(element => {
                    console.log(element);
                    var item = document.createElement('p');
                    if(padecimientos[padecimientos.length-1]===element){
                        item.innerHTML=element.nombre+'('+element.descripcion+').';
                    }
                    else{
                        item.innerHTML=element.nombre+'('+element.descripcion+'),';
                    }
                    padecimientos_list.appendChild(item);
                });
            }else{
                var item = document.createElement('p');
                item.innerHTML="Sin alergias registradas.";
                padecimientos_list.appendChild(item);
            }

        })
        //Obtener estudios de laboratorio
        axios.get('http://localhost/PHP/EstudiosLController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Padecimientos actuales");
            estudios=JSON.parse(JSON.stringify(response.data));
            var estudios_list=document.getElementById('estudios_list');
            if(estudios!=null){
                var L8=document.getElementById('L8');
                L8.innerHTML='Grupo sanguíneo '+estudios[0].grupoSanguineo+' | RH '+estudios[0].RH+' | Hemoglobina '+estudios[0].hemoglobina+' g/dl';
                var L9=document.getElementById('L9');
                L9.innerHTML='Hematocrito '+estudios[0].Hematocrito+'% | Leucocitos '+estudios[0].Leucocitos+' | Plaquetas '+estudios[0].Plaquetas;
                var L10=document.getElementById('L10');
                L10.innerHTML='T:P '+estudios[0].TP+' | T.P.T. '+estudios[0].TP+' | Glúcosa '+estudios[0].Glucosa+' | VDRL '+estudios[0].VDRL+'Acs | Anti HIV '+estudios[0].HIV;

            }

        })
        //Obtener plan
        axios.get('http://localhost/PHP/PlanController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Padecimientos actuales");
            plan=JSON.parse(JSON.stringify(response.data));
            var estudios_plan=document.getElementById('plan_list');
            if(plan!=null){
                var L11=document.getElementById('L11');
                L11.innerHTML='Plan: '+plan[0].planManejo;
                var L12=document.getElementById('L12');
                L12.innerHTML='Pronóstico: '+plan[0].pronostico;
            }

        })
        //Obtener antecedentes quirurgicos
        axios.get('http://localhost/PHP/AntecedentesPersonalesQirurgicosController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Antecedentes Q");
            quirurgicos=JSON.parse(JSON.stringify(response.data));
            var quirurgicos_list=document.getElementById('quirurgicos_ul');
            if(quirurgicos!=null){
                quirurgicos.forEach(element => {
                    console.log(element);
                    var item = document.createElement('p');
                    if(quirurgicos[quirurgicos.length-1]===element){
                        item.innerHTML=element.Nombre+'('+element.YYYY+').';
                    }
                    else{
                        item.innerHTML=element.Nombre+'('+element.YYYY+'), ';
                    }
                    quirurgicos_list.appendChild(item);
                });
            }else{
                var item = document.createElement('p');
                item.innerHTML="Sin antecedentes quirúrgicos registrados.";
                quirurgicos_list.appendChild(item);
            }

        })
        //Obtener antecedentes traumaticos
        axios.get('http://localhost/PHP/AntecedentesPersonalesTraumaticosController.php?idHistoriaClinica='+idHistoriaClinica).then(function (response) {
            console.log("Antecedentes T");
            traumaticos=JSON.parse(JSON.stringify(response.data));
            var traumaticos_list=document.getElementById('traumaticos_ul');
            if(traumaticos!=null){
                traumaticos.forEach(element => {
                    console.log(element);
                    var item = document.createElement('p');
                    if(traumaticos[traumaticos.length-1]===element){
                        item.innerHTML=element.Nombre+'('+element.YYYY+').';
                    }
                    else{
                        item.innerHTML=element.Nombre+'('+element.YYYY+'), ';
                    }
                    traumaticos_list.appendChild(item);
                });
            }else{
                var item = document.createElement('p');
                item.innerHTML="Sin antecedentes traumáticos registrados.";
                traumaticos_list.appendChild(item);
            }

        })
        //Obtener doctora encargada del paciente
        axios.get('http://localhost/PHP/DoctoraController.php?idDoctora='+paciente.idDoctora).then(function (response) {
            console.log("DOCTORA");
            doctora=JSON.parse(JSON.stringify(response.data));
            console.log("DOCTORA"+doctora); 
            var nombreD=document.getElementById('nombreD');
            nombreD.innerHTML='Dra. '+doctora.Nombres+' '+doctora.Apellidos;
            var edad_edoCivil_ocupacion=document.getElementById('edad_edoCivil_ocupacion');
            edad_edoCivil_ocupacion.innerHTML='Edad: '+paciente.Edad+' | Estado civil: '+paciente.EstadoCivil+' | Ocupación: '+paciente.Ocupacion+' <br> Escolaridad:'+paciente.Escolaridad+' | Ciudad de nacimiento: '+paciente.CiudadDeNacimiento;
            document.title=paciente.Nombres+' '+paciente.Apellidos+"-Historia clínica";
        })
    })
})
