const supabase = require("../database/config");

class ProductsController{
    
    async listProducts(){
        await supabase.from('products')
            .select('*')
    }

    async addProducts(name, description, price){
        const nameProduct = name;
        const descriptionProduct = description;
        const priceProduct = price;
        
        await supabase.from('products')
            .insert([{name: nameProduct, description: descriptionProduct , price: priceProduct}])
    }
    
    async deleteProduct(id){
        const idDeleted = id;
    
        await supabase.from('products')
            .delete()
            .match({id: idDeleted})  
    }

    async updateProducts(id, name, description, price){
        const nameProduct = name;
        const descriptionProduct = description;
        const priceProduct = price;

        await supabase.from('products')
            .update({name: nameProduct, description: descriptionProduct , price: priceProduct})
            .match({id: id})
    }
}

module.exports = ProductsController