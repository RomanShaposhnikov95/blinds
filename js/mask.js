const phones = document.querySelectorAll(".phone");

let maskOptions = {
    mask: '+371 00000000',
    lazy: false
}

phones.forEach(el => {
    let mask = new IMask(el, maskOptions);
})



