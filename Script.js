window.addEventListener("load", function(){
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.addEventListener("click", function(){
        popup.style.display = "none";
    });

    document.getElementById("closeBtn").addEventListener("click", function () {
        const header = document.querySelector("header");
        header.style.display = "flex"; // o "block", según tu diseño
    });
});
const modal = document.getElementById('miModal');
const modal2 = document.getElementById('miModal2');
const btnAbrir = document.getElementById('abrirModal');
const btnCerrar = document.getElementById('cerrarModal');

btnAbrir.onclick = () => {
  modal.classList.remove('oculto');
};

btnCerrar.onclick = () => {
  modal.classList.add('oculto');
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.classList.add('oculto');
  }
};

btnAbrir.onclick = () => {
  modal2.classList.remove('oculto');
};

btnCerrar.onclick = () => {
  modal2.classList.add('oculto');
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal2.classList.add('oculto');
  }
};

window.addEventListener('load', () => {
const loader = document.getElementById('loader');
loader.style.display = 'none';
});