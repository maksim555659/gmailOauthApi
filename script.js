function init() {
  gapi.load('auth2', function() {
    /* Ready. Make a call to gapi.auth2.init or some other API */
    let inf = {
        client_id: '585715093898-32c8ahpkv4jmefeksqff4ev8eionufes.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        redirect_uri: 'https://maksim555659.github.io/index.html'
    }
    gapi.auth2.init(inf)
  });
}