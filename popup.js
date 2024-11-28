window.onload = function () {
    chrome.storage.local.get('gigagyat', function (result) {
        document.getElementById("id").innerText = "Room ID: " + result.gigagyat;
    });
}
