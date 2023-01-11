window.addEventListener('mousewheel', (event)=>{
        if (event.wheelDelta >= 0) {
            console.log('should show sticky navbar');
        }
        else {
            console.log('Scroll down');
        }
      
    })
