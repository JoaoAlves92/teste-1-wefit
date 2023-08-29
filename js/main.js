// HEADER
var header = $(".jumbotron");
var headerBtn = $(".jumbotron > .btn");
if (header.length > 0) {
  header.css({
    "background-color": "#999999",
    color: "white",
    "text-align": "right",
  });

  headerBtn.css({
    "background-color": "green",
    "border-color": "green",
  });
}
// ===========

// LISTA
$(".list-group .list-group-item.active").removeClass("active");

$(".list-group")
  .append('<li class="list-group-item">Quarto item</li>')
  .append('<li class="list-group-item">Quinto item</li>')
  .find("li:nth-child(4)")
  .addClass("active");
// ===========

// MENU
$(".btn-group-vertical")
  .removeClass("btn-group-vertical")
  .addClass("btn-group");

$(".btn-group .btn").css({
  "border-radius": "4px",
});
$(".btn-group").css({
  gap: "10px",
});
// ===========

// FOTOS
var cardMap = {};

$(".card").each(function () {
  var cardTitle = $(this).find(".card-title").text();
  cardMap[cardTitle] = $(this);
});

var naturezaCard = cardMap["Natureza"];
var animaisCard = cardMap["Animais"];
var pessoasCard = cardMap["Pessoas"];
var tecnologiaCard = cardMap["Tecnologia"];

function moveCardToNewList(card, newList) {
  var novaDivCol = $('<div class="col-lg-3">');
  novaDivCol.append(card.clone());
  card.remove();
  newList.append(novaDivCol);
}

var novaLista = $('<div class="row">');
moveCardToNewList(naturezaCard, novaLista);
moveCardToNewList(animaisCard, novaLista);
moveCardToNewList(pessoasCard, novaLista);
moveCardToNewList(tecnologiaCard, novaLista);

$("body > div > div:nth-child(6)").empty().append(novaLista);

$(document).ready(function () {
  var secondBtn = $(
    "body > div > div:nth-child(6) > div > div:nth-child(2) > div > div > a"
  );
  secondBtn.css({ "background-color": "green", "border-color": "green" });
});
// ===========
