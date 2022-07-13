var hayResultado = false;

window.onload = cargarPantalla;

function cargarPantalla() {
  if (typeof Storage !== "undefined") {
    var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
    if (memRegistro != null) {
      var combo = document.getElementById("mem");
      for (var i = 0; i < memRegistro.length; i++) {
        combo.innerHTML =
          combo.innerHTML + "<option>" + memRegistro[i] + "</option>";
      }
    }
  }
}

function concatenaOperacion(valor) {
  if (hayResultado) {
    document.calculator.res.value = "";
    document.calculator.ans.value = "";
    hayResultado = false;
  }

  var digito = parseInt(valor);
  if (isNaN(digito)) document.calculator.res.value = "";
  else document.calculator.res.value += valor;
  document.calculator.ans.value += valor;
}

function ejecutaExpresion(expresion) {
  try {
    document.calculator.res.value = eval(expresion);
    hayResultado = true;
  } catch (error) {
    alert(
      "Error al calcular expresión. El detalle del error es el siguiente: " +
        error
    );
  }
}

function funcionesEspeciales(valor, tipo) {
  try {
    switch (tipo) {
      case "P":
        var pot = null;
        while (pot == null) {
          pot = prompt("Digite la Potencia", "");
          if (pot != null) {
            var dig = parseInt(pot);
            if (isNaN(dig)) {
              pot = null;
              alert("Debe digitar un valor numérico entero");
            }
          }
        }
        var potNum = parseInt(pot);
        document.calculator.res.value = Math.pow(valor, potNum);
        document.calculator.ans.value = "Potencia" + pot + "(" + valor + ")";
        hayResultado = true;
        break;
      case "R":
        document.calculator.res.value = Math.sqrt(valor);
        document.calculator.ans.value = "Raiz2(" + valor + ")";
        hayResultado = true;
        break;
      case "L":
        document.calculator.res.value = Math.log(valor);
        document.calculator.ans.value = "Logaritmo(" + valor + ")";
        hayResultado = true;
        break;
    }
  } catch (error) {
    alert(
      "Error al calcular expresión. El detalle del error es el siguiente: " +
        error
    );
  }
}

function regMemoriaSesion(expre, result) {
  if (typeof Storage !== "undefined") {
    var valor = expre + "=" + result;
    sessionStorage.setItem("exp", valor);
    var combo = document.getElementById("mem");
    combo.innerHTML = combo.innerHTML + "<option>" + valor + "</option>";
  }
}

function regMemoriaLocal(expre, result) {
  if (typeof Storage !== "undefined") {
    var valor = expre + "=" + result;
    var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
    var arreglo = new Array();

    if (memRegistro == null) arreglo[0] = valor;
    else {
      arreglo = memRegistro;
      arreglo[arreglo.length] = valor;
    }

    localStorage.setItem("memRegistro", JSON.stringify(arreglo));
    var combo = document.getElementById("mem");
    combo.innerHTML = combo.innerHTML + "<option>" + valor + "</option>";
  }
}
