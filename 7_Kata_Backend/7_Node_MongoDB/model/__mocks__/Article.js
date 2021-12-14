
const {articleModel} = jest.genMockFromModule('../supermarket')

function createArticle(body) {
   const newArticle = {
       ...body,
       id: 'tcvtqw677te36wectwqfdcv'
   }

   return new Promise((resolve, reject)=>{
       if(body.nombre === 'Jugo de naranja'){
           resolve(newArticle)
       }else{
           throw new Error('No se pudo crear el articulo en la base de datos')
       }
   })
}

articleModel.createArticle = createArticle

module.exports = {articleModel}
