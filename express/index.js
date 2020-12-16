window.onload = function() { 
    window.onscroll = function() { addHeaderBorder() };
    var header = document.getElementById("header");
    var header2Offset = $("#fast").offset().top - 250;
    var headerButton = document.getElementById("contact-button");
    var headerImg = document.getElementById("header-img");
    var headerImgTwo = document.getElementById("header-img-2");

    var adj = document.querySelectorAll(".adj");

    function addHeaderBorder() {
        if (window.pageYOffset > 300) {
            header.classList.add("header-box-shadow");
            adj.forEach(e => e.classList.add("adjust"));
        } else {
            header.classList.remove("header-box-shadow");
            adj.forEach(e => e.classList.remove("adjust"));
        }

        if(window.pageYOffset > header2Offset) {
            headerButton.classList.add("btn-primary-2");
            headerImg.classList.add("display-none");
            headerImgTwo.classList.remove("display-none");
        } else {
            headerButton.classList.remove("btn-primary-2");
            headerImg.classList.remove("display-none");
            headerImgTwo.classList.add("display-none");
        }
    }

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

}