function openWin() {
    myWindow = window.open("", "myWindow", "width=200, height=100"); // Opens a new window
}

function closeWin() {
    myWindow.close(); // Closes the new window
}
setInterval(closeWin, 2000);