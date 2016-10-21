---
---

var places = {
  "features": [
    {% for place in site.data.places %}
    {
      "type": "Feature",
      "properties": {
        "place_name": "{{place.address}}",
        "title": "{{place.title}}",
        {% if place.notes %}"notes": "{{place.notes}}",{% endif %}
        "icon": "{{place.icon}}"
      },
      "geometry": {
        "coordinates": [
          {{place.coordinates[0]}},{{place.coordinates[1]}}
        ],
        "type": "Point"
      }
    }{% unless forloop.last %},{% endunless %}{% endfor %}
  ],
  "type": "FeatureCollection"
}

mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0eWRlY29yYWgiLCJhIjoiY2ltNnN2eTQ3MDA2cHZibTBwNXE3cm16biJ9.H-aQUqtQpLitV6Phft8uYw';

var filterGroup = document.getElementById('filter-group');
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-75.1640286,39.9489754],
  zoom: 14.2
});

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});

map.on('load', function() {
  // Add a GeoJSON source containing place coordinates and information.
  map.addSource("places", {
    "type": "geojson",
    "data": places
  });

  var allPlaces = [];

  places.features.forEach(function(feature) {
    var symbol = feature.properties['icon'];
    var layerID = 'poi-' + symbol;
    allPlaces.push(layerID)

    // Add a layer for this symbol type if it hasn't been added already.
    if (!map.getLayer(layerID)) {
      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "places",
        "layout": {
          "icon-image": symbol + "-15",
          "icon-allow-overlap": true
        },
        "filter": ["==", "icon", symbol]
      });

      // Add checkbox and label elements for the layer.
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.id = layerID;
      input.checked = true;
      filterGroup.appendChild(input);

      var label = document.createElement('label');
      label.setAttribute('for', layerID);
      if (symbol == 'theatre') label.textContent = 'entertainment';
      else label.textContent = symbol;
      label.className = 'small';
      if (symbol == 'star') label.className += ' hide'
      filterGroup.appendChild(label);

      // When the checkbox changes, update the visibility of the layer.
      input.addEventListener('change', function(e) {
        map.setLayoutProperty(layerID, 'visibility',
        e.target.checked ? 'visible' : 'none');
      });
    }
  });


  map.on('mousemove', function(e) {
    var features = map.queryRenderedFeatures(e.point, { layers: allPlaces });
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
      popup.remove();
      return;
    }

    var feature = features[0];

    var content = '<h3>' + feature.properties.title + '</h3><br>';
    if (feature.properties.notes) content += feature.properties.notes + '<br>';
    content += '<address>' + feature.properties.place_name + '</address>';

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(feature.geometry.coordinates)
    .setHTML(content)
    .addTo(map);
  });

});

map.scrollZoom.disable();