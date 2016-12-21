
$("button#no").on("click", function() {
	$("h1.big").text("WRONG");
	$("button#try-again").removeClass("hide");
	$("button#yes").addClass("hide");
	$("button#no").addClass("hide");
});

$("button#try-again").on("click", function() {
	$("h1.big").text("Are sandwiches your favorite food?");
	$("button#yes").removeClass("hide");
	$("button#no").removeClass("hide");
	$("button#try-again").addClass("hide");
});

$("button#yes").on("click", function() {
	$("h1.big").text("Good Choice!");
	$("button#make").removeClass("hide");
	$("button#yes").addClass("hide");
	$("button#no").addClass("hide");
});

$('.center').slick({
  centerMode: true,
  accessibility: true,
  focusOnSelect: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

var changeImage = function(id, type) {
  // console.log(id, type)
  $("img#big").attr("src", "img/sandwich ingredients-"+id+".png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");

  var params = new URLSearchParams(window.location.search);

  if (type === 'toppings') {
    params.append('toppings', id);
  } else {
    params.set(type, id);
  }

  // window.location.search = params;
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params.toString();
    window.history.pushState({path:newurl},'',newurl);
}

var idMap = {
  one: "01", 
  two: "02",
  three: "03",
  four: "04",
  five: "05",
  six: "06",
  seven: "07",
  eight: "08",
  nine: "09",
  ten: "10",
  eleven: "11",
  tweleve: "12",
  thirteen: "13",
  fourteen: "14",
  fifteen: "15",
  sixteen: "16",
  seventeen: "17",
  eighteen: "18",
  nineteen: "19",
  twenty: "20",
  twentyOne: "21",
  twentyTwo: "22"
};

$("img").on("click", function() {
  changeImage(idMap[this.id], this.classList[0]);
});

var sandwichDiv = $("#fullSandy");
if (sandwichDiv.length) {
  var params = new URLSearchParams(window.location.search);
  var fullSandy = {};

  fullSandy.bread = params.getAll('bread');
  fullSandy.toppings = params.getAll('toppings');

  // first place the bread
  for (i = 0; i < fullSandy.bread.length; i++) {
    var bread = "img/sandwich ingredients-" + fullSandy.bread[i] + ".png";

    var img = $('<img class="bread">');
    img.attr('src', bread);
    img.appendTo(sandwichDiv);
  }

  // then put dem toppins
  for (i = 0; i < fullSandy.toppings.length; i++) {
    var topping = "img/sandwich ingredients-" + fullSandy.toppings[i] + ".png";

    var img = $('<img>');
    img.attr('src', topping);
    img.appendTo(sandwichDiv);
  }
}

