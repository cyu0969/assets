


// full-page js
$(document).ready(function(){
    $("#demosMenu").change(function(){
      window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });
  });
  
  $(document).ready(function() {
  
      $('#fullpage').fullpage({
  
          sectionsColor: ['#CCCCFF', '#181818', '#485F51', '#D6D6CC', '#CDC3BA', '#cccccc'],
          anchors: ['1rdPage', '2rdPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
          menu: '#menu',
          loopBottom: true,
  
          easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
  
          navigation: true,
          navigationPosition: 'right',
          navigationTooltips: ['Intro', 'Profile', 'Skill', 'Util', 'Career', 'Responsive'],
          showActiveTooltip: true,
  
          slidesNavigation: true,
  
      });
  
  });
  
  
  
  // chart js
  window.addEventListener("DOMContentLoaded", () => {
    // update circle when range change
    const pie = document.querySelectorAll(".pie");
    const range = document.querySelector('[type="range"]');
  
    range.addEventListener("input", (e) => {
        pie.forEach((el, index) => {
        const options = {
            index: index + 1,
            percent: e.target.value
        };
        circle.animationTo(options);
        });
    });
  
    // start the animation when the element is in the page view
    const elements = [].slice.call(document.querySelectorAll(".pie"));
    const circle = new CircularProgressBar("pie");
  
    // circle.initial();
  
    if ("IntersectionObserver" in window) {
        const config = {
        root: null,
        rootMargin: "0px",
        threshold: 0.75
        };
  
        const ovserver = new IntersectionObserver((entries, observer) => {
        entries.map((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
            circle.initial(entry.target);
            observer.unobserve(entry.target);
            }
        });
        }, config);
  
        elements.map((item) => {
        ovserver.observe(item);
        });
    } else {
        elements.map((element) => {
        circle.initial(element);
        });
    }
  
    setInterval(() => {
        const typeFont = [100, 200, 300, 400, 500, 600, 700];
        const colorHex = `#${Math.floor((Math.random() * 0xffffff) << 0).toString(
        16
        )}`;
        const options = {
        index: 17,
        percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: colorHex,
        fontColor: colorHex,
        fontSize: `${Math.floor(Math.random() * (1.4 - 1 + 1) + 1)}rem`,
        fontWeight: typeFont[Math.floor(Math.random() * typeFont.length)]
        };
        circle.animationTo(options);
    }, 3000);
  
    });