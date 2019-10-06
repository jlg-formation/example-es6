window.addLine = function () {
    console.log('addLine', arguments, this);
}

document.querySelector('button.addLine').addEventListener('click', addLine);