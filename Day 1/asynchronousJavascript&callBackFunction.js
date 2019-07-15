window.onload = function(){

    function callback(val){
        console.log(val);
    }

    let cars = ['Ferrari', 'Jaguar','lamborghini','RangeRover','Mercedez'];

    cars.forEach(callback);
    
}