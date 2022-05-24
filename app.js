const Pizzas = [
    {
      id: 0,
      nombre: "Muzzarella",
      ingredientes: ["Muzzarella", "Salsa de tomate"],
      precio: 580
    },
  
    {
      id: 1,
      nombre: "Especial",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Jamón Cocido"],
      precio: 750
    },
  
    {
      id: 2,
      nombre: "Cuatro Quesos",
      ingredientes: [
        "Muzzarella",
        "Gruyere",
        "Roquefort",
        "Parmesano",
        "Salsa de tomate"
      ],
      precio: 800
    },
  
    {
      id: 3,
      nombre: "Calabresa",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"],
      precio: 780
    },
  
    {
      id: 4,
      nombre: "Cebolla",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Cebolla"],
      precio: 700
    },
  
    {
      id: 5,
      nombre: "Lechuga",
      ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"],
      precio: 730
    }
];




const nombrePizza = document.getElementById("nombrePizza");

const precioPizza = document.getElementById("precioPizza");

const button = document.getElementById("button");


const input = document.querySelector('.input');

const btn = document.querySelector('.boton');

btn.addEventListener('click', capturarValor);

function capturarValor(){

  let valor = input.value;

  if( 0 <= valor &&  valor < Pizzas.length){
  nombrePizza.textContent = `Nombre de la Pizza:  ${Pizzas[valor].nombre}`;
  precioPizza.textContent = `Precio de la Pizza: $${Pizzas[valor].precio}`;
  } else {
    nombrePizza.textContent = `No hay pizzas disponibles para el numero ingresado`
    precioPizza.textContent = "";
  }

}

