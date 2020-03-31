var listElement = document.querySelector('#cliente ul');
var inputElement = document.querySelector('#cliente input');
var buttonElement = document.querySelector('#cliente button');



var clientes = [
    'Paulo',
    'Roberta',
    'Joao'

];
// 'essa funcao percore a lista dos clientes'

function renderClientes() {
    for (lista of clientes) {
        var listaElement = document.createElement('li');
        var listaText = document.createTextNode(lista);

        listaElement.appendChild(listaText);
        listElement.appendChild(listaElement);
    }
}

renderClientes();


function addCliente() {
    var todoText = inputElement.value;

    clientes.push(listaText);
    inputElement.value = '';
    renderClientes();
}

buttonElement.onclick = addCliente;
