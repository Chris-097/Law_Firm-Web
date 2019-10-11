let e = 0;
const time = 3000;
const images = ['./src/img/hd12.jpg', './src/img/project pic11.jpg', './src/img/project pic9.jpg','./src/img/project pic7.jpg'];
const changeImage = function () {
    document.changer.src = images[e]
    if(e < images.length -1){
        e++;
    }else{
        e = 0;
    }
    setTimeout("changeImage()",time);
}
window.onload = changeImage;

/*
// Smooth Scrolling
$('.navbar').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
*/