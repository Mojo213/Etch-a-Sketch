const body = document.querySelector('body');
const container = document.querySelector('#container');
const btnContainer = document.createElement('div');
btnContainer.classList.add('btnContain');
body.insertBefore(btnContainer, container);

const gridSizeBtn = document.createElement('button');
btnContainer.appendChild(gridSizeBtn);
gridSizeBtn.textContent = 'Enter Grid Size';
gridSizeBtn.classList.add('gridsize');

const refreshBtn = document.createElement('button');
btnContainer.appendChild(refreshBtn);
refreshBtn.textContent = 'Refresh';
refreshBtn.classList.add('refresh');
const newGameBtn = document.createElement('button');
btnContainer.appendChild(newGameBtn);
newGameBtn.textContent = 'New Game';
newGameBtn.classList.add('newgame');

let mouseDown = false;
container.addEventListener('mousedown',() => (mouseDown = true));
container.addEventListener('mouseup', () => (mouseDown = false));

let col = '';
let rows = '';


gridSizeBtn.addEventListener('click', () => {
  col = prompt('enter grid column', ''); 
  rows = prompt('enter grid row', '');
  createDiv(col, rows);
});

refreshBtn.addEventListener('click', () => {
  const divs = container.querySelectorAll('div');
  divs.forEach(div => {
    div.classList.remove('active');
    div.classList.add('box');
  });
});

newGameBtn.addEventListener('click', refreshPage);



function createDiv (col, rows) {
  for (let i = 0; i < (col*rows); i++) {
    const div = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    div.classList.add('box');
    container.appendChild(div);

    div.addEventListener('mousemove', () => {
     if (mouseDown) {
      div.classList.remove('box');
      div.classList.add('active');
     }
    });


  }
}

function refreshPage() {
  location.reload();
}

