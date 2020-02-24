// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {

    const header = document.createElement('div');
    header.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'MARCH 28, 2019'

    const title = document.createElement('h1');
    title.textContent = 'LambdaTimes';

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°'

    headerContent.appendChild(header);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return headerContent;
};

const headerContent = document.querySelector('.header-container');
//headerContent.appendChild(Header())