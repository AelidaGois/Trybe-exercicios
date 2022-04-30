let botaoEnviar = document.getElementById('enviar')

botaoEnviar.addEventListener('click', function(event){
    event.preventDefault();
});


let imagens = document.getElementById("checkbox-2").value;
imagens.addEventListener('click', function enviarImagens(){
if(imagens.value === true){
    
    let novoInput = document.createElement('input');
    novoInput.type = 'file';
    novoInput.name = 'enviar-fotos';
    novoInput.accept="image/png, image/jpeg";
    novoInput.appendChild("checkbox-2");
}

} );
