function mostrar(){
    document.getElementById("escondido").style.display = 'block';
    document.getElementById("sumir").style.display = 'none';
};


function substituirDiv(){
    document.getElementById("aparecer_div").style.display = 'block';
    document.getElementById("sumir_div").style.display = 'none';
};

function Enviar(){
    document.getElementById("after_envio").style.display = 'block';
    document.getElementById("aparecer_div").style.display = 'none';
    document.getElementById("after_coment").style.display = 'block';
}

function enviarNova(){
    document.getElementById("aparecer_div").style.display = 'block';
    document.getElementById("after_envio").style.display = 'none';
    document.getElementById("after_coment").style.display = 'none';
   
};

function apareceResposta(){
    
    if( document.getElementById("resposta_complemento").style.display == 'block'){
        document.getElementById("resposta_complemento").style.display = 'none';
        document.getElementById("discussao").style.height = '670px';
    } else{ document.getElementById("resposta_complemento").style.display = 'block';
    document.getElementById("discussao").style.height = '1250px';
    }

    
    
  
}



