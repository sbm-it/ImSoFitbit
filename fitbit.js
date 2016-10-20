
var getProfile = function(config, parms) {

  return new Promise(function (resolve, reject) {
    //GET https://api.fitbit.com/1/user/[user-id]/profile.json
    var settings = {
      "async": true,
      "url": config.apiFitbit + "/1/user/" + parms.user_id + "/profile.json",
      "method": "GET",
      "headers": {
        "Authorization" : parms.token_type + " " + parms.access_token
      }
    };
    fetch(settings)
    .then(function(profile) {
      resolve(profile);
    }, function(error) {
      reject(error);
    });
  });

}

var showProfile = function(profile) {

  return new Promise(function (resolve, reject) {

console.log('profile - ', profile);
    var tmpHtml = '';
    tmpHtml += "<div class='row'>";
    tmpHtml += "<div class='col-sm-4'>";
    tmpHtml += "<img src='" + profile.user.avatar + "' alt='avatar' />";
    tmpHtml += "</div>";
    tmpHtml += "<div class='col-sm-8'>";
    tmpHtml += "Welcome, " + profile.user.fullName;
    tmpHtml += "</div>";
    tmpHtml += "</div>";

    resolve(tmpHtml);
  });

}
