document.addEventListener('DOMContentLoaded', () => {
    const panelToggle = document.getElementById('panelToggle');
    const panel = document.querySelector('.panel-container');
    let isOpen = false;

    // 点击切换按钮时切换面板
    panelToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        panel.classList.toggle('active', isOpen);
        panelToggle.classList.toggle('active', isOpen);
    });

    // 点击面板外部时关闭面板
    document.addEventListener('click', (e) => {
        if (isOpen && !panel.contains(e.target) && !panelToggle.contains(e.target)) {
            isOpen = false;
            panel.classList.remove('active');
            panelToggle.classList.remove('active');
        }
    });
});