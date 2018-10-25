var Calculadora= {
    //---------------Iniciador de todas las funciones---------
    init: function () {
        this.cambiarbotones('tecla');
        this.pantalla('tecla');
    },
    //--------------------------------------------------------
   display : document.getElementById('display'),
   operadorA : "",
   operadorB : "",
   operacion : "",

    //--------------------Mostrar Numeros y hacer operaciones en Pantalla----------------------
    pantalla: function (selector) {
        var botonesPagina = document.getElementsByClassName(selector);
        for (i = 0; i < botonesPagina.length; i++) {
            botonesPagina[i].onclick = this.eventocaptura;
        }
    },

    eventocaptura: function (event) {
        calcular(event.target)
        function calcular(elemento) {
            boton = elemento.id;
            oprimido = parseInt(boton);
            if ((this.display.textContent == "0" || this.display.textContent == null) && !(isNaN(oprimido))){
                this.display.textContent = boton;
            } else if (this.display.textContent.length < 8 && !(isNaN(oprimido))) {
                this.display.textContent = this.display.textContent + boton;
                 //---------------borrar numeros de la pantalla-----------------------
            } else if (isNaN(oprimido) && boton == "on") {
                ONC();
                //------------------Solo es permitido un punto------------------------
            } else if (boton == "punto" && this.display.textContent.length < 8 && this.display.textContent.indexOf(".") < 0) {
                this.display.textContent = this.display.textContent + ".";
                //-----------------Signo +/- -----------------------------------------
            } else if (boton == "sign" && this.display.textContent.length <= 8 && this.display.textContent != "0" && this.display.textContent.indexOf("-") < 0) {
                this.display.textContent = "-" + this.display.textContent;
            } else if (boton == "sign" && this.display.textContent != "0" && this.display.textContent.indexOf("-") >= 0) {
                nuevodisplay = this.display.textContent.replace("-","");
                this.display.textContent = nuevodisplay;
                //------------------------Suma--------------------------------------
            } else if (boton == "mas") {
                this.operadorA = this.display.textContent;
                this.display.textContent = "";
                operacion = "+"
                //----------------------Resta--------------------------------------
            } else if (boton == "menos") {
                this.operadorA = this.display.textContent;
                this.display.textContent = "";
                operacion = "-"
                //---------------------multiplicacion-----------------------------
            } else if (boton == "por") {
                this.operadorA = this.display.textContent;
                this.display.textContent = "";
                operacion = "*"
                //--------------------División-------------------------------------
            } else if (boton == "dividido") {
                this.operadorA = this.display.textContent;
                this.display.textContent = "";
                operacion = "/"
                //-------------------Igual-------------------------------------
            } else if (boton == "igual") {
                this.operadorB = this.display.textContent;
                calculo();
            } else {
                this.display.textContent = this.display.textContent;
            }
        }
    //------------------------Función para borrar ---------------------------
        function ONC() {
            this.display.textContent = "0";
            this.operadorA = 0;
            this.operadorB = 0;
            this.operacion = "";
        }
    //----------------------Función para calculo matematico----------------
        function calculo() {
            var cal = 0;
            switch (operacion) {
                case "+":
                    cal = parseFloat(operadorA) + parseFloat(operadorB)
                    break;
                case "-":
                    cal = parseFloat(operadorA) - parseFloat(operadorB)
                    break;
                case "*":
                    cal = parseFloat(operadorA) * parseFloat(operadorB)
                    break;
                case "/":
                    cal = parseFloat(operadorA) / parseFloat(operadorB)
                    break;
            }
            this.display.textContent = ""
            this.display.textContent = cal;
        }
    },
    //------------------------------------------------------
    //--------cambiar tamaño a botones----------------------
    cambiarbotones: function(selector) {
        var botonesPagina = document.getElementsByClassName(selector);
        for (var i = 0; i < botonesPagina.length; i++) {
            botonesPagina[i].onmousedown = this.eventotamaño;
            botonesPagina[i].onmouseup = this.eventonormal;
        }
    },
    eventotamaño: function (event) {
        reducir(event.target)
        function reducir(elemento) {
            elemento.style.padding = "1.3%";
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
}

Calculadora.init()


