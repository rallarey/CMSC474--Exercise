$( document ).ready(function() {
    console.log( "ready!" );
    $('#go').on("click", function (e) {
        e.preventDefault()
        let first = $("#fname").val();
        let last = $("#lname").val();
        $("#jumbotron").append("Welcome " + first + " " + last + "! ")
    })
});