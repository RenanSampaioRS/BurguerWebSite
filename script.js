document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Slider
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let currentSlide = 0;

  if (slider && slides.length > 0) {
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      slider.style.transform = `translateX(-${index * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    });

    setInterval(() => {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
    }, 5000);
  }

  // Form validation and Firestore submission
  // Firebase Configuration
    const firebaseConfig = {
      apiKey: "AIzaSyALAj0u6WUmHQ2HDE-YwDzM0UibzUQC3pY",
      authDomain: "burger-house-3afa2.firebaseapp.com",
      projectId: "burger-house-3afa2",
      storageBucket: "burger-house-3afa2.firebasestorage.app",
      messagingSenderId: "668856136508",
      appId: "1:668856136508:web:78a440bc10f81c53cc6439",
      measurementId: "G-TC2GEZLJWR"
    };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const orderForm = document.getElementById('order-form');
  const totalInput = document.getElementById('total');
  const itemSelect = document.getElementById('item');
  const quantityInput = document.getElementById('quantity');
  const formMessage = document.getElementById('form-message');

  if (orderForm) {
    const calculateTotal = () => {
      const [_, price] = itemSelect.value.split('|');
      const quantity = parseInt(quantityInput.value);
      const total = price * quantity;
      totalInput.value = `R$ ${total.toFixed(2)}`;
    };

    itemSelect.addEventListener('change', calculateTotal);
    quantityInput.addEventListener('input', calculateTotal);

    orderForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const [item, price] = itemSelect.value.split('|');
      const quantity = parseInt(quantityInput.value);
      const total = price * quantity;

      if (!name || !email || !item || !quantity) {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.style.color = 'red';
        return;
      }

      const order = { name, email, item, quantity, total, createdAt: new Date().toISOString() };

      try {
        await db.collection('orders').add(order);
        formMessage.textContent = 'Pedido enviado com sucesso!';
        formMessage.style.color = 'green';
        orderForm.reset();
        totalInput.value = '';
      } catch (error) {
        formMessage.textContent = 'Erro ao enviar o pedido: ' + error.message;
        formMessage.style.color = 'red';
      }
    });
  }
});
