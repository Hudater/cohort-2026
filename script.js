const ol = document.querySelector('.blogs-ol');
const items = [...ol.querySelectorAll('.blog-li')];

if (items.length % 4 === 3) {
    const last3 = items.slice(-3);
    const wrapper = document.createElement('div');
    wrapper.className = 'three-orphans-row';
    ol.appendChild(wrapper);
    last3.forEach(li => {
        li.classList.add('orphan-item');
        wrapper.appendChild(li);
    });
}
