const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

const calendarDiv = document.getElementById('calendar');

let monthCounter = 0;
let currentRow;

for (let i = 0; i < months.length; i++) {
    if (monthCounter % 4 === 0) {
        currentRow = document.createElement('div');
        currentRow.className = 'row';
        calendarDiv.appendChild(currentRow);
    }

    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
    monthDiv.innerHTML = '<h2 class="month-name">' + months[i] + '</h2>';

    const date = new Date(2024, i, 1);
    const firstDay = date.getDay() === 0 ? 6 : date.getDay() - 1; // Obtener el primer día de la semana (0: Domingo, 6: Sábado)
    const lastDayOfMonth = new Date(2024, i + 1, 0).getDate(); // Obtener el último día del mes actual

    const headerRow = document.createElement('div');
    headerRow.className = 'header-row';

    for (let j = 0; j < 7; j++) {
        const dayOfWeek = document.createElement('div');
        dayOfWeek.className = 'day-of-week';
        dayOfWeek.textContent = days[j];
        headerRow.appendChild(dayOfWeek);
    }

    monthDiv.appendChild(headerRow);

    let weekDiv = document.createElement('div');
    weekDiv.className = 'week';

    // Agregar días vacíos al principio de la semana si el mes no comienza en lunes
    for (let j = 0; j < firstDay; j++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        weekDiv.appendChild(emptyDay);
    }

    date.setDate(1);

    let dayOfWeek = firstDay; // Contador de días de la semana

    while (date.getMonth() === i) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = date.getDate();
        weekDiv.appendChild(day);

        dayOfWeek++;

        if (dayOfWeek === 7) { // Si llegamos al último día de la semana, reiniciamos el contador y añadimos la semana al mes
            monthDiv.appendChild(weekDiv);
            weekDiv = document.createElement('div');
            weekDiv.className = 'week';
            dayOfWeek = 0;
        }

        date.setDate(date.getDate() + 1);
    }

    // Agregar días vacíos al final de la semana si el mes no termina en domingo
    while (dayOfWeek < 7) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day empty';
        weekDiv.appendChild(emptyDay);
        dayOfWeek++;
    }

    // Asegurar que la última semana esté completa antes de añadirla al mes
    if (weekDiv.children.length > 0) {
        monthDiv.appendChild(weekDiv);
    }

    currentRow.appendChild(monthDiv);
    monthCounter++;
}
