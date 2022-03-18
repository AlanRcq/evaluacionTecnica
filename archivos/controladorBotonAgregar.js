let inputNombre = document.getElementById('nombre')
let inputDireccion = document.getElementById('direccion')
let inputNumeroTel = document.getElementById('numeroTel')
let inputCoordenadaX = document.getElementById('coordenadaX')
let inputCoordenadaY = document.getElementById('coordenadaY')
let inputCategoria = document.getElementById('categoria')




$('#botonAgregar').click(function(){
    if (!datosCompletados()){
        alert("Hay datos sin completar");
    } else if (!coordenadasValidas(coordenadaX.value, coordenadaY.value)){
        alert("Las coordenadas que ingresaste no son válidas. \nRecuerda que la longitud x debe ser tal que -180 < x < 180 y la latitud y debe ser tal que -90 < y < 90");
        return;
    } else {
        agregarUbicacion();
        map.easeTo({center: [inputCoordenadaX.value, inputCoordenadaY.value]});
    }
})

function agregarUbicacion(){
    let elemento = document.createElement('div');
    elemento.className = 'marker';
    let marker = new mapboxgl.Marker(elemento)
    let markerPopup = new mapboxgl.Popup();
    markerPopup.setHTML(htmlPopup());
    marker.setPopup(markerPopup);
    marker.setLngLat({
        lng: inputCoordenadaX.value,
        lat: inputCoordenadaY.value,
    })
    marker.addTo(map);
    }

function coordenadasValidas(){
    let coordenadaXValida = (-180 < inputCoordenadaX.value) && (inputCoordenadaX.value < 180);
    let coordenadaYValida = (-90 < inputCoordenadaY.value) && (inputCoordenadaY.value < 90);
    return coordenadaXValida && coordenadaYValida;
}

function datosCompletados(){
    let nombreCompletado = inputNombre.value != "";
    let direccionCompletada = inputDireccion.value != "";
    let telefonoCompletado = inputNumeroTel.value != "";
    let categoriaCompletada = inputCategoria.value != "Seleccionar";
    return (nombreCompletado && direccionCompletada && telefonoCompletado && categoriaCompletada);
}

function htmlPopup(){
    let labelNombre = '<b>Nombre: </b><label>' + inputNombre.value + '</label><br>';
    let labelDireccion = '<b>Direccion: </b><label>' + inputDireccion.value + '</label><br>';
    let labelTelefono= '<b>Teléfono: </b><label>' + inputNumeroTel.value + '</label><br>';
    let labelCoordenadas = '<b>(X, Y): </b><label>' + inputCoordenadaX.value + ", " + inputCoordenadaY.value+ '</label><br>';
    let labelCategoria = '<b>Categoría: </b><label>' + inputCategoria.value + '</label>';
    return labelNombre + labelDireccion + labelTelefono + labelCoordenadas + labelCategoria;
}
