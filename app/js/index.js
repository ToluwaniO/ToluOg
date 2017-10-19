var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#moreinfo-tech');
if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});
$('#myresume').on("click", function () {
    window.open('https://drive.google.com/open?id=0B8YEC4zJxS3PWkc5ZTEzeFVXemc')
})

$('#moreinfo-tech').on("click", function () {
    dialog.showModal();

})

$('#androidDev').on("click", function () {

})


