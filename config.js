(function() {

  var config = {
    urlFitbit: 'https://www.fitbit.com',
    clientId: '2282PN',
    response: 'token',
    apiFitbit: 'https://api.fitbit.com',
    urlRedirect: encodeURIComponent((location.origin+location.pathname).slice(0,-1)),
    urlApiEndPoint: 'https://api.fitbit.com/1/user/-/profile.json',
    urlAuthorize: 'https://www.fitbit.com/oauth2/authorize',
    urlRefreshToken: 'https://api.fitbit.com/oauth2/token',
    scope: ['activity','heartrate','location','profile','settings','sleep','social']
  };
  var parms = {};

  var login = function() {
    // log into fitbit
    location.href = config.urlAuthorize + "?client_id=" + config.clientId + "&redirect_uri=" + config.urlRedirect + "&scope=" + config.scope.join('%20') + "&response_type=" + config.response;
  };

  if (location.hash.length == 0) {
    login();
  } else {
    // parse return Querystring
    var tmpParms = location.hash.slice(1).split('&');
    tmpParms.forEach(function(p) {
        p = p.split('=');
        parms[p[0]]=p[1];
    });

    var div = document.getElementById("divFitbit");

    getProfile(config, parms)
    .then(function(profile) {
//      console.log('profile - ', profile);
      return showProfile(JSON.parse(profile));
    })
    .then(function(html) {
      div.innerHTML = html;
    });
  }


}());
