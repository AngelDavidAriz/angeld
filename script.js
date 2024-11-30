document.getElementById('inscripcionForm').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        event.preventDefault(); // Evitar el envío del formulario si hay errores
    }
});

function validarFormulario() {
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const celular = document.getElementById('celular').value;

    // Validar correo electrónico
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Validar teléfono (ejemplo: debe tener entre 7 y 15 dígitos)
    if (!/^\d{7,15}$/.test(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        return false;
    }

    // Validar celular (ejemplo: debe tener entre 10 y 15 dígitos)
    if (!/^\d{10,15}$/.test(celular)) {
        alert('Por favor, ingrese un número de celular válido.');
        return false;
    }

    return true; // Si todas las validaciones pasan
}

function toggleOtraDiscapacidad() {
    const discapacidadSelect = document.getElementById('discapacidad');
    const otraDiscapacidad = document.getElementById('otra-discapacidad');
    if (discapacidadSelect.value === 'otra') {
        otraDiscapacidad.style.display = 'block';
    } else {
        otraDiscapacidad.style.display = 'none';
        document.getElementById('otra').value = ''; // Limpiar el campo si se oculta
    }
}

function desmarcarPoblacion() {
    const poblacionRadios = document.getElementsByName('poblacion');
    for (let i = 0; i < poblacionRadios.length; i++) {
        poblacionRadios[i].checked = false;
    }
}
document.getElementById('inscripcionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío real del formulario
    const primerNombre = document.getElementById('primerNombre').value;
    const segundoNombre = document.getElementById('segundoNombre').value;
    const primerApellido = document.getElementById('primerApellido').value;
    const segundoApellido = document.getElementById('segundoApellido').value;

    // Validar formulario
    if (validarFormulario()) {
        // Crear el nombre completo
        const nombreCompleto = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;

        // Guardar el nombre completo en localStorage
        localStorage.setItem('nombreCompleto', nombreCompleto.trim());

        // Redirigir a la página de éxito
        window.location.href = 'exito.html';  // Aquí debes poner la URL de tu página de éxito
    }
});

function validarFormulario() {
    // Llamar aquí la validación del formulario como ya lo tienes.
    return true;
}

