// del 1
// Add and style a single <h1> element
const h1 = document.createElement('h1');
document.body.appendChild(h1);

let radnmr = '1';

// Create and style multiple <h1> elements with numbers
for ( let i = 1; i < 6; i++ ) {
    const row = document.createElement('h1');
    row.innerText = `rad ${radnmr}`;

    document.body.appendChild(row);

    // styleing
    row.style.color = "hsl(0, 100%, 50%)";
    row.style.backgroundColor = `hsl(${i * 10}, 100%, 90%)`;
    row.style.textAlign= "center";

    radnmr++;
}

// del 2
// skapa 3 loopar
const div1 = document.createElement('div');
document.body.appendChild(div1);
div1.style.backgroundColor = "purple";
div1.style.border = 'solid 5px purple';
div1.style.width = "55px";
div1.style.margin = '10px';

let nmr1 = 1;

for ( let i = 1; i < 10; i++ ) {
    const loop1 = document.createElement('p');
    loop1.innerText = `${nmr1}`;
    
    div1.appendChild(loop1);

    // Styling
    loop1.style.backgroundColor = (i % 2 === 0) ? 'black' : 'white';
    loop1.style.color = (i % 2 === 0) ? 'white' : 'black';    
    loop1.style.textAlign = "left";
    loop1.style.width = "50px";

    if ( nmr1 === 4 ) {
        loop1.style.backgroundColor = 'purple';
        loop1.style.color = 'black';
    }

    nmr1++;
}



// 
const div2 = document.createElement('div');
document.body.appendChild(div2);
div2.style.backgroundColor = "purple";
div2.style.border = 'solid 5px purple';
div2.style.width = "55px";
div2.style.margin = '10px';

let nmr2 = 9;

for ( let i = 9; i >= 1; i-- ) {
    const loop2 = document.createElement('p');
    loop2.innerText = `${nmr2}`;
    
    div2.appendChild(loop2);

    // Styling
    loop2.style.backgroundColor = (i % 2 === 0) ? 'black' : 'white';
    loop2.style.color = (i % 2 === 0) ? 'white' : 'black';  
    loop2.style.textAlign = "center";
    loop2.style.width = "50px";

    if ( nmr2 === 8 ) {
        loop2.style.backgroundColor = 'purple';
        loop2.style.color = 'white';
    }

    nmr2--;
}

// 
const div3 = document.createElement('div');
document.body.appendChild(div3);
div3.style.backgroundColor = "purple";
div3.style.border = 'solid 5px purple';
div3.style.width = "55px";
div3.style.margin = '10px';

let nmr3 = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for ( let i = 0; i < 10; i++ ) {
    const loop3 = document.createElement('p');
    loop3.innerText = `${nmr3[i]}`;
    
    div3.appendChild(loop3);

    // Styling
    loop3.style.backgroundColor = (i % 2 === 0) ? 'black' : 'white';
    loop3.style.color = (i % 2 === 0) ? 'white' : 'black';    
    loop3.style.textAlign = "right";
    loop3.style.width = "50px";

    if ( nmr3[i] === "sex" ) {
        loop3.style.backgroundColor = 'purple';
        loop3.style.color = 'white';
    }
    
}


// centered divs
const container = document.createElement('div');
document.body.appendChild(container);
container.style.display = 'flex'; 
container.style.justifyContent = 'space-around';  
container.style.alignItems = 'center';  
container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
