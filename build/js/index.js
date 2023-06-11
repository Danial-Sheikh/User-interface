if ($(window).width() < 1024) {
  $(document).ready(function () {
    $("tr th:nth-child(4)").remove();
    $("tr td:nth-child(4)").remove();
  });
}

$(document).on("click", "ul.md-ul.top_links a", function (e) {
  e.preventDefault;

  $("ul.md-ul.top_links a span").removeClass("active");
  $(this).find("span").addClass("active");

  var mz_sec = $(this).attr("data-secshow");

  // console.log(mz_sec);

  $("body").attr("data-visible", mz_sec);
  // $('body').addClass('.active');
});

$(document).ready(function () {
  $(".md-btn").click(function () {
    $(".md-hide").slideToggle();

    var text = $(this).text();
    text = text.trim();

    if (text == "view all") {
      $(".md-btn").html(
        'view less&nbsp;<i class="fa-solid fa-arrow-right"></i>'
      );
    } else {
      $(".md-btn").html(
        'view all&nbsp;<i class="fa-solid fa-arrow-right"></i>'
      );
    }
  });
});

$(document).ready(function () {
  $(".md-btn-inv").click(function () {
    $(".md-hide-inv").slideToggle();

    var text = $(this).text();
    text = text.trim();

    if (text == "view all") {
      $(".md-btn-inv").html(
        'view less&nbsp;<i class="fa-solid fa-arrow-right"></i>'
      );
    } else {
      $(".md-btn-inv")
        .html
        // 'view all&nbsp;<i class="fa-solid fa-arrow-right"></i>'
        ();
    }
  });
});
