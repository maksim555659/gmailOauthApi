document.onreadystatechange = init;

function init(){
    if(document.readyState === 'complete'){
        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: '585715093898-32c8ahpkv4jmefeksqff4ev8eionufes.apps.googleusercontent.com'
            });
            console.log('inited');
        });
    }
 }