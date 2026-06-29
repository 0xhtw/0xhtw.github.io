(function () {
  var POOL = 18, dots = [], idx = 0, last = 0;
  for (var i = 0; i < POOL; i++) {
    var d = document.createElement('div');
    d.className = 'trail-dot';
    document.body.appendChild(d);
    dots.push(d);
  }
  document.addEventListener('mousemove', function (e) {
    var now = Date.now();
    if (now - last < 28) return;
    last = now;
    var d = dots[idx++ % POOL];
    d.style.left = e.clientX + 'px';
    d.style.top  = e.clientY + 'px';
    d.classList.remove('trail-on');
    void d.offsetWidth;
    d.classList.add('trail-on');
  });
})();
