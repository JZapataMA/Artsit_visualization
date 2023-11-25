// Asegúrate de que D3.js esté incluido antes de este script

// Seleccionamos el tercer gráfico y agregamos un SVG
const height_discos = 1500;
const width_discos = 500;

const height = 600;
const width = 600;

const margin = 50;

const imgHeight = 190;


const imagesPerRow = 3;

const SVG = d3.select("#chart1").append("svg")
    .attr("width", width)
    .attr("height", height);
    
const SVG2 = d3.select("#chart2").append("svg")
    .attr("width", width)
    .attr("height", height);

const SVG3 = d3.select("#chart3").append("svg")
    .attr("width", width)
    .attr("height", height);

const SVG4 = d3.select("#chart4").append("svg")
      .attr("width", width_discos)
      .attr("height", height_discos);

      


      // leemos los datos del archivo CSV con el nombre de los artistas
let kanye_discos = d3.json("https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/taylor_albums.json", d=> {
    return {
        nombre: d.Nombre,
        artista: d.Artista,
        album: d.Album,
        release: d.release_date,
        popularidad: parseInt(d.Popularidad),
        duracion: parseInt(d.duration_ms),
        img: d.Imagen
    }
}
).then(data => {
    console.log(data);

    let svgHeight = Math.ceil(data.length / imagesPerRow) * (imgHeight + margin);
    SVG4.attr("height", svgHeight);


    data.forEach((d, i) => {

      const patternId = `pattern${i}`;
      

      const SVG4 = d3.select("#svg-container").select("svg")
      .attr("width", "100%")
      .attr("height", data.length / imagesPerRow * (imgHeight + margin) + 80);

      // Calcular la posición x e y basada en el índice
      const x = (i % imagesPerRow) * (imgHeight + margin)+ 80;
      const y = Math.floor(i / imagesPerRow) * (imgHeight + margin);

      SVG4.append("foreignObject")
      .attr("x", x)
      .attr("y", y + imgHeight + 5)
      .attr("width", imgHeight)
      .attr("height", 20)
      .append("xhtml:body")
      .style("font", "14px 'Circular'")
      .html(`<div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.Album}</div>`);


      // Crear un patrón único para cada imagen
      const pattern = SVG4.append("defs")
        .append("pattern")
          .attr("id", patternId)
          .attr("width", 1)
          .attr("height", 1)
          .attr("patternContentUnits", "objectBoundingBox");
      
      pattern.append("image")
          .attr("href", d.Imagen)
          .attr("width", 1)
          .attr("height", 1)
          .attr("preserveAspectRatio", "xMidYMid slice");
      
      // Crear el rectángulo y aplicar el patrón de imagen
      SVG4.append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", imgHeight)
        .attr("height", imgHeight)
        .attr("fill", `url(#${patternId})`);

        const textX = x + imgHeight / 2;
        const textY = y + imgHeight + 15; 

            SVG4.append("foreignObject")
            .attr("x", x)
            .attr("y", y + imgHeight + 5) // Posicionamiento debajo de la imagen
            .attr("width", imgHeight) // El ancho es el mismo que el de la imagen
            .attr("height", 20) // Altura del contenedor de texto
            .append("xhtml:body")
            .style("font", "14px 'Circular'")
            .html(`<div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.Album}</div>`)

        

            const row = Math.floor(i / imagesPerRow);
            const yForeign = (row * (imgHeight + margin)) + imgHeight + 5;

            SVG4.append("foreignObject")
            .attr("x", x)
            .attr("y", yForeign)

  });
}
    );
    
