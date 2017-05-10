$(document).ready(function() {
    $(".freshmen-calendar").hide();
    $(".sophmore-calendar").hide();
    $(".junior-calendar").hide();
    $(".senior-calendar").hide();
    $(".Aerospace-calendar").hide();
    $(".AP-Chemistry-calendar").hide();
    $(".AP-Literature-calendar").hide();


    $(".Freshmen").click(function(event) {
        event.preventDefault();
        $(".freshmen-calendar").toggle();
        $(".sophmore-calendar").hide();
        $(".junior-calendar").hide();
        $(".senior-calendar").hide();
        $(".Aerospace-calendar").hide();
        $(".AP-Chemistry-calendar").hide();
        $(".AP-Literature-calendar").hide();


    });

    $(".Sophomore").click(function(event) {
        event.preventDefault();
        $(".sophmore-calendar").toggle();
        $(".freshmen-calendar").hide();
        $(".junior-calendar").hide();
        $(".senior-calendar").hide();
        $(".Aerospace-calendar").hide();
        $(".AP-Chemistry-calendar").hide();
        $(".AP-Literature-calendar").toggle();

    });
    $(".Junior").click(function(event) {
        event.preventDefault();
        $(".junior-calendar").toggle();
        $(".freshmen-calendar").hide();
        $(".sophmore-calendar").hide();
        $(".senior-calendar").hide();
        $(".Aerospace-calendar").hide();
        $(".AP-Chemistry-calendar").hide();
        $(".AP-Literature-calendar").hide();


    });
    $(".Senior").click(function(event) {
        event.preventDefault();
        $(".senior-calendar").toggle();
        $(".freshmen-calendar").hide();
        $(".sophmore-calendar").hide();
        $(".junior-calendar").hide();
        $(".Aerospace-calendar").hide();
        $(".AP-Chemistry-calendar").hide();
        $(".AP-Literature-calendar").hide();

    });
    $(".Aerospace").click(function(event) {
        event.preventDefault();
        $(".Aerospace-calendar").toggle();
        $(".senior-calendar").hide();
        $(".freshmen-calendar").hide();
        $(".sophmore-calendar").hide();
        $(".junior-calendar").hide();
        $(".AP-Chemistry-calendar").hide();
        $(".AP-Literature-calendar").hide();
    });
    $(".AP-Chemistry").click(function(event) {
        event.preventDefault();
        $(".Aerospace-calendar").hide();
        $(".senior-calendar").hide();
        $(".freshmen-calendar").hide();
        $(".sophmore-calendar").hide();
        $(".junior-calendar").hide();
        $(".AP-Chemistry-calendar").toggle();
        $(".AP-Literature-calendar").hide();
    });
    $(".AP-Literature").select(function(event) {
        event.preventDefault();
        $(".Aerospace-calendar").hide();
        $(".senior-calendar").hide();
        $(".freshmen-calendar").hide();
        $(".sophmore-calendar").hide();
        $(".junior-calendar").hide();
        $(".AP-Chemistry-calendar").hide();
        $(".AP-Literature-calendar").toggle();


    });
});

$("").click(function() {
    
});