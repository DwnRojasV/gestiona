const sidebarClose = document.getElementById('sidebar-close');
const sidebar = document.querySelector('.sidebar');
const linkElements = sidebar.querySelectorAll('.sidebar__option');

sidebarClose.addEventListener('click', () => {
    if (!sidebar.classList.contains("sidebar--hidden")) {
        sidebar.classList.add("sidebar--hidden");
    }
});

linkElements.forEach((element) => {
    element.addEventListener('click', () => {
        if (sidebar.classList.contains("sidebar--hidden")) {
            sidebar.classList.remove("sidebar--hidden");
        }
    })
})

