console.log('Verificando que D3 se ha importado correctamente', d3)

// Utilizando Javascript Vanilla

// const [body] = document.getElementsByTagName('body')
// console.log(body)

// body.style.backgroundColor = 'orange'


//Utilizando D3 para manipular el DOM

// d3.select('body').style('background-color', 'pink')
d3.select('body').style('background-color', ()=>{return 'salmon'}
)

d3.selectAll('p')
.style('border', '1px solid black')
.style('color', ()=>{return "hsl(" + Math.random() * 360 + ", 100%,50%)"})



// Manejando conjunto de datos
const dataSet = [5,8,10,21,42,71,89]
d3.select('body')
.selectAll('h3')
.data(dataSet)
.enter()
.append('h3')
.text('algo')
.text((value)=> {return `soy el valor ${value}`} )


// Haciendo una grafica a partir de un DataSet
const paises = [
    {nombre: 'Mexico', porcentaje:87, color:'green'},
    {nombre: 'El salvador', porcentaje:76, color:'yellow'},
    {nombre: 'Costa Rica', porcentaje:65, color:'orange'},
    {nombre: 'Argentina', porcentaje:91, color:'blue'}
]

const porcentajes = paises.map((pais)=>pais.porcentaje)
console.log(porcentajes)


d3.select('body')
.selectAll('div')
.data(paises)
.enter()
.append('div')
.style('height', '40px')
.style('background-color', (pais)=>{
    return pais.color
})
.style('margin-bottom', '10px')
.style('width', (pais)=>{
    return `${pais.porcentaje}pt`
})
.text((pais)=>{
    return `${pais.nombre} ${pais.porcentaje}%`
})


// Haciendo una grafica cargando un DataSet CSV

// d3.csv('./CausasDeMortalidad.csv', (data)=>{
//    return console.log(data)
// })

d3.csv('./CausasDeMortalidad.csv')
.then((result)=>{
    console.log(result)
    d3.select('body')
.selectAll('div')
.data(result)
.enter()
.append('div')
.style('width', (d)=> `${d.Defunciones}px`)
.style('background', 'yellow')
.style('margin-bottom', '10px')
.text((d)=>`Muertes por ${d.Causas}`)
})
 












