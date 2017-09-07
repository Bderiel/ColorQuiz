const display = $('.display');
let color = [];

function diplayWinner() {
    let ran = Math.floor(Math.random() * 6);
    $('#winner').text(color[ran]);
    $(display[ran]).addClass('winner');
    console.log(ran);
    return ran;
}

function colorGen() {
    let red;
    let blue;
    let green;
    for (let i = 0; i < display.length; i++) {
        red = rc();
        blue = rc();
        green = rc();
        $(display[i]).css('background-color', `rgb(${red},${green},${blue})`);
        color.push(`rgb(${red}, ${green}, ${blue})`);
    }
}
let winColor = diplayWinner();


function rc() {
    return Math.floor(Math.random() * 255) + 1;
}
let counter = 0;
let gameFlag = true;
$('#reset').click(function () {
    color = [];
    colorGen();
    $(display).removeClass('winner');
    winColor = diplayWinner();
    $(display).prop('disabled', false);
    $(display).hide();
    $(display).fadeIn(1500);
    counter = 0;
    gameFlag = true;
});
$(display).click(function () {
    console.log(counter);
    if (gameFlag) counter++;
    if ($(this).hasClass('winner')&& gameFlag) {
        $('#winner').text('You Win');
        $(display).prop('disabled', true);
        $(display).css('background-color', color[winColor]);
        $(display).fadeIn(1500);
        gameFlag = false;
    }  if ((counter > 2) && gameFlag) {
        $('#winner').text('You Lose');
        $(display).prop('disabled', true);
        gameFlag = false;
    } 
    else if (!($(this).hasClass('winner')) && gameFlag) {
        $(this).prop('disabled', true);
        $(this).fadeOut(1000);
    }
});
///unbind something