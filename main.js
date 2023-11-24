// Asegúrate de que D3.js esté incluido antes de este script

// Seleccionamos el tercer gráfico y agregamos un SVG
const SVG = d3.select("#chart").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
const SVG2 = d3.select("#chart2").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
const SVG3 = d3.select("#chart3").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
const SVG4 = d3.select("#chart4").append("svg")
      .attr("width", "100%")
      .attr("height", "100%");    

      // leemos los datos del archivo CSV con el nombre de los artistas
let kanye = d3.csv("data/kanye.csv", d=> {
    return {
        nombre: d.Nombre,
        artista: d.Artista,
        album: d.Album,
        release: d.release_date,
        popularidad: parseInt(d.Popularidad),
        duracion: parseInt(d.duration_ms),
        img: d.img
    }
}
).then(data => {
    console.log(data);
    // Seleccionamos el primer gráfico y agregamos un SVG
    const SVG = d3.select("#chart").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
    const SVG2 = d3.select("#chart2").append("svg")
    .attr("width", "100%")

    // Creamos un círculo en el SVG
    SVG.append("circle")
      .attr("cx", "50%") // Centro del círculo en el 50% del ancho del SVG
      .attr("cy", "50%") // Centro del círculo en el 50% del alto del SVG
      .attr("r", 40) // Radio del círculo
      .attr("fill", "blue"); // Color de relleno del círculo

    SVG4.append("circle")
      .attr("cx", "50%") // Centro del círculo en el 50% del ancho del SVG
      .attr("cy", "50%") // Centro del círculo en el 50% del alto del SVG      .attr("r", 40) // Radio del círculo
      .attr("fill", "blue"); // Color de relleno del círculo


    // Creamos un rectángulo en el SVG
    SVG2.append("rect")
      .attr("x", 50) // Posición en X del rectángulo
      .attr("y", 50) // Posición en Y del rectángulo
      .attr("width", 100) // Ancho del rectángulo
      .attr("height", 50) // Alto del rectángulo
      .attr("fill", "red"); // Color de relleno del rectángulo

      // cerramos
    }
    );
    
