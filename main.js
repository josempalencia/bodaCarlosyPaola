window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botonConfirma").style.opacity = "1";
    } else {
        document.getElementById("botonConfirma").style.opacity = "0";
    }
}