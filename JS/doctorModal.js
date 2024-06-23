const modaldoc = document.getElementById('modal-doc');


function modal(Number){
    modaldoc.innerHTML = `
        <div class="row">
            <div class="col-4 doc-modal" style="background-image: url(${doctors[Number].image});">
            </div>
            <div class="col-8 ">
                Name      : <b>${doctors[Number].name}</b><br>
                Hospital  : <b>${doctors[Number].hospital}</b><br>
                Description : <b>${doctors[Number].description}</b>
            </div>
        </div>
    `
}