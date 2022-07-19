let queryParams = new URLSearchParams({
    APPID: WEATHERMAP_API_KEY,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
});

mapboxgl.accessToken = MAPBOX_API_KEY;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 8,
    center: [-98.4916, 29.4252]
});

function updateWeather(coords) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?${coords}`
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
        console.log(data);

        let cardInfo = document.querySelector("#cards-div")
        html = ""
        for (let i = 0; i < 5; i++) {
            let date = new Date(data.daily[i].dt * 1000)
            html += `
 <div class="card border-light mb-3" style="width: 16rem; height: 13rem;">
        <div class="card-header">${date.toDateString()}</div>
        <div class="card-body text-secondary">
            <p class="card-text">${data.daily[i].temp.min.toFixed(0)}°F / ${data.daily[i].temp.max.toFixed(0)}°F</p>
            <p>${data.daily[i].weather[0].description}</p>
        </div>
    </div>
`
        }
        cardInfo.innerHTML = html;
    });

}

updateWeather(queryParams);

let marker = new mapboxgl.Marker(
    {
        draggable: true
    }
)
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

function onDragEnd() {
    let longi = marker.getLngLat().lng;
    let latit = marker.getLngLat().lat;
    let draggedMarker = new URLSearchParams({
        APPID: WEATHERMAP_API_KEY,
        lat: latit,
        lon: longi,
        units: "imperial"
    })
    updateWeather(draggedMarker);
}

marker.on('dragend', onDragEnd);

submitBTN.addEventListener("click", moveMarkerToSearchResultCenter);

function moveMarkerToSearchResultCenter(e) {
    e.preventDefault()
    geocode(searchInput.value, MAPBOX_API_KEY)
        .then(function(result) {
            map.setCenter(result);
            map.setZoom(8);
            marker.setLngLat(result)
            updateWeather(marker)
            let longi2 = marker.getLngLat().lng;
            let latit2 = marker.getLngLat().lat;
            let draggedMarker2 = new URLSearchParams({
                APPID: WEATHERMAP_API_KEY,
                lat: latit2,
                lon: longi2,
                units: "imperial"
            })
            updateWeather(draggedMarker2);
        });

}