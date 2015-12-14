$(document).ready(function() {
    $('#user').focus(function(event) {
        $(this).prev().css('color', '#049224');
    });
    $('#user').focusout(function(event) {
        $(this).prev().css('color', 'gray');
    });
    $('#password').focus(function(event) {
        $(this).prev().css('color', '#049224');
    });
    $('#password').focusout(function(event) {
        $(this).prev().css('color', 'gray');
    });
    
});