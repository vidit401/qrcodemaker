// Function to generate QR code
function generateQRCode() {
    var inputText = document.getElementById('inputText').value;

    // Clear previous QR code
    document.getElementById('qrCode').innerHTML = '';

    if (inputText.trim()) {
        // Generate QR code
        var qrCode = new QRCode(document.getElementById("qrCode"), {
            text: inputText,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter some text or URL.");
    }
}