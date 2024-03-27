const http = require("http")
const fs = require("fs")
const path = require("path")
const PORT = 6060;

const {authenticateUser} = require('./authentication')


const requestHandler = async function (req, res) {


    if(req.url === "/" && req.method === "GET"){

      authenticateUser(req, res)
            .then(()=> {     
                res.write("logged in")  
                res.end()               
    }).catch((err)=> {
                res.writeHead(400)
                res.end(JSON.stringify({
                    message: err
                }))
            })
    }

     else if(req.url === '/books' && req.method === "GET"){
        res.write("This is the endpoint to get books")
        res.end();
    }
    else if(req.url === '/books' && req.method === 'POST'){
        res.write("This is the endpoint to add a book")
        res.end()
    }
    else if(req.url === '/books' && req.method === 'PUT'){
        res.write("This is the endpoint to update a book")
        res.end()
    }
    else if(req.url === '/books' && req.method === 'PATCH'){
        res.write("This is the endpoint to delete a book")
        res.end()
    }     
    else if(req.url === '/books' && req.method === 'DELETE'){
        res.write("This is the endpoint to delete a book")
        res.end()
    }
    else if(req.url === '/authors' && req.method === 'GET'){
        res.write("This is the endpoint to get a list of authors")
        res.end()
    }
    else if(req.url === '/authors' && req.method === 'POST'){
        res.write("This is the endpoint to add an author")
        res.end()
    }
    else if(req.url === '/authors' && req.method === 'PUT'){
        res.write("This is the endpoint to update an author")
        res.end()
    }       
    else if(req.url === '/authors' && req.method === 'PATCH'){
        res.write("This is the endpoint to patch an author")
        res.end()
    }        
    else if(req.url === '/authors' && req.method === 'DELETE'){
        res.write("This is the endpoint to delete an author")
        res.end()
    }          
    
    else{
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Method Not Supported'
        }));

    }
         
    
}


// Create server
const server = http.createServer(requestHandler)

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})