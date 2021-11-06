window.addEventListener('load', function() {
  var status = document.getElementById("status-text"),
	  classnw = document.getElementById("networkstt");
  function updateOnlineStatus(event) {
    var networkstt = navigator.onLine ? "Your internet connection was restored." : "You are currently offline.";
    status.innerHTML = networkstt;
    if (navigator.onLine == true){classnw.className = 'online';setTimeout(function(){classnw.className = ''},3000)}else{classnw.className = 'offline'}
  }
  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
