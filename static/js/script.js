/*======================================
        DICCIONARIO DE TRADUCCIONES
======================================*/

const traducciones = {

    es: {
        menuInicio: "Inicio",
        menuProblematica: "Problemática",
        menuProyecto: "Proyecto",
        menuOds: "ODS",
        menuTecnologias: "Tecnología",
        menuFuncionamiento: "Funcionamiento",
        menuComponentes: "Componentes",
        menuEquipo: "Equipo",
        menuGaleria: "Galería",
        menuVideo: "Video",
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
        proyectoTexto: "WALL-E es un robot educativo creado para automatizar la recolección y clasificación de residuos.",
        objetivosTitulo: "Objetivos",
        objetivo1: "Reducir la contaminación.",
        objetivo2: "Promover el reciclaje.",
        objetivo3: "Automatizar la recolección.",
        objetivo4: "Facilitar el aprendizaje.",

        solucionTitulo: "Solución Tecnológica Propuesta",
        solucionTexto: "WALL-E combina electrónica, sensórica y estructura impresa/mecanizada para automatizar un proceso que normalmente se hace a mano. Un microcontrolador Arduino UNO procesa las lecturas de los sensores ultrasónicos HC-SR04 para detectar y esquivar obstáculos mientras el robot se desplaza; al identificar un residuo, se acerca de forma autónoma y lo dirige al contenedor correspondiente mediante su sistema de motores DC controlado por un driver L298N. Una matriz LED 8x8 entrega retroalimentación visual del estado del robot. De esta forma, el proyecto convierte un proceso manual y riesgoso en uno automático, seguro y replicable con fines educativos.",

        problematicaTitulo: "Problemática",
        problematicaIntro: "La gestión de residuos sigue siendo un desafío ambiental y social importante.",
        problema1Titulo: "Baja tasa de reciclaje",
        problema1Texto: "Gran parte de los residuos reciclables terminan mezclados con la basura común por falta de separación adecuada.",
        problema2Titulo: "Clasificación manual riesgosa",
        problema2Texto: "Separar residuos a mano expone a las personas a elementos cortantes, contaminados o peligrosos.",
        problema3Titulo: "Impacto ambiental",
        problema3Texto: "Los residuos mal gestionados contaminan suelos y fuentes de agua, afectando ecosistemas completos.",
        problema4Titulo: "Falta de educación ambiental",
        problema4Texto: "Existen pocas herramientas didácticas que enseñen de forma práctica la importancia del reciclaje.",

        odsTitulo: "Objetivo de Desarrollo Sostenible",
        odsIntro: "WALL-E se vincula directamente con los Objetivos de Desarrollo Sostenible de la ONU.",
        ods12Titulo: "Producción y Consumo Responsables",
        ods12Texto: "Es el ODS principal del proyecto: WALL-E promueve la reducción y el aprovechamiento de los residuos al automatizar su clasificación, facilitando que más materiales reciclables vuelvan a la cadena productiva en lugar de terminar en vertederos.",
        ods11Titulo: "Ciudades y Comunidades Sostenibles",
        ods11Texto: "Al facilitar una correcta gestión de residuos, el proyecto aporta a comunidades más limpias, saludables y sostenibles en el tiempo.",

        tecnologiasTitulo: "Tecnologías Utilizadas",
        tecnologiasIntro: "Herramientas de hardware y software empleadas durante el desarrollo del proyecto.",
        tec1Titulo: "Arduino UNO",
        tec1Texto: "Microcontrolador principal, programado en C/C++ con el Arduino IDE.",
        tec2Titulo: "Sensores HC-SR04",
        tec2Texto: "Sensores ultrasónicos utilizados para la detección de obstáculos y residuos.",
        tec3Titulo: "Driver L298N",
        tec3Texto: "Controlador de potencia para los motores DC del sistema de movimiento.",
        tec4Titulo: "Impresión 3D y MDF",
        tec4Texto: "Fabricación del chasis y piezas estructurales del robot.",
        tec5Titulo: "Matriz LED 8x8",
        tec5Texto: "Módulo de salida visual para mostrar el estado del robot.",
        tec6Titulo: "Diseño y Prototipado",
        tec6Texto: "Herramientas de diseño 2D/3D usadas para planificar la estructura antes de fabricarla.",

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

        equipoTitulo: "Nuestro Equipo",
        equipoIntro: "Estudiantes responsables del diseño, la construcción y la programación de WALL-E.",
        rol1: "Líder de Proyecto",
        rol2: "Desarrollo de Hardware",
        rol3: "Programación y Electrónica",
        rol4: "Diseño y Documentación",

        galeriaTitulo: "Galería",

        videoTitulo: "Video Demostrativo",
        videoIntro: "Mira a WALL-E detectando, clasificando y almacenando residuos en funcionamiento.",

        especificacionesTitulo: "Especificaciones Técnicas",
        espDimensiones: "Dimensiones",
        espPeso: "Peso",
        espControlador: "Controlador",
        espAlimentacion: "Alimentación",
        espMotores: "Motores",
        espMotoresValor: "4 Motores DC",

        footerSubtitulo: "Robot Recolector Inteligente",
        footerCopyright: "© 2026 WALL-E | Todos los derechos reservados."
    },

    en: {
        menuInicio: "Home",
        menuProblematica: "The Problem",
        menuProyecto: "Project",
        menuOds: "SDG",
        menuTecnologias: "Technology",
        menuFuncionamiento: "How It Works",
        menuComponentes: "Components",
        menuEquipo: "Team",
        menuGaleria: "Gallery",
        menuVideo: "Video",
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
        proyectoTexto: "WALL-E is an educational robot created to automate waste collection and sorting.",
        objetivosTitulo: "Goals",
        objetivo1: "Reduce pollution.",
        objetivo2: "Promote recycling.",
        objetivo3: "Automate collection.",
        objetivo4: "Support learning.",

        solucionTitulo: "Proposed Technological Solution",
        solucionTexto: "WALL-E combines electronics, sensing and a 3D-printed/machined structure to automate a process that is normally done by hand. An Arduino UNO microcontroller processes readings from the HC-SR04 ultrasonic sensors to detect and avoid obstacles while the robot moves; once it identifies a piece of waste, it approaches autonomously and guides it into the matching bin through its DC motor system controlled by an L298N driver. An 8x8 LED matrix provides visual feedback on the robot's status. This turns a manual, risky process into an automatic, safe and replicable one for educational purposes.",

        problematicaTitulo: "The Problem",
        problematicaIntro: "Waste management remains a major environmental and social challenge.",
        problema1Titulo: "Low recycling rate",
        problema1Texto: "Much recyclable waste ends up mixed with common trash due to a lack of proper separation.",
        problema2Titulo: "Risky manual sorting",
        problema2Texto: "Sorting waste by hand exposes people to sharp, contaminated or hazardous materials.",
        problema3Titulo: "Environmental impact",
        problema3Texto: "Poorly managed waste pollutes soil and water sources, affecting entire ecosystems.",
        problema4Titulo: "Lack of environmental education",
        problema4Texto: "There are few hands-on tools that teach the importance of recycling in a practical way.",

        odsTitulo: "Sustainable Development Goal",
        odsIntro: "WALL-E connects directly with the United Nations Sustainable Development Goals.",
        ods12Titulo: "Responsible Consumption and Production",
        ods12Texto: "This is the project's main SDG: WALL-E promotes waste reduction and recovery by automating sorting, helping more recyclable materials return to the production chain instead of ending up in landfills.",
        ods11Titulo: "Sustainable Cities and Communities",
        ods11Texto: "By supporting proper waste management, the project contributes to cleaner, healthier and more sustainable communities over time.",

        tecnologiasTitulo: "Technologies Used",
        tecnologiasIntro: "Hardware and software tools used throughout the project's development.",
        tec1Titulo: "Arduino UNO",
        tec1Texto: "Main microcontroller, programmed in C/C++ with the Arduino IDE.",
        tec2Titulo: "HC-SR04 Sensors",
        tec2Texto: "Ultrasonic sensors used to detect obstacles and waste.",
        tec3Titulo: "L298N Driver",
        tec3Texto: "Power controller for the DC motors of the movement system.",
        tec4Titulo: "3D Printing and MDF",
        tec4Texto: "Manufacturing of the robot's chassis and structural parts.",
        tec5Titulo: "8x8 LED Matrix",
        tec5Texto: "Visual output module used to display the robot's status.",
        tec6Titulo: "Design and Prototyping",
        tec6Texto: "2D/3D design tools used to plan the structure before building it.",

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

        equipoTitulo: "Our Team",
        equipoIntro: "Students responsible for designing, building and programming WALL-E.",
        rol1: "Project Lead",
        rol2: "Hardware Development",
        rol3: "Programming and Electronics",
        rol4: "Design and Documentation",

        galeriaTitulo: "Gallery",

        videoTitulo: "Demo Video",
        videoIntro: "Watch WALL-E detecting, sorting and storing waste in action.",

        especificacionesTitulo: "Technical Specifications",
        espDimensiones: "Dimensions",
        espPeso: "Weight",
        espControlador: "Controller",
        espAlimentacion: "Power Supply",
        espMotores: "Motors",
        espMotoresValor: "4 DC Motors",

        footerSubtitulo: "Smart Waste Collector Robot",
        footerCopyright: "© 2026 WALL-E | All rights reserved."
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

    /*======================================
            MENÚ HAMBURGUESA (MÓVIL)
    ======================================*/

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", () => {
            const abierto = menu.classList.toggle("activo");
            menuToggle.classList.toggle("activo");
            menuToggle.setAttribute("aria-expanded", abierto);
        });

        menu.querySelectorAll("a").forEach(enlace => {
            enlace.addEventListener("click", () => {
                menu.classList.remove("activo");
                menuToggle.classList.remove("activo");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

    }

});