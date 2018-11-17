function random_apple() {
    while (1) {
        var i = Math.floor((Math.random() * 20))
        var j = Math.floor((Math.random() * 20))
        if ($("#l" + i).children()[j].innerText == "1") {
            $("#l" + i).children()[j].innerText = "0"
            return
        }
    }
}

function start_game() {
    $("#l10").children()[6].innerText = "5"
    $("#l10").children()[5].innerText = "4"
    $("#l10").children()[4].innerText = "3"
    $("#l10").children()[3].innerText = "2"
    random_apple()
    change_color()
}

function change_color() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            if ($("#l" + i).children()[j].innerText == "0") {
                $("#l" + i).children()[j].className = "apple"
            }
            else if ($("#l" + i).children()[j].innerText == "1") {
                $("#l" + i).children()[j].className = "case"
            }
            else {
                $("#l" + i).children()[j].className = "snake"
            }
        }
    }
}

function moove() {
    var tampon = 0
    var best_tampon = 0
    var best_tampon_str = ""
    var x
    var y
    var apple = 0
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            tampon = parseInt($("#l" + i).children()[j].innerText)
            if (tampon > best_tampon) {
                best_tampon = tampon
                x = j
                y = i
            }
        }
    }
    if ($("#way")[0].className == "1") {
        y = y - 1
        if (y < 0) {
            window.alert("game over")
            document.location.reload(true);
        }
        tampon = parseInt($("#l" + y).children()[x].innerText)
        if (tampon > 1) {
            window.alert("game over")
            document.location.reload(true);
        }
        if ($("#l" + y).children()[x].innerText == 0) {
            apple = 1
        }
        best_tampon++
        best_tampon_str = best_tampon.toString();
        $("#l" + y).children()[x].innerText = best_tampon_str
    }
    if ($("#way")[0].className == "2") {
        x = x + 1
        if (x > 19) {
            window.alert("game over")
            document.location.reload(true);
        }
        tampon = parseInt($("#l" + y).children()[x].innerText)
        if (tampon > 1) {
            window.alert("game over")
            document.location.reload(true);
        }
        if ($("#l" + y).children()[x].innerText == 0) {
            apple = 1
        }
        best_tampon++
        best_tampon_str = best_tampon.toString();
        $("#l" + y).children()[x].innerText = best_tampon_str
    }
    if ($("#way")[0].className == "3") {
        y = y + 1
        if (y > 19) {
            window.alert("game over")
            document.location.reload(true);
        }
        tampon = parseInt($("#l" + y).children()[x].innerText)
        if (tampon > 1) {
            window.alert("game over")
            document.location.reload(true);
        }
        if ($("#l" + y).children()[x].innerText == 0) {
            apple = 1
        }
        best_tampon++
        best_tampon_str = best_tampon.toString();
        $("#l" + y).children()[x].innerText = best_tampon_str
    }
    if ($("#way")[0].className == "4") {
        x = x - 1
        if (x < 0) {
            window.alert("game over")
            document.location.reload(true);
        }
        tampon = parseInt($("#l" + y).children()[x].innerText)
        if (tampon > 1) {
            window.alert("game over")
            document.location.reload(true);
        }
        if ($("#l" + y).children()[x].innerText == 0) {
            apple = 1
        }
        best_tampon++
        best_tampon_str = best_tampon.toString();
        $("#l" + y).children()[x].innerText = best_tampon_str
    }
    if (apple == 0) {
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                if ($("#l" + i).children()[j].innerText != "0" && $("#l" + i).children()[j].innerText != "1") {
                    tampon = $("#l" + i).children()[j].innerText
                    $("#l" + i).children()[j].innerText = (tampon - 1)
                }
            }
        }
    }
    else {
        random_apple()
    }
    change_color()
}

$(document).ready(function () {
    var call_interval

    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            $("#l" + i).children()[j].innerText = "1"
        }
    }
    start_game()
    $(document).keypress(function (e) {
        if (e.key == "ArrowUp" && $("#way")[0].className != "3") {
            if ($("#way")[0].className == "0") {
                call_interval = setInterval(moove, 100)
            }
            $("#way")[0].className = "1"
        }
        if (e.key == "ArrowRight" && $("#way")[0].className != "4") {
            if ($("#way")[0].className == "0") {
                call_interval = setInterval(moove, 100)
            }
            $("#way")[0].className = "2"
        }
        if (e.key == "ArrowDown" && $("#way")[0].className != "1") {
            if ($("#way")[0].className == "0") {
                call_interval = setInterval(moove, 100)
            }
            $("#way")[0].className = "3"
        }
        if (e.key == "ArrowLeft" && $("#way")[0].className != "2" && $("#way")[0].className != "0") {
            $("#way")[0].className = "4"
        }
    })
});