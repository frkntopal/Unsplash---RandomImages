const container = document.getElementById('container');
html = '';

document.querySelector

for (let i = 1; i <= 9; i++) {
    let url = `https://source.unsplash.com/random/300x300?sig=${i}`;
    html += `
        <div class="card">
            <img src="${url}">
        </div>
    `;
}

container.innerHTML = html;