let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
}
const vendorSelect = document.querySelector('#vendor-select');
const citySelect = document.querySelector('#city-select');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
  const selectedVendor = vendorSelect.value;
  const selectedCity = citySelect.value;

  // Open a new webpage based on the selected vendor and city
  // For example, you could use a switch statement to create a different URL for each combination of vendor and city
  switch (selectedVendor) {
    case 'bridal makeup':
      switch (selectedCity) {
        case'Hamirpur':
          window.open("bridalhamirpur/ndex.html");
          break;
        case 'palampur':
          window.open('Bridal makeup palampur/index.html');
          break;
        case 'kangra':
          window.open('Bridal makeup Kangra/index.html');
          break;
      }
      break;
    case 'GroomWear':
      switch (selectedCity) {
        case 'Hamirpur':
          window.open("GROOM WEAR hamirpur/index.html");
          break;
        case 'kangra':
          window.open('Groom wear Kangra/index.html');
          break;
        case 'palampur':
          window.open('Groom wear palampur/index.html');
          break;
      }
      break;
    case 'Wedding Decoration':
      switch (selectedCity) {
        case 'kangra':
          window.open('wedding decoration Kangra/index.html');
          break;
        case 'Hamirpur':
          window.open('wedding decorations hamirpur/index.html');
          break;
        case 'palampur':
          window.open('wedding decoration palampur/index.html');
          break;
      }
      break;
  }
});
