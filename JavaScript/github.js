$(document).ready(function(){
    $('#api').click(function(){
        $.get("https://api.github.com/users/Jcdepoppe", displayName)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            $('h2').text(data.login);
        }
    })
})