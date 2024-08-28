


// Verifica que solo valores valido sean ingresados
const btnEncriptar = document.getElementById('Encriptar');
const etiqueta = document.querySelector('.desencriptar__texto');
let etiqueta2 = document.querySelector('.desencriptar__textoinformativo');
const imgEncriptar = document.getElementById('img_encriptar');
const btnCopiar = document.getElementById('copiar');  
btnCopiar.style.display = 'none';
const btnDesencriptar = document.getElementById('Desencriptar');
 


function validarTexto(texto){
 
    let contador = 0; 
                for( var i = 0;i < texto.length ;i++){
                    unicode  = texto.codePointAt(i);
                     if(unicode >= 97 &&  unicode <= 122 || unicode==32 ) {
                    contador++;
                    
                 } 

                } 


                if (contador == texto.length){
                  return texto

                  // let ana =Array.from(texto);  

                  
                   } 
                 else{
                  alert ("valor no validos");
return null;
                }  
                
                 

  }

// Encripta los valores segun la llaves
  function encriptarTexto(ana){
    ana= Array.from(ana)
    console.log(ana);
    let indicedeA = 0;
    for( var i = 0;i <= ana.length ;i++){
                    
      let lola = ana[i];  
      switch (lola){
        
        case 'a':
        indicedeA = i;
        let inicioa = i;
        let fina=i+1;
        ana.fill("ai",inicioa,fina);
  
         indicedeA++;
        break; 
        case 'e':
        indicedeA = i;
        let inicioe = i;
        let fine=i+1;
        ana.fill("enter",inicioe,fine);
  
         indicedeA++;
        break; 
        case 'i':
        indicedeA = i;
        let inicioi = i;
        let fini=i+1;
        ana.fill("imes",inicioi,fini);
  
         indicedeA++;
        break; 
        case 'o':
        indicedeA = i;
        let inicioo = i;
        let fino=i+1;
        ana.fill("ober",inicioo,fino);
  
         indicedeA++;
        break; 
        case 'u':
        indicedeA = i;
        let iniciou = i;
        let finu=i+1;
        ana.fill("ufat",iniciou,finu);
  
         indicedeA++;
        break; 
  
        } 
      }
  
      textoEncriptado=(ana.join(''));
      console.log(typeof(textoEncriptado))
      console.log(textoEncriptado)
      return textoEncriptado
    }

   function Copiar(){
    let datoacopiar = etiqueta.textContent
    navigator.clipboard.writeText(datoacopiar)
.then(() => {
  console.log('Contenido copiado al portapapeles');
  /* Resuelto - texto copiado al portapapeles con éxito */
},() => {
  console.error('Error al copiar');
  /* Rechazado - fallo al copiar el texto al portapapeles */
});

   }
   

   function desencriptarTexto(textoEncriptado){
    let textoEncriptadoVector =Array.from(textoEncriptado);
                      
    for( var i = 0;i <= textoEncriptadoVector.length ;i++){
  

      let lola = textoEncriptadoVector[i];  
      
        console.log(textoEncriptadoVector)
      switch (lola){
        case 'a':
      indicedeA = i;
      let inicioa = i;
      let fina=i+1;
      textoEncriptadoVector.splice(fina,1)

       indicedeA++;
      break; 
      case 'e':
      indicedeA = i;
      let inicioe = i;
      let fine=i+1;
      textoEncriptadoVector.splice(fine,4);

       indicedeA++;
      break; 
      case 'i':
      indicedeA = i;
      let inicioi = i;
      let fini=i+1;
      textoEncriptadoVector.splice(fini,3);

       indicedeA++;
      break; 
      case 'o':
      indicedeA = i;
      let inicioo = i;
      let fino=i+1;
      textoEncriptadoVector.splice(fino,3);

       indicedeA++;
      break; 
      case 'u':
      indicedeA = i;
      let iniciou = i;
      let finu=i+1;
      textoEncriptadoVector.splice(finu,3);

         indicedeA++;
        break; 

        } 
      }
      let textoconvertido = (textoEncriptadoVector.join(''));
      return textoconvertido

   }

   btnEncriptar.addEventListener('click', ()=>{
    let valoraCifrar = document.getElementById("valorTexto").value;
    let valorValidado= validarTexto(valoraCifrar)
    let valorEncriptado= encriptarTexto(valorValidado)
    etiqueta.innerHTML = valorEncriptado;
    imgEncriptar.style.display= 'none';
    etiqueta2.style.display = 'none';
    btnCopiar.style.display = 'block';
   });

   btnCopiar.addEventListener('click', ()=>{
    Copiar()

   });

   btnDesencriptar.addEventListener('click', ()=>{
    let valoraDescifrar = document.getElementById("valorTexto").value;
    let valorDesencriptado =desencriptarTexto(valoraDescifrar);
    etiqueta.innerHTML = valorDesencriptado


    
   });