

var check = false;

function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;

  el.parent().children(".full-price").html(eq);

  changeTotal();
}

function changeTotal() {

  var price = 0;

  $(".full-price").each(function(index){
    price += parseFloat($(".full-price").eq(index).html());
  });

  price = Math.round(price * 100) / 100;
  var tax = Math.round(price * 0.05 * 100) / 100
  var shipping = parseFloat($(".shipping span").html());
  var fullPrice = Math.round((price + shipping) *100) / 100;

  if(price == 0) {
    fullPrice = 0;
  }

  $(".subtotal span").html(price);
  $(".total span").html(fullPrice);
}

$(".remove").click(function(){
  var el = $(this);
  el.parent().parent().addClass("removed");
  window.setTimeout(
    function(){
      el.parent().parent().slideUp('fast', function() {
        el.parent().parent().remove();
        if($(".product").length == 0) {
          if(check) {
            $("#cart").html("Não há produtos no seu carrinho");
          } else {
            $("#cart").html("<h1>Não há produtos no seu carrinho</h1>");
          }
        }
        changeTotal();
      });
    }, 200);
});

$(document).ready(function(){


  $(".qt-plus").click(function(){
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);

    $(this).parent().children(".full-price").addClass("added");

    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("added"); changeVal(el);}, 150);
  });

  $(".qt-minus").click(function(){

    child = $(this).parent().children(".qt");

    if(parseInt(child.html()) > 1) {
      child.html(parseInt(child.html()) - 1);
    }

    $(this).parent().children(".full-price").addClass("minused");

    var el = $(this);
    window.setTimeout(function(){el.parent().children(".full-price").removeClass("minused"); changeVal(el);}, 150);
  });

  window.setTimeout(function(){$(".is-open").removeClass("is-open")}, 1200);

  $(".btn").click(function(){
    check = true;
    $(".remove").click();
  });
});

 function showCart(){
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);

    temp = parameters[1].split("=");
    p = unescape(temp[1]);

    temp = parameters[2].split("=");
    m = unescape(temp[1]);
    document.getElementById("tamanho").value = l;
    document.getElementById("cor").value = p;
    document.getElementById("selectedImage").value = m;
  }
  showCart();

  var num1 = parseInt(m,10);
  var num2 = 1;
  var result = num1 + num2;

var placeSelectImage= function(x) {

  const img = new Image();
  var img_select="";

  img.onload = function() {
    var widthSize = this.width;
    var heightSize = this.height;
    var adapt_size = "";


    if (widthSize > heightSize){
      adapt_size += 'style="width:150px;height:100px;"';
    }else{
      adapt_size += 'style="width:100px;height:150px;"';
    }


    var img_select="";
    var selectedFrameColor = document.getElementById("cor").value;
    var colorSelected = "";

    if (selectedFrameColor === "branca"){
        colorSelected += 'class="white-background"';
    }else{
        colorSelected += 'class="black-background"';
    }

    for (var counter = result; counter <= x; counter++ ) {
      img_select += '<div '+colorSelected+'> <img '+adapt_size+' src="pics/All/0'+counter+'.jpg" alt=""/></div>';
    }

    document.getElementById("placing_select_image").innerHTML = img_select;
  }
  img.src = 'pics/All/0'+result+'.jpg';

};
placeSelectImage(result);

var sizeAndColor = function(x){
  var botaoPagamento = "";
  var sizeAndColorSelected = "";
  var valorQuadro = "";
  var totalQuadro = "";
  var selectedColor = document.getElementById("cor").value;
  var selectedSize = document.getElementById("tamanho").value;

  if(selectedSize === "pequeno"){
    if(selectedColor === "branca"){
      sizeAndColorSelected += '<div style="top: 0" class="color white"></div><div style="top: 43px" class="type small">P</div>';
    }else{
      sizeAndColorSelected += '<div style="top: 0" class="color black"></div><div style="top: 43px" class="type small">P</div>';
    }
    valorQuadro += '<h2 class="subtotal">Subtotal: R$ <span>257</span></h2>';
    totalQuadro += '<h1 class="total">Total: R$ <span>267</span></h1>'
  }

  if(selectedSize === "medio"){
    if(selectedColor === "branca"){
      sizeAndColorSelected += '<div style="top: 0" class="color white"></div><div style="top: 43px" class="type small">M</div>';
    }else{
      sizeAndColorSelected += '<div style="top: 0" class="color black"></div><div style="top: 43px" class="type small">M</div>';
    }
    valorQuadro += '<h2 class="subtotal">Subtotal: R$ <span>397</span></h2>';
    totalQuadro += '<h1 class="total">Total: R$ <span>407</span></h1>'
  }

  if(selectedSize === "grande"){
    if(selectedColor === "branca"){
      sizeAndColorSelected += '<div style="top: 0" class="color white"></div><div style="top: 43px" class="type small">G</div>';
    }else{
      sizeAndColorSelected += '<div style="top: 0" class="color black"></div><div style="top: 43px" class="type small">G</div>';
    }
    valorQuadro += '<h2 class="subtotal">Subtotal: R$ <span>437</span></h2>';
    totalQuadro += '<h1 class="total">Total: R$ <span>447</span></h1>'
  }

document.getElementById("sizeAndColorSelected").innerHTML = sizeAndColorSelected;
document.getElementById("valorQuadro").innerHTML = valorQuadro;
document.getElementById("totalQuadro").innerHTML = totalQuadro;

};
sizeAndColor();
