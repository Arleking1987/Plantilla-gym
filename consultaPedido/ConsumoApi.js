/*//Consumo del API GetAllPedidos
let Api_Url_GetAllPedidos = 'https://localhost:5001/api/Pedidos/GetAllPedidos'
const aplication = document.querySelector('.container')

fetch(Api_Url_GetAllPedidos)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for(let i = 0; i < data.length; i++){
        body += `<tr>
                    <td>${data[i].nombreCliente}</td>
                    <td>${data[i].fechaPedido}</td>
                    <td>${data[i].fechaEntrega}</td>
                    <td>${data[i].estado}</td>                   
                </tr>`
    }

    document.getElementById('data').innerHTML = body
}*/

//Consumo del API GetPedidoById
var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');
var detalle = document.getElementById('Detalle');

const aplication = document.querySelector('.container');
let Api_Url_GetPedidoById = 'https://localhost:5001/api/Pedidos/GetPedidoById2';
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('me diste un click')

    var datos = new FormData(formulario);
    console.log(datos.get('pedido'))

    fetch(Api_Url_GetPedidoById + '?id=' + datos.get('pedido'), {
        method: "POST",
        body: datos,
        body2: datos


    })
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ''
        let body2 = ''

        if (data === 'error') {
            respuesta.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Llena el campo requerido
         </div>`
        } else {
            respuesta.innerHTML = `
            <h2>${datos.get('pedido')}</h2>
            <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha del pedido</th>
                <th scope="col">Fecha de entrega</th>
                <th scope="col">Estado</th>
                <!--<th scope="col">Tipo</th>
                <th scope="col">Medidas</th>
                <th scope="col">Detalle</th>-->
              </tr>
            </thead>
            <tbody id="data">           
            </tbody>
          </table><br>`

            for (let i = 0; i < data.length; i++) {
                body += `<tr>
                    <td>${data[i].nombreCliente}</td>
                    <td>${data[i].fechaPedido}</td>
                    <td>${data[i].fechaEntrega}</td>
                    <td>${data[i].estado}</td>  
                    <!--<td>${data[i].tipo}</td>
                    <td>${data[i].medidas}</td>
                    <td>${data[i].detalle}</td>-->                 
                </tr>`
            }

            document.getElementById('data').innerHTML = body;

            detalle.innerHTML = `
            <h2>Detalles del pedido</h2>
            <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Medidas</th>
                <th scope="col">Detalles</th>                
              </tr>
            </thead>
            <tbody id="data2">           
            </tbody>
          </table><br>`
            for (let i = 0; i < data.length; i++) {

                for (let j = 0; j < data[i].detalles.length; j++) {
                    body2 += `
                <tr>
                <td>${data[i].detalles[j].tipo}</td>
                <td>${data[i].detalles[j].medidas}</td>
                <td>${data[i].detalles[j].detalle}</td>                                   
            </tr>`
                }

            }
            document.getElementById('data2').innerHTML = body2;



        }






    }
    /*.then(res => res.json())       
    .then(data => {
        console.log(data)
                   
        
        
          
        
        if (data === 'error') {
            respuesta.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Llena el campo requerido
         </div>`
        } else {
            respuesta.innerHTML = `
        <div class="alert alert-success" role="alert">
        

        <table class="table table-striped" >
            ${data}
        </div>`
        }
    })*/
})