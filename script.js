// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener referencias a elementos
    const cards = document.querySelectorAll('.card');
    const reloadBtn = document.getElementById('reload-btn');
    const buttons = document.querySelectorAll('.btn');
    
    // Función para generar números aleatorios
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Función para animar las cards cuando aparecen
    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Función para recargar imágenes
    function reloadImages() {
        cards.forEach((card, index) => {
            const img = card.querySelector('img');
            const randomId = getRandomNumber(1, 1000);
            
            // Añadir efecto de desvanecimiento
            card.style.opacity = '0.5';
            card.style.transform = 'scale(0.95)';
            
            // Cambiar la imagen después de un pequeño delay
            setTimeout(() => {
                img.src = `https://picsum.photos/300/200?random=${randomId}`;
                
                // Restaurar la apariencia cuando la imagen se carga
                img.onload = function() {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.style.transition = 'all 0.5s ease';
                };
            }, index * 100);
        });
    }
    
    // Función para manejar clicks en los botones "Ver más"
    function handleButtonClick(event) {
        const card = event.target.closest('.card');
        const cardId = card.getAttribute('data-id');
        
        // Añadir clase para animación
        card.classList.add('clicked');
        
        // Mostrar alerta (puedes cambiar esto por otra acción)
        alert(`¡Has clickeado en la card ${cardId}!`);
        
        // Remover la clase después de la animación
        setTimeout(() => {
            card.classList.remove('clicked');
        }, 600);
    }
    
    // Función para añadir efectos de hover dinámicos
    function addHoverEffects() {
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Event listeners
    reloadBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        reloadImages();
    });
    
    // Añadir event listeners a todos los botones "Ver más"
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    
    // Inicializar efectos
    addHoverEffects();
    
    // Mensaje de bienvenida
    console.log('¡Página cargada correctamente! 🎉');
    
    // Función para cambiar colores de fondo aleatoriamente
    function changeBackgroundColor() {
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        ];
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;
    }
    
    // Cambiar color de fondo cada 10 segundos
    setInterval(changeBackgroundColor, 10000);
});