console.log(' hy from add to liked songs')


function addToLiked(item) {
    const songItem = JSON.parse(localStorage.getItem('songItems')) || [];

    // Check if item is already in cart
    const songItems = songItems.find(songItem=> songItem.id === item.id);
    songItems.push(item);
    
  
    // Save cart items to local storage
    localStorage.setItem('songItems', JSON.stringify(cartItems));
  }
  
  const addToLikedButtons = document.querySelectorAll('.likeIcon');
  
  addToLikedButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert("Item added successfully");
      const card = button.parentNode;
      const id = card.dataset.id;
      const name = card.dataset.name;
      const image = card.dataset.image;
      const item = { id, name, image };

      console.log(item)
      addToLiked(item);
    });
  });
  