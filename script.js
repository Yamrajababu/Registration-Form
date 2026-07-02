const form = document.getElementById("admissionForm");
const retrieveBtn = document.getElementById("retrieveBtn");
const clearBtn = document.getElementById("clearBtn");

function getValue(id) {
    return document.getElementById(id).value;
}

function setValue(id, value) {
    document.getElementById(id).value = value || "";
}

function getPatientData() {
    return {
        applicationNo: getValue("applicationNo"),
        admissionDate: getValue("admissionDate"),
        admissionTime: getValue("admissionTime"),

        ipdNo: getValue("ipdNo"),
        uhdNo: getValue("uhdNo"),
        admissionType: getValue("admissionType"),

        patientType: getValue("patientType"),
        patientName: getValue("patientName"),

        gender: getValue("gender"),
        hospital: getValue("hospital"),

        ageYear: getValue("ageYear"),
        ageMonth: getValue("ageMonth"),
        ageDay: getValue("ageDay"),
        dob: getValue("dob"),

        consultant: getValue("consultant"),
        department: getValue("department"),

        roomType: getValue("roomType"),
        currentRoom: getValue("currentRoom"),

        guardianRelation: getValue("guardianRelation"),
        guardianName: getValue("guardianName"),

        mobile1: getValue("mobile1"),
        mobile2: getValue("mobile2"),
        email: getValue("email"),
        address: getValue("address"),

        occupation: getValue("occupation"),
        maritalStatus: getValue("maritalStatus"),

        state: getValue("state"),
        city: getValue("city"),

        ipdFileNo: getValue("ipdFileNo"),
        remark: getValue("remark"),
        package: getValue("package")
    };
}

function fillPatientData(data) {
    setValue("applicationNo", data.applicationNo);
    setValue("admissionDate", data.admissionDate);
    setValue("admissionTime", data.admissionTime);

    setValue("ipdNo", data.ipdNo);
    setValue("uhdNo", data.uhdNo);
    setValue("admissionType", data.admissionType);

    setValue("patientType", data.patientType);
    setValue("patientName", data.patientName);

    setValue("gender", data.gender);
    setValue("hospital", data.hospital);

    setValue("ageYear", data.ageYear);
    setValue("ageMonth", data.ageMonth);
    setValue("ageDay", data.ageDay);
    setValue("dob", data.dob);

    setValue("consultant", data.consultant);
    setValue("department", data.department);

    setValue("roomType", data.roomType);
    setValue("currentRoom", data.currentRoom);

    setValue("guardianRelation", data.guardianRelation);
    setValue("guardianName", data.guardianName);

    setValue("mobile1", data.mobile1);
    setValue("mobile2", data.mobile2);
    setValue("email", data.email);
    setValue("address", data.address);

    setValue("occupation", data.occupation);
    setValue("maritalStatus", data.maritalStatus);

    setValue("state", data.state);
    setValue("city", data.city);

    setValue("ipdFileNo", data.ipdFileNo);
    setValue("remark", data.remark);
    setValue("package", data.package);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const patientData = getPatientData();
    const applicationNo = patientData.applicationNo.trim();

    if (applicationNo === "") {
        alert("Please enter Application No.");
        document.getElementById("applicationNo").focus();
        return;
    }

    localStorage.setItem("patient_" + applicationNo, JSON.stringify(patientData));

    alert("Registration saved successfully!\nApplication No: " + applicationNo);
});

retrieveBtn.addEventListener("click", function () {
    const applicationNo = document.getElementById("applicationNo").value.trim();

    if (applicationNo === "") {
        alert("Enter Application No. first, then click search.");
        document.getElementById("applicationNo").focus();
        return;
    }

    const savedData = localStorage.getItem("patient_" + applicationNo);

    if (savedData) {
        const patientData = JSON.parse(savedData);
        fillPatientData(patientData);
        alert("Patient record found and loaded.");
    } else {
        alert("No record found for Application No: " + applicationNo);
    }
});

clearBtn.addEventListener("click", function () {
    form.reset();
    document.getElementById("applicationNo").focus();
});

document.getElementById("roomType").addEventListener("change", function () {
    const room = this.value;
    const currentRoom = document.getElementById("currentRoom");

    if (room === "General Ward") {
        currentRoom.value = "General Ward";
    } else if (room === "Private Room") {
        currentRoom.value = "Private Room";
    } else if (room === "ICU") {
        currentRoom.value = "ICU";
    } else {
        currentRoom.value = "";
    }
});