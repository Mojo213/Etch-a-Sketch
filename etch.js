const body = document.querySelector('body')
const container = document.querySelector('#container');
const btnContainer = document.createElement('div');
btnContainer.classList.add('btnContain');
body.insertBefore(btnContainer, container);
const btn1 = document.createElement('button');
btnContainer.appendChild(btn1);
btn1.textContent = 'Enter grid size';
btn1.classList.add('btn1');
const btn2 = document.createElement('button');
btnContainer.appendChild(btn2);
btn2.textContent = 'Button2';
btn2.classList.add('btn2');
const btn3 = document.createElement('button');
btnContainer.appendChild(btn3);
btn3.textContent = 'Button3';
btn3.classList.add('btn3');

btn1.addEventListener('click', (e) => {
    alert('grid size clicked');
})

function createDiv (col, rows) {
  for (let i = 0; i < (col*rows); i++) {
    const div = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    div.classList.add('box');
    container.appendChild(div);

    div.addEventListener('mouseenter', () => {
      div.classList.toggle('active');
    //   div.classList.remove('box');
    //   div.classList.add('active');
    });
  }
}

createDiv(16,16);
