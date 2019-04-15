 async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpuhPAXBFKTzK1P7n9vSW87mZtZBSG408&libraries=places&callback=showMap">


        var lati = 0;
        var longi = 0;
        var bando;

        function searchMap(loaidiadiem) {
            if (!loaidiadiem || loaidiadiem == '')
                return;
            var request = {
                location: {
                    lat: lati,
                    lng: longi
                }, // Búsqueda de inicio de coordenadas
                radius: '1000', // ~ rango de búsqueda 1000m
                type: loaidiadiem
            };
            var service = new google.maps.places.PlacesService(bando);
            service.nearbySearch(request, showPlaces); // Cuando los datos de búsqueda regresan, llame a la función showPlaces
        }
        var arrMarkers = []
        var infowindow;

        function showPlaces(result, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK && result && result.length > 0) {
                // Cuando hay una nueva lista de ubicaciones -> eliminar la ubicación anterior
                for (i in arrMarkers)
                    arrMarkers[i].setMap(null);
                arrMarkers = [];
                // Crear marcadores (puntos) que marcan las ubicaciones encontradas
                for (i in result) {
                    var place = result[i];
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    console.log(place);
                    var marker = new google.maps.Marker({
                        map: bando,
                        icon: image,
                        title: place.name,
                        content: "<strong>" + place.name + "</strong><br />" + place.vicinity,
                        position: place.geometry.location,
                        data: place
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.setContent(this.content)
                        infowindow.open(bando, this);
                        TimDuong(this.data);
                    });
                    arrMarkers.push(marker);
                }
            }
        }
        var ddisplay

        function TimDuong(place) {
            var dservice = new google.maps.DirectionsService();
            if (ddisplay)
                ddisplay.setMap(null);
            ddisplay = new google.maps.DirectionsRenderer();
            ddisplay.setMap(bando);
            var request = {
                origin: {
                    lat: lati,
                    lng: longi
                },
                destination: place.geometry.location,
                travelMode: 'WALKING',
                provideRouteAlternatives: true
            };
            dservice.route(request, function(result, status) {
                if (status == "OK") ddisplay.setDirections(result);
            });
        }

        function showMap() {
            infowindow = new google.maps.InfoWindow();
            window.navigator.geolocation.getCurrentPosition(function(pos) {
                lati = parseFloat(pos.coords.latitude);
                longi = parseFloat(pos.coords.longitude);
                $('#currentPosition').text(lati + ',' + longi);
                bando = new google.maps.Map(document.getElementById('map'), {
                    center: {
                        lat: lati,
                        lng: longi
                    }, // Obtener el centro del mapa en las coordenadas actuales
                    zoom: 15
                });
                var diemtrungtam = new google.maps.Marker({
                    position: {
                        lat: lati,
                        lng: longi
                    },
                    map: bando
                }); // Crea un punto en el mapa
            });

        }