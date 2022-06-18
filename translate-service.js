var gCurrLang = 'en'

var gTrans = {
    'meme': {
        en: 'Meme',
        he: 'מימים'
    },
    'gallery': {
        en: 'Gallery',
        he: 'גלריה',
    },
    'login': {
        en: 'Login',
        he: 'התחבר',
    },
    'admin': {
        en: 'Admin',
        he: 'אדמין',
    },
    'login-modal': {
        en: "login",
        he: "התחבר"
    }
}


function setLang(lang) {
    gCurrLang = lang
    saveToStorage("lang", gCurrLang)
}




function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return "UNKNOWN";
    var txt = keyTrans[gCurrLang] // he
    if (!txt) txt = keyTrans.en


    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)
        // console.log(el)
        if (el.localName === "input") {
            el.setAttribute("placeholder", txt)
            // el.placeholder = txt
        } else el.innerText = txt
    })
}
function onSetLang(lang) {
    setLang(lang);
    if (lang === "he") document.querySelector(".login-modal").classList.add("rtl")
    else document.querySelector(".login-modal").classList.remove("rtl")
    doTrans();
    render();
}


