function generateAppNo() {
    return "APP" + Date.now();
}

function saveData() {

    let appNo = document.getElementById("appNo").value;

    if (appNo == "") {
        appNo = generateAppNo();
    }

    const patient = {
        appNo: appNo,
        patientName: document.getElementById("patientName").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    localStorage.setItem(appNo, JSON.stringify(patient));

    alert("Registration Successful!\nApplication No: " + appNo);

    document.getElementById("appNo").value = appNo;
}

function searchData() {

    let appNo = document.getElementById("appNo").value;

    let patient = localStorage.getItem(appNo);

    if (patient == null) {
        alert("Application Number Not Found");
        return;
    }

    patient = JSON.parse(patient);

    document.getElementById("patientName").value = patient.patientName;
    document.getElementById("mobile").value = patient.mobile;
    document.getElementById("email").value = patient.email;
    document.getElementById("address").value = patient.address;
}