const supabase = require("../database/config");
const generateHashPassword = require('../tools/crypto')

class UsersController{

    async registerUser(name, password, email){
        var userName = name;
        var userPassword = generateHashPassword(password);
        var userEmail = email;
        
        await supabase.from('users')
            .insert([{name: userName, password: userPassword , email: userEmail}])
    }

    async listUser(){
        await supabase.from('users')
            .select('*')
    }

    async deleteUser(){
        const idDeleted = id;
        
        await supabase.from('users')
            .delete()
            .match({id: idDeleted})  
    }

}






module.exports = new UsersController;