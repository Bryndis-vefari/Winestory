


window.onload = function() {

    // Lazyloading for images
    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });
    lazyLoadInstance.update();

    //Mobile menu dropdown
    document.getElementById("hamburger").addEventListener("click", function(){
        this.classList.toggle("active");
        document.querySelector(".mobile-menu").classList.toggle("active");
    });
};



