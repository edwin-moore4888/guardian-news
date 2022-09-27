const nav = document.querySelector('nav');


const loadData = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
        const data = await response.json();

        console.log(data.data)
        
        data.data.forEach((category, index) => {
            const btn = document.createElement('button');
            btn.className = 'list';
            btn.innerText = category;
            btn.addEventListener('click', () => buttonClick(category));

            nav.appendChild(btn);  

    });
};



loadData();



const buttonClick = async (category) => {
    const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`);
    const data = await response.json();

    const artItemElem = document.querySelector('ul');
    artItemElem.innerHTML = '';
    data.data.channel.item.forEach((art) => {
        const artElem = document.createElement('li');
        artElem.innerText = art.title;
        artItemElem.appendChild(artElem);
    })
}








