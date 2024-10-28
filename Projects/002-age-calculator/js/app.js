function calculateAge() {
    let spanAge = document.getElementById('age');
    let d = new Date()
    let dateBirth = document.getElementById('dateBirth').value;
    let yearB = Number(dateBirth.slice(0, 4))
    let year = d.getFullYear();
    spanAge.innerText = `${year - yearB}`
}
