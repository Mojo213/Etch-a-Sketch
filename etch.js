const body = document.querySelector('body');
const container = document.querySelector('#container');
const btnContainer = document.createElement('div');
btnContainer.classList.add('btnContain');
body.insertBefore(btnContainer, container);

const gridSizeBtn = document.createElement('button');
btnContainer.appendChild(gridSizeBtn);
gridSizeBtn.textContent = 'Enter Grid Size';
gridSizeBtn.classList.add('gridsize');

const eraseBtn = document.createElement('button');
btnContainer.appendChild(eraseBtn);
eraseBtn.textContent = 'Erase';
eraseBtn.classList.add('erase');

const rgbBtn = document.createElement('button');
btnContainer.appendChild(rgbBtn);
rgbBtn.textContent = 'RGB';
rgbBtn.classList.add('color');

let mouseDown = false;
container.addEventListener('mousedown',() => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));

let col ;
let rows ;

gridSizeBtn.addEventListener('click', () => { 
  col = parseInt(prompt('Enter a number for the grid column', '')); 
  rows = parseInt(prompt('Enter a number for the grid row', ''));

  if (col >= 1 && col <= 100 && rows >= 1 && rows <= 100) {
    createDiv(col, rows);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});


eraseBtn.addEventListener('click', () => {
  const divs = container.querySelectorAll('div');
  divs.forEach(div => {
    div.classList.remove('active');
    div.classList.add('inactive');
    div.removeAttribute('style');
  });
});


function createDiv (col, rows) {
  for (let i = 0; i < (col * rows); i++) {
    const div = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    div.classList.add('inactive');
    container.appendChild(div);

    div.addEventListener('mousemove', () => {
     if (mouseDown) {
       if (rgbBtn.classList.contains('rgb')){
          div.style.backgroundColor = 'rgb('+ randomRgb() + ')';
       }else {
      div.classList.remove('inactive');
      div.classList.add('active');
       }
     }
    });
  }
}


function randomRgb () { 
 let red = Math.floor(Math.random() * 255);
 let green = Math.floor(Math.random() * 255);
 let blue = Math.floor(Math.random() * 255);
  return `${red}, ${green}, ${blue}`;
} 

rgbBtn.addEventListener('click', () => {
  if (rgbBtn.classList.contains('color')){ 
      rgbBtn.classList.remove('color'); 
      rgbBtn.classList.add('rgb');
      } else {
      rgbBtn.classList.add('color');
      rgbBtn.classList.remove('rgb');}
});

createDiv(16,16);


