


var gStickers = []
var stickerIdx = 0

var stickerFlag = false
var isLogin = false;


// add sticker
function addSticker(v) {

    if (loadFromStorage("corrct-login")) isLogin = loadFromStorage("corrct-login")
    if (v > 0 && v <= 5) {
        setPermission();
        if (!isLogin) return
        if (isLogin) closeModal()
    }


    if (gStickers.length > 0) stickersIdx++

    stickerFlag = true
    coloredBtn()

    var obj = {
        imageID: imageID,
        Id: v,
        stickerX: 150,
        stickerY: 150,
        size: 100
    }
    gStickers.push(obj)
    randallStickers()
}


// render the sticker
function randallStickers() {
    rendSticker()
}

function rendSticker() {
    gStickers.forEach((mem) => {
        var image = new Image(60, 45);
        image.src = `stickers/${mem.Id}.png`;
        image.onload = function () {
            gCtx.drawImage(image, mem.stickerX, mem.stickerY, mem.size, mem.size);
        }
    })

}



// switch mode bwtwin line and stickers
function switchMode() {

    stickerFlag = !stickerFlag

    if (!stickerFlag) document.querySelector(".switch").src = "icons-pics/off.png"
    else document.querySelector(".switch").src = "icons-pics/on.png"

    coloredBtn()
}

// colored the arrow btn
function coloredBtn() {

    if (stickerFlag) {
        var elAroow = document.querySelectorAll(".arrow")
        elAroow.forEach((el) => {
            el.style.backgroundColor = "#ff7f00"
        })
    }
    else {
        var elAroow = document.querySelectorAll(".arrow")
        elAroow.forEach((el) => {
            el.style.backgroundColor = "white"
        })
    }

}



