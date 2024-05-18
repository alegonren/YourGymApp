// Array con los 31 ejercicios y número de repeticiones
const ejercicios = [
    " 20 Flexiones de pecho",
    " 30 Sentadillas",
    " 1' de plancha abdominal",
    " 10 Curl de bíceps",
    " 10 Estocadas (lunges)",
    " 15 Elevaciones laterales con mancuernas",
    " 15 Flexiones diamante",
    " 8 Peso muerto con barra",
    " 12 Press de hombros con mancuernas",
    " 20 Abdominales con elevación de piernas",
    " 10 Remo con barra",
    " 15 Elevaciones posteriores de hombros",
    " 10 Hip thrust",
    " 15 Flexiones declinadas",
    " 12 Curl de bíceps con barra",
    " 10 Press de banca inclinado",
    " 12 Superman (hiperextensiones lumbares)",
    " 15 Extensiones de tríceps en polea alta",
    " 10 Burpees",
    " 12 Flexiones de tríceps en banco",
    " 12 Elevaciones frontales con mancuernas",
    " 10 Zancadas laterales",
    " 15 Elevaciones de piernas colgado",
    " 20 Elevaciones de tronco (crunches)",
    " 15 Prensa de piernas",
    " 10 Peso muerto rumano",
    " 12 Curl de martillo",
    " 8 Dominadas (pull-ups)",
    " 12 Fondos en paralelas",
    " 20 Elevaciones de talones (calf raises)",
    " 20 Elevaciones de gemelos sentado"
];

// Obtener el día actual del mes (del 1 al 31)
const diaActual = new Date().getDate();

// Obtener el ejercicio del día correspondiente al día actual
const ejercicioDelDia = ejercicios[diaActual - 1]; // Restamos 1 porque los arrays son base cero

// Mostrar el ejercicio del día en el párrafo correspondiente
document.getElementById("ejercicioDelDia").textContent = ejercicioDelDia;
