/* Redirect HTTPS
if (window.location.protocol!='http:') {}
else {
    window.location.href = "https://daniyar.one";
} */

// Mobile menu animation 
var chet = 0;
function mmenu_anim() {
    if (chet == 0) {
        chet = 1;
        setTimeout("document.getElementById('mmenu2').style.marginLeft = '0'; document.getElementById('mmenu1').style.opacity = '100'", 200);
        setTimeout("document.getElementById('mmenu1').style.marginLeft = '0'; document.getElementById('mmenu2').style.opacity = '100'", 250);
        setTimeout("document.getElementById('mmenu3').style.marginLeft = '0'; document.getElementById('mmenu3').style.opacity = '100'", 300);
    } else {
        chet = 0;
        setTimeout("document.getElementById('mmenu2').style.marginLeft = '100px'; document.getElementById('mmenu1').style.opacity = '0'", 100);
        setTimeout("document.getElementById('mmenu1').style.marginLeft = '100px'; document.getElementById('mmenu2').style.opacity = '0'", 200);
        setTimeout("document.getElementById('mmenu3').style.marginLeft = '100px'; document.getElementById('mmenu3').style.opacity = '0'", 300);
    }
}

function yakor() {
    document.getElementById('hmt').checked = false;
    mmenu_anim();
}


// Main text animation (page About me)
function delete_blinkTextCursor() {
    document.getElementById('hello').style.borderRight = 'none';
    document.getElementById('name').style.borderRight = '2px solid rgba(255,255,255,.75)';
} setTimeout(delete_blinkTextCursor, 2000);
function delete_blinkTextCursor1() {
    document.getElementById('name').style.borderRight = 'none';
    document.getElementById('iam').style.borderRight = '2px solid rgba(255,255,255,.75)';
    setTimeout("document.getElementById('webdev_bg').style.background = '#fff'; document.getElementById('webdev_bg').style.color = '#000'; document.getElementById('webdev_bg').style.fontWeight = '500';", 1800);
    // social transition
    setTimeout("document.getElementById('ig').style.opacity = '100'; document.getElementById('ig').style.marginTop = '0';", 1800);
    setTimeout("document.getElementById('tg').style.opacity = '100'; document.getElementById('tg').style.marginTop = '0';", 1950);
    setTimeout("document.getElementById('gh').style.opacity = '100'; document.getElementById('gh').style.marginTop = '0';", 2100);
    setTimeout("document.getElementById('tg').style.transition = '.1s';", 3300);
    setTimeout("document.getElementById('ig').style.transition = '.1s';", 3300);
    setTimeout("document.getElementById('gh').style.transition = '.1s';", 3300);
} setTimeout(delete_blinkTextCursor1, 4000);
  
    function fixed_lang() {
        var menuCheckbox = document.querySelector('input[type=checkbox]');
        if (menuCheckbox.checked) {
            document.getElementById("m_lang").style.visibility = "visible";
            document.getElementById("lang").style.visibility = "hidden";
        } else {
            document.getElementById("m_lang").style.visibility = "hidden";
            document.getElementById("lang").style.visibility = "visible";
        }
    }



    const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
