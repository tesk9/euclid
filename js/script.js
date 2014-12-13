
$(document).ready(function () {
  $(".submit").on("click", function () {
    var $a = $("#a").val(), $b = $("#b").val()
    var a = Number($a), b = Number($b)
    var m = Math.max(a, b)
    var n = Math.min(a, b)
    $(".form").children().hide()
    $(".instruct").hide()
    $(".new").show()
    $(".message").text("Finding the greatest common divisor of "+m+" and "+n+".")
    $(".message").show()
    gcd(m, n);
  });

  $(".new").on("click", function () {
    $(".rows").children().remove();
    $(".rows").append('<div class="row1"></div><div class="row2"></div>');
    $(".form").children().show();
    $(".instruct").show();
    $(".message").hide();
    $(".message2").hide();
    $(this).hide();
  });
});

var fill_row = function (n, row) {
  var i = 1;
  for (i; i <= n; i++) {
    $(".row" + row).append("<div class='box'></div>");
  }
};

var gcd = function (m, n, row) {
  var row = row || 1;
  var row2 = row + 1;
  if (row===1) { fill_row(m, row) };

  fill_row(n, row2);
  setTimeout(function() {
    color(m, n, row)
    if (m % n === 0) {
      $(".message2").text("The greatest common divisor is "+n+".");
      $(".message2").show();
      return;
    } else {
      $(".rows").append("<div class='row"+(row2+1)+"'></div>");
      return gcd (n, m%n, row2)
    }
  }, 1000);

};

var color = function (m, n, row) {
  var upTo = m - m % n;
  var i = 0, j = 0, app = 0;
  var $row = $(".row"+row)
  for (i; i <= upTo; i++) {
    $row.find(".box:nth-of-type("+i+")").addClass("color"+app)
    if (i === n * j) {
      j++;
      app++;
    }
    if (app === 7) {
      app = 1;
    }
  }
};