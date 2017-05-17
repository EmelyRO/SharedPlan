$(document).ready(function() {
    $(":checkbox").change(function() {

        var checked = $(":checked");
        var base_url = 'https://calendar.google.com/embed?ctz=America/New_York';


        //if there are no calendars checked, this is my URL.
        //console.log(base_url);

        //if the freshman is checked what is your URL?
        var freshman = $(":checkbox").first();
        //  var freshman_src = freshman.data('src');
        // var junior_src = junior.data('src');
        //console.log(base_url + "&src= ")

        //step 1:
        //loop through every checkbox that is checked
        //console.log its src to the screen


        //checked = [<freshmancheckbox>, <sophomorecheckbox>]
        //i=0
        //checked[i] = <freshmancheckbox>
        //log <freshmancheckbox>
        //log the src of <freshmancheckbox>



        for (var i = 0; i < checked.length; i++) {
            base_url=base_url +"&src="+ $(checked[i]).data('src');
        }
        console.log(base_url);
        $("#calendar").attr('src', base_url);
        


        //step 2:
        //loop through every checkbox that is checked
        //add its src to the base_url




        //console.log(checked);

    });

});
