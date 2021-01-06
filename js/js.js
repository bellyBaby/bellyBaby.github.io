var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

// https://api.whatsapp.com/send?phone=+{{ *YOURNUMBER* }}&text=%20{{ *YOUR MESSAGE* }}

var yourNumber = "+525549650698"
var yourMessage = "Hola BellyBeby! Necesito información sobre..."

// %20 mean space in link
// If you already had an array then you just join them with '%20'
// easy right

function getLinkWhastapp(number, message) {
  number = yourNumber
  message = yourMessage.split(' ').join('%20')

  return console.log('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
}

