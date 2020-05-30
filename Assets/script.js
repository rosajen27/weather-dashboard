window.onload = function() {

// Current Weather Function

// This .on("click") function will trigger the AJAX Call
 $("#search-button").on("click", function(event) {
    event.preventDefault();

    // grab text from the search-input box
    var city = $("#search-input").val();

    // construct URL
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=000401db107b5cbe165fdf198e9f1e47";

    // hit the queryURL with $ajax
    //take response data and display it in the city-box within the weather-div
    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response) {

        // Constructing HTML containing the weather information for searched city
        var cityName = $("<h2>").text(response.name);
        var cityNameList = $("<li>").text(response.name);
        cityNameList.addClass("list-group-item");
        
        var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
        var weatherType = $("<p>").text(response.weather[0].main);

        // kelvin to F
        var tempInt = parseInt(response.main.temp);
        var tempF = (tempInt * 9/5) - 459.67;
        var cityTemp = $("<p>").text("Current Temperature: " + Math.floor(tempF) + " °F");
        var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
        var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");

  // Empty the contents of the city-box div, append the current weather of searched city
  $("#city-box").empty();
  $("#city-box").append(cityName, weatherIcon, weatherType, cityTemp, cityHumidity, cityWindSpeed);

  // prepend the searched city onto city-list
  $("#list-group").prepend(cityNameList);

      // UV INDEX
      var lat = response.coord.lat;
      var lon = response.coord.lon;
  
      // construct URL for UV index
      var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;
  
      $.ajax({
        url: queryURL2,
        method: "GET"
  
      }).then(function(response2) {
  
          var uvIndex = $("<p>").text("UV Index: " + Math.floor(response2.value));
          $("#city-box").append("<div id='uv-box' class=''></div>");
          $("#uv-box").append(uvIndex);

          // UV Index Color Change 
          if (Math.floor(response2.value) <= 2 ) {
                $("#uv-box").addClass("uvFavorable");
          } if (Math.floor(response2.value) >= 3 && Math.floor(response2.value) <= 8) {
                $("#uv-box").addClass("uvModerate");
          } if (Math.floor(response2.value) >= 9) {
                $("#uv-box").addClass("uvSevere");
          }

      });
});

});







// 5 Day Forecast Div

$("#search-button").on("click", function(event) {
    event.preventDefault();

    // grab text from the search-input box
    var city = $("#search-input").val();

    // construct URL
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=000401db107b5cbe165fdf198e9f1e47";

    // hit the queryURL with $ajax
    //take response data and display it in the city-box within the weather-div
    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response) {


        // Constructing HTML containing the five day forecast for searched city
        // day one
        var date0 = $("<p>").text(response.list[0].dt_txt);
        var weatherIcon0 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
        var weatherType0 = $("<p>").text(response.list[0].weather[0].main);
        // kelvin to °F
        var tempHighInt0 = parseInt(response.list[0].main.temp_max);
        var tempHighF0 = (tempHighInt0 * 9/5) - 459.67;
        var cityHighTemp0 = $("<p>").text(Math.floor(tempHighF0) + " °F");

        var humidity0 = $("<p>").text(response.list[0].main.humidity + "%");

  // Empty the contents of the city-box div, append the current weather of searched city
  $("#div0").empty();
  $("#div0").append(date0, weatherIcon0, weatherType0, cityHighTemp0, humidity0); 

        // day two
        var date1 = $("<p>").text(response.list[8].dt_txt);
        var weatherIcon1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png");
        var weatherType1 = $("<p>").text(response.list[8].weather[0].main);
        // kelvin to °F
        var tempHighInt1 = parseInt(response.list[8].main.temp_max);
        var tempHighF1 = (tempHighInt1 * 9/5) - 459.67;
        var cityHighTemp1 = $("<p>").text(Math.floor(tempHighF1) + " °F");

        var humidity1 = $("<p>").text(response.list[8].main.humidity + "%");

  // Empty the contents of the city-box div, append the current weather of searched city
  $("#div1").empty();
  $("#div1").append(date1, weatherIcon1, weatherType1, cityHighTemp1, humidity1); 


        // day three
        var date2 = $("<p>").text(response.list[16].dt_txt);
        var weatherIcon2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png");
        var weatherType2 = $("<p>").text(response.list[16].weather[0].main);
        // kelvin to °F
        var tempHighInt2 = parseInt(response.list[16].main.temp_max);
        var tempHighF2 = (tempHighInt2 * 9/5) - 459.67;
        var cityHighTemp2 = $("<p>").text(Math.floor(tempHighF2) + " °F");

        var humidity2 = $("<p>").text(response.list[16].main.humidity + "%");

  // Empty the contents of the city-box div, append the current weather of searched city
  $("#div2").empty();
  $("#div2").append(date2, weatherIcon2, weatherType2, cityHighTemp2, humidity2); 

        // day four
        var date3 = $("<p>").text(response.list[24].dt_txt);
        var weatherIcon3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png");
        var weatherType3 = $("<p>").text(response.list[24].weather[0].main);
        // kelvin to °F
        var tempHighInt3 = parseInt(response.list[24].main.temp_max);
        var tempHighF3 = (tempHighInt3 * 9/5) - 459.67;
        var cityHighTemp3 = $("<p>").text(Math.floor(tempHighF3) + " °F");

        var humidity3 = $("<p>").text(response.list[24].main.humidity + "%");

  // Empty the contents of the city-box div, append the current weather of searched city
  $("#div3").empty();
  $("#div3").append(date3, weatherIcon3, weatherType3, cityHighTemp3, humidity3); 

          // day five
          var date4 = $("<p>").text(response.list[32].dt_txt);
          var weatherIcon4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png");
          var weatherType4 = $("<p>").text(response.list[32].weather[0].main);
          // kelvin to °F
          var tempHighInt4 = parseInt(response.list[32].main.temp_max);
          var tempHighF4 = (tempHighInt4 * 9/5) - 459.67;
          var cityHighTemp4 = $("<p>").text(Math.floor(tempHighF4) + " °F");

          var humidity4 = $("<p>").text(response.list[32].main.humidity + "%");
  
    // Empty the contents of the city-box div, append the current weather of searched city
    $("#div4").empty();
    $("#div4").append(date4, weatherIcon4, weatherType4, cityHighTemp4, humidity4);  
  
});

});

}
