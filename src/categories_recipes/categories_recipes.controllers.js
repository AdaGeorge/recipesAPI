const CategoriesRecipes = require('../models/categories_recipes.model');

const getAllCategoriesR = async () => {
    const data = await Categories.findAll();
    return data;
  };

const getCategoryRById = async (id) => {
    const data = await CategoriesRecipes.findOne({
        where: {
          id,
        },
      });
      return data;
}
const createCategoryRecipe = async (data) => {
    const newCategory = {
        
      };
      const response = await CategoriesRecipes.create(newCategory);
      return response;
}