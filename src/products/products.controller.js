const { createClient } = require('@supabase/supabase-js') 

const supabase = createClient(
  'https://ynbfowsnlrzjugqclbkz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluYmZvd3NubHJ6anVncWNsYmt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA3MTM1NTgsImV4cCI6MTk3NjI4OTU1OH0.XrpmZzdAAEl5tPDXkFmR_Nh9QZOSoL9xG58cfUzLs4o'
)

class ProductsController{
    
    static async addProduct(req, res){
        const { name , description, price } = req.body;
        try {
            const allProducts = await supabase.from('products').insert([{
                name: name,
                description: description,
                price: price
            }]);
            res.status(200).json(allProducts);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }


}

module.exports = ProductsController;