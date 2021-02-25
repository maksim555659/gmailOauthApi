function init() {
  gapi.load('auth2', function() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    gapi.auth2.init(
        {
            client_id: '585715093898-32c8ahpkv4jmefeksqff4ev8eionufes.apps.googleusercontent.com'
        }
    );
    console.log('inited');
  });
}
init();