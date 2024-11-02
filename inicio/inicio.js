function loguear(){
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;


    if (user=="Jazmin" && pass=="120325") {
        window.location="principal.html";
    }else{
        alert("Datos incorrectos");
    }
}