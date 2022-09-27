const nav = document.querySelector('nav');


const loadData = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
        const data = await response.json();

        console.log(data.data)
        
        data.data.forEach((category, index) => {
            const btn = document.createElement('button');
            btn.className = 'list';
            btn.innerText = category;
            btn.addEventListener('click', () => handleOnClick(category));

            nav.appendChild(btn);  

    });
};



loadData();



const handleOnClick = async (category) => {
    const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`);
    const data = await response.json();

    const bookItemElem = document.querySelector('ul');
    bookItemElem.innerHTML = '';
    data.data.channel.item.forEach((book) => {
        const bookElem = document.createElement('li');
        bookElem.innerText = book.title;
        bookItemElem.appendChild(bookElem);
    })
}








