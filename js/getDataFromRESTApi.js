export function getFakeData(id) {
    var urlBase = "https://observerestapi.azurewebsites.net/api/locations/" + id + "?jsoncallback=?";
    alert(urlBase);
    return $.getJSON(urlBase);
}

// function myJsonMethod({"id":3,"login":"pepe","key":"0D1DBA4BE87E02D43E082F9AA1ECFDEB"});

export function getLocationById(id) {
    // alert(fakeJsonData[0].lat);
    alert("GetLocationById() called");
    $.ajax({
        url: "http://observerestapi.azurewebsites.net/api/locations/57967b4314a2d2c828d3cf05",
        type: "GET",
        // application/json => application/javascript for cross domain reference
        // contentType: 'application/json   ; charset=utf-8',
        dataType: 'jsonp',
        jsonp: false,
        jsonpCallback: "callback",
        // crossDomain:true,
        success: function(resultData) {
            //here is your json. Process it.
            alert("Success!");
        },
        // xhrFields: {
        //     withCredentials: true
        // },
        error: function(jqXHR, textStatus, errorThrown) {
            // alert(jqXHR.responseText);
            alert("Error: " + textStatus);

        },
        timeout: 120000,
    });

    // $.get("https://observerestapi.azurewebsites.net/api/locations",function(data){
    //   alert("data loaded"+ data.length());
    // });
    // $.getJSON("https://observerestapi.azurewebsites.net/api/locations/5790621310801848048ef533")
    // alert("getLocationById()");
    // getData(id)
    //     .done(function(data) {
    //         alert("Data Loaded: ");
    //     })
    //     .fail(function() {
    //       alert( "error" );
    //     });
    // .always(function() {
    //   alert( "finished" );
    // });
}

export { getLocationById, getFakeData }