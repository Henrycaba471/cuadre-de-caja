document.addEventListener('DOMContentLoaded', (e) => {
    //console.log('Todo listo');
    const entidadBamcaria = document.getElementById('banco');
    const numeroCuenta = document.getElementById('cuenta');
    const typeCuenta = document.getElementById('cuenta-tipo');
    const nombre = document.getElementById('nombre');
    const cedula = document.getElementById('cedula');
    const valorSoberanos = document.getElementById('valor');
    const btnPrint = document.getElementById('print');
    const btnCancel = document.getElementById('cancel');

    btnPrint.addEventListener('click', () =>{

        if(entidadBamcaria.value === '' || numeroCuenta.value === '' || cedula.value === '' || valorSoberanos.value === '') {
            alert('LOS CAMPOS CON * SON OBLIGATORIOS');
            return
        }

        numeroCuenta.value = numeroCuenta.value.replace(/-/g, '');
        numeroCuenta.value = numeroCuenta.value.match(/.{1,4}/g).join('-');


        const contenido = `
        <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            @page{
                margin: 1cm;
            }
            span{
                font-size: 20px;
            }
        </style>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - <br>
        TRANSFERENCIAS A VENEZUELA <br>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - <br>
        <br>
        FECHA: ${new Date().toLocaleString()}<br>
        REF: ${Math.round(Math.random() * 9999999)} <br>
        BANCO: <br>
        ${entidadBamcaria.value.toUpperCase()} - ${typeCuenta.value}<br>
        CUENTA N°:<br>
        <span>${numeroCuenta.value}<br></span>
        NOMBRE: ${nombre.value.toUpperCase()}<br>
        <span>CV: ${Number(cedula.value).toLocaleString('es-CO')}</span><br>
        <br>
        SOBERANOS <span>B$: ${valorSoberanos.value}</span><br>
        <br>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - <br>
        RESP: JOSE TRINIDAD GARCIA <br>
        WHATSAPP: 3124824321 <br>
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - <br>
        <br>
        <br>
        FIRMA CAJERO:_______________________<br>
        <br>
        <br>
        `
        entidadBamcaria.value = '';
        numeroCuenta.value = '';
        nombre.value = '';
        cedula.value = '';
        valorSoberanos.value = '';

        const windowPrint = window.open('', 'Impresion', 'width=600,height=600');
        windowPrint.document.write(contenido);
        windowPrint.document.close();
        windowPrint.print();

    });
    btnCancel.addEventListener('click', (e) => {
        entidadBamcaria.value = '';
        numeroCuenta.value = '';
        nombre.value = '';
        cedula.value = '';
        valorSoberanos.value = '';
    });

})
