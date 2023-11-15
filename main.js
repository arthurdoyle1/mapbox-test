L.mapbox.accessToken = 'pk.eyJ1Ijoib21uaXVzbm93IiwiYSI6ImFlZ0pNSXMifQ.VNyOy9GaRZ1cAS2nDTp3tw';

var map = L.mapbox.map('map', 'omniusnow.lcfl92fp')
		.setView([20.547508, -88.951107], 8);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-88.568, 20.683]
    },
    "properties": {
        "title": "Chichén Itzá",
        "description": "<a href=''>Ver ficha completa</a>",
		 "todas": true,
		 "mayap":true,
     "mayat":false,
     "maya":false,
        "icon": {
            "iconUrl": "http://www.iconshock.com/img_jpg/SIGMA/general/jpg/256/pyramid_icon.jpg",
            "iconSize": [30,35], 
            "iconAnchor": [25,25], 
            "popupAnchor": [0, -25], 
            "className": "dot"
			
        },
		'images': [
          [],
          [],
          []
        ]
		
    }
},{
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [-89.353, 21.315]
    },
    "properties": {
        "title": "Xcambó",
        "description": "<a href=''>Ver ficha completa</a>",
		"todas": true,
		 "mayap": false,
			"mayat":true,
      "maya":false,
       "icon": {
            "iconUrl": "http://www.iconshock.com/img_jpg/SIGMA/general/jpg/256/pyramid_icon.jpg",
            "iconSize": [30,35], 
            "iconAnchor": [25,25], 
            "popupAnchor": [0, -25], 
            "className": "dot"
			
        },
		'images': [
          [],
          [],
          []
        ]
		
    }

}];

myLayer.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;
	 
    var images = feature.properties.images
    var slideshowContent = '';
	
marker.setIcon(L.icon(feature.properties.icon));
    for(var i = 0; i < images.length; i++) {
        var img = images[i];
    }
    var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
                            '<h2>' + '<p align=center>'+ feature.properties.title + '</p>'+'</h2>' +
                            '<h5>' + feature.properties.description +'</h5>'
                            
                        '</div>';

    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 400
    });
	
});

        

myLayer.setGeoJSON(geoJson)
.addTo(map);

$('.menu-ui a').on('click', function() {
      var filter = $(this).data('filter');
    $(this).addClass('active').siblings().removeClass('active');
    myLayer.setFilter(function(f) {
      
        return (filter === 'Development') ? true : f.properties[filter] === true;
    });
    return false;
});


