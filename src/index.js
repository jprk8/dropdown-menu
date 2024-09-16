import './style.css';

function makeDropdown(btn, items) {
    btn.addEventListener('click', () => {
        if (items.style.display === 'none') {
            items.style.display = 'block';
        } else {
            items.style.display = 'none';
        }
    });
}

const dropbtn = document.getElementById('dropdown1');
const dropcontainer = document.getElementById('dropdown-container');
makeDropdown(dropbtn, dropcontainer);

const dropbtn2 = document.getElementById('dropdown2');
const dropcontainer2 = document.getElementById('dropdown-container2');
makeDropdown(dropbtn2, dropcontainer2);