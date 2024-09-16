import './style.css';

function makeDropdown(btn) {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}

const dropBtn = document.getElementById('dropdown1');
makeDropdown(dropBtn);

const dropBtn2 = document.getElementById('dropdown2');
makeDropdown(dropBtn2);