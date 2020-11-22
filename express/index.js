window.onload = function() { 
    // header bottom border function
    window.onscroll = function() { addHeaderBorder() };
    var header = document.getElementById("header");
    function addHeaderBorder() {
        if (window.pageYOffset > 50) {
            header.classList.add("header-box-shadow");
        } else {
            header.classList.remove("header-box-shadow");
        }
    }

    // $('.navbar-nav>li>a').on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    // });

    // var shiftWindow = function() { scrollBy(0, -50) };

    // pop up description boxes
    // on hover, turn off display: none of box, and turn back on once no longer hover
}