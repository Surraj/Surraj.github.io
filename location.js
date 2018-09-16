
  function  getlocation(){
if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position){
        var lat1 = position.coords.latitude;
        var lon1 = position.coords.longitude;
        var latFAT = 3.206706;
        var lonFAT = 101.7114712;
        var distanceFAT = haversine(lat1,lon1,latFAT,lonFAT);
        var latCHA = 3.1401055;
        var lonCHA = 101.7379074;
        var distanceCHA = haversine(lat1,lon1,latCHA,lonCHA);
        var laAAS = 3.1583603;
        var loAAS = 101.7483651;
        var distanceAAS = haversine(lat1,lon1,laAAS,loAAS);
        document.getElementById("distanceFAT").textContent = "Distance: "+distanceFAT.toFixed(2) + " km"
        document.getElementById("distanceCHA").textContent = "Distance: "+distanceCHA.toFixed(2) + " km"
        document.getElementById("distanceAAS").textContent = "Distance: "+distanceAAS.toFixed(2) + " km"
        })
        }

        function haversine(lat1,lon1,lat2,lon2){
          Number.prototype.toRad = function() {
              return this * Math.PI / 180;
              }

              var R = 6371; // km 
              //has a problem with the .toRad() method below.
              var x1 = lat2-lat1;
              var dLat = x1.toRad();  
              var x2 = lon2-lon1;
              var dLon = x2.toRad();  
              var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                        Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                        Math.sin(dLon/2) * Math.sin(dLon/2);  
              var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
              var d = R * c; 

             console.log(d)
             return d;
            }
          };