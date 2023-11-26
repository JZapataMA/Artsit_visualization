// Seleccionamos el tercer gráfico y agregamos un SVG
// Variables para almacenar los datos de los álbumes de cada artista
let kanyeData, taylorData, kendrickData;

let YeSongs, TaySongs, KenSongs;

let fotos;

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
}

function onTaylorClick() {
    canciones = TaySongs;
  updateVisualization(taylorData);
}

function onKendrickClick() {
    canciones = KenSongs;
  updateVisualization(kendrickData);
}


const height_discos = 900;
const width_discos = 600;

const height = 600;
const width = 600;

const margin = 60;

const imgHeight = 190;


const imagesPerRow = 3;

const SVG = d3.select("#header").append("svg")
    .attr("width", width)
    .attr("height", height);
    
const SVG2 = d3.select("#chart2").append("svg")
    .attr("width", width)
    .attr("height", height_discos - 200);

const SVG3 = d3.select("#chart3").append("svg")
    .attr("width", width)
    .attr("height", height);

const SVG4 = d3.select("#chart4").append("svg")
      .attr("width", width_discos)
      .attr("height", height_discos);




// recortamos el texto
SVG2.append("defs") 
  .append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("width", 150) 
  .attr("height", 40);

/// Creamos 3 circulos en el Header y a cada circulo le asignamos un artista
const circle1 = SVG.append("circle")
    .attr("cx", 100)
    .attr("cy", 50)
    .attr("r", 40)
    .attr("fill", "#FF0000")
    .on("click", onKanyeClick);

const circle2 = SVG.append("circle")
    .attr("cx", 300)
    .attr("cy", 50)
    .attr("r", 40)
    .attr("fill", "#FF0000")
    .on("click", onTaylorClick);

const circle3 = SVG.append("circle")
    .attr("cx", 500)
    .attr("cy", 50)
    .attr("r", 40)
    .attr("fill", "#FF0000")
    .on("click", onKendrickClick);

// Creamos 3 botones en el Header y a cada boton le asignamos un artista
const button1 = SVG.append("foreignObject")
    .attr("x", 60)
    .attr("y", 30)
    .attr("width", 80)
    .attr("height", 80)
    .append("xhtml:body")
    .html('<button type="button" class="btn btn-danger" onclick="onKanyeClick()">Kanye</button>');

const button2 = SVG.append("foreignObject")
    .attr("x", 260)
    .attr("y", 30)
    .attr("width", 80)
    .attr("height", 80)
    .append("xhtml:body")
    .html('<button type="button" class="btn btn-danger" onclick="onTaylorClick()">Taylor</button>');

const button3 = SVG.append("foreignObject")
    .attr("x", 460)
    .attr("y", 30)
    .attr("width", 80)
    .attr("height", 80)
    .append("xhtml:body")
    .html('<button type="button" class="btn btn-danger" onclick="onKendrickClick()">Kendrick</button>');



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
        .attr("transform", (d, i) => `translate(0, ${30 * (i + 1)})`); // Ajusta la posición de cada grupo

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
                <div style="width: 50px; text-align: right; white-space: nowrap;">${convertirDuracion(d.duration_ms)}</div>
            </div>
        `)
        .style("font", "20px 'Circular'")
        .style("color", "white")
        .style("margin", "0");
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

    }
    
