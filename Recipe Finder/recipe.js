const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please type something!");
    return;
  }
  searchRecipes(query);
});

async function searchRecipes(query) {
  results.innerHTML = "<h2>Loading...</h2>";

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    const data = await res.json();

    if (!data.meals) {
      results.innerHTML = "<h2>No recipes found!</h2>";
      return;
    }

    displayRecipes(data.meals);
  } catch (error) {
    console.error(error);
    results.innerHTML = "<h2>Error fetching recipes!</h2>";
  }
}

function displayRecipes(meals) {
  results.innerHTML = "";

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h2>${meal.strMeal}</h2>
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>
      <a href="${meal.strSource}" target="_blank">
        <button>View Recipe</button>
      </a>
    `;

    results.appendChild(card);
  });
}
