// CRUD : CREATE, READ, UPDATE, DELETE

const request = require("request");

const URL_SERVER = "https://goodreads-devf-aaron.herokuapp.com";

//CREATE

// const createAuthor = (
//     name,
//     lastName,
//     biography,
//     nacionalidad,
//     gender,
//     age,
//     isAlive
// ) => {
//     const URL_POST = `${URL_SERVER}/api/v1/authors/`;
//     const jsonSend = {
//         "name": name,
//         "last_name": lastName,
//         "nacionalidad": nacionalidad,
//         "biography": biography,
//         "gender": gender,
//         "age": age,
//         "is_alive": isAlive
//     };

//     request.post(URL_POST,{form: jsonSend},(err, response, body) => {
//             if (response.statusCode === 201) {
//                 const author = JSON.parse(body);
//                 console.log(author);
//                 return author
//             } else {
//                 console.log(response.statusCode);
//             }
//         }
//     );
// };

// createAuthor("Manu", "TJ", "CANTANTE", "MX", "M", 16, false);




//READ ALL
// const readAllAuthors =()=>{
//     const URL_GET = `${URL_SERVER}/api/v1/authors`

//     request.get(URL_GET, (err,res,body)=>{
//         if(res.statusCode ===200){
//         const json = JSON.parse(body)
//         console.log(json);
//     }else{
//         console.log(res.statusCode)
//     }
//     })
// }

// readAllAuthors()




//READ ONE
// const readOneAuthor = (id)=>{
//     const URL_GET = `${URL_SERVER}/api/v1/authors/${id}/`

//     request.get(URL_GET,(err,res,body)=>{
//         if(res.statusCode === 200){
//             const json = JSON.parse(body)
//             console.log(json)
//         }else{
//             console.log(res.statusCode)
//             console.log(err)
//         }
//     })
// }

// readOneAuthor(3872)


// Este es un problema tipico de las peticiones AJAX que no esta esperando a que venga la respuesta del servidor
// antes de mostrar el id del autor.

// const newAuthor = createAuthor("Jose", "Sanchez", "Desarrollador", "USA", "M", 30, true);
// readOneAuthor(newAuthor.id)




// UPDATE ONE


// const UpdateAuthor = (
//     id,
//     name,
//     lastName,
//     biography,
//     nacionalidad,
//     gender,
//     age,
//     isAlive
// ) =>{
//     const URL_PUT = `${URL_SERVER}/api/v1/authors/${id}/`
//     const jsonSend = {
//                 "name": name,
//                 "last_name": lastName,
//                 "nacionalidad": nacionalidad,
//                 "biography": biography,
//                 "gender": gender,
//                 "age": age,
//                 "is_alive": isAlive
//             };

//      request.put(URL_PUT,{form:jsonSend}, (err,res,body)=>{
//          if(res.statusCode === 200){
//              const json = JSON.parse(body)
//              console.log(json)
//          }else{
//              console.log(res.statusCode)
//          }
//      })       
// }

// UpdateAuthor(13066,"Jose", "Sanchez", "Desarrollador", "USA", "M", 30, true)



// UPDATE ONE PARTIALITY

// const UpdateAuthor = (
//     id,
//     biography,
// ) =>{
//     const URL_PUT = `${URL_SERVER}/api/v1/authors/${id}/`
//     const jsonSend = {"biography": biography};

//      request.patch(URL_PUT,{form:jsonSend}, (err,res,body)=>{
//          if(res.statusCode === 200){
//              const json = JSON.parse(body)
//              console.log(json)
//          }else{
//              console.log(res.statusCode)
//          }
//      })       
// }

// UpdateAuthor(13066,"Programador")


// DELETE

const DeleteAuhtor = (id)=>{
const URL_DELETE = `${URL_SERVER}/api/v1/authors/${id}/`
request.delete(URL_DELETE,(err,res, body)=>{
    if(res.statusCode === 200 || res.statusCode === 204 || res.statuscode ===301){
        console.log(body);
        console.log(`autor ${id}, ${otro} eliminado con exito`)
    }else{
        console.log(res.statusCode)
    }
})
}

DeleteAuhtor(13441)