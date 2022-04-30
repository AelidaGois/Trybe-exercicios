let botaoEnviar = document.getElementById('enviar')

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();
});


let imagens = document.getElementById("checkbox-2");
imagens.addEventListener('change', enviarImagens);


function enviarImagens(e){
    console.log(e.target);
    if(e.target.checked){
   
        let novoInput = document.createElement('input');
        novoInput.type = 'file';
        novoInput.name = 'enviar-fotos';
        novoInput.accept="image/png, image/jpeg";
        let fileDiv = document.getElementById('file-div');
        fileDiv.appendChild(novoInput);
        
    }
}