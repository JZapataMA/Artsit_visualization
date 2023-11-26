// Seleccionamos el tercer gráfico y agregamos un SVG
// Variables para almacenar los datos de los álbumes de cada artista
let kanyeData, taylorData, kendrickData;

let YeSongs, TaySongs, KenSongs;

let artistas_df;

let ye_url, tay_url, ken_url;

d3.csv("https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/Kanye_West.csv").then(data => {
    YeSongs = data; // Almacena los datos de las canciones para usarlos más tarde
});

d3.csv("https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/Taylor_Swift.csv").then(data => {
    TaySongs = data; // Almacena los datos de las canciones para usarlos más tarde
});

d3.csv("https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/Kendrick_Lamar.csv").then(data => {
    KenSongs = data; // Almacena los datos de las canciones para usarlos más tarde
});

// Cargamos las fotos de los artistas
d3.json('https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/artistas.json')
.then(data => {
    fotos = data;
});

// Cargar los datos de los álbumes de Kanye
d3.json('https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/ye_albums.json')
  .then(data => {
    kanyeData = data;
    // Inicializar visualización con datos de Kanye o el artista predeterminado
    updateVisualization(kanyeData,YeSongs);
  });

// Cargar los datos de los álbumes de Taylor
d3.json('https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/taylor_albums.json')
  .then(data => {
    taylorData = data;
  });

// Cargar los datos de los álbumes de Kendrick
d3.json('https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/kendrick_albums.json')
  .then(data => {
    kendrickData = data;
  });

let canciones = [];

d3.csv("https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/Kanye_West.csv").then(data => {
    canciones = data; // Almacena los datos de las canciones para usarlos más tarde
});

// Funciones para manejar los clicks en los círculos o botones de los artistas
function onKanyeClick() {
    canciones = YeSongs;
  updateVisualization(kanyeData);
  selectArtist(ye_pic);
}

function onTaylorClick() {
    canciones = TaySongs;
  updateVisualization(taylorData);
  selectArtist(tay_pic);
}

function onKendrickClick() {
    canciones = KenSongs;
    selectArtist(ken_pic);
  updateVisualization(kendrickData);
}

function selectArtist(artistCircle) {
    // Remover la clase 'selected-artist' de todos los círculos
    d3.selectAll('circle').classed('selected-artist', false);
    // Añadir la clase 'selected-artist' al círculo que fue clickeado
    artistCircle.classed('selected-artist', true);
  }
    

////////////////////////////////////////////////////// Codigos DIRECTOS //////////////////////////////////////////////////////
const height_discos = 900;
const width_discos = 600;

const height = 600;
const width = 600;

const HEIGHT_C1 = 800;
const WIDTH_C1 = 1600;

const HEIGHT_C3 = 800;
const WIDTH_C3 = 1600;

const HEIGHT_C5 = 800;
const WIDTH_C5 = 1800;

const margin = 60;

const imgHeight = 190;


const imagesPerRow = 3;




const SVG = d3.select("#header").append("svg")
    .attr("width", 1920)
    .attr("height", 300);

const SVG1 = d3.select("#chart1").append("svg")
.attr("width", WIDTH_C1)
.attr("height", HEIGHT_C1);
    
const SVG2 = d3.select("#chart2").append("svg")
    .attr("width", width)
    .attr("height", height_discos - 200);

const SVG3 = d3.select("#chart3").append("svg")
    .attr("width", WIDTH_C3)
    .attr("height", HEIGHT_C3);

const SVG4 = d3.select("#chart4").append("svg")
      .attr("width", width_discos)
      .attr("height", height_discos);
    
const SVG5 = d3.select("#chart5").append("svg")
        .attr("width", WIDTH_C5)
        .attr("height", HEIGHT_C5);


const defs = SVG.append('defs');

const ye_pic = SVG.append("circle")
    .attr("cx", 650)
    .attr("cy", 100)
    .attr("r", 100)
    .attr("fill", "#FF0000")
    .on("click", onKanyeClick);

// AGREGUEMOS EL NOMBRE DE LOS ARTISTAS
SVG.append("text")
    .attr("x", 650)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "20px")
    .attr("fill", "white")
    .text("Kanye West");


const tay_pic = SVG.append("circle")
    .attr("cx", 950)
    .attr("cy", 100)
    .attr("r", 100)
    .attr("fill", "#FF0000")
    .on("click", onTaylorClick);

SVG.append("text")
    .attr("x", 950)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "20px")
    .attr("fill", "white")
    .text("Taylor Swift");

const ken_pic = SVG.append("circle")
    .attr("cx", 1250)
    .attr("cy", 100)
    .attr("r", 100)
    .attr("fill", "#FF0000")
    .on("click", onKendrickClick);

SVG.append("text")
    .attr("x", 1250)
    .attr("y", 220)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "20px")
    .attr("fill", "white")
    .text("Kendrick Lamar");

SVG.append("text")
    .attr("x", 1225)
    .attr("y", 290)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "50px")
    .attr("fill", "White")
    .text("Albums, Singles and Ep's");

SVG.append("text")
    .attr("x", 125)
    .attr("y", 270)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "50px")
    .attr("fill", "White")
    .text("Canciones");

SVG.append("text")
    .attr("x", 50)
    .attr("y", 300)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "20px")
    .attr("fill", "White")
    .text("Title");

SVG.append("text")
    .attr("x", 565)
    .attr("y", 295)
    .attr("text-anchor", "middle")
    .attr("font-family", "Circular")
    .attr("font-size", "20px")
    .attr("fill", "White")
    .text("⌚");

// Cargamos las fotos de los artistas
d3.json('https://raw.githubusercontent.com/JZapataMA/Artsit_visualization/main/data/artistas.json')
.then(data => {
    artistas_df = data;
    console.log(artistas_df);

    artistas_df.forEach(artista => {
        defs.append('pattern')
            .attr('id', `pattern-${artista.Artista.replace(/\s/g, '-')}`)
            .attr('patternUnits', 'objectBoundingBox')
            .attr('width', '100%')
            .attr('height', '100%')
            .append('image')
            .attr('href', artista.foto)
            .attr('width', 200)
            .attr('height', 200)
            .attr('preserveAspectRatio', 'xMidYMid slice');
    });

    ye_pic.attr('fill', 'url(#pattern-Kanye-West)');
    tay_pic.attr('fill', 'url(#pattern-Taylor-Swift)');
    ken_pic.attr('fill', 'url(#pattern-Kendrick-Lamar)');
});


// recortamos el texto
SVG2.append("defs") 
  .append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("width", 150) 
  .attr("height", 40);



function mostrarCancionesDeAlbum(albumSeleccionado) {   
    // Filtra las canciones para obtener solo las del álbum seleccionado
    const cancionesDelAlbum = canciones.filter(d => d.Album === albumSeleccionado);

    // Limpia SVG2 antes de mostrar las nuevas canciones
    SVG2.selectAll("*").remove();

    // Vincula los datos filtrados a nuevos elementos en SVG2
    const cancionesGroups = SVG2.selectAll("g.cancion")
        .data(canciones.filter(d => d.Album === albumSeleccionado))
        .enter()
        .append("g")
        .attr("class", "cancion")
        .attr("transform", (d, i) => `translate(20, ${31 * (i + 1)})`); // Ajusta la posición de cada grupo

    // Añadir un foreignObject para cada canción que recorta el texto
    cancionesGroups.append("foreignObject")
        .attr("y", -15) // Ajustar si es necesario para centrar el texto
        .attr("width", 550) // Ancho total del contenedor para el nombre y la duración
        .attr("height", 30) // Altura suficiente para el texto
        .append("xhtml:body")
        .attr("xmlns", "http://www.w3.org/1999/xhtml")
        .html(d => `
            <div style="display: flex; justify-content: space-between; width: 100%;">
                <div style="flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.Nombre}</div>
                <div style="width: 80px; text-align: right; white-space: nowrap;">${convertirDuracion(d.duration_ms)}</div>
            </div>
        `)
        .style("font", "25px 'Circular'")
        .style("color", "white")
        .style("margin", "0px");
}

function convertirDuracion(duracion_ms) {
    // Convertir a minutos
    const minutos = Math.floor(duracion_ms / 60000);
    // Convertir a segundos y redondear al número entero más cercano
    let segundos = Math.round((duracion_ms % 60000) / 1000);
    // Asegurarse de que los segundos sean dos dígitos
    segundos = segundos < 10 ? '0' + segundos : segundos;
    // Formatear a 'minutos:segundos'
    return `${minutos}:${segundos}`;
}


function updateVisualization(data,canciones) {
    // Asegúrate de que el SVG tiene la altura correcta
    SVG2.selectAll("*").remove();
    SVG1.selectAll("*").remove();
    SVG3.selectAll("*").remove();
    SVG5.selectAll("*").remove();
    

    let svgHeight = Math.ceil(data.length / imagesPerRow) * (imgHeight + margin) + 50;
    
    const SVG4 = d3.select("#svg-container").select("svg")
        .attr("width", "100%")
        .attr("height", svgHeight);
    
    // Eliminar cualquier contenido previo
    SVG4.selectAll("*").remove();

    // Vincular datos a elementos 'g' (grupos), que actuarán como contenedores para cada álbum
    const albums = SVG4.selectAll(".album")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "album")
        .attr("transform", (d, i) => {
            const x = (i % imagesPerRow) * (imgHeight + margin) + 80;
            const y = Math.floor(i / imagesPerRow) * (imgHeight + margin);
            return `translate(${x},${y})`;
        });

    // Agregar patrones para las imágenes de los álbumes
    albums.append("pattern")
        .attr("id", (d, i) => `pattern${i}`)
        .attr("width", 1)
        .attr("height", 1)
        .attr("patternContentUnits", "objectBoundingBox")
        .append("image")
        .attr("href", d => d.Imagen)
        .attr("width", 1)
        .attr("height", 1)
        .attr("preserveAspectRatio", "xMidYMid slice");

    // Agregar rectángulos para usar los patrones
    albums.append("rect")
        .attr("width", imgHeight)
        .attr("height", imgHeight)
        .attr("fill", (d, i) => `url(#pattern${i})`)
        .on("click", function(event, d) {
            // 'this' se refiere al rectángulo actual que fue clickeado
            // 'd' es el dato asociado al rectángulo clickeado
            // Utiliza classList.toggle para agregar o quitar una clase que define el estilo del borde
            this.classList.toggle("selected-album");
        });


    const albumRects = SVG4.selectAll("rect");

    // Agregar rectángulos para usar los patrones
    albumRects
        .attr("width", imgHeight)
        .attr("height", imgHeight)
        .attr("fill", (d, i) => `url(#pattern${i})`)
        .on("click", function(event, d) {
            // elimina la clase 'selected-album' de todos los álbumes
            albumRects.classed("selected-album", false);

            // activamos la clase solo al álbum clickeado
            d3.select(this).classed("selected-album", true);

            // Aquí puedes agregar cualquier otra lógica que necesites ejecutar cuando un álbum es seleccionado
            mostrarCancionesDeAlbum(d.Album);
        });

    // Agregar el texto de los nombres de los álbumes
    albums.append("foreignObject")
        .attr("y", imgHeight + 5)
        .attr("width", imgHeight)
        .attr("height", 20)
        .append("xhtml:body")
        .style("font", "14px 'Circular'")
        .html(d => `<div style="width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.Album}</div>`);


    // Agregamos el grafico de barras de Popularidad

    // Define márgenes para el gráfico de barras
    const marginsBar = { top: 20, right: 30, bottom: 40, left: 200 };
    const innerWidthBar = WIDTH_C1 - marginsBar.left - marginsBar.right;
    const innerHeightBar = HEIGHT_C1 - marginsBar.top - marginsBar.bottom;

    // Escalas y ejes para el gráfico de barras
    var xScaleBar = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Popularidad)])
        .range([0, innerWidthBar]);

    var yScaleBar = d3.scaleBand()
        .domain(data.map(d => d.Album))
        .range([0, innerHeightBar])
        .padding(0.1);

    // Seleccionar y añadir el grupo que contendrá el gráfico de barras
    const gBar = SVG1.append('g')
        .attr('transform', `translate(${marginsBar.left},${marginsBar.top})`);

    // Agregar barras
    gBar.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", d => yScaleBar(d.Album))
        .attr("width", d => xScaleBar(d.Popularidad))
        .attr("height", yScaleBar.bandwidth())
        .attr("fill", "steelblue");

    // Agregar ejes
    gBar.append("g")
        .call(d3.axisLeft(yScaleBar));

    gBar.append("g")
        .attr("transform", `translate(0,${innerHeightBar})`)
        .call(d3.axisBottom(xScaleBar));

    // Etiquetas de los ejes
    gBar.append("text")
        .attr("text-anchor", "end")
        .attr("x", innerWidthBar / 2)
        .attr("y", innerHeightBar + marginsBar.bottom - 10)
        .text("Popularidad")
        .attr("fill", "white");

    gBar.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -marginsBar.left + 20)
        .attr("x", -marginsBar.top - (innerHeightBar / 2))
        .text("Álbum")
        .attr("font-size", "20px")
        .attr("fill", "white");


    SVG1.attr("transform", "translate(80, 0)");

    // Agregamos el grafico de barras de Duracion

    // Escalas y ejes para el gráfico de barras
    var xScaleBar = d3.scaleLinear()
        .domain([0, d3.max(data, d => d["Duración (min)"])])
        .range([0, innerWidthBar]);

    var yScaleBar = d3.scaleBand()
        .domain(data.map(d => d.Album))
        .range([0, innerHeightBar])
        .padding(0.1);

    // Seleccionar y añadir el grupo que contendrá el gráfico de barras
    const gBar2 = SVG3.append('g')
        .attr('transform', `translate(${marginsBar.left},${marginsBar.top})`);

    // Agregar barras
    gBar2.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", d => yScaleBar(d.Album))
        .attr("width", d => xScaleBar(d["Duración (min)"]))
        .attr("height", yScaleBar.bandwidth())
        .attr("fill", "steelblue");

    // Agregar ejes
    gBar2.append("g")
        .call(d3.axisLeft(yScaleBar));

    gBar2.append("g")
        .attr("transform", `translate(0,${innerHeightBar})`)
        .call(d3.axisBottom(xScaleBar));

    // Etiquetas de los ejes
    gBar2.append("text")
        .attr("text-anchor", "end")
        .attr("x", innerWidthBar / 2)
        .attr("y", innerHeightBar + marginsBar.bottom - 10)
        .text("Duración (min)")
        .attr("fill", "white");

    gBar2.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -marginsBar.left + 20)
        .attr("x", -marginsBar.top - (innerHeightBar / 2))
        .text("Álbum")
        .attr("font-size", "20px")
        .attr("fill", "white");


    SVG3.attr("transform", "translate(80, 0)");

    // Agregamos diagrama de nodos

    // Escala para el tamaño de los nodos
    var radiusScale = d3.scaleSqrt()
        .domain([d3.min(data, d => d.Popularidad), d3.max(data, d => d.Popularidad)])
        .range([10, 60]); // Ajusta el rango según tus datos

    // Simulación de fuerzas
    var simulation = d3.forceSimulation(data)
        .force("charge", d3.forceManyBody().strength(5))
        .force("center", d3.forceCenter(WIDTH_C5 / 2, HEIGHT_C5 / 2))
        .force("collision", d3.forceCollide(d => radiusScale(d.Popularidad) + 1))
        .on("tick", ticked);

    // Crear nodos con imágenes
    var node = SVG5.selectAll(".node")
        .data(data)
        .enter().append("g")
        .attr("class", "node");

    node.append("circle")
        .attr("r", d => radiusScale(d.Popularidad))
        .style("fill", "white"); // Puedes agregar un borde o sombra si lo deseas

    node.append("image")
        .attr("xlink:href", d => d.Imagen)
        .attr("x", d => -radiusScale(d.Popularidad))
        .attr("y", d => -radiusScale(d.Popularidad))
        .attr("height", d => 2 * radiusScale(d.Popularidad))
        .attr("width", d => 2 * radiusScale(d.Popularidad))
        .attr("clip-path", "circle()"); // Esto hace que la imagen se recorte en forma circular

    function ticked() {
        node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    }
    
