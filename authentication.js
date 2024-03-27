const fs = require("fs")
const path = require("path");

const userDbPath = path.join(__dirname, "db", 'users.json');

function getAllUsers() {
    return new Promise((resolve, reject) => {
        fs.readFile(userDbPath, "utf8", (err, users) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(users));
        })
    })
}

function authenticateUser(req, res){
    return new Promise((resolve, reject)=>{
        let headerUsername = req.headers.username;
        let headerPassword = req.headers.password;
              const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', async ()=>{
            const users = await getAllUsers();
            const userFound = users.find(user => user.username === headerUsername && user.password === headerPassword)
    
            if(!userFound){
                reject("user not found")
            }
            resolve(userFound)

      })
    })

  
}


module.exports = {
    authenticateUser
}
