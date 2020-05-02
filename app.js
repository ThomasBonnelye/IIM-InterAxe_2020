var timer2 = "40:00";
    
var reponse1 = "6";
var reponse2 = "1";
var reponse3 = "8";

function nope() {
    var audio = new Audio('sound/error.mp3');
    console.log('OUI');
    audio.play();
};

function errorcode() {
    var erroraudio = new Audio('sound/errorcode.mp3');
    console.log('OUI');
    erroraudio .play();
};

function sucesscode() {
    var succaudio  = new Audio('sound/sucesscode.mp3');
    console.log('OUI');
    succaudio.play();
};

function error() {
    $('.appli').css({ 'background-color': '#4c4d54'});
    $('.appli2').css({ 'background-color': 'black'});
};

function barre() {
    $('.appli').css({ 'background-color': 'black'});
    $('.appli2').css({ 'background-color': '#4c4d54'});
};

function beep() {
    var son = new Audio('sound/beep.mp3');
    son.play();
};

var interval = setInterval(function () {

    var timer = timer2.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;

    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? minutes : minutes;
    $('#countdown').html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;

    if (minutes < 0) {
        window.location.replace("defete.html");
    }

    if (seconds <= 5 && minutes == 0) {
        beep();
    }
}, 1000);

function getReponse() {
    if (document.getElementById("réponse1").value == reponse1 && document.getElementById("réponse2").value == reponse2 && document.getElementById("réponse3").value == reponse3) {
        console.log('REUSSIE');
        setTimeout(sucesscode(), 1400);
        $('.reponse').css({ 'background-color': '#6B8E23'});
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 300);
        setTimeout(function(){$('.reponse').css({ 'background-color': '#6B8E23'})}, 600);
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 900);
        setTimeout(function(){$('.reponse').css({ 'background-color': '#6B8E23'})}, 1200);
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 1500);
        
        setTimeout(function(){window.location.replace("victory.html");}, 1500);
        return true;
    }
    if (document.getElementById("réponse1").value !== reponse1 && document.getElementById("réponse1").value !== "") {
        console.log('FAUX');
        setTimeout(errorcode(), 1400);
        $('.reponse').css({ 'background-color': '#e50000'});
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 1000);
        setTimeout(function(){$('.reponse').val('')}, 1000);
        return false;
    }
    if (document.getElementById("réponse2").value !== reponse2 && document.getElementById("réponse2").value !== "") {
        console.log('FAUX');
        setTimeout(errorcode(), 1400);
        $('.reponse').css({ 'background-color': '#e50000'});
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 1000);
        setTimeout(function(){$('.reponse').val('')}, 1000);

        return false;
    }
    if (document.getElementById("réponse3").value !== reponse3 && document.getElementById("réponse3").value !== "") {
        console.log('FAUX');
        setTimeout(errorcode(), 1400);
        $('.reponse').css({ 'background-color': '#e50000'});
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 1000);
        setTimeout(function(){$('.reponse').val('')}, 1000);

        return false;
    }
    if (document.getElementById("réponse1").value == "" || document.getElementById("réponse2").value == "" || document.getElementById("réponse3").value == "") {
        console.log('INCOMPLET');
        setTimeout(errorcode(), 1400);
        $('.reponse').css({ 'background-color': '#e50000'});
        setTimeout(function(){$('.reponse').css({ 'background-color': '#FFE5BC'})}, 1000);
        setTimeout(function(){$('.reponse').val('')}, 1000);

        return false;
    }

};
