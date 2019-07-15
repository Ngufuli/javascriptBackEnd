window.onload = function(){
    $.ajax({
        type: "GET",
        url: "data/cars.json",
        success: function(data){
            console.log(data)
        }
        error: function(jqXHR, testStatus, error){
            console.log(error);
        }
    });
}