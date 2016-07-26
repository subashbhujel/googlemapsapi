function getFakeData(id){    
    var urlBase ="https://observerestapi.azurewebsites.net/api/locations/"+id+"?jsoncallback=?"; 
    alert(urlBase);
    return $.getJSON(urlBase);
  }  

function getLocationById(id) {
    // alert(fakeJsonData[0].lat);

    // $.ajax({
    //         url: "https://observerestapi.azurewebsites.net/api/locations",
    //         type: "GET",
    //         contentType: 'application/json; charset=utf-8',
    //         // dataType: 'jsonp',
    //         // crossDomain:true,
    //         success: function(resultData) {
    //             //here is your json. Process it.
    //             alert("Success!");
    //         },
    //         // xhrFields: {
    //         //     withCredentials: true
    //         // },
    //         error : function(jqXHR, textStatus, errorThrown) {
    //           // alert(jqXHR.responseText);
    //           alert("Error: "+textStatus);

    //         },
    //         timeout: 120000,
    //     });

    $.get("https://observerestapi.azurewebsites.net/api/locations",function(data){
      alert("data loaded"+ data.length());
    });
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