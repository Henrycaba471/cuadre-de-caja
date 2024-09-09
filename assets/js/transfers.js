document.addEventListener('DOMContentLoaded', (e) => {
    //console.log('Todo listo');
    const entidadBamcaria = document.getElementById('banco');
    const numeroCuenta = document.getElementById('cuenta');
    const nombre = document.getElementById('nombre');
    const cedula = document.getElementById('cedula');
    const valorSoberanos = document.getElementById('valor');
    const btnPrint = document.getElementById('print');
    const btnCancel = document.getElementById('cancel');

    btnPrint.addEventListener('click', () =>{

        if(entidadBamcaria.value === '' || numeroCuenta.value === '' || nombre.value === '' || cedula.value === '' || valorSoberanos.value === '') {
            alert('Hay campos vacios');
            return
        }

        const contenido = `
        ------------------------------- <br>
        TRANSFERENCIAS A VENEZUELA <br>
        ------------------------------- <br>
        <br>
        FECHA: ${new Date().toLocaleString()}<br>
        BANCO:${entidadBamcaria.value.toUpperCase()}<br>
        CUENTA N°:<br>
        ${numeroCuenta.value}<br>
        NOMBRE:
        ${nombre.value.toUpperCase()}<br>
        CV: ${Number(cedula.value).toLocaleString('es-CO')}<br>
        <br>
        SOBERANOS B$: ${valorSoberanos.value}<br>
        <br>
        ------------------------------------ <br>
        Representante: Jose T Garcia <br>
        WhatsApp: 3124824321 <br>
        ------------------------------------ <br>
        <br>
        <br>
        FIRMA CAJERO:_______________________<br>
        <br>
        <br>

        ...
        `

        const windowPrint = window.open('', 'Impresion', 'width=600,height=600');
        windowPrint.document.write(contenido);
        windowPrint.document.close();
        windowPrint.print();
    });

})
