document.getElementById('acceder').addEventListener('click', accederCuenta);

function accederCuenta(e) {
    var correo=document.getElementById('correo').value;;
    var clave=document.getElementById('clave').value;
    axios.get('http://localhost/PHP/DoctoraController.php?correo='+correo+'&clave='+clave)
    .then(function (response) {
        console.log("RESP: "+response.data);
        var doctora=response.data;
        console.log("CONSOLE: "+doctora.Nombres);
        if(doctora.Nombres==null){
            alert("Verifique correo y/o clave.");
        }else{
            alert("Bienvenida a GINELIFE doctora "+doctora.Nombres+' '+doctora.Apellidos);
            window.location.href = "C:/Users/heand/Desktop/GINELIFE/HTML/Main.html?correo="+correo;
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
       
    });
}