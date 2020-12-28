window.onload = function() { 
    window.onscroll = function() { addHeaderBorder() };
    var header = document.getElementById("header");
    var fastOffset = $("#fast").offset().top - 250;
    var appsOffset = $("#apps").offset().top - 250;
    var headerButton = document.getElementById("contact-button");
    var headerImg = document.getElementById("header-img");
    var headerImgTwo = document.getElementById("header-img-2");
    var headerImgThree = document.getElementById("header-img-3");
    var sandwich = document.getElementById("sandwich");

    var adj = document.querySelectorAll(".adj");

    function addHeaderBorder() {
        if (window.pageYOffset > 300) {
            header.classList.add("header-box-shadow");
            adj.forEach(e => e.classList.add("adjust"));
        } else {
            header.classList.remove("header-box-shadow");
            adj.forEach(e => e.classList.remove("adjust"));
        }

        if(window.pageYOffset > fastOffset) {
            headerButton.classList.add("btn-primary-2");
            headerImg.classList.add("display-none");
            headerImgTwo.classList.remove("display-none");
            sandwich.classList.add("fourth-color");
            sandwich.classList.remove("sec-color");
        } else {
            headerButton.classList.remove("btn-primary-2");
            headerImg.classList.remove("display-none");
            headerImgTwo.classList.add("display-none");
            sandwich.classList.remove("fourth-color");
            sandwich.classList.add("sec-color");
        }

        if(window.pageYOffset > appsOffset) {
            headerButton.classList.remove("btn-primary-2");
            headerButton.classList.add("btn-sec");
            headerImg.classList.add("display-none");
            headerImgTwo.classList.add("display-none");
            headerImgThree.classList.remove("display-none");
            sandwich.classList.remove("fourth-color");
            sandwich.classList.remove("sec-color");
            sandwich.classList.add("primary-color");
        } else {
            // headerButton.classList.add("btn-primary-2");
            headerButton.classList.remove("btn-sec");
            // headerImgTwo.classList.remove("display-none");
            headerImgThree.classList.add("display-none");
            // sandwich.classList.add("fourth-color");
            // sandwich.classList.remove("sec-color");
            sandwich.classList.remove("primary-color");
        }
    }

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

}