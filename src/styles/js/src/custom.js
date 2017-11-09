$(document).ready(function(){

    var redirect = $.find(".redirect");

    $(".redirect").each(function(){
       $(this).val(window.location.href.replace(/&?error=([^&]$|[^&]*)/i, "").replace(/&?success=([^&]$|[^&]*)/i, ""))

    });
});