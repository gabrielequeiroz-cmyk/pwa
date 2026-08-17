const btnSortear = document.getElementById('btn-sortear');
const resultado = document.getElementById('resultado');

btnSortear.addEventListener('click', () => {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    resultado.textContent = numeroSorteado;
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registrado com sucesso!', reg))
        .catch(err => console.error('Erro ao registrar Service Worker', err));
    });
}