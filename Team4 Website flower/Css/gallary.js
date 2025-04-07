const reviews = [
    {
      name: "John Deo",
      rating: 5,
      image: "https://via.placeholder.com/100?text=1"
    },
    {
      name: "John Deo",
      rating: 4,
      image: "https://via.placeholder.com/100?text=2"
    },
    {
      name: "John Deo",
      rating: 4,
      image: "https://via.placeholder.com/100?text=3"
    },
    {
      name: "John Deo",
      rating: 5,
      image: "https://via.placeholder.com/100?text=4"
    }
  ];
  
  function generateStars(count) {
    return "★".repeat(count) + "☆".repeat(5 - count);
  }
  
  const container = document.getElementById("reviewContainer");
  
  reviews.forEach((review) => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${review.image}" alt="${review.name}">
      <h3>${review.name}</h3>
      <div class="stars">${generateStars(review.rating)}</div>
      <p>Flowers display a vast range of colors, from bright yellows and reds to soothing blues and purples, making them visually appealing.</p>
    `;
  
    container.appendChild(card);
  });
  