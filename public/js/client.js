/**
 * Created by ericanderson on 1/6/16.
 */
$(document).ready(function(){
    var balance = 0;

    $(".submit").on("click", function(){
        event.preventDefault();
        $.ajax("/balance").then(function(response){
            balance = response;
            $(".balance").html(balance).fadeOut().fadeIn();
        });
    });
});