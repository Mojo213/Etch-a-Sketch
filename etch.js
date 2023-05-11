const container = document.querySelector('#container');

function createDiv (col, rows) {
  for (let i = 0; i < (col*rows); i++) {
    const div = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    div.classList.add('box');
    container.appendChild(div);

    div.addEventListener('mouseenter', (e) => {
      div.classList.toggle('active');
    //   div.classList.remove('box');
    //   div.classList.add('active');
    });
  }
}

createDiv(16,16);
