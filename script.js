document.onreadystatechange = init;

var GoogleAuth = null;
var GoogleUser = null;
let authButton = document.getElementById('auth');

authButton.onclick = auth;

function init(){
    if(document.readyState === 'complete'){
        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: '585715093898-32c8ahpkv4jmefeksqff4ev8eionufes.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/userinfo.profile'
            });
            console.log('inited');
            GoogleAuth = gapi.auth2.getAuthInstance();
            GoogleAuth.then(onInit, onError);
        });
    }
 }

 function auth(){
    GoogleAuth.signIn();
    GoogleUser = GoogleAuth.currentUser.get();
    console.log(GoogleUser);
}

 function onError(){
    console.log('GoogleAuth initialization error!');
 }

 function onInit(){
    console.log('GoogleAuth fully initialized');
 }
