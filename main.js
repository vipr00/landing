$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function () {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
    $("body").removeClass("locked");
});

function open_zoom_photo(item_number) {
    document.getElementById("zoom_overlay").style.display = "block";
    // alert(item_number);
    $("#zoom_overlay").empty();
    $("#zoom_overlay").append('<img src="images/catalog/zoom/zoom_' + item_number + '.jpg" alt=""></img>');
}

function off() {
    document.getElementById("zoom_overlay").style.display = "none";
}