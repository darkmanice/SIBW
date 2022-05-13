var comments_displayed = false;
forbiddenWord = "";

var palabras_prohibidas =[
    "palabra",
    "prohibida",
    "censurada",
    "no",
    "permitida",
    "bloquea",
    "asterisco"
];

// Muestra o no el div que tiene los comentarios y el formulario ( y desplaza el boton de comentarios)
function toggleComments() {
    var comments_button = document.getElementById('comment-button');
    var comments = document.getElementById('comment-bar');
    if(comments_displayed){
        comments.classList.remove('comment-bar-active');
        comments_displayed = false;
        comments_button.classList.remove('active-comment-button');
    } else {
        comments.classList.add('comment-bar-active');
        comments_displayed = true;
        comments_button.classList.add('active-comment-button');
    }
}


// Añade el comentario que se haya dejado en el formulario
function addComment(event){
    event.preventDefault();
    var name = document.getElementById('name');
    var message = document.getElementById('message');
    var email = document.getElementById('email');
    if(itsEmptyField(name) || itsEmptyField(email) || itsEmptyField(message)) {
        alert("Hay un error con algún campo");
        return false;
    }

    if(!emailCorrecto(email)){
        alert("El e-mail no es válido");
        return false;
    }

    var comments = document.getElementsByClassName('comment-section');
    var date = (new Date()).toLocaleString('es-ES',{timeZone:'Europe/Madrid'});

    comments[0].insertAdjacentHTML('beforeend', "\n" +
    "<div class=\"comment\">\n" +
    "   <h5><b>\n" +
    "               "+name.value+"\n" +
    "       </a>\n" +
    "   </b></h5>\n" +
    "   <span class=\"comment-subheading\">Comenta: <strong>"+date+"</strong></span>\n" +
    "   <p class=\"comment-text\">\n" +
    "       "+message.value+"\n" +
    "   </p>\n" +
    "</div>");

    return false;
}

// Comprueba si un campo está vacio
function itsEmptyField(field){
    var value = field.value;
    var vacio = false;

    if(value.trim() == "" || value === null || value === undefined){
        vacio = true;
    }
    
    return vacio;
}

// Devuelve true si el email tiene una forma válida y false en caso contrario
function emailCorrecto(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.value).toLowerCase());
}

// Almacena cada tecla pulsada:
//              1.- Si la tecla pulsada no es el espacio, almacena la tecla
//              2.- Si la tecla pulsada es el espacio, comprueba el string que haya almacenado
function addStringtoForbidden(event){
    if(event.keyCode != 32){
        forbiddenWord += String.fromCharCode(event.keyCode).toLowerCase();
    }
    else{
        comprobarPalabrasProhibidas(forbiddenWord);
        forbiddenWord = "";
    }
}

// Comprueba si la palabra pertenece a las palabras prohibidas
function comprobarPalabrasProhibidas(word){
    var i;
    for(i = 0; i < palabras_prohibidas.length; i++){
        if(word == palabras_prohibidas[i]  ){
            censuraPalabras(word);
        }
    }
}

// Cambia la palabra por una cadena de * de la misma longitud que la palabra prohibida
function censuraPalabras(word){
    var text = document.getElementById("message");

    var nuevaPalabra = "";
    for (var i = 0; i < word.length; i++){
        nuevaPalabra += "*";
    }

    var res = text.value.replace(word, nuevaPalabra);

    text.value = res;
}

function socialFB() {
  alert("Se publicará en Facebook el siguiente mensaje:");
}

function socialTW() {
  alert("Se publicará en Facebook el siguiente mensaje:");
}


var loginModal = document.getElementById('login-modal');

// Get the button that opens the modal
var loginBtn = document.getElementById("login-btn");

// Get the <span> element that closes the modal
var loginSpan = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loginSpan.onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}

var signInModal = document.getElementById('sign-in-modal');
var signInBtn = document.getElementById("sign-in-btn");
var signInSpan = document.getElementsByClassName("close")[1];

signInBtn.onclick = function() {
    signInModal.style.display = "block";
    loginModal.style.display = "none";
}

signInSpan.onclick = function() {
    signInModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == signInModal) {
      signInModal.style.display = "none";
    }
}
