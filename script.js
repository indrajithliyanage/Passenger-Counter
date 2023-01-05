let count = 0;
function increment() {
    count++;
    document.getElementById('count-el').innerHTML = count;
    if (count != 0) {
        let saveBtn = document.querySelector('#save-btn');
        saveBtn.style.display = "inline";
    }
}
function save() {
    if (count !== 0) {
        let countVal = document.getElementById('count-el');
        let prevEntries = document.querySelector('.prev-Entries');
        let entries = document.querySelector('.prev-Entries span');
        if (entries.innerHTML !== "") {
            entries.innerHTML = entries.innerHTML + " - " + countVal.innerHTML;
        } else {
            entries.innerHTML += countVal.innerHTML;
        }
        count = 0;
        countVal.innerHTML = 0;
        prevEntries.style.display = 'block';
    }
}

