const LONGITUD_CENTRO = -58.370117;
const LATITUD_CENTRO = -34.596119;

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbnJjcSIsImEiOiJjbDB1ZXFoeHMwbHNqM2NueWlkMHhuZHA0In0.TkujbDWLKFEh7SQZNZrgEg';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15,
    center: [LONGITUD_CENTRO, LATITUD_CENTRO]
});




-58.37101652816466,-34.59601914417224