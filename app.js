var Calculadora= {
    
    
    init:function () {
        this.cambiarbotones('tecla');
    },
    cambiarbotones: function (selector) {
        var botonesPagina = document.getElementsByClassName(selector);
        for (var i = 0; i < botonesPagina.length; i++) {
            botonesPagina[i].onmousedown = this.eventotamaño;
            botonesPagina[i].onmouseup = this.eventonormal;
        }
    },
    eventotamaño: function (event) {
        reducir(event.target)
        function reducir(elemento) {
            elemento.style.padding = "1%";
        }
    },
    eventonormal: function (event) {
        normal(event.target)
        function normal(elemento) {
            elemento.style.padding = "0";
        }
    }
}

Calculadora.init();

