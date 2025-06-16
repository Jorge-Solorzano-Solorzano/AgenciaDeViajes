document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const percentageElement = document.getElementById('loader-porcentage');
    const siteContent = document.getElementById('site-content');
    
    // Configuración del loader
    const duration = 2500; // 2.5 segundos de duración total
    const steps = 25; // Número de pasos de carga
    let progress = 0;
    
    const loadingInterval = setInterval(() => {
        progress += (100 / steps);
        percentageElement.textContent = `${Math.min(Math.round(progress), 100)}%`;
        
        // Cuando la carga llega al 100%
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Animación de desvanecimiento
            loader.style.opacity = '0';
            
            // Ocultar loader y mostrar contenido después de la transición
            setTimeout(() => {
                loader.style.display = 'none';
                siteContent.classList.remove('hidden');
            }, 500); // Coincide con el tiempo de transición CSS
        }
    }, duration / steps);
});