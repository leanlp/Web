

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function openImg(){
    let image = document.getElementById('image');
    let source = "https://sistem-of-voting.vercel.app/";
    window.open(source);
}
function openImg2(){
    let image = document.getElementById('image');
    let source = "https://lottery-encode-bootcamp-4uq0wbtkz-leanlp.vercel.app/";
    window.open(source);
}
function openImg3(){
    let image = document.getElementById('image');
    let source = "https://ecommerce-5731e.web.app/";
    window.open(source);
}
function openImg4(){
    let image = document.getElementById('image');
    let source = "https://leanlp.github.io/galeriaNft";
    window.open(source);
}


// function redir(){
//     location.href = "https://etherscan.io"
// document.getElementsByClassName("btnWallet").onclick = location.href

// }

// async function getBlockNumber() {
//     const latestBlockNumber = await web3.eth.getBlockNumber()
//     console.log(latestBlockNumber)
//     return latestBlockNumber
//   }
  
//   getBlockNumber()