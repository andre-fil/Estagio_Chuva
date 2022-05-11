function mostrar(){
    document.getElementById("escondido").style.display = 'block';
    document.getElementById("sumir").style.display = 'none';
};
/*
function esconder(){
    document.getElementById("escondido").style.display = 'none';
    document.getElementById("sumir").style.display = 'block';
}
*/

function substituirDiv(){
    document.getElementById("aparecer_div").style.display = 'block';
    document.getElementById("sumir_div").style.display = 'none';
};

function Enviar(){
    document.getElementById("after_envio").style.display = 'block';
    document.getElementById("aparecer_div").style.display = 'none';
}

function enviarNova(){
    document.getElementById("aparecer_div").style.display = 'block';
    document.getElementById("after_envio").style.display = 'none';
};