function generateQRCode() {
        const urlInput = document.getElementById("urlInput").value;
        const qrcodeDiv = document.getElementById("qrcode");
    
        if (urlInput.trim() !== "") {
            // Clear the existing QR code if any
            qrcodeDiv.innerHTML = "";
    
            // Generate the QR code
            const qrcode = new QRCode(qrcodeDiv, {
                text: urlInput,
                width: 128,
                height: 128
            });
        }
    }
    