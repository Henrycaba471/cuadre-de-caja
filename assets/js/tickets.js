
document.addEventListener('DOMContentLoaded', (e) => {
    const chance = `
        <div>
            <label>V:</label> <input type="text" value="1005064180" id="vendedor" />
            <label>Id:</label> <input type="text" value="BAC0153342068" id="serie" />
        </div>
        <div>
            <label>FV:</label> <input type="text" value="17/09/24-19:45:56" id="fv" />
            <label>Ag:</label> <input type="text" value="9878" id="ag" />
        </div>
        <div>
            <label>F.Sort:</label> <input type="text" value="17/09/2024" id="sort" />
            <label>Id:</label> <input type="text" value="758B747486E5" id="id" />
        </div>
        <div>
            <label>Frm:</label> <input type="text" value="APC0044358774" id="frm" />
            <label>C:</label> <input type="text" value="54250" id="c" />
            <label>P:</label> <input type="text" value="0000" id="p" />
        </div>
        <div>
            <label>TER:</label> <input type="text" value="F4-39-9-41-1E-D0" id="ter" />
        </div>
        <div>
            <label>Loterías: </label> <input type="text" value="+Roja-" id="loterias" />
        </div>
        <div>
            <label>Números:</label> <input type="text"value="1719+1969"  id="numeros" />
            <label>Juego:</label> <input type="text"value="P20" id="juego" />
            <label>Valor:</label> <input type="text"value="4000" id="valor" />
        </div>
        <div>
            <label>Sub$</label> <input type="text" value="3361" id="sub" />
            <label>Iva$</label> <input type="text" value="639" id="iva" />
            <label>Tot$</label> <input type="text" value="4000" id="tot" />
        </div>
        <div class="product">
            <label>Producto:</label> <input type="text" value="PAGAMAS CT C059 de 09-08-23" id="producto" />
        </div>
        <div>
            <button type="button" class="imprimir4c">Imprimir</button>
        </div>
        `;
    const chance3c = `<h1>chance3c</h1>`;
    const dc4c = `<h1>dc4c</h1>`;
    const astro = `<h1>astro</h1>`;
    const baloto = `<h1>baloto</h1>`;
    const miloto = `<h1>miloto</h1>`;
    const dcm = `<h1>dcm</h1>`;
    const dc3c = `<h1>dc3c</h1>`

    const container = document.querySelector('.container');
    const ticketsRec = { chance, chance3c, dc4c, dc3c, dcm, miloto, baloto, astro };

    document.addEventListener('click', (e) => {
        Object.keys(ticketsRec).forEach(clave => {
            if (e.target.matches(`.${clave}`)) {
                container.innerHTML = ticketsRec[clave];
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.matches('.imprimir4c')) {
            const venderdor = document.getElementById('vendedor');
            const serie = document.getElementById('serie');
            const fv = document.getElementById('fv');
            const ag = document.getElementById('ag');
            const sort = document.getElementById('sort');
            const id = document.getElementById('id');
            const frm = document.getElementById('frm');
            const c = document.getElementById('c');
            const p = document.getElementById('p');
            const ter = document.getElementById('ter');
            const loterias = document.getElementById('loterias');
            const numeros = document.getElementById('numeros');
            const juego = document.getElementById('juego');
            const valor = document.getElementById('valor');
            const sub = document.getElementById('sub');
            const iva = document.getElementById('iva');
            const tot = document.getElementById('tot');
            const producto = document.getElementById('producto');

            let numerosSeparados = '';
            const nums = numeros.value.split('+');

            for (let i = 0; i < nums.length; i += 2) {
                numerosSeparados += `${nums[i]} &nbsp;${juego.value}  ${valor.value} ${nums[i + 1] ? nums[i + 1] + '&nbsp;&nbsp;' + juego.value + '&nbsp; ' + valor.value : ''}<br>`;
            }
            //console.log(numerosSeparados);
            /*console.log(
`
V:${venderdor.value}     Id:${serie.value}
FV:${fv.value}  Ag:${ag.value}
F.Sort:${sort.value} Id:${id.value}
Frm:${frm.value}  C:${c.value} P:${p.value}
TER:${ter.value}
${loterias.value}
Nro.Juego Valor Nro.Juego Valor
${numerosSeparados}
 Sub$${sub.value}  Iva$${iva.value}  Tot$${tot.value}
 ${producto.value}
`
);*/

            const ticket = `
            <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            body{
                font-family: monospace;
            }
            @page{
                margin: .69cm;
            }
            span{
                font-size: 10pt;
            }
        </style>
V:${venderdor.value} &nbsp;&nbsp;&nbsp;Id:${serie.value}<br>
FV:${fv.value}  Ag:${ag.value}<br>
F.Sort:${sort.value} Id:${id.value}<br>
Frm:${frm.value} C:${c.value} P:${p.value}<br>
TER:${ter.value}<br>
${loterias.value}<br>
Nro.Juego Valor Nro.Juego Valor <br>
${numerosSeparados} <br>
 Sub$${sub.value}  Iva$${iva.value}  Tot$${tot.value}<br>
 ${producto.value} <br>
`

            const windowPrint = window.open('', 'Impresion', 'width=600,height=600');
            windowPrint.document.write(ticket);
            windowPrint.document.close();
            windowPrint.print();
        }
    });

});
