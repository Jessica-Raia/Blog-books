const timeline = document.querySelector('.timeline');
const indicator = document.querySelector('.indicator');
const milestones = document.querySelectorAll('.milestone');

timeline.addEventListener('mousemove', (event) => {
    let rect = timeline.getBoundingClientRect();
    let offsetX = event.clientX - rect.left;
    indicator.style.left = `${offsetX}px`;

    // Check welke milestone het dichtstbij is
    milestones.forEach(milestone => {
        let milestoneX = milestone.offsetLeft;
        let distance = Math.abs(milestoneX - offsetX);
        
        if (distance < 20) {
            milestone.classList.add('highlight');
        } else {
            milestone.classList.remove('highlight');
        }
    });
});


  