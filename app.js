var Calculadora= {
    display : document.getElementById('display'),
    operadorA : "",
    operadorB : "",
   
    //--------------------Mostrar Numeros en Pantalla----------------------
    pantalla: function (selector) {
        var botonesPagina = document.getElementsByClassName(selector);
        for (i = 0; i < botonesPagina.length; i++) {
            botonesPagina[i].onclick = this.eventocaptura;
        }
    },

    eventocaptura: function (event) {
        mostrar(event.target)
        function mostrar(elemento) {
            boton = elemento.id;
            oprimido = parseInt(boton);
            if ((this.display.textContent == "0" || this.display.textContent == null) && !(isNaN(oprimido))){
                this.display.textContent = boton;
            } else if (this.display.textContent.length < 8 && !(isNaN(oprimido))) {
                this.display.textContent = this.display.textContent + boton;
            } else {
                this.display.textContent = this.display.textContent;
            }
        }
    },
    //------------------------------------------------------
    //--------cambiar tamaño a botones----------------------
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
            console.log(elemento.id);
        }
    },
    eventonormal: function (event) {
        normal(event.target)
        function normal(elemento) {
            elemento.style.padding = "0";
        }
    },
    //--------------------------------------------------------
    //---------------Iniciador de todas las funciones---------
    init: function () {
        this.cambiarbotones('tecla');
        this.pantalla('tecla');
        this.ONC('tecla');
    }
    //--------------------------------------------------------
}

Calculadora.init();

