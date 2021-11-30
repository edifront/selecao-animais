
function trocarimagem(filename,animalname){
    document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegaranimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert ("o animal é:"+animal);
}
