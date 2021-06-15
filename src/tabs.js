export default function changeTab(event) {
    if (event.target.closest('.nav-item:not(.active)')) {
        const tabId = event.target.dataset.target;
        const tabContent = document.getElementById(tabId);
        const previousActiveTab = document.querySelectorAll('.active');

        previousActiveTab.forEach(element => {
            element.classList.remove('active');
        });
        tabContent.classList.add('active');
        event.target.classList.add('active');
    }
}