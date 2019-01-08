

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCykaJt_fkD63_gQnssJiQsYlnXqP1TGeg",
    authDomain: "diariosargentinos-59c08.firebaseapp.com",
    databaseURL: "https://diariosargentinos-59c08.firebaseio.com",
    projectId: "diariosargentinos-59c08",
    storageBucket: "diariosargentinos-59c08.appspot.com",
    messagingSenderId: "600979285543"
  };
  firebase.initializeApp(config);

function abrirIframe(url){
    document.getElementById("contenedor").innerHTML = `<iframe width="100%" height="100%" src='${url}'></iframe>`
}