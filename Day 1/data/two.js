window.onload = function(){
    function out(o){
        console.log(o);
    }

    $.get('data/CaretPosition.json', out);
    console.log("Ferrari")
}