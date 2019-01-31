(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var a = document.getElementById('current-time');
    var date = new Date();
    a.innerHTML = date.toTimeString();
  });
})();
