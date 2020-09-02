$(".header-right .fas.fa-bars").click(
  function() {
    $(".hamburger-menu").show(1000);
  }
);

$(".hamburger-menu .close").click(
  function() {
    $(".hamburger-menu").fadeOut(1000);
  }
);
