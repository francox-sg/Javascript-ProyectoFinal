
/* Imports */
import { comprarProducto } from "../js/carrito.js";

/* Tomar Elementos DOM */
const busquedaContenedor = document.getElementById("busquedaContenedor");

/* Traigo productos del Local Storage */

export let productosDisponibles=[];
setTimeout(()=>{
    productosDisponibles= JSON.parse(localStorage.getItem("productos"));


},2000
)




let usuarioActivo=JSON.parse(localStorage.getItem("usuarioActivo"));




/* Ejecutar cada vez que se abre el documento */
document.addEventListener("DOMContentLoaded",()=>{
    if(usuarioActivo != null){
        const headerIngresar =document.getElementsByClassName("headerGrid-ingresar");
        headerIngresar[0].innerHTML = `
        <a href="">${usuarioActivo.user}</a>
        <div>
            <img src="https://yca.org.ar/wp-content/uploads/sites/4/2019/06/perfil-avatar-hombre-icono-redondo_24640-14044.jpg" alt="Avatar">
        </div>
        <p id="logout">Logout</p>
    `;
    let logout = document.getElementById("logout");
    logout.addEventListener("click",()=>funcLogout())
    }
    //generarCardsProductos(productosDisponibles);
})


/* Funciones */

export const generarCardsProductos = (productos) =>{

    busquedaContenedor.innerHTML = ``; // Borro el Contenedor

    productos.forEach((producto)=>{
        let {id , nombre , descripcion , imagen , precio} = producto;
        /* Creacion de Card */
        let div = document.createElement("div");
        div.className = "cardBusqueda"
        div.innerHTML = `
                <div class="cardBusquedaImg">
                    <img src="${imagen}" alt="">
                </div>
                <div class="cardBusquedaInfo">
                    <h2>${nombre}</h2>
                    <p>${descripcion}</p>
                </div>
                <div class="cardBusquedaPrecio">
                    <h3>$${precio}</h3>
                    <button>
                        <img id="agregarACarrito${id}" src="../assets/img/carritoNaranja56pxDer.png" alt="Imagen Carrito">
                    </button>
                </div>
        `;
        busquedaContenedor.append(div);

        /* Acciones DOM */
        const agregarACarrito = document.getElementById(`agregarACarrito${id}`);
        agregarACarrito.addEventListener("click", ()=>comprarProducto(id));
        


        
    })
}


const funcLogout =()=>{
    const headerIngresar =document.getElementsByClassName("headerGrid-ingresar");
    console.log("logout");
    localStorage.removeItem("usuarioActivo");
    headerIngresar[0].innerHTML = `
    <a href="./login.html">Ingresar</a>
    <div>
        <img src="../assets/img/login 56px.png" alt="Avatar">
    </div>
    `;
}

/* Programa */

//generarCardsProductos(productosDisponibles);

/* Filtros */
let filtroBusqueda ="";
let filtroCategoria="Todo"
let ordenarNombreAsc=false;
let ordenarNombreDes=false;
let ordenarPrecioAsc=false;
let ordenarPrecioDes=false;
let filtroPrecioDesde="";
let filtroPrecioHasta="";

/* Busqueda: 1er Filtro */  
const busqueda = document.getElementById("busqueda");
busqueda.addEventListener("keyup", (e)=>{
    //filtrobusqueda = productosDisponibles.filter((producto)=>producto.nombre.toLowerCase().includes(e.target.value));
    filtroBusqueda =e.target.value;
    /* if(e.target.value !==""){
        generarCardsProductos(productosFiltro);
    }else{
        productosDisponibles = JSON.parse(localStorage.getItem("productos"));
        generarCardsProductos(productosDisponibles);
    } */
    aplicarFiltros();
})

/* Categorias */
const categorias = document.getElementById("categorias");
const contenedorCategorias = document.getElementById("contenedorCategorias");
categorias.addEventListener("click",()=>{
    if(contenedorCategorias.style.display==="none"){
        contenedorCategorias.style.display= "block"
    }else{
        contenedorCategorias.style.display= "none"
    }
})

const filtroCategoriaTodos = document.getElementById("filtroCategoriaTodos");
const filtroCategoriaRopa = document.getElementById("filtroCategoriaRopa");
const filtroCategoriaDeportes = document.getElementById("filtroCategoriaDeportes");
const filtroCategoriaTecnologia = document.getElementById("filtroCategoriaTecnologia");
const filtroCategoriaJoyas = document.getElementById("filtroCategoriaJoyas");

filtroCategoriaTodos.addEventListener("click", ()=>{
    filtroCategoria ="Todo";
    filtroCategoriaTodos.style.color= "orange";
    filtroCategoriaRopa.style.color= "white";
    filtroCategoriaDeportes.style.color= "white";
    filtroCategoriaTecnologia.style.color= "white";
    filtroCategoriaJoyas.style.color= "white";
    aplicarFiltros();
})
filtroCategoriaRopa.addEventListener("click", ()=>{
    filtroCategoria ="Ropa";
    filtroCategoriaTodos.style.color= "white";
    filtroCategoriaRopa.style.color= "orange";
    filtroCategoriaDeportes.style.color= "white";
    filtroCategoriaTecnologia.style.color= "white";
    filtroCategoriaJoyas.style.color= "white";
    aplicarFiltros();
})
filtroCategoriaDeportes.addEventListener("click", ()=>{
    filtroCategoria ="Deportes";
    filtroCategoriaTodos.style.color= "white";
    filtroCategoriaRopa.style.color= "white";
    filtroCategoriaDeportes.style.color= "orange";
    filtroCategoriaTecnologia.style.color= "white";
    filtroCategoriaJoyas.style.color= "white";
    aplicarFiltros();
})
filtroCategoriaTecnologia.addEventListener("click", ()=>{
    filtroCategoria ="Tecnologia";
    filtroCategoriaTodos.style.color= "white";
    filtroCategoriaRopa.style.color= "white";
    filtroCategoriaDeportes.style.color= "white";
    filtroCategoriaTecnologia.style.color= "orange";
    filtroCategoriaJoyas.style.color= "white";
    aplicarFiltros();
})
filtroCategoriaJoyas.addEventListener("click", ()=>{
    filtroCategoria ="Joyas";
    filtroCategoriaTodos.style.color= "white";
    filtroCategoriaRopa.style.color= "white";
    filtroCategoriaDeportes.style.color= "white";
    filtroCategoriaTecnologia.style.color= "white";
    filtroCategoriaJoyas.style.color= "orange";
    aplicarFiltros();
})


/* Filtros */
const filtrar = document.getElementById("filtrar");
const contenedorFiltrar = document.getElementById("contenedorFiltrar");
filtrar.addEventListener("click",()=>{
    if(contenedorFiltrar.style.display==="none"){
        contenedorFiltrar.style.display= "flex"
    }else{
        contenedorFiltrar.style.display= "none"
    }
    
})

const OrdenarNombreAscendente = document.getElementById("OrdenarNombreAscendente");
const OrdenarNombreDescendente = document.getElementById("OrdenarNombreDescendente");
const OrdenarPrecioAscendente = document.getElementById("OrdenarPrecioAscendente");
const OrdenarPrecioDescendente = document.getElementById("OrdenarPrecioDescendente");
const FiltroPrecioDesde = document.getElementById("FiltroPrecioDesde");
const FiltroPrecioHasta = document.getElementById("FiltroPrecioHasta");

OrdenarNombreAscendente.addEventListener("click",()=>{
    if(ordenarNombreAsc === false){
        ordenarNombreAsc=true;
        ordenarNombreDes=false;
        ordenarPrecioAsc=false;
        ordenarPrecioDes=false;
        OrdenarNombreAscendente.style.color="orange";
        OrdenarNombreDescendente.style.color="black";
        OrdenarPrecioAscendente.style.color="black";
        OrdenarPrecioDescendente.style.color="black";
    }else{
        ordenarNombreAsc=false;
        OrdenarNombreAscendente.style.color="black";
    }
    aplicarFiltros();
})
OrdenarNombreDescendente.addEventListener("click",()=>{
    if(ordenarNombreDes === false){
        ordenarNombreAsc=false;
        ordenarNombreDes=true;
        ordenarPrecioAsc=false;
        ordenarPrecioDes=false;
        OrdenarNombreAscendente.style.color="black";
        OrdenarNombreDescendente.style.color="orange";
        OrdenarPrecioAscendente.style.color="black";
        OrdenarPrecioDescendente.style.color="black";
    }else{
        ordenarNombreDes=false;
        OrdenarNombreDescendente.style.color="black";
    }
    aplicarFiltros();
})
OrdenarPrecioAscendente.addEventListener("click",()=>{
    if(ordenarPrecioAsc === false){
        ordenarNombreAsc=false;
        ordenarNombreDes=false;
        ordenarPrecioAsc=true;
        ordenarPrecioDes=false;
        OrdenarNombreAscendente.style.color="black";
        OrdenarNombreDescendente.style.color="black";
        OrdenarPrecioAscendente.style.color="orange";
        OrdenarPrecioDescendente.style.color="black";
    }else{
        ordenarPrecioAsc=false;
        OrdenarPrecioAscendente.style.color="black";
    }
    aplicarFiltros();
})
OrdenarPrecioDescendente.addEventListener("click",()=>{
    if(ordenarPrecioDes === false){
        ordenarNombreAsc=false;
        ordenarNombreDes=false;
        ordenarPrecioAsc=false;
        ordenarPrecioDes=true;
        OrdenarNombreAscendente.style.color="black";
        OrdenarNombreDescendente.style.color="black";
        OrdenarPrecioAscendente.style.color="black";
        OrdenarPrecioDescendente.style.color="orange";
    }else{
        ordenarPrecioDes=false;
        OrdenarPrecioDescendente.style.color="black";
    }
    aplicarFiltros();
})
FiltroPrecioDesde.addEventListener("keyup",(e)=>{
    filtroPrecioDesde= e.target.value;
    aplicarFiltros();
})
FiltroPrecioHasta.addEventListener("keyup",(e)=>{
    filtroPrecioHasta= e.target.value;
    aplicarFiltros();
})




const aplicarFiltros =()=>{
    let productosFiltrados =productosDisponibles;
    //Filtro Busqueda
    productosFiltrados= productosFiltrados.filter((producto)=>producto.nombre.toLowerCase().includes(filtroBusqueda));
    
    //Filtro Categorias
    if(filtroCategoria !== "Todo"){
        productosFiltrados= productosFiltrados.filter((producto)=>producto.categoria === filtroCategoria);
    }

    //Filtro Precio Desde
    if(filtroPrecioDesde != ""){
        productosFiltrados= productosFiltrados.filter((producto)=>producto.precio >= filtroPrecioDesde);
    }
    
    //Filtro Precio Hasta
    if(filtroPrecioHasta != ""){
        productosFiltrados= productosFiltrados.filter((producto)=>producto.precio <= filtroPrecioHasta);
    }
    
    //Ordenar Nombre Ascendente
    if(ordenarNombreAsc===true){
        productosFiltrados=productosFiltrados.sort((a,b)=>{
            
            if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                return 1
            }else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
                return -1
            }else{
                return 0
            }
            
        })
    }
    //Ordenar Nombre Descendente
    if(ordenarNombreDes===true){
        productosFiltrados=productosFiltrados.sort((a,b)=>{
            
            if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
                return 1
            }else if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
                return -1
            }else{
                return 0
            }
        })
    }
    //Ordenar Precio Ascendente
    if(ordenarPrecioAsc===true){
        productosFiltrados=productosFiltrados.sort((a,b)=> a.precio - b.precio);
    }
    //Ordenar Precio Descendente
    if(ordenarPrecioDes===true){
        productosFiltrados=productosFiltrados.sort((a,b)=> b.precio - a.precio);
    }



    
    
    generarCardsProductos(productosFiltrados);
}

/* Vista de Prodictos */

let vistaLineal =true;

const vista =document.getElementById("vista");

vista.addEventListener("click",()=>{

    if(vistaLineal===true){
        busquedaContenedor.style.flexDirection="row";
        busquedaContenedor.style.flexWrap="wrap";
        
        for(let i=0; i<busquedaContenedor.children.length;i++){
            busquedaContenedor.children[i].style.height="350px";
            busquedaContenedor.children[i].style.width="200px";
            busquedaContenedor.children[i].style.display="flex";
            busquedaContenedor.children[i].style.flexDirection="column";
            busquedaContenedor.children[i].classList.add('cardVistaDos');
            
            
        }
        
        vistaLineal=false;
    }else{
        busquedaContenedor.style.flexDirection="column";
        for(let i=0; i<busquedaContenedor.children.length;i++){
            busquedaContenedor.children[i].style.width="90%";
            busquedaContenedor.children[i].style.height="8rem";
            busquedaContenedor.children[i].style.display="flex";
            busquedaContenedor.children[i].style.flexDirection="row"
            busquedaContenedor.children[i].className="cardBusqueda";
            
        }
        vistaLineal=true;
    }

})









