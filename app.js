/*=============================
    Made With ♥ By Al Nahian
  ============================*/
// Start Code
// 05 Sep July 2020
// Al Nahian | https://alnahian2003.github.io

// global variables
var yourName = document.getElementById("yourname"),
    theirName = document.getElementById("theirname"),
    calcBtn = document.querySelector("button.cinta_button"),
    yourlovescoreis = document.getElementById("yourlovescoreis"),
    loveInfo = document.getElementById("loveinfo"),
    reloadBtn = document.getElementById("reload");

var loveScore = (Math.random() * (100 - 60) + 60);
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Love Score Counter
function love() {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    (async function () {
        var i = 0;
        while (i < loveScore) {
            document.getElementById("score").innerHTML = i + "%";
            await sleep(20);
            i++;
        }
    })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
    //loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
    e.preventDefault();
    if (yourName.value == "") {
        alert("Mohon masukan nama anda dahulu");
        return false
    }
    if (theirName.value == "") {
        alert("Mohon masukan nama pasangan anda dahulu");
        return false
    }

    //lovescore conditions
    else if (loveScore <= 10) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Cinta kamu dan dia seperti minyak dan air, tidak dapat bersatu, tidak cukup sempurna untuk sebuah hubungan.";
    } else if (loveScore <= 20) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Kamu dan pasangan seperti burung dan awan, bersatu namun perlu konsentrasi agar sang burung tidak terjatuh.";
    } else if (loveScore <= 30) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Cinta kamu dan pasangan seperti pasir dan bibit, saling melengkapi dan saling menjaga! ";
    } else if (loveScore <= 40) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Cinta kamu seperti romeo dan juliet, Tidak ada kepalsuan dalam cinta kamu, jalani terus!";
    } else if (loveScore <= 50) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Kamu dan pasangan adalah contoh pasangan cinta sejati!";
    } else if (loveScore <= 60) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Kamu dan pasangan seperti bumi dan bulan, tidak bisa hidup jika tak berdampingan.";
    } else if (loveScore <= 70) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Cinta kamu dan dirinya seperti sungai dan lautan, alirkan kasih sayang dan cinta!";
    } else if (loveScore <= 80) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Kamu dan pasangan seperti lem, tidak dapat dilepaskan ";
    } else if (loveScore <= 90) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Cinta kamu dan pasangan tidak dapat di ukur dengan apapun di dunia, cinta mu sejati! ";
    } else if (loveScore <= 100) {
        yourlovescoreis.innerHTML = "Skor cinta kamu adalah";
        love();
        reloadBtn.style.display = "block";
        loveInfo.innerHTML =
            "<b>Kamu</b> dan " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " Cinta mu sangat lah sejati, pasangan mu adalah yang terbaik dari segalanya, kamu harus menikahi " +
            "<b>" +
            capitalize_Words(theirName.value) +
            "</b>" +
            " segera, semoga beruntung!";
    }

});
