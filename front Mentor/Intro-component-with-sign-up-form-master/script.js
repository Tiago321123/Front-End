function Verification(){
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let elems = document.querySelectorAll(".image"); // colocar o '.' mostrando que é uma class
    /*var index = 0, length = elems.length;
    for ( ; index < length; index++) { // percorro todos os elementos que tem a class image
        elems[index].style.display = "block";
    } */

    if(firstName.value == ""){
        document.getElementById("erroName").style.display = "block";
        firstName.style.marginBottom = "0px";
        firstName.style.border = "1px solid red";
        firstName.placeholder = "";
        elems[0].style.display = "block";
    }
    else{
        document.getElementById("erroName").style.display = "none";
        firstName.style.marginBottom = "20px";
        firstName.style.border = "1px solid black";
        elems[0].style.display = "none";
    }
    if(lastName.value == ""){
        document.getElementById("erroLast").style.display = "block";
        lastName.style.marginBottom = "0px";
        lastName.style.border = "1px solid red";
        lastName.placeholder = "";
        elems[1].style.display = "block";
    }
    if(email.value == ""){
        document.getElementById("erroEmail").style.display = "block";
        email.style.marginBottom = "0px";
        email.style.border = "1px solid red";
        email.placeholder = "email@example/com";
        elems[2].style.display = "block";

        const style = document.createElement("style");
        style.type = "text/css";
        const {
        sheet
        } = document.head.appendChild(style); // até aqui é para adicionar um novo elemento de estilo ao elemento head.

        const rule = sheet.insertRule("::placeholder {}")
        const placeholderStyle = sheet.rules[rule].style; // até aqui é para inserir uma regra de estilo para o espaço reservado e devolvê-la.
        placeholderStyle.color = "red"; // decide a cor
    }
    if(password.value == ""){
        document.getElementById("erroPassword").style.display = "block";
        password.style.marginBottom = "0px";
        password.style.border = "1px solid red";
        password.placeholder = "";
        elems[3].style.display = "block";
    }
    
}

function validarEmail(){


}
