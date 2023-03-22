//add new box btn
const addNewBoxBtns = document.querySelectorAll('.add-new-box-btn');

//a container for to-do boxes
const todoBoxes = document.querySelector('.todo__boxes');

//add new list item inside a box btn
// const addListItemBtnsCollection = document.getElementsByClassName('add-list-item-btn');

// color btns collection
const colorBtns = document.querySelectorAll('.color-btn');

// active boxes list
const activeElements = document.getElementsByClassName('active');
const activeElementsArr = Array.from(activeElements);

// a collection of unactive to-do boxes
const unactiveToDoBoxes = document.getElementsByClassName('unactive');

// a collection of created list item labels
const todoLabels = document.getElementsByClassName('todo__label');
const todoLabelsArr = [...todoLabels];
console.log(todoLabels);

//Create new active to-do box when click on add new box btn
for (let btn of addNewBoxBtns) {
    btn.addEventListener('click', function() {
    const newBox = createNewBox();
    const ul = createUl();
    const header = createTodoHeader();
    newBox.append(header, ul);
    todoBoxes.append(newBox);
})
}

function createNewBox() {
    const newBox = document.createElement('div');
    newBox.classList.add('todo__box', 'active');
    return newBox;
}

function createAddListItemBtn() {
    const addListItemBtn = document.createElement('button');
    addListItemBtn.classList.add('plus-btn', 'add-list-item-btn');
    addListItemBtn.addEventListener('click', function() {
        const ul = this.closest('.todo__header').nextElementSibling;
        ul.append(createLi());
    })
    return addListItemBtn;
}

function createTitle() {
    const title = document.createElement('h2');
    title.textContent = 'Тема';
    title.classList.add('todo__title');
    return title;
}

function createTodoHeader() {
    const todoHeader = document.createElement('header');
    todoHeader.classList.add('todo__header');
    todoHeader.append(createTitle(), createAddListItemBtn());
    return todoHeader;
}

function createUl() {
    const ul = document.createElement('ul');
    ul.classList.add('list');
    return ul;
}


function createLi() {
    const li = document.createElement('li');
    li.classList.add('todo__list-item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add('todo__checkbox')

    const label = document.createElement('label');
    label.textContent = 'example';
    label.classList.add('todo__label');
    label.style.fontSize = '14px';

    li.append(checkbox, label);
    return li;
}


// Change the color of the active box when click on the button
colorBtns.forEach((i) => {
    i.addEventListener('click', () => {
        Array.from(activeElements).forEach((el) => {
            el.classList.remove(i.classList[1], 'active');
            el.classList.add(i.classList[1], 'unactive');
        })
    })
})


// To make the box active when click
for (let box of unactiveToDoBoxes) {
    box.addEventListener('click', function() {
        console.log('test');
    });
}

// Change text in list item
for (let label of todoLabelsArr) {
    label.addEventListener('click', function() {
        const textInput = createTextInput();
        textInput.value = this.innerHTML;
        this.append(textInput);
    })
}

function createTextInput() {
    const textInput = document.createElement('input');
    textInput.classList.add('text-input');
    return textInput;
}





