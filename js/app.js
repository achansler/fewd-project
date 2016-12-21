
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

//Ingredients

var ingredients = [
{
  photo: "img/sandwich ingredients-01.png"
},
{
  photo: "img/sandwich ingredients-02.png"
},
{
  photo: "img/sandwich ingredients-04.png"
},
{
  photo: "img/sandwich ingredients-05.png"
},
{
  photo: "img/sandwich ingredients-06.png"
},
{
  photo: "img/sandwich ingredients-03.png"
},
{
  photo: "img/sandwich ingredients-07.png"
},
{
  photo: "img/sandwich ingredients-08.png"
},
{
  photo: "img/sandwich ingredients-09.png"
},
{
  photo: "img/sandwich ingredients-10.png"
},
{
  photo: "img/sandwich ingredients-11.png"
},
{
  photo: "img/sandwich ingredients-12.png"
},
{
  photo: "img/sandwich ingredients-13.png"
},
{
  photo: "img/sandwich ingredients-14.png"
},
{
  photo: "img/sandwich ingredients-15.png"
},
{
  photo: "img/sandwich ingredients-16.png"
},
{
  photo: "img/sandwich ingredients-17.png"
},
{
  photo: "img/sandwich ingredients-18.png"
},
{
  photo: "img/sandwich ingredients-19.png"
},
{
  photo: "img/sandwich ingredients-20.png"
},
{
  photo: "img/sandwich ingredients-21.png"
},
{
  photo: "img/sandwich ingredients-22.png"
},
];

var changeImage = function(image) {
  $("img#big").attr("src", ingredients[image]["photo"]);
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
}

$("img#one").on("click", function() {
  changeImage(0);
});

$("img#two").on("click", function() {
  changeImage(1);
});

$("img#three").on("click", function() {
  changeImage(2);
});

$("img#four").on("click", function() {
  changeImage(3);
});

$("img#five").on("click", function() {
  changeImage(4);
});

$("img#six").on("click", function() {
  changeImage(5);
});

$("img#seven").on("click", function() {
  changeImage(6)
});

$("img#eight").on("click", function() {
  changeImage(7)
});

$("img#nine").on("click", function() {
  changeImage(8)
});

$("img#ten").on("click", function() {
  changeImage(9)
});

$("img#eleven").on("click", function() {
  changeImage(10)
});

$("img#tweleve").on("click", function() {
  changeImage(11)
});

$("img#thirteen").on("click", function() {
  changeImage(12)
});

$("img#fourteen").on("click", function() {
  changeImage(13)
});

$("img#fifteen").on("click", function() {
  changeImage(14)
});

$("img#sixteen").on("click", function() {
  changeImage(15)
});

$("img#seventeen").on("click", function() {
  changeImage(16)
});

$("img#eighteen").on("click", function() {
  changeImage(17)
});

$("img#nineteen").on("click", function() {
  changeImage(18)
});

$("img#twenty").on("click", function() {
  changeImage(19)
});

$("img#twenty-one").on("click", function() {
  changeImage(20)
});

$("img#twenty-two").on("click", function() {
  changeImage(21)
});

