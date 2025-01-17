// Initialize AOS library
AOS.init();

// Contador regresivo
const eventDate = new Date("2025-11-22T20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "¡Ya llegó el día!";
  }
}

const timerInterval = setInterval(updateCountdown, 1000);

// Formulario de confirmación
document.getElementById('confirmationForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Capturar datos del formulario
  const data = {
      Nombre: document.getElementById('name').value,
      Asistencia: document.getElementById('attendance').value,
      Comentarios: document.getElementById('comment').value,
  };

  // Enviar datos a la API de SheetDB
  const response = await fetch('https://sheetdb.io/api/v1/78a13sohtmonr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  });

  if (response.ok) {
      alert('¡Gracias por confirmar tu asistencia!');
      document.getElementById('confirmationForm').reset();
  } else {
      alert('Hubo un error al enviar tu confirmación. Por favor, inténtalo de nuevo.');
  }
});