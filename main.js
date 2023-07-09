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
        "Pases": 2
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
        "nombre_Invitado": "Maria Isabel González",
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
        "Acompanante": " y Esposo,",
        "Pases": 2
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
        "nombre_Invitado": "Rafael Rivera",
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
        "Pases": 3
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
        "Acompanante": " y Esposa",
        "Pases": 2
       },
       {
        "ID_Invitado": 58,
        "nombre_Invitado": "Adrian Boada",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 59,
        "nombre_Invitado": "Cenobia Rugeles",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 60,
        "nombre_Invitado": "Ana Cecilia Angulo",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 61,
        "nombre_Invitado": "Andrea Vanessa Perez",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 62,
        "nombre_Invitado": "Antonio Vivas",
        "Acompanante": " y Familia,",
        "Pases": 4
       },
       {
        "ID_Invitado": 63,
        "nombre_Invitado": "Alvaro Vivas",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 64,
        "nombre_Invitado": "Jorge Vivas",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 65,
        "nombre_Invitado": "Alba Vivas",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 66,
        "nombre_Invitado": "Aracely Mendez",
        "Acompanante": " e Hija,",
        "Pases": 2
       },
       {
        "ID_Invitado": 67,
        "nombre_Invitado": "Verónica Rodríguez",
        "Acompanante": "y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 68,
        "nombre_Invitado": "Liz Ordoñez",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 69,
        "nombre_Invitado": "Emma Yuliana",
        "Acompanante": " y Familia,",
        "Pases": 6
       },
       {
        "ID_Invitado": 70,
        "nombre_Invitado": "Gabriela Borrero",
        "Acompanante": " y Familia,",
        "Pases": 4
       },
       {
        "ID_Invitado": 71,
        "nombre_Invitado": "Carmen Vivas",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 72,
        "nombre_Invitado": "Laura Hernandez",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 73,
        "nombre_Invitado": "Maria José González",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 74,
        "nombre_Invitado": "Hermana Marianela Ramírez",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 75,
        "nombre_Invitado": "Richard Cañas",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 76,
        "nombre_Invitado": "Maria Varela",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 77,
        "nombre_Invitado": "Henry Coraspe",
        "Acompanante": " y Familia,",
        "Pases": 9
       },
       {
        "ID_Invitado": 78,
        "nombre_Invitado": "Raixy Bueno",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 79,
        "nombre_Invitado": "Osiris Cardenas",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 80,
        "nombre_Invitado": "Antonino Montero",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 81,
        "nombre_Invitado": "Franklyn González ",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 82,
        "nombre_Invitado": "Omaira González ",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 83,
        "nombre_Invitado": "Franklyn Valero",
        "Acompanante": " y Esposa,",
        "Pases": 2
       },
       {
        "ID_Invitado": 84,
        "nombre_Invitado": "Luz Elianna Duran",
        "Acompanante": " y Familia,",
        "Pases": 3
       },
       {
        "ID_Invitado": 85,
        "nombre_Invitado": "Berquis Febres-Cordero",
        "Acompanante": " y Esposo,",
        "Pases": 2
       },
       {
        "ID_Invitado": 86,
        "nombre_Invitado": "Jesús Rodriguez Peinado",
        "Acompanante": ",",
        "Pases": 1
       },
       {
        "ID_Invitado": 87,
        "nombre_Invitado": "Rafael Isamber",
        "Acompanante": ",",
        "Pases": 1
       }
       
  ];
  
// función para actualizar el contenido del modal con los datos de un invitado específico
function actualizarModal(idInvitado) {
    const invitado = listaInvitados.find(inv => inv.ID_Invitado === Number(idInvitado));
    document.getElementById('nombreInvitado').textContent = invitado.nombre_Invitado;
    document.getElementById('acompanante').textContent = invitado.Acompanante;
    document.getElementById('cupos').textContent = invitado.Pases;
}

const parametros = new URLSearchParams(window.location.search);
const idInvitado = parametros.get('id');
localStorage.setItem('idOriginal', idInvitado);
console.log(localStorage.getItem('idOriginal'));
actualizarModal(idInvitado);

window.addEventListener('hashchange', function() {
    const idOriginal = localStorage.getItem('idOriginal');
    if (idOriginal) {
        actualizarModal(idOriginal);
    }
});

window.addEventListener('load', function() {
    const idOriginal = localStorage.getItem('idOriginal');
    if (idOriginal) {
        actualizarModal(idOriginal);
    } else {
        const ultimoInvitado = localStorage.getItem('ultimoInvitado');
        if (ultimoInvitado) {
            actualizarModal(ultimoInvitado);
        }
    }
});

document.getElementById('botonConfirmar').addEventListener('click', function() {
    const idOriginal = localStorage.getItem('idOriginal');
    if (idOriginal) {
        localStorage.setItem('ultimoInvitado', idOriginal);
    }
});
