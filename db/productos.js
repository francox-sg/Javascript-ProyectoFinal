
import { generarCardsProductos } from "../js/main.js";

/* Inicializacion de "Base de datos" */

export const productos =[
    {id:1 , nombre: "Remera",   descripcion: "Remera negra de algodon", imagen: "https://www.cottonclub.com.ar/media/catalog/product/cache/65e2670acbf1788249a95924f3789a80/1/1/1100_negra_copia.jpg", precio: 15000, stock: 2, categoria:"Ropa" },
    {id:2 , nombre: "Remera",   descripcion: "Remera Azul manga corta", imagen: "https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-fr-rj-11-ef4b6ca4b08c3f434315906905869409-640-0.jpg", precio: 14500, stock: 1, categoria:"Ropa" },
    {id:3 , nombre: "Campera",  descripcion: "Campera deportiva gris", imagen: "https://acdn.mitiendanube.com/stores/144/702/products/campera-frisa-mujer-melange-frente2-e434b30eb1eea76b3a16384575580351-1024-1024.jpg", precio: 32800, stock: 4, categoria:"Ropa" },
    {id:4 , nombre: "Medias",   descripcion: "Pack de medias en tres colores", imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf2f7398d/products/NI_SX7676-964/NI_SX7676-964-1.JPG", precio: 2000, stock: 23, categoria:"Ropa" },
    {id:5 , nombre: "Pelota de Futbol", descripcion: "Pelota de Futbol adidas, cosida", imagen: "https://monterosport.com.ar/wp-content/uploads/2016/10/pelota-de-fubol-cuero-nacional.jpg", precio: 19000, stock: 4, categoria:"Deportes" },
    {id:6 , nombre: "Monitor",  descripcion: "Monitor HP 32 pulgadas 4K", imagen: "https://www.comeros.com.ar/wp-content/uploads/2022/11/91a192b77d77a80a4b7e9768877d.jpg", precio: 48000, stock: 1, categoria:"Tecnologia" },
    {id:7 , nombre: "Mouse",    descripcion: "Mouse Logitech gamer", imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen", precio: 7000, stock: 44, categoria:"Tecnologia" },
    {id:8 , nombre: "Pelota de Basquet", descripcion: "Pelota de Basquet Spalding Profesional", imagen: "https://acdn.mitiendanube.com/stores/001/293/417/products/basquet-71-324d47127bae9f365f16746748173320-640-0.png", precio: 18000, stock: 5, categoria:"Deportes" },
    {id:9 , nombre: "Rollers",  descripcion: "Rollers Rollerblade modelo Imperial", imagen: "https://http2.mlstatic.com/D_NQ_NP_818350-MLA49878571411_052022-O.webp", precio: 75000, stock: 2, categoria:"Deportes" },
    {id:10 , nombre: "Teclado", descripcion: "Teclado LG con inclinacion ajustable", imagen: "https://gorilagames.com/img/Public/1019-producto-teclado-hyperx-alloy-origins-core-1006.jpg", precio: 21000, stock: 8, categoria:"Tecnologia" },
    {id:11 , nombre: "Lapiz",   descripcion: "Lapiz Maped, grosor: fino x 24", imagen: "https://libreriaslevalle.com/33853-large_default/lapiz-negro-hexagonal-n2-faber-castell.jpg", precio: 40, stock: 25, categoria:"Libreria" },
]


/* USO DE API PARA TRAER PRODUCTOS */
let productosGet = [];
fetch('https://fakestoreapi.com/products')
    .then( (res) => res.json())
    .then( (data) => {
    data.forEach(producto => {
        let cat= ""
        switch(producto.category){
            case "men's clothing":
                cat = "Ropa";
                break;
            case "jewelery":
                cat = "Joyas";
                break;
            case "electronics":
                cat = "Tecnologia";
                break;
            case "women's clothing":
                cat = "Deportes";
                break;
            default:
                cat="Tecnologia";
        }


        productosGet.push({
            id:             producto.id,
            nombre:         producto.title.slice(0,30),
            descripcion:    producto.description,
            imagen:         producto.image,
            precio:         producto.price,
            stock:          Math.random*10,
            categoria: cat
        })
        
    });
    JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productosGet))
    
    generarCardsProductos(productosGet);
})



