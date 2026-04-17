const timeElement = document.querySelector('[data-testid="test-user-time"]');

function showTime (){
    const now = new Date(); //Required

    //format to readable time
    const realTime = now.toLocaleTimeString();
    timeElement.textContent = realTime;
}

//Run immediately 
showTime();

// Update every seconds
setInterval(showTime, 1000);