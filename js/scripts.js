const randomNum = Math.floor(Math.random() * 3) + 1;
$("section#top").removeClass();
$("section#top").addClass(`bg${randomNum}`);

$("form").submit(function() {
    $(this).hide();
    $("#thank-you").html("<h2 class='heading fz-30'>Thank You!</h2>");
})
