function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }

function goToVerify() {
    const phone = document.getElementById('phoneNumber').value;
    if(phone.length === 9) {
        closeModal('phoneModal');
        openModal('verifyModal');
    } else {
        alert("Please enter your 9-digit phone number.");
    }
}

function verifyAndRedirect() {
    const otp = document.getElementById('otpCode').value;
    if(otp.length >= 4) {
        window.location.href = "app.html";
    } else {
        alert("Enter the verification code.");
    }
}