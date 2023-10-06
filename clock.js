let clock=()=>{
    // alert(new Date().toLocaleTimeString())
    time.innerHTML = new Date().toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit'});
    day.innerHTML = new Date().toLocaleDateString('en-US', { weekday: 'long'});
}
setInterval(clock, 1000)