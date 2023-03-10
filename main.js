window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botonConfirma").style.opacity = "1";
    } else {
        document.getElementById("botonConfirma").style.opacity = "0";
    }
}
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })
  myModal.show()

  // aquí está el objeto JSON con los datos de los invitados
const listaInvitados = [
    {
        "ID_Invitado": 1,
        "nombre_Invitado": "Pablo Vivas",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 2,
        "nombre_Invitado": "Laura Durán",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 3,
        "nombre_Invitado": "Carlos García",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 4,
        "nombre_Invitado": "Lesli Gonzaléz",
        "Acompanante": " y Familia,",
        "Pases": 6
       },
       {
        "ID_Invitado": 5,
        "nombre_Invitado": "José González",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 6,
        "nombre_Invitado": "Grecia Labrador",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 7,
        "nombre_Invitado": "Pedro José Mendez",
        "Acompanante": " y Familia,",
        "Pases": 5
       },
       {
        "ID_Invitado": 8,
        "nombre_Invitado": "Alba Rossana Durán",
        "Acompanante": " y Familia,",
        "Pases": 4
       },
       {
        "ID_Invitado": 9,
        "nombre_Invitado": "Pedro González",
        "Acompanante": " y Familia,",
        "Pases": 4
       },
       {
        "ID_Invitado": 10,
        "nombre_Invitado": "Daniela Zambrano",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 11,
        "nombre_Invitado": "Gabriela Alagia",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 12,
        "nombre_Invitado": "Genesis Morales",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 13,
        "nombre_Invitado": "Alejandro Álvarez",
        "Acompanante": " y Familia,",
        "Pases": 2
       },
       {
        "ID_Invitado": 14,
        "nombre_Invitado": "José María Palencia",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 15,
        "nombre_Invitado": "Maria Victoria Galeazzi",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 16,
        "nombre_Invitado": "Gerardo López",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 17,
        "nombre_Invitado": "Milagros Martinez",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 18,
        "nombre_Invitado": "Marisa González",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 19,
        "nombre_Invitado": "Diego González",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 20,
        "nombre_Invitado": "Rowland González",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 21,
        "nombre_Invitado": "Wilmer Pabón",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 22,
        "nombre_Invitado": "Luis Gabriel Acevedo",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 23,
        "nombre_Invitado": "Anna Belén Acevedo",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 24,
        "nombre_Invitado": "Alba Durán",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 25,
        "nombre_Invitado": "Leandro Labrador",
        "Acompanante": " y Esposa.",
        "Pases": 2
       },
       {
        "ID_Invitado": 26,
        "nombre_Invitado": "Sandra Duque",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 27,
        "nombre_Invitado": "Marisol Arcila",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 28,
        "nombre_Invitado": "Xiomara Duque",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 29,
        "nombre_Invitado": "Mariya Popova",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 30,
        "nombre_Invitado": "Yolanda Hernández",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 31,
        "nombre_Invitado": "Manuel Quilis",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 32,
        "nombre_Invitado": "María Jesús Bermejo",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 33,
        "nombre_Invitado": "Rebeca Pimentel",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 34,
        "nombre_Invitado": "Marcello Scanavacca",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 35,
        "nombre_Invitado": "Flor Díaz",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 36,
        "nombre_Invitado": "Gabriela Molina",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 37,
        "nombre_Invitado": "Jairo Durán",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 38,
        "nombre_Invitado": "Jairo José Durán",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 39,
        "nombre_Invitado": "Beatriz Pérez",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 40,
        "nombre_Invitado": "Jovito Moncada",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 41,
        "nombre_Invitado": "Rafel Rivera",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 42,
        "nombre_Invitado": "Lorena Rivera",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 43,
        "nombre_Invitado": "Reina Vivas",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 44,
        "nombre_Invitado": "Gustavo Durán",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 45,
        "nombre_Invitado": "Fernando Briceño",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 46,
        "nombre_Invitado": "Miguel Vásquez",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 47,
        "nombre_Invitado": "Anthony Marin",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 48,
        "nombre_Invitado": "Katherine Cañas",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 49,
        "nombre_Invitado": "Nicolas Gagliarde",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 50,
        "nombre_Invitado": "Luis Villamizar",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 51,
        "nombre_Invitado": "Amarilis Sánchez",
        "Acompanante": " y Familia,",
        "Pases": 2
       },
       {
        "ID_Invitado": 52,
        "nombre_Invitado": "Yeixsoon González",
        "Acompanante": " y Familia,",
        "Pases": 4
       },
       {
        "ID_Invitado": 53,
        "nombre_Invitado": "Orlando González",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 54,
        "nombre_Invitado": "Antonia García",
        "Acompanante": " e Hija,",
        "Pases": 2
       },
       {
        "ID_Invitado": 55,
        "nombre_Invitado": "Marta Valero",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 56,
        "nombre_Invitado": "Melysa Cabrera",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 57,
        "nombre_Invitado": "Carlos Rafael",
        "Acompanante": "y Esposa",
        "Pases": 2
       },
       {
        "ID_Invitado": 58,
        "nombre_Invitado": "Adrian Boada",
        "Acompanante": ",",
        "Pases": 1
       }
  ];
  
  // función para actualizar el contenido del modal con los datos de un invitado específico
  function actualizarModal(idInvitado) {
    const invitado = listaInvitados.find(inv => inv.ID_Invitado === idInvitado);
    document.getElementById('nombreInvitado').textContent = invitado.nombre_Invitado;
    document.getElementById('acompanante').textContent = invitado.Acompanante;
    document.getElementById('cupos').textContent = invitado.Pases;
  }
  
  // ejemplo de cómo se puede llamar la función para actualizar el modal
  actualizarModal(57); // mostrará los datos del primer invitado
  