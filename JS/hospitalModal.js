
function selectHospitalButton(hospital){
    const hospitalList = doctors.filter((doctor) => {
        if(doctor.hospital == hospital) {
            let index = doctors.indexOf(doctor);
            doctor.Number = index;
            return doctor;
        }
    })

    const hospitalModalBody = document.getElementById('hospitalModalBody');

    let hospitalModalBodyContent = '';

    hospitalList.forEach((hospital) => {
        hospitalModalBodyContent += `
            <tr>
                <td>${doctors[hospital.Number].name}</td>
                <td>${doctors[hospital.Number].speciality}</td>
                <td><button class="btn" style="background-color: rgb(13, 68, 109);"><a href="appointmentForm.html" style="text-decoration: none;color: white;">Appointment</a></button></td>
            </tr>
        `;
        hospitalModalBody.innerHTML = hospitalModalBodyContent;

        const heading = document.getElementById('ModalLabel');

        heading.innerHTML = `Doctors at ${doctors[hospital.Number].hospital} Hospital`;
    });

    
}


