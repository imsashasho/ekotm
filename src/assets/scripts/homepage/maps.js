// if ($(window).width() < 769){
// 	$('.js-navigation-map-header').on('click', function(){
// 		$('.js-navigation-map-main').css('display') === 'none' ? $('.js-navigation-map-main').show() :$('.js-navigation-map-main').hide()
// 	})
// }
// if ($(window).width() >= 769){

// 	$mapScreenHeight = $('.map-screen').outerHeight() - 70;
// 	$jsNavigationMapHeaderHeight = $('.js-navigation-map-header').outerHeight();
// 	$paddingTop = parseInt($('.js-navigation-map-main').css('paddingTop'));
// 	$paddingBottom = parseInt($('.js-navigation-map-main').css('paddingBottom'));
// 	console.log($mapScreenHeight)
// 	console.log($jsNavigationMapHeaderHeight)
// 	console.log($paddingTop)
// 	console.log($paddingBottom)
// 	const navBarHeight = $mapScreenHeight - $jsNavigationMapHeaderHeight - $paddingTop - $paddingBottom;
// 	$('.navigation-map__main').css('height', `${navBarHeight}px`)
// }


// const mainMarkerIcon = '../wp-content/themes/andriyivsky/assets/images/icons/map-big-icon.svg';
// const smallMarkerIcons = {
// 	'school': '../wp-content/themes/andriyivsky/assets/images/map/map-school.svg',
// 	'gym': '../wp-content/themes/andriyivsky/assets/images/map/map-sport.svg',
// 	'cafe': '../wp-content/themes/andriyivsky/assets/images/map/map-cafe.svg',
// 	'market': '../wp-content/themes/andriyivsky/assets/images/map/map-supermarket.svg',
// 	'park': '../wp-content/themes/andriyivsky/assets/images/map/map-park.svg',
// 	'bar': '../wp-content/themes/andriyivsky/assets/images/map/map-bar.svg',
// 	'kindergarten': '../wp-content/themes/andriyivsky/assets/images/map/map-kindergarden.svg',
// 	'museum': '../wp-content/themes/andriyivsky/assets/images/map/map-culture.svg',
// 	'bank': '../wp-content/themes/andriyivsky/assets/images/map/map-bank.svg',
// 	'pharmacy': '../wp-content/themes/andriyivsky/assets/images/map/map-pharm.svg',
// 	'hospital': '../wp-content/themes/andriyivsky/assets/images/map/map-hospital.svg',
// }

// const createMarker = (lat, long, type, text) => {
// 	return {
// 		lat,
// 		long,
// 		type,
// 		icon: smallMarkerIcons[type],
// 		text
// 	}
// }

// const markers = [
// 	createMarker(50.462875, 30.4895521, 'school', 'Gymnasium'),
// 	createMarker(50.4628645, 30.489552, 'school', 'Gymnasium'),
// 	createMarker(50.4628435, 30.489552, 'school', 'Lyceum'),
// 	createMarker(50.462812, 30.4895519, 'school', 'School'),
// 	createMarker(50.4628015, 30.4895519, 'school', 'School'),
// 	createMarker(50.462791, 30.4895518, 'school', 'School'),
// 	createMarker(50.46277, 30.4895518, 'school', 'School'),

// 	createMarker(50.4607351, 30.5170511, 'cafe', 'Restaurant'),
// 	createMarker(50.4629508, 30.5201015, 'cafe', 'Restaurant'),
// 	createMarker(50.462950, 30.5201015, 'cafe', 'Restaurant'),
// 	createMarker(50.4667815, 30.5096084, 'cafe', 'Restaurant'),
// 	createMarker(50.4605606, 30.5201176, 'cafe', 'Restaurant'),
// 	createMarker(50.4592666, 30.5132665, 'cafe', 'Restaurant'),
// 	createMarker(50.4629511, 30.5228624, 'cafe', 'Restaurant'),
// 	createMarker(50.4704753, 30.5036909, 'cafe', 'Restaurant'),
// 	createMarker(50.4607147, 30.5213563, 'cafe', 'Restaurant'),
// 	createMarker(50.4594445, 30.5128392, 'cafe', 'Restaurant'),
// 	createMarker(50.4596934, 30.5211412, 'cafe', 'Restaurant'),
// 	createMarker(50.4626725, 30.5174003, 'cafe', 'Restaurant'),
// 	createMarker(50.4707339, 30.5223097, 'cafe', 'Restaurant'),
// 	createMarker(50.4638613, 30.5072674, 'cafe', 'Restaurant'),

// 	createMarker(50.4629508, 30.51629644, 'cafe', 'Cafe'),
// 	createMarker(50.472448, 30.5019383, 'cafe', 'Cafe'),
// 	createMarker(50.4629508, 30.5162964, 'cafe', 'Cafe'),
// 	createMarker(50.4629487, 30.5162964, 'cafe', 'Cafe'),
// 	createMarker(50.462948, 30.5162964, 'cafe', 'Cafe'),
// 	createMarker(50.4629473, 30.5162964, 'cafe', 'Cafe'),
// 	createMarker(50.4629467, 30.5162964, 'cafe', 'Cafe'),
// 	createMarker(50.462946, 30.5162964, 'cafe', 'Cafe'),
// 	createMarker(50.4629454, 30.5162964, 'cafe', 'Cafe'),

// 	createMarker(50.4629062, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629056, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629049, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629043, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629036, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629029, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629023, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629016, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.4629016, 30.5158167, 'bar', 'Bar'),
// 	createMarker(50.462899, 30.5158167, 'bar', 'Bar'),

// 	createMarker(50.4628977, 30.5158167, 'kindergarten', 'Kindergarten'),
// 	createMarker(50.4720252, 30.5077421, 'kindergarten', 'Kindergarten'),
// 	createMarker(50.4628964, 30.5158167, 'kindergarten', 'Kindergarten'),
// 	createMarker(50.4628938, 30.5158167, 'kindergarten', 'Kindergarten'),
// 	createMarker(50.4628931, 30.5158167, 'kindergarten', 'Kindergarten'),

// 	createMarker(50.4627489, 30.4895517, 'park', 'Park'),
// 	createMarker(50.4627279, 30.4895517, 'park', 'Park'),
// 	createMarker(50.4627174, 30.4895517, 'park', 'Park'),
// 	createMarker(50.4627069, 30.4895516, 'park', 'Park'),
// 	createMarker(50.4626964, 30.4895516, 'park', 'Park'),
// 	createMarker(50.4626859, 30.4895516, 'park', 'Park'),
// 	createMarker(50.4626754, 30.4895516, 'park', 'Park'),
// 	createMarker(50.4627384, 30.4895517, 'park', 'Square'),
// 	createMarker(50.4626649, 30.4895515, 'park', 'Square'),

// 	createMarker(50.4626439, 30.4895515, 'museum', 'Museum'),
// 	createMarker(50.4626334, 30.4895515, 'museum', 'Museum'),
// 	createMarker(50.4626228, 30.4895514, 'museum', 'Museum'),
// 	createMarker(50.4626123, 30.4895514, 'museum', 'Museum'),
// 	createMarker(50.4626018, 30.4895514, 'museum', 'Museum'),
// 	createMarker(50.4625913, 30.4895514, 'museum', 'Museum'),

// 	createMarker(50.4665911, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665905, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665898, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665892, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665885, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665878, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665872, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665865, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4593508, 30.5064208, 'bank', 'Bank'),
// 	createMarker(50.4665852, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665846, 30.5036564, 'bank', 'Bank'),
// 	createMarker(50.4665911, 30.5036564, 'bank', 'Bank'),

// 	createMarker(50.4629062, 30.5158167, 'market', 'Supermarket'),
// 	createMarker(50.4629049, 30.5158167, 'market', 'Supermarket'),
// 	createMarker(50.4629043, 30.5158167, 'market', 'Supermarket'),
// 	createMarker(50.4718544, 30.4982222, 'market', 'Supermarket'),
// 	createMarker(50.4629023, 30.5158167, 'market', 'Supermarket'),
// 	createMarker(50.4629062, 30.5158167, 'market', 'Market'),

// 	createMarker(50.4665628, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665621, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665615, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665608, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665601, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665595, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665588, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665582, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665575, 30.4972713, 'pharmacy', 'Pharmacy'),
// 	createMarker(50.4665569, 30.4972713, 'pharmacy', 'Pharmacy'),

// 	createMarker(50.460564, 30.5206323, 'hospital', 'Hospital'),
// 	createMarker(50.4629066, 30.5223828, 'hospital', 'Hospital'),
// 	createMarker(50.4536839, 30.5223828, 'hospital', 'Hospital'),

// 	createMarker(50.4536773, 30.5074746, 'gym', 'Gym'),
// 	createMarker(50.4536747, 30.5074746, 'gym', 'Gym'),
// 	createMarker(50.4536721, 30.5074746, 'gym', 'Gym'),
// 	createMarker(50.4536694, 30.5074746, 'gym', 'Gym'),
// 	createMarker(50.4728213, 30.4938357, 'gym', 'Gym'),
// 	createMarker(50.4715777, 30.5002364, 'gym', 'Gym'),

// ]


// let map;
// let googleMarkersArray = [];
// let infoWindow;

// const mapStyle = [
// 	{
// 			"featureType": "all",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 					{
// 							"saturation": 36
// 					},
// 					{
// 							"color": "#000000"
// 					},
// 					{
// 							"lightness": 40
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "all",
// 			"elementType": "labels.text.stroke",
// 			"stylers": [
// 					{
// 							"visibility": "on"
// 					},
// 					{
// 							"color": "#000000"
// 					},
// 					{
// 							"lightness": 16
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "all",
// 			"elementType": "labels.icon",
// 			"stylers": [
// 					{
// 							"visibility": "off"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "administrative",
// 			"elementType": "geometry.fill",
// 			"stylers": [
// 					{
// 							"lightness": 20
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "administrative",
// 			"elementType": "geometry.stroke",
// 			"stylers": [
// 					{
// 							"color": "#000000"
// 					},
// 					{
// 							"lightness": 17
// 					},
// 					{
// 							"weight": 1.2
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "administrative.province",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 					{
// 							"color": "#e3b141"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "administrative.locality",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 					{
// 							"color": "#e0a64b"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "administrative.locality",
// 			"elementType": "labels.text.stroke",
// 			"stylers": [
// 					{
// 							"color": "#0e0d0a"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "administrative.neighborhood",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 					{
// 							"color": "#d1b995"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "landscape",
// 			"elementType": "geometry",
// 			"stylers": [
// 					{
// 							"color": "#000000"
// 					},
// 					{
// 							"lightness": 20
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "poi",
// 			"elementType": "geometry",
// 			"stylers": [
// 					{
// 							"color": "#000000"
// 					},
// 					{
// 							"lightness": 21
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road",
// 			"elementType": "labels.text.stroke",
// 			"stylers": [
// 					{
// 							"color": "#12120f"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.highway",
// 			"elementType": "geometry.fill",
// 			"stylers": [
// 					{
// 							"lightness": "-77"
// 					},
// 					{
// 							"gamma": "4.48"
// 					},
// 					{
// 							"saturation": "24"
// 					},
// 					{
// 							"weight": "0.65"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.highway",
// 			"elementType": "geometry.stroke",
// 			"stylers": [
// 					{
// 							"lightness": 29
// 					},
// 					{
// 							"weight": 0.2
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.highway.controlled_access",
// 			"elementType": "geometry.fill",
// 			"stylers": [
// 					{
// 							"color": "#f6b044"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.arterial",
// 			"elementType": "geometry",
// 			"stylers": [
// 					{
// 							"color": "#4f4e49"
// 					},
// 					{
// 							"weight": "0.36"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.arterial",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 					{
// 							"color": "#c4ac87"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.arterial",
// 			"elementType": "labels.text.stroke",
// 			"stylers": [
// 					{
// 							"color": "#262307"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.local",
// 			"elementType": "geometry",
// 			"stylers": [
// 					{
// 							"color": "#a4875a"
// 					},
// 					{
// 							"lightness": 16
// 					},
// 					{
// 							"weight": "0.16"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "road.local",
// 			"elementType": "labels.text.fill",
// 			"stylers": [
// 					{
// 							"color": "#deb483"
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "transit",
// 			"elementType": "geometry",
// 			"stylers": [
// 					{
// 							"color": "#000000"
// 					},
// 					{
// 							"lightness": 19
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "water",
// 			"elementType": "geometry",
// 			"stylers": [
// 					{
// 							"color": "#0f252e"
// 					},
// 					{
// 							"lightness": 17
// 					}
// 			]
// 	},
// 	{
// 			"featureType": "water",
// 			"elementType": "geometry.fill",
// 			"stylers": [
// 					{
// 							"color": "#080808"
// 					},
// 					{
// 							"gamma": "3.14"
// 					},
// 					{
// 							"weight": "1.07"
// 					}
// 			]
// 	}
// ]

// const drawMarkers = (markersArray, map) => {
// 	markersArray.forEach(marker => {
// 		const currentMarker = new google.maps.Marker({
// 			position: { lat: marker.lat, lng: marker.long },
// 			map: map,
// 			category: marker.type,
// 			text: marker.text,
// 			icon: marker.icon
// 		});

// 		googleMarkersArray.push(currentMarker)
// 	})

// 	// Обработчик кликов на маркер
// 	googleMarkersArray.forEach(googleMarker => {
// 		google.maps.event.addListener(googleMarker, 'click', function(){
// 			infoWindow.setContent(googleMarker.text); // установка нужного контента в всплывайку
//       		infoWindow.open(map, googleMarker);
// 			map.panTo(this.getPosition());
// 		})
// 	})
// }

// const resetMarkers = () => {
// 	googleMarkersArray.forEach(marker => {
// 		marker.setMap(null)
// 	})
// 	googleMarkersArray = []
// }

// function initMap() {
//   map = new google.maps.Map(document.getElementById("gmap"), {
//     center: { lat: 50.4629066, lng: 30.5223828 },
// 		zoom: 15,
// 		styles: mapStyle,
// 		disableDefaultUI: true
// 	});

// 	infoWindow = new google.maps.InfoWindow({
//     content: '',
//     maxWidth: 200
// 	});

// 	const mainMarker = new google.maps.Marker({
//     position: { lat: 50.4629066, lng: 30.5223828 },
//     map: map,
// 		icon: mainMarkerIcon
// 	});

// 	drawMarkers(markers, map);

// 	const allNavButtons = document.querySelectorAll('.js-button-map-navigation');

// 	allNavButtons.forEach(item => {
// 		item.addEventListener('click', function(){
// 			const btnType = this.dataset.type;
// 			const newMarkersArray = this.dataset.type === 'all' ? markers : markers.filter(marker => marker.type === btnType);

// 			resetMarkers();
// 			drawMarkers(newMarkersArray, map);
// 		})
// 	})
// }

// initMap();

// $("#gmap").on("wheel mousewheel DOMMouseScroll", function(e){
// 	e.preventDefault();
// });

// $('.map__screen-third__navigation').on('mouseenter', function(){
// 	window.locoScroll.stop();
// })
// $('.map__screen-third__navigation').on('mouseleave', function(){
// 	window.locoScroll.start();
// })

// document.addEventListener('keydown', function(e){
// 	if (e.key === 'Control'){
// 		window.locoScroll.stop();
// 	}
// });
// document.addEventListener('keyup', function(e){
// 	if (e.key === 'Control'){
// 		window.locoScroll.start();
// 	}
// });
