let inputNombre = document.getElementById('nombre')
let inputDireccion = document.getElementById('direccion')
let inputNumeroTel = document.getElementById('numeroTel')
let inputCoordenadaX = document.getElementById('coordenadaX')
let inputCoordenadaY = document.getElementById('coordenadaY')
let inputCategoria = document.getElementById('categoria')


$('#botonAgregar').click(function(){
    console.log(coordenadaX.value)
    if (!coordenadasValidas(coordenadaX.value, coordenadaY.value)){
        alert("Las coordenadas que ingresaste no son válidas. \nRecuerda: \nvalores posibles Longitud -180 < x < 180 ; Latitud -90 < y <  90 ");
        return;
    } else {
        let elemento = document.createElement('div');
        elemento.className = 'marker';
        let marker = new mapboxgl.Marker(elemento)
        .setLngLat({
        lng: inputCoordenadaX.value,
        lat: inputCoordenadaY.value,
        })
        .addTo(map);
    }
})

function coordenadasValidas(coordenadaX, coordenadaY){
    let coordenadaXValida = (-180 < coordenadaX) && (coordenadaX < 180);
    let coordenadaYValida = (-90 < coordenadaY) && (coordenadaY < 90);
    return coordenadaXValida && coordenadaYValida;
}