function grabSomeData() {
  var getJSON = function (url, callback) {
    var xmlhttprequest = new XMLHttpRequest();
    xmlhttprequest.open("GET", url, true);
    xmlhttprequest.responseType = "json";

    xmlhttprequest.onload = function () {
      var status = xmlhttprequest.status;

      if (status == 200) {
        callback(null, xmlhttprequest.response);
      } else {
        callback(status, xmlhttprequest.response);
      }
    };

    xmlhttprequest.send();
  };

  var x = parseInt(document.getElementById("getuserid").value);

  getJSON(
    "https://jsonplaceholder.typicode.com/photos/" + x,
    function (err, data) {
      if (err != null) {
        console.error(err);
      } else {
        var display = `User_ID: ${data.id}, Title: ${data.title}`;
      }

      console.log(display);
      console.log(data);

      document.getElementById("id_result").innerHTML = x + " - " + data.title;
    }
  );
}
