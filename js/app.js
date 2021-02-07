const searchbtn = document.getElementById('search').addEventListener('click', function() {
    const searchBox = document.getElementById('search-box').value;

    //If Press Search Button Without Any Text or Number 
    if (searchBox === "" || searchBox === null || searchBox === undefined || searchBox >= 0) {
        alert('Please Search With Your Meal Name');
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`)
            .then(res => res.json())
            .then(data => {
                const mealDetails = data.meals;

                //If Search Result Null or Not Found
                if (mealDetails === null) {
                    alert('No Meal Found');
                } else {
                    mealDetails.forEach(mealInfo => {
                        const mealTitle = mealInfo.strMeal;
                        const strMealThumb = mealInfo.strMealThumb;
                        const mealContainer = document.createElement('div');
                        mealContainer.className = 'items';
                        const details = `
                    <img src="${strMealThumb}" alt="">
                    <p>${mealTitle}</p>
                    `;
                        mealContainer.innerHTML = details;
                        const mealItems = document.getElementById('meal-items');
                        mealItems.appendChild(mealContainer);

                        // Ingredients Part
                        mealContainer.addEventListener('click', function() {
                            document.getElementById('meal-items').style.display = 'none';
                            document.getElementById('search-box').style.display = 'none';
                            document.getElementById('search').style.display = 'none';
                            document.getElementById('ingredients').style.display = 'block';
                            document.getElementById('ingredients-image').src = strMealThumb;
                            document.getElementById('meal-name').innerText = mealTitle;
                            const ingredientsDetails = [mealInfo.strMeasure1 + ' ' + mealInfo.strIngredient1,
                                mealInfo.strMeasure2 + ' ' + mealInfo.strIngredient2,
                                mealInfo.strMeasure3 + ' ' + mealInfo.strIngredient3,
                                mealInfo.strMeasure4 + ' ' + mealInfo.strIngredient4,
                                mealInfo.strMeasure5 + ' ' + mealInfo.strIngredient5,
                                mealInfo.strMeasure6 + ' ' + mealInfo.strIngredient6,
                                mealInfo.strMeasure7 + ' ' + mealInfo.strIngredient7,
                                mealInfo.strMeasure8 + ' ' + mealInfo.strIngredient8,
                                mealInfo.strMeasure9 + ' ' + mealInfo.strIngredient9,
                                mealInfo.strMeasure10 + ' ' + mealInfo.strIngredient10,
                                mealInfo.strMeasure11 + ' ' + mealInfo.strIngredient11,
                                mealInfo.strMeasure12 + ' ' + mealInfo.strIngredient12,
                                mealInfo.strMeasure13 + ' ' + mealInfo.strIngredient13,
                                mealInfo.strMeasure14 + ' ' + mealInfo.strIngredient14,
                                mealInfo.strMeasure15 + ' ' + mealInfo.strIngredient15,
                                mealInfo.strMeasure16 + ' ' + mealInfo.strIngredient16,
                                mealInfo.strMeasure17 + ' ' + mealInfo.strIngredient17,
                                mealInfo.strMeasure18 + ' ' + mealInfo.strIngredient18,
                                mealInfo.strMeasure19 + ' ' + mealInfo.strIngredient19,
                                mealInfo.strMeasure20 + ' ' + mealInfo.strIngredient20
                            ];
                            ingredientsDetails.forEach(ingredientsFinal => {
                                const list = document.createElement('h6');
                                list.innerText = ingredientsFinal;
                                const ingredientList = document.getElementById('list');
                                ingredientList.appendChild(list);
                                const ingredients = document.getElementById('ingredients');
                                ingredients.appendChild(ingredientList);
                            });
                        });
                    });
                };
            });
    };
});