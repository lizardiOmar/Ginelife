let params = new URLSearchParams(location.search);
var correo = params.get('correo');
axios.get('http://localhost/PHP/DoctoraController.php?correo='+correo)
.then(function (response) {
    console.log(response);
    var doctora=JSON.parse(JSON.stringify(response.data));
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

