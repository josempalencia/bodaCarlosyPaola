window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botonConfirma").style.opacity = "1";
    } else {
        document.getElementById("botonConfirma").style.opacity = "0";
    }
}
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })
  myModal.show()