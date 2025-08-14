// Espera a que el contenido del DOM esté completamente cargado para ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // --- DATOS DE LA MALLA CURRICULAR ---
    // Aquí se almacenan todos los ramos. El formato es un array de objetos.
    // Cada objeto representa un ramo con su código, nombre, créditos, año, semestre y prerrequisitos.
    const ramosData = [
        // Año 1
        { "codigo": "110036", "nombre": "Taller de Proyectos I", "creditos": 10, "año": 1, "semestre": 1, "prerrequisitos": [] },
        { "codigo": "110037", "nombre": "Repr. Arquitectónica I", "creditos": 4, "año": 1, "semestre": 1, "prerrequisitos": [] },
        { "codigo": "110038", "nombre": "Edificación I", "creditos": 4, "año": 1, "semestre": 1, "prerrequisitos": [] },
        { "codigo": "220163", "nombre": "Matemáticas", "creditos": 4, "año": 1, "semestre": 1, "prerrequisitos": [] },
        { "codigo": "110040", "nombre": "Historia de la Arquitectura I", "creditos": 4, "año": 1, "semestre": 1, "prerrequisitos": [] },
        { "codigo": "340280", "nombre": "Inglés Comunicacional I", "creditos": 2, "año": 1, "semestre": 1, "prerrequisitos": [] },
        { "codigo": "350281", "nombre": "Formacion Integral", "creditos": 2, "año": 1, "semestre": 1, "prerrequisitos": [] },
        
        { "codigo": "110039", "nombre": "Taller de Proyectos II", "creditos": 10, "año": 1, "semestre": 2, "prerrequisitos": ["110036"] },
        { "codigo": "110041", "nombre": "Repr. Arquitectónica II", "creditos": 4, "año": 1, "semestre": 2, "prerrequisitos": ["110037"] },
        { "codigo": "110042", "nombre": "Edificación II", "creditos": 4, "año": 1, "semestre": 2, "prerrequisitos": ["110038"] },
        { "codigo": "110043", "nombre": "Estructuras I", "creditos": 4, "año": 1, "semestre": 2, "prerrequisitos": ["220163"] },
        { "codigo": "110044", "nombre": "Urbanismo I", "creditos": 4, "año": 1, "semestre": 2, "prerrequisitos": [] },
        { "codigo": "110045", "nombre": "Fundamento de la Arquitectura", "creditos": 4, "año": 1, "semestre": 2, "prerrequisitos": [] },
        { "codigo": "340281", "nombre": "Inglés Comunicacional II", "creditos": 2, "año": 1, "semestre": 2, "prerrequisitos": ["340280"] },
        { "codigo": "1", "nombre": "Formacion Integral Extra I", "creditos": 2, "año": 1, "semestre": 2, "prerrequisitos": [] },

        // Año 2
        { "codigo": "110046", "nombre": "Taller de Proyectos III", "creditos": 10, "año": 2, "semestre": 3, "prerrequisitos": ["110039"] },
        { "codigo": "110047", "nombre": "Representación arquitectonica III", "creditos": 4, "año": 2, "semestre": 3, "prerrequisitos": ["110041"] },
        { "codigo": "110048", "nombre": "Diseño Bioclimático I", "creditos": 4, "año": 2, "semestre": 3, "prerrequisitos": [] },
        { "codigo": "110049", "nombre": "Estructuras II", "creditos": 4, "año": 2, "semestre": 3, "prerrequisitos": ["110043"] },
        { "codigo": "110050", "nombre": "Historia de la Arquitectura II", "creditos": 4, "año": 2, "semestre": 3, "prerrequisitos": ["110040"] },
        { "codigo": "340282", "nombre": "Inglés Comunicacional III", "creditos": 2, "año": 2, "semestre": 3, "prerrequisitos": ["340281"] },
        { "codigo": "2", "nombre": "Formacion Integral Extra II", "creditos": 2, "año": 2, "semestre": 3, "prerrequisitos": [] },
        
        { "codigo": "110051", "nombre": "Taller de Proyectos IV", "creditos": 10, "año": 2, "semestre": 4, "prerrequisitos": ["110046"] },
        { "codigo": "110052", "nombre": "Representación arquitectonica IV", "creditos": 4, "año": 2, "semestre": 4, "prerrequisitos": [110047] },
        { "codigo": "110053", "nombre": "Edificación III", "creditos": 4, "año": 2, "semestre": 4, "prerrequisitos": ["110042"] },
        { "codigo": "110054", "nombre": "Estructuras III", "creditos": 4, "año": 2, "semestre": 4, "prerrequisitos": ["110049"] },
        { "codigo": "110055", "nombre": "Urbanismo II", "creditos": 4, "año": 2, "semestre": 4, "prerrequisitos": ["110051"] },
        { "codigo": "110056", "nombre": "Fundamentos de arquitectura II", "creditos": 4, "año": 2, "semestre": 4, "prerrequisitos": ["110045"] },
        { "codigo": "340283", "nombre": "Inglés Comunicacional IV", "creditos": 2, "año": 2, "semestre": 4, "prerrequisitos": ["340282"] },
        
        // Año 3
        { "codigo": "110057", "nombre": "Taller de Proyectos V", "creditos": 10, "año": 3, "semestre": 5, "prerrequisitos": ["110051"] },
        { "codigo": "110058", "nombre": "Representación arquitectonica V", "creditos": 4, "año": 3, "semestre": 5, "prerrequisitos": ["110052"] },
        { "codigo": "110059", "nombre": "Edificación IV", "creditos": 4, "año": 3, "semestre": 5, "prerrequisitos": ["110053"] },
        { "codigo": "110060", "nombre": "Diseño en Madera", "creditos": 4, "año": 3, "semestre": 5, "prerrequisitos": ["110054"] },
        { "codigo": "110061", "nombre": "Historia de la Arquitectura lll", "creditos": 4, "año": 3, "semestre": 5, "prerrequisitos": ["110050"] },
        { "codigo": "3", "nombre": "Formacion Integral Extra III", "creditos": 2, "año": 3, "semestre": 5, "prerrequisitos": [] },

        { "codigo": "110062", "nombre": "Taller de proyecto VI", "creditos": 10, "año": 3, "semestre": 6, "prerrequisitos": ["110057"] },
        { "codigo": "110063", "nombre": "Representación arquitectónica VI", "creditos": 4, "año": 3, "semestre": 6, "prerrequisitos": ["110058"] },
        { "codigo": "110064", "nombre": "Gestión de Proyectos", "creditos": 4, "año": 3, "semestre": 6, "prerrequisitos": [] },
        { "codigo": "110065", "nombre": "Diseño Bioclimático II", "creditos": 4, "año": 3, "semestre": 6, "prerrequisitos": ["110048"] },
        { "codigo": "110066", "nombre": "Urbanismo III", "creditos": 4, "año": 3, "semestre": 6, "prerrequisitos": ["110055"] },
        { "codigo": "110067", "nombre": "Fundamentos de arquitectura III", "creditos": 4, "año": 3, "semestre": 6, "prerrequisitos": ["110056"] },
        { "codigo": "4", "nombre": "Formacion Integral Extra IV", "creditos": 2, "año": 3, "semestre": 6, "prerrequisitos": [] },

        // Año 4
        { "codigo": "110068", "nombre": "Taller de Proyectos VII", "creditos": 10, "año": 4, "semestre": 7, "prerrequisitos": ["110063"] },
        { "codigo": "110069", "nombre": "Electivo de Vinculación con el Medio I", "creditos": 4, "año": 4, "semestre": 7, "prerrequisitos": [] },
        { "codigo": "110070", "nombre": "Electivo de Vinculación con el Medio II", "creditos": 4, "año": 4, "semestre": 7, "prerrequisitos": [] },
        { "codigo": "110071", "nombre": "Patrimonio Arq y Urbano", "creditos": 4, "año": 4, "semestre": 7, "prerrequisitos": ["110061"] },
        { "codigo": "110072", "nombre": "Metodologías de la Investigación", "creditos": 4, "año": 4, "semestre": 7, "prerrequisitos": ["110067"] },
        
        { "codigo": "110073", "nombre": "Taller de Proyectos VIII", "creditos": 10, "año": 4, "semestre": 8, "prerrequisitos": ["110068"] },
        { "codigo": "110074", "nombre": "Práctica profesional", "creditos": 10, "año": 4, "semestre": 8, "prerrequisitos": ["110068"] },
        { "codigo": "110075", "nombre": "Seminario", "creditos": 10, "año": 4, "semestre": 8, "prerrequisitos": ["110072"] },
        
        // Año 5
        { "codigo": "110076", "nombre": "Taller de fundamento", "creditos": 18, "año": 5, "semestre": 9, "prerrequisitos": ["110073"] },
        { "codigo": "110077", "nombre": "Electivo de Especialidad I", "creditos": 4, "año": 5, "semestre": 9, "prerrequisitos": ["110068"] },
        { "codigo": "110078", "nombre": "Electivo de Especialidad II", "creditos": 4, "año": 5, "semestre": 9, "prerrequisitos": ["110068"] },
        { "codigo": "110079", "nombre": "Electivo de Especialidad III", "creditos": 4, "año": 5, "semestre": 9, "prerrequisitos": ["110068"] },

        { "codigo": "110080", "nombre": "PFC", "creditos": 30, "año": 5, "semestre": 10, "prerrequisitos": ["110076"] },
    ];

    const container = document.getElementById('malla-curricular-container');
    let ramosAprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobados')) || []);

    /**
     * Guarda el conjunto de ramos aprobados en el localStorage del navegador.
     */
    const guardarProgreso = () => {
        localStorage.setItem('ramosAprobados', JSON.stringify(Array.from(ramosAprobados)));
    };
    
    /**
     * Busca el nombre de un ramo a partir de su código.
     * @param {string} codigo El código del ramo a buscar.
     * @returns {string} El nombre del ramo.
     */
    const getNombreRamoPorCodigo = (codigo) => {
        const ramo = ramosData.find(r => r.codigo === codigo);
        return ramo ? ramo.nombre : 'Desconocido';
    };
    
    /**
     * Renderiza toda la malla curricular en el DOM.
     */
    const renderizarMalla = () => {
        // Limpia el contenedor antes de dibujar
        container.innerHTML = '';
        
        const maxAño = Math.max(...ramosData.map(r => r.año));

        for (let i = 1; i <= maxAño; i++) {
            const añoColumna = document.createElement('div');
            añoColumna.className = 'año-columna';
            
            const añoHeader = document.createElement('div');
            añoHeader.className = 'año-header';
            añoHeader.textContent = `Año ${i}`;
            añoColumna.appendChild(añoHeader);

            const semestresContainer = document.createElement('div');
            semestresContainer.className = 'semestres-container';

            // Semestres (asumimos 2 por año)
            const semestre1Num = (i - 1) * 2 + 1;
            const semestre2Num = (i - 1) * 2 + 2;

            [semestre1Num, semestre2Num].forEach(numSemestre => {
                const semestreColumna = document.createElement('div');
                semestreColumna.className = 'semestre-columna';
                semestreColumna.innerHTML = `<div class="semestre-header">Semestre ${numSemestre}</div>`;

                ramosData
                    .filter(ramo => ramo.año === i && ramo.semestre === numSemestre)
                    .forEach(ramo => {
                        const ramoEl = document.createElement('div');
                        ramoEl.className = 'ramo';
                        ramoEl.id = ramo.codigo;
                        // Guardamos los prerrequisitos en un atributo data-* para fácil acceso
                        ramoEl.dataset.prerrequisitos = JSON.stringify(ramo.prerrequisitos);
                        
                        ramoEl.innerHTML = `
                            <div class="ramo-nombre">${ramo.nombre}</div>
                            <div class="ramo-info">Créditos: ${ramo.creditos}</div>
                        `;
                        
                        // Si el ramo está en la lista de aprobados, se le añade la clase correspondiente
                        if (ramosAprobados.has(ramo.codigo)) {
                            ramoEl.classList.add('aprobado');
                        }

                        semestreColumna.appendChild(ramoEl);
                    });
                
                semestresContainer.appendChild(semestreColumna);
            });
            añoColumna.appendChild(semestresContainer);
            container.appendChild(añoColumna);
        }
    };
    
    /**
     * Maneja el evento de clic en un ramo.
     * @param {Event} e El objeto del evento.
     */
    const handleRamoClick = (e) => {
        const ramoEl = e.target.closest('.ramo');
        if (!ramoEl) return;

        const codigo = ramoEl.id;
        const prerrequisitos = JSON.parse(ramoEl.dataset.prerrequisitos);

        // Si ya está aprobado, permite desaprobarlo
        if (ramoEl.classList.contains('aprobado')) {
            ramosAprobados.delete(codigo);
            ramoEl.classList.remove('aprobado');
            guardarProgreso();
            return;
        }

        // Verifica si los prerrequisitos están cumplidos
        const faltantes = prerrequisitos.filter(req => !ramosAprobados.has(req));

        if (faltantes.length > 0) {
            const nombresFaltantes = faltantes.map(getNombreRamoPorCodigo).join('\n - ');
            alert(`Ramo bloqueado. Debes aprobar primero:\n - ${nombresFaltantes}`);
        } else {
            // Aprueba el ramo
            ramosAprobados.add(codigo);
            ramoEl.classList.add('aprobado');
            guardarProgreso();
        }
    };
    
    // --- INICIALIZACIÓN ---
    renderizarMalla();
    container.addEventListener('click', handleRamoClick);
});
