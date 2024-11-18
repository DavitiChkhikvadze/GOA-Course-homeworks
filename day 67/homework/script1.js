const dot = document.getElementById('dot');
    let position = 0;
    let direction = 1;

    setInterval(() => {
        if (position >= 40) direction = -1; 
        if (position <= 0) direction = 1; 

        position += direction * 2; 
        dot.style.left = position + 'px';
    }, 50);