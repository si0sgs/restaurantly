//window.onload = geoloc;

function geoloc() {
   
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  else {
      alert("Lo sentimos, tu dispositivo no admite la geolocaización");
    }
  }

  function showPosition(position){
    latitud=position.coords.latitude;
    longitud=position.coords.longitude;

    let arregloLL = new Array();
    arregloLL[0] = latitud;
    arregloLL[1] = longitud;
    alert("Latitud: "+ latitud + "Longitud: "+longitud );

   // "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"

    return arregloLL;

  }