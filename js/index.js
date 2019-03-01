var cc3 = $('.card-container');
var cssLeft = { opacity: 0 }, cssRight = { opacity: 0 }, cssReset = { opacity: 1 };
// cc3.children('.right').click(function () {
//     var firstCard = $('.card-container .card').first();
//     firstCard.css(cssLeft);
//     setTimeout(function () {
//         cc3.append(firstCard);
//         firstCard.css(cssReset);
//     }, 300)
// });
cc3.children('.left').click(function () {
    var lastCard = $('.card-container .card').last();
    lastCard.css(cssRight);
    lastCard.insertAfter(cc3.children('.controller.left'));
    setTimeout(function () {
        lastCard.css(cssReset);
    }, 300)
});
