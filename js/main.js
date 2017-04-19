function initialize(){

	var mapProp = {
	center: new google.maps.LatLng(37.788890, -122.398104),
	zoom: 5,
	mapTypeId: google.maps.MapTypeId.ROADMAP
}
	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)

	var marker = new google.maps.Marker({
		position:mapProp.center

	})

	marker.setMap(map)

}
	google.maps.event.addDomListener(window, 'load', initialize )

