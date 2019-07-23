let valid = false;

function checkPass() {
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const lbl = document.getElementById('lbl')
    if (p1.value === p2.value && p1.value.length > 5) {
        lbl.textContent = 'Password'
        valid = true;
    }
    if (p1.value !== p2.value) {
        lbl.textContent = 'Password (Must Match)'
        valid = false;
    }
}

function isValid() {
    return valid;
}