const LONGITUD_CENTRO = 2.294481;
const LATITUD_CENTRO = 48.858372;

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbnJjcSIsImEiOiJjbDB1ZXFoeHMwbHNqM2NueWlkMHhuZHA0In0.TkujbDWLKFEh7SQZNZrgEg';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15,
    center: [LONGITUD_CENTRO, LATITUD_CENTRO]
});
