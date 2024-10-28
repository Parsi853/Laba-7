function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function square() {
    let shape = document.createElement('div');
    let size = random(16, 512);
    let x = random(0, window.innerWidth - size - 5);
    let y = random(0, window.innerHeight - size - 5);
    let is_select = false;

    shape.classList.add('square');
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
    shape.addEventListener('click', function() {
        if (is_select) {
            shape.style.backgroundColor = 'red';
            is_select = false;
        }
        else {
            shape.style.backgroundColor = 'yellow';
            is_select = true;
        }
    })
    shape.addEventListener('dblclick', function() {
        document.body.removeChild(shape);
    })
    document.body.appendChild(shape);
}

function triangle() {
    let shape = document.createElement('div');
    let size = random(16, 512);
    let x = random(0, window.innerWidth - size - 5);
    let y = random(0, window.innerHeight - size - 5);
    let is_select = false;

    shape.classList.add('triangle');
    shape.style.borderBottom = 'solid blue ' + size/2 + 'px';
    shape.style.borderLeft = 'solid transparent ' + size/2 + 'px';
    shape.style.borderRight = 'solid transparent ' + size/2 + 'px';
    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
    shape.addEventListener('click', function() {
        if (is_select) {
            shape.style.borderBottomColor = 'blue';
            is_select = false;
        }
        else {
            shape.style.borderBottomColor = 'yellow';
            is_select = true;
        }
    })
    shape.addEventListener('dblclick', function() {
        document.body.removeChild(shape);
    })
    document.body.appendChild(shape);
}

function circle() {
    let shape = document.createElement('div');
    let size = random(16, 512);
    let x = random(0, window.innerWidth - size - 5);
    let y = random(0, window.innerHeight - size - 5);
    let is_select = false;

    shape.classList.add('circle');
    shape.style.width = size + 'px';
    shape.style.height = size + 'px';
    shape.style.left = x + 'px';
    shape.style.top = y + 'px';
    shape.addEventListener('click', function() {
        if (is_select) {
            shape.style.backgroundColor = 'green';
            is_select = false;
        }
        else {
            shape.style.backgroundColor = 'yellow';
            is_select = true;
        }
    })
    shape.addEventListener('dblclick', function() {
        document.body.removeChild(shape);
    })
    document.body.appendChild(shape);
}

function draw(shape) {
    if ((Number(amount.value) < Number(amount.min)) || (Number(amount.value) > Number(amount.max)))
        alert(`Введи число от ${amount.min} до ${amount.max}`);
    else if (shape == 'square')
        for (let i = 0; i < amount.value; i++) square();
    else if (shape == 'triangle')
        for (let i = 0; i < amount.value; i++) triangle();
    else if (shape == 'circle')
        for (let i = 0; i < amount.value; i++) circle();
}