function showList(origem) {
    let list = document.getElementsByClassName('container-materias-geral');
    
    switch (origem) {
        case 'div-fundamental':
            alterarVisibilidadeLista(list[0]);
        break;

        case 'div-medio':
            alterarVisibilidadeLista(list[1]);
        break;

        case 'div-superior':
            alterarVisibilidadeLista(list[2]);
        break;
    }

}

function alterarVisibilidadeLista(lista) {
    let estado = lista.style.visibility
    
    if (estado === 'visible') {
        lista.style.visibility = 'hidden';
    } else {
        lista.style.visibility = 'visible';
    }
}
