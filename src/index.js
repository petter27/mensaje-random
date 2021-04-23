const nombres = ["Pedro", "Maria", "Juanita", "Antonio", "Ricardo", "Joaquin", "Estefania", "Elsy", "Diego", "Yanelli"];
const saludos = ["Hello", "Hola", "Buenas tardes", "Buenos dias", "Buenas noches", "Adios", "Suerte", "Hasta luego"];

const randomMsg = () => {
    const mensaje = saludos[Math.floor(Math.random() * saludos.length)] + " " + nombres[Math.floor(Math.random()*nombres.length)] ;

    console.log(mensaje);
};

module.exports = { randomMsg };