/**
 * Menu
 */
$("a.menu-icon").on("click", function (event) {
  var w = $(".menu");

  w.css({
    display: (w.css("display") === "none")
      ? "block"
      : "none"
  });
});

/**
 * Footer year
 */
$(document).ready(function () {
  $("#year").text(new Date().getFullYear());
});

/**
 * Footer email
 */
$(document).ready(function () {
  $(".email-link-cloaked").on("click", function (event) {
    const _link = event.target;

    const _user = reverseString(_link.getAttribute("data-resu"));
    const _domain = reverseString(_link.getAttribute("data-eman-niamod"));
    const _tld = reverseString(_link.getAttribute("data-dlt-niamod"));

    window.location.href = `mailto:${_user}@${_domain}.${_tld}`;
  });
});

/**
 * Reverses a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Moves WeChat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function (event) {
  $("#wechat-widget").css({ display: "block" });

  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function (event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function (event) {
  $("#wechat-widget").css({ display: "none" });
});


// Tab Button Click Event
document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category').toLowerCase(); // 確保大小寫一致

    // Update Active Button
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/Hide Items Based on Category
    document.querySelectorAll('.work-item').forEach(item => {
      const itemCategory = item.getAttribute('data-category').toLowerCase();
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Determine Default Tab Based on URL Parameter
const urlParams = new URLSearchParams(window.location.search);
const defaultCategory = urlParams.get('category') || 'all'; // 如果無參數，預設為 "all"

// Click the Button Corresponding to the Default Category
document.querySelector(`.tab-button[data-category="${defaultCategory}"]`).click();


