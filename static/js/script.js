/*======================================
        DICCIONARIO DE TRADUCCIONES
======================================*/

const traducciones = {

    es: {
        menuInicio: "Inicio",
        menuProyecto: "Proyecto",
        menuFuncionamiento: "Funcionamiento",
        menuComponentes: "Componentes",
        menuGaleria: "Galería",
        btnDescargar: "Descargar PDF",

        heroTitle: "Robot Recolector<br>de Residuos",
        heroTexto: "Robot autónomo diseñado para detectar, recolectar y clasificar residuos reciclables y no reciclables utilizando sensores, Arduino UNO y navegación inteligente.",
        btnConocerMas: "Conocer Más",
        btnVerGaleria: "Ver Galería",

        card1Titulo: "Navegación Autónoma",
        card1Texto: "Evita obstáculos utilizando sensores ultrasónicos.",
        card2Titulo: "Clasificación Inteligente",
        card2Texto: "Separa residuos reciclables y basura común.",
        card3Titulo: "Gran Autonomía",
        card3Texto: "Batería de larga duración.",
        card4Titulo: "Diseño Modular",
        card4Texto: "Fácil mantenimiento y expansión.",

        proyectoTitulo: "Sobre el Proyecto",
        proyectoTexto: "MOBI-BIN 03 es un robot educativo creado para automatizar la recolección y clasificación de residuos.",
        objetivosTitulo: "Objetivos",
        objetivo1: "Reducir la contaminación.",
        objetivo2: "Promover el reciclaje.",
        objetivo3: "Automatizar la recolección.",
        objetivo4: "Facilitar el aprendizaje.",

        funcionamientoTitulo: "Funcionamiento",
        paso1: "Detecta residuos.",
        paso2: "Se acerca automáticamente.",
        paso3: "Clasifica el residuo.",
        paso4: "Lo almacena.",

        componentesTitulo: "Componentes Principales",
        comp1: "Arduino UNO",
        comp2: "Driver L298N",
        comp3: "Motores DC",
        comp4: "Sensores HC-SR04",
        comp5: "Matriz LED 8x8",
        comp6: "Batería 12V",
        comp7: "Chasis MDF",
        comp8: "Contenedores",

        galeriaTitulo: "Galería",

        especificacionesTitulo: "Especificaciones Técnicas",
        espDimensiones: "Dimensiones",
        espPeso: "Peso",
        espControlador: "Controlador",
        espAlimentacion: "Alimentación",
        espMotores: "Motores",
        espMotoresValor: "4 Motores DC",

        footerSubtitulo: "Robot Recolector Inteligente",
        footerCopyright: "© 2026 MOBI-BIN 03 | Todos los derechos reservados."
    },

    en: {
        menuInicio: "Home",
        menuProyecto: "Project",
        menuFuncionamiento: "How It Works",
        menuComponentes: "Components",
        menuGaleria: "Gallery",
        btnDescargar: "Download PDF",

        heroTitle: "Waste Collector<br>Robot",
        heroTexto: "Autonomous robot designed to detect, collect and sort recyclable and non-recyclable waste using sensors, an Arduino UNO and smart navigation.",
        btnConocerMas: "Learn More",
        btnVerGaleria: "View Gallery",

        card1Titulo: "Autonomous Navigation",
        card1Texto: "Avoids obstacles using ultrasonic sensors.",
        card2Titulo: "Smart Sorting",
        card2Texto: "Separates recyclable waste from common trash.",
        card3Titulo: "Long Battery Life",
        card3Texto: "Long-lasting battery.",
        card4Titulo: "Modular Design",
        card4Texto: "Easy maintenance and expansion.",

        proyectoTitulo: "About the Project",
        proyectoTexto: "MOBI-BIN 03 is an educational robot created to automate waste collection and sorting.",
        objetivosTitulo: "Goals",
        objetivo1: "Reduce pollution.",
        objetivo2: "Promote recycling.",
        objetivo3: "Automate collection.",
        objetivo4: "Support learning.",

        funcionamientoTitulo: "How It Works",
        paso1: "Detects waste.",
        paso2: "Approaches automatically.",
        paso3: "Sorts the waste.",
        paso4: "Stores it.",

        componentesTitulo: "Main Components",
        comp1: "Arduino UNO",
        comp2: "L298N Driver",
        comp3: "DC Motors",
        comp4: "HC-SR04 Sensors",
        comp5: "8x8 LED Matrix",
        comp6: "12V Battery",
        comp7: "MDF Chassis",
        comp8: "Containers",

        galeriaTitulo: "Gallery",

        especificacionesTitulo: "Technical Specifications",
        espDimensiones: "Dimensions",
        espPeso: "Weight",
        espControlador: "Controller",
        espAlimentacion: "Power Supply",
        espMotores: "Motors",
        espMotoresValor: "4 DC Motors",

        footerSubtitulo: "Smart Waste Collector Robot",
        footerCopyright: "© 2026 MOBI-BIN 03 | All rights reserved."
    }

};

/*======================================
        APLICAR TRADUCCIÓN
======================================*/

function aplicarIdioma(idioma) {

    const diccionario = traducciones[idioma];

    if (!diccionario) return;

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        if (diccionario[clave] !== undefined) {
            elemento.innerHTML = diccionario[clave];
        }

    });

    document.documentElement.lang = idioma;

    localStorage.setItem("idioma", idioma);

}

/*======================================
        INICIALIZACIÓN
======================================*/

document.addEventListener("DOMContentLoaded", () => {

    const selector = document.getElementById("language");

    const idiomaGuardado = localStorage.getItem("idioma") || "es";

    selector.value = idiomaGuardado;
    aplicarIdioma(idiomaGuardado);

    selector.addEventListener("change", (e) => {
        aplicarIdioma(e.target.value);
    });

});