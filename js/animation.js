$(document).ready(function() {
  var sections = document.querySelectorAll('[data-animate]');

  var options = {
    root: null, // null or nothing is viewport
    threshold: 0, // 0 id default
    rootMargin:  "0px"
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      // to see animations on scroll up as well do this
      // if (entry.isIntersecting) {
      //   entry.target.classList.add("is-visible")
      // } else {
      //   entry.target.classList.remove("is-visible")
      // }

      // to end animation after they happen do this
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target);
      }
    })
  }, options)

  sections.forEach(function(section) {
    observer.observe(section);
  })
})
