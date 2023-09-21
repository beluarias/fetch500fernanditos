const url = "https://crudcrud.com/api/76ff1fb801fa40dfbba1d20bff04c749";

function enviar(){

    let name = document.getElementById('nombre').value;
    let age =  document.getElementById('edad').value;
    //EJEMPLO DE FETCH CON POST
    fetch(url,{
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({ // Cuerpo de la petición (request)
            nombre : name,
            edad: age
        })
    })
    .then(response => response.json())
    .then(data => { alert ("Enviado!!!");
    document.getElementById('nombre').value="";
    document.getElementById('edad').value="";
    })
    //lista();
}
// EJEMPLO DE FETCH CON GET
var botones = []
function lista(){
    let contador = 0
    var datas = [];
    fetch(url)
    // fetch me conecta con el ENDPOINT
    .then(response=>response.json())
    .then (datos => {
        let filas="";
        
        for (let dato of datos){
            botones = []
            // let td = document.createElement("td");
            // let textoNombre = document.createElement("p");
            // td.appendChild(textoNombre);
            filas += "<tr> <td>" + dato.nombre + "</td><td>"+ dato.edad +"</td><td> <button onclick='editarin()'name='boton' id='" + contador + "'>editar</button></td></tr>";
            datas.push([dato.nombre, dato.edad]);
            botones.push(document.getElementsByName("boton"))
            contador++
         }
 
         document.getElementById('tabla').innerHTML=filas
    })
};

//EJEMPLO DE FETCH DELETE (toda la lista)
function eliminarLista() {
    fetch(url)
    .then(response=>response.json())
    .then (datos => {
        for (let i = 0; i < datos.length; i++) {
            let id = datos[i]._id;
            fetch(url + '/' + id, {headers: {"Content-Type": "application/json; charset=utf-8"}, method:'delete'})
        }
        alert('Listo!')
    })
}

// EJEMPLO DE FECTH DELETE (ULTIMO INGRESADO)
function eliminarAnterior() {
    fetch(url)
    .then(response => response.json())
    .then(datos => {
        let idUltimo = datos[datos.length-1]._id;
        fetch(url +'/' + idUltimo, {headers: {'Content-Type': 'application/json; charset=utf-8'}, method:'delete'})
        alert('Listo!')
    })
}

//EJEMPLO DE FETCH PUT

//FETCH PUT
function cambiar(){
    fetch(url)
    .then(response=>response.json())
    .then (datos => {
        let idUltimo = datos[datos.length-1]._id;
        let name = document.getElementById('nombre').value;
        let age = document.getElementById('edad').value;
        fetch(url + '/' + idUltimo, {headers: {'Content-Type': 'application/json; charset=utf-8'}, method:'put', body: JSON.stringify({
            nombre: name,
            edad: age
        })
    })
        alert('Listo!')
        document.getElementById('nombre').value='';
        document.getElementById('edad').value='';
    })
};


//Fetch 

function editarin() {
    fetch(url)
    .then(response=>response.json())
    .then (datos => {
        let name = document.getElementById('nombre').value;
        let age = document.getElementById('edad').value;
        fetch(url, {headers: {'Content-Type': 'application/json; charset=utf-8'}, method:'put', body: JSON.stringify({
            nombre: name,
            edad: age
        })
    })
        alert('Listo!')
        document.getElementById('nombre').value='';
        document.getElementById('edad').value='';
    })
    for (let i = 0; i < botones[0].length; i++) {
        let id = botones[0][i].getAttribute("id");
        console.log(botones[0][i].getAttribute("id"))
        if (i == id){
            break
        }
    }
}
