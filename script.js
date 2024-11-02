var selected = false;

function textClick(sender) {
    if (selected)
    {
        sender.contentEditable = true;
        sender.focus();
    }
    else 
    {
        selected = true;
        sender.style.border = "1px solid white";
        sender.style.borderRadius = "10px";
        sender.focus();
    }
}

function setUneditable(sender) {
    sender.contentEditable = false;
    sender.style.border = "";
    selected = false;
}

function slideIn() {
    var menu = document.getElementById("sidemenu");
    var width = window.innerWidth;

    if (width >= 900) {
        menu.style.width = "15%";
    }
    else {
        menu.style.width = "100%";
    }
}

function hideMenu() {
    var menu = document.getElementById("sidemenu");
    menu.style.width = "0";
}

function updateImages() {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var width = window.innerWidth;

    if (width >= 900) {
        img1.src = 'images/img1.png';
        img2.src = 'images/img2.png';
        img3.src = 'images/img3.png';
    } else {
        img1.src = 'images/img1_phone.png';
        img2.src = 'images/img2_phone.png';
        img3.src = 'images/img3_phone.png';
    }
}

window.addEventListener('load', updateImages);
window.addEventListener('resize', updateImages);