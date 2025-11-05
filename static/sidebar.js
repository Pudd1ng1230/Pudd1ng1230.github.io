// 侧边栏触发效果
document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelector('.sidebar-trigger');
    const sidebar = document.querySelector('.sidebar-fixed');
    const mainContent = document.querySelector('.main-content');
    
    // 触发区域的鼠标事件
    function showSidebar() {
        sidebar.style.transform = 'translateX(0)';
        mainContent.style.marginLeft = '260px';
    }
    
    function hideSidebar() {
        sidebar.style.transform = 'translateX(-100%)';
        mainContent.style.marginLeft = '10px';
    }
    
    // 添加触发事件
    trigger.addEventListener('mouseenter', showSidebar);
    sidebar.addEventListener('mouseenter', showSidebar);
    
    trigger.addEventListener('mouseleave', function(e) {
        // 确保鼠标不是移到侧边栏上
        if (!e.relatedTarget || !sidebar.contains(e.relatedTarget)) {
            hideSidebar();
        }
    });
    
    sidebar.addEventListener('mouseleave', hideSidebar);
    
    // 添加触摸事件支持
    trigger.addEventListener('touchstart', function(e) {
        e.preventDefault();
        showSidebar();
    });
    
    document.addEventListener('touchstart', function(e) {
        if (!sidebar.contains(e.target) && !trigger.contains(e.target)) {
            hideSidebar();
        }
    });
});