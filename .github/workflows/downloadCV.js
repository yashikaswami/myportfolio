
const overlay = document.getElementById('overlay');


function openPopup() {
  overlay.style.display = 'flex'; 
  overlay.classList.add('active');
}

function closePopup() {
  overlay.classList.remove('active');
  
  setTimeout(function() {
    overlay.style.display = 'none'; 
  }, 30); 
}
