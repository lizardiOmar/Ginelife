document.getElementById('submit_btn').addEventListener('click', check_data);
 
function check_data(e){
    var imagenes=document.getElementById('imagenes').files;
    console.log(imagenes.length);
    if (parseInt(imagenes.length) > 4){
        alert("mas de 4");
    }else if(parseInt(imagenes.length) < 4){
        alert("menos de 4");
    }else{
        alert(imagenes[0].name);
        
    }
}