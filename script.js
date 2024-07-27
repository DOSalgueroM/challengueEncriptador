function encriptar() {
    const textoEncriptado = [];
    var texto = document.getElementById("textarea").value;
    const arrayTexto = texto.split('');
    for (let i = 0; i < arrayTexto.length; i++) {
        switch(arrayTexto[i]) {
            case 'a':
                textoEncriptado.push('ai');
                break;
            case 'e':
                textoEncriptado.push('enter');
                break;
            case 'i':
                textoEncriptado.push('imes');
                break;
            case 'o':
                textoEncriptado.push('ober');
                break;
            case 'u':
                textoEncriptado.push('ufat');
                break;
            default:
                textoEncriptado.push(arrayTexto[i]);
        }
    }
    const contenidoTextarea = document.getElementById("copia");
    contenidoTextarea.innerHTML = `
    <textarea id="textarea2" class="form-control" rows="3" placeholder="Texto encriptado"></textarea>
    `;
  
    document.getElementById("textarea2").value = textoEncriptado.join('');

}

function desencriptar() {
    const textoDesencriptado = document.getElementById("textarea").value;
  
    document.getElementById("textarea2").value = textoDesencriptado;
}