const showHospital =  document.getElementById('selectHospital');

let showHospitalContent = '';

hospitals.forEach((hospital) => {
    showHospitalContent += `
        <div class="container row pt-5">
                <img src="${hospital.image}" width="100px" height="250px"   class="col-6" alt="YourDoc">
                <div class="col-6 d-flex" id="hospital1">
                    <div class="row">
                        <h3 class="text-center fw-bold text-center"> <br>${hospital.name} Hospital</h3> <br>
                        
                        <div class="intro">
                            <p>
                                Address: ${hospital.address}<br>
                                Mobile : ${hospital.mobile}<br>
                                Email  : ${hospital.email}
                            </p>
                        </div>
                        <div class="button1">
                        <button onclick="selectHospitalButton('${hospital.name}')" class="btn btn-lg btn-primary w-10 fs-6" type="button" data-bs-toggle="modal" data-bs-target="#hospitalModal">Find a doctor</button>
                        </div>   
                    </div>
                </div>
            </div>
    `
})

showHospital.innerHTML = showHospitalContent;
