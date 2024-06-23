//Surgeons
const surgeons = doctors.filter((doctor) => {
  if(doctor.speciality == 'Surgeon') {
    let index = doctors.indexOf(doctor);
    doctor.Number = index;
    return doctor;
  }
})

const surgeonsList = document.getElementById('surgeons-list');

let surgeonsListContent = '';

surgeons.forEach((surgeon) => {
  surgeonsListContent += `
    <div class="col-3 doc-details" onclick="modal(${surgeon.Number})">
        <div class="doc-image mb-3" style="background-image: url(${surgeon.image});" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </div>
        <div class="doc-desc ms-4" index="${surgeon.Number}">
            Name      : <b>${surgeon.name}<br></b>
            Hospital  : <b>${surgeon.hospital}</b>
        </div>
    </div>
  `
});

surgeonsList.innerHTML = surgeonsListContent;

//Cardiologists
const cardios = doctors.filter((doctor) => {
  if (doctor.speciality == 'Cardiologist') {
    let index = doctors.indexOf(doctor);
    doctor.Number = index;
    return doctor;
  }
})

const cardioList = document.getElementById('cardio-List');

let cardioListContent = '';

cardios.forEach((cardio) => {
  cardioListContent += `
    <div class="col-3 doc-details" onclick="modal(${cardio.Number})">
        <div class="doc-image mb-3" style="background-image: url(${cardio.image});" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </div>
        <div class="doc-desc ms-4">
            Name      : <b>${cardio.name}<br></b>
            Hospital  : <b>${cardio.hospital}</b>
        </div>
    </div>
  `
})

cardioList.innerHTML = cardioListContent;

//Dentists
const dentists = doctors.filter((doctor) => {
  if (doctor.speciality == 'Dentist') {
    let index = doctors.indexOf(doctor);
    doctor.Number = index;
    return doctor;
  }
})

const dentistList = document.getElementById('dentists-List');

let dentistListContent = '';

dentists.forEach((dentist) => {
  dentistListContent += `
    <div class="col-3 doc-details" onclick="modal(${dentist.Number})">
        <div class="doc-image mb-3" style="background-image: url(${dentist.image});" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </div>
        <div class="doc-desc ms-4">
            Name      : <b>${dentist.name}<br></b>
            Hospital  : <b>${dentist.hospital}</b>
        </div>
    </div>
  `
})

dentistList.innerHTML = dentistListContent;

//Veterinarians
const vets = doctors.filter((doctor) => {
  if (doctor.speciality=='Veterinarian') {
    let index = doctors.indexOf(doctor);
    doctor.Number = index;
    return doctor;
  }
})

const vetList = document.getElementById('vet-List');

let vetListContent = '';

vets.forEach((vet) => {
  vetListContent += `
    <div class="col-3 doc-details" onclick="modal(${vet.Number})">
        <div class="doc-image mb-3" style="background-image: url(${vet.image});" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </div>
        <div class="doc-desc ms-4">
            Name      : <b>${vet.name}<br></b>
            Hospital  : <b>${vet.hospital}</b>
        </div>
    </div>
  `
})

vetList.innerHTML = vetListContent;
