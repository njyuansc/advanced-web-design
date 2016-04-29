var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

addEvent(window, "resize", function(event) {
  var orbitWrapper = document.getElementById("orbited")
  var featuredDiv = document.getElementById("featured")
  windowWidth = window.innerWidth
  windowHeight = window.innerHeight

  orbitWrapper.style.width = windowWidth
  orbitWrapper.style.height = windowWidth * 0.6
  featuredDiv.style.width = windowWidth
  featuredDiv.style.height = windowWidth * 0.6

  featuredDiv.children[0].style.width = windowWidth
  featuredDiv.children[1].style.width = windowWidth
  featuredDiv.children[2].style.width = windowWidth
  featuredDiv.children[3].style.width = windowWidth
  featuredDiv.children[4].style.width = windowWidth

  featuredDiv.children[0].style.height = windowWidth * 0.6
  featuredDiv.children[1].style.height = windowWidth * 0.6
  featuredDiv.children[2].style.height = windowWidth * 0.6
  featuredDiv.children[3].style.height = windowWidth * 0.6
  featuredDiv.children[4].style.height = windowWidth * 0.6
});
