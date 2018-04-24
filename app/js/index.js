var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#moreinfo-tech');
if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});
$('#myresume').on("click", function () {
    window.open('https://drive.google.com/open?id=1qwvbioXoWdO86_g_enI0TkJIhaSrrARk')
})

$('#moreinfo-tech').on("click", function () {
    dialog.showModal();

})

$('#androidDev').on("click", function () {

})

$('#projects').on("click", function () {
    window.open('https://github.com/ToluwaniO')
})


