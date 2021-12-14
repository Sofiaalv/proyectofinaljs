function comprobar(){

    let fname = document.getElementById("fname");
    let mail = document.getElementById("mail");
    let country = document.getElementById("country");
    let subject = document.getElementById("subject");
    

    if (mail.value == "" ){
        
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Uy!..Tu mail es un dato obligatorio. Por favor volve a completar.";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"
        
        
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);

    } else{
        console.log ("Datos recibidos");
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Gracias por contactarnos! En breve te responderemos.";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"
        
        
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);
    }
    
}
