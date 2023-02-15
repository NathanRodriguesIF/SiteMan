function showMain() {
    main = document.getElementById("main");
    main.style.opacity = 1;
}

section1 = document.getElementById("section1");
section2 = document.getElementById("section2");

function placaMae() {
    window.alert("Sendo a parte mais importante do computador, a placa mãe tem a função de realizar a comunicação entre todos os componentes do computador. A placa mãe ainda pode ter outros componentes embutidos nela, ou seja, integrados, como placas de vídeo e som")
}


contadorRam = 0
function adicionarRam() {
    if(contadorRam == 0) {
        section2.innerHTML += "<aside><img src='assets/RAM.png' style='width:200px;' onclick='adicionarCPU()'><p>Memória Ram</p></aside>"
    }
    contadorRam += 1
    window.alert("Um processador é uma espécie de microchip especializado. A sua função é acelerar, endereçar, resolver ou preparar dados, dependendo da aplicação. Basicamente, um processador é uma poderosa máquina de calcular: Ela recebe um determinado volume de dados, orientados em padrão binário 0 e 1 e tem a função de responder a esse volume, processando a informação com base em instruções armazenadas em sua memória interna.")
}
