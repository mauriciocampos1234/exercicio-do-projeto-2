const form = document.getElementById('form-contato');
const table = document.querySelector('table');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const newRow = table.insertRow();
    newRow.innerHTML = `
    <td>${nome}</td>
    <td>${telefone}</td>
    `;
    form.reset();
});