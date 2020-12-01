window.onload = function() { 
    window.onscroll = function() { addHeaderBorder() };

    var header = document.getElementById("header");
    var adj = document.querySelectorAll(".adj");

    function addHeaderBorder() {
        if (window.pageYOffset > 300) {
            header.classList.add("header-box-shadow");
            adj.forEach(e => e.classList.add("adjust"));
        } else {
            header.classList.remove("header-box-shadow");
            adj.forEach(e => e.classList.remove("adjust"));
        }

        addFadeInLeft();
    }

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

}