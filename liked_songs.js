console.log(' hy from liked songs')

const songItems = JSON.parse(localStorage.getItem('songItems')) || [];

const songItemsContainer = document.getElementById('songItem');




function renderSongs() {
    songItemsContainer.innerHTML = '';

    songItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width= '100vw'
        card.style.backgroundColor = 'white';


        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        card.appendChild(image);

        const name = document.createElement('h3');
        name.textContent = item.name;
        card.appendChild(name);

        const removeButton = document.createElement('button');
        removeButton.classList.add('bt');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            const index = songItems.indexOf(item);
            if (index > -1) {
                songItems.splice(index, 1);
                localStorage.setItem('songItems', JSON.stringify(songItems));
                renderSongs();
            }
        });
        card.appendChild(removeButton);

        songItemsContainer.appendChild(card);
    });
    
}

renderSongs();


