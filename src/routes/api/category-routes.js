// Import the Router function from the Express library
const router = require('express').Router();

// Import the Category and Product models
const { Category, Product } = require('../../models');

// Define routes for the `/api/categories` endpoint

// Route to find all categories
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({}); // Find all categories using the Category model
    console.log (categoriesData)
    if (categoriesData.length <= 0) {
      res.status(404).send("cannot get categoies");
      return;
    }
    res.status(200).json(categoriesData); // Respond with a JSON object containing the categories data
  } catch (err) {
    res.status(500).json(err); // If there's an error, respond with a JSON object containing the error message
  }
});

// Route to find one category by its `id` value
router.get('/:id', async (req, res) => {
  try{
    const categoriesData = await Category.findByPk(req.params.id, { // Find one category by its `id` value using the Category model
      include: [{ model: Product}] // Include the Product model to get the category's associated products
    });

    if(!categoriesData) {
      res.status(404).json({ message: 'No categories found with this id'}); // If the category is not found, respond with a JSON object containing an error message
      return;
    }

    res.status(200).json(categoriesData); // Respond with a JSON object containing the category data
  } catch (err) {
    res.status(500).json(err); // If there's an error, respond with a JSON object containing the error message
  }
});

// Route to create a new category
router.post('/', async (req, res) => {
  try{
    const categoriesData = await Category.create(req.body); // Create a new category using the Category model and the request body
    res.status(200).json(categoriesData); // Respond with a JSON object containing the created category data
  } catch(err) {
    res.status(400).json(err); // If there's an error, respond with a JSON object containing the error message
  }
});

// Route to update a category by its `id` value
router.put('/:id', (req, res) => {
  // Update a category by its `id` value using the Category model and the request body
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => {
      // Find all associated tags from ProductTag
     res.json(category) // Respond with a JSON object containing the updated category data
    })
});

// Route to delete a category by its `id` value
router.delete('/:id', async (req, res) => {
 try{
  const categoriesData = await Category.destroy({ // Delete a category by its `id` value using the Category model
    where: {
      id: req.params.id
    }
  });
  if (!categoriesData) {
    res.status(400).send("delete category failed")
  }
  res.status(200).end(); // Respond with a success status code
 } catch(err) {
  res.status(500).json(err); // If there's an error, respond with a JSON object containing the error message
 }
});

// Export the router so it can be used by other parts of the application
module.exports = router;
