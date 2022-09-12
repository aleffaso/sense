//Config

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
    var globalSize;
    var globalColor;
    var globalImageSelected;
    l = unescape(temp[1]);

    temp = parameters[1].split("=");
    p = unescape(temp[1]);

    temp = parameters[2].split("=");
    m = unescape(temp[1]);
    document.getElementById("tamanho").value = l;
    document.getElementById("cor").value = p;
    document.getElementById("selectedImage").value = m;

    getItemDescription(l,p,m);

    window.globalSize = l;
    window.globalColor  = p;
    window.globalImageSelected = m;

  }
  showCart();

  function getItemDescription(l,p,m){
    var globalSelectedCodeFrame;
    var subCode = 'SQ-CGS-';
    var sizeCode = l.charAt(0).toUpperCase();
    var colorCode = p.charAt(0).toUpperCase();
    var selectedCode = '0';
    var sumNumber = parseInt(m,10);
    var resultNumber = sumNumber + 1;
    window.globalSelectedCodeFrame = subCode+sizeCode+colorCode+selectedCode+resultNumber;
    $("#itemCodeReference").val(subCode+sizeCode+colorCode+selectedCode+resultNumber);
    $("#itemCodeID").val(subCode+sizeCode+colorCode+selectedCode+resultNumber);



  };

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
  var sizeAndColorSelected = "";
  var valorQuadro = "";
  var totalQuadro = "";
  var selectedColor = document.getElementById("cor").value;
  var selectedSize = document.getElementById("tamanho").value;

  if(selectedSize === "pequeno"){
    var valorSelecao = 257.00;
    var valorFinal = 267.00;
    if(selectedColor === "branca"){
      sizeAndColorSelected += '<div style="top: 0" class="color white"></div><div style="top: 43px" class="type small">P</div>';
    }else{
      sizeAndColorSelected += '<div style="top: 0" class="color black"></div><div style="top: 43px" class="type small">P</div>';
    }
    valorQuadro += '<h2 class="subtotal">Subtotal: R$ <span>'+valorSelecao+'</span></h2>';
    totalQuadro += '<h1 class="total">Total: R$ <span>'+valorFinal+'</span></h1>';
  }

  if(selectedSize === "medio"){
    var valorSelecao = 397.00;
    var valorFinal = 407.00;
    if(selectedColor === "branca"){
      sizeAndColorSelected += '<div style="top: 0" class="color white"></div><div style="top: 43px" class="type small">M</div>';
    }else{
      sizeAndColorSelected += '<div style="top: 0" class="color black"></div><div style="top: 43px" class="type small">M</div>';
    }
    valorQuadro += '<h2 class="subtotal">Subtotal: R$ <span>'+valorSelecao+'</span></h2>';
    totalQuadro += '<h1 class="total">Total: R$ <span>'+valorFinal+'</span></h1>';
  }

  if(selectedSize === "grande"){
    var valorSelecao = 437.00;
    var valorFinal = 447.00;
    if(selectedColor === "branca"){
      sizeAndColorSelected += '<div style="top: 0" class="color white"></div><div style="top: 43px" class="type small">G</div>';
    }else{
      sizeAndColorSelected += '<div style="top: 0" class="color black"></div><div style="top: 43px" class="type small">G</div>';
    }
    valorQuadro += '<h2 class="subtotal">Subtotal: R$ <span>'+valorSelecao+'</span></h2>';
    totalQuadro += '<h1 class="total">Total: R$ <span>'+valorFinal+'</span></h1>';
  }

  getAmountValue(valorSelecao);

  document.getElementById("sizeAndColorSelected").innerHTML = sizeAndColorSelected;
  document.getElementById("valorQuadro").innerHTML = valorQuadro;
  document.getElementById("totalQuadro").innerHTML = totalQuadro;

};
sizeAndColor();

function getAmountValue(valorSelecao){

  var root = "http://"+document.location.hostname+":8000/Documents/sense/Webpage/";
  var amount = valorSelecao.toFixed(2);
  $("#itemAmountValue").val(amount);


  // Iniciar a seção de pagamento
  function iniciarSessao(){
     $.ajax({
        url: root+"controller/controllerId.php",
        type: 'POST',
        dataType: 'json',
        success:function(data){
          PagSeguroDirectPayment.setSessionId(data.id);
        },
        complete: function(){
          listaMeiosPagamento();
        }
     });
  }
  iniciarSessao();

  // Lista os pagamentos disponíveis no Pagseguro
  function listaMeiosPagamento(){
   PagSeguroDirectPayment.getPaymentMethods({
       amount: amount,
       success: function(data) {
           $.each(data.paymentMethods.CREDIT_CARD.options, function(i, obj){
               $('.CartaoCredito').append(""+obj.name+"");
           });

           $('.Boleto').append(""+data.paymentMethods.BOLETO.name+"");

           $.each(data.paymentMethods.ONLINE_DEBIT.options, function(i, obj){
               $('.Debito').append(""+obj.name+"");
           });
       },
       complete: function(data) {
         getTokenCard()
       }
   });
  }

  $('#cardNumber').on('keyup',function(){
   var numeroCartao=$(this).val();
   var qtdCaracteres=numeroCartao.length;

   if(qtdCaracteres == 6){
       PagSeguroDirectPayment.getBrand({
           cardBin: numeroCartao,
           success: function(response){
               var bandeiraImg=response.brand.name;
          //     $('.bandeiraCartao').html("<img src=https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/"+bandeiraImg+".png>")
               getParcelas(bandeiraImg);
           },
           error: function (response) {
               alert('Cartão não reconhecido');
               $('.bandeiraCartao').empty();
           }
       });
     }
  });

  //Exibe a quantidade e valores das parcelas
  function getParcelas(bandeira) {
   PagSeguroDirectPayment.getInstallments({
       amount: amount,
       maxInstallmentNoInterest: 3,
       brand: bandeira,
       success: function(response) {
           $.each(response.installments,function(i,obj){
               $.each(obj,function(i2,obj2){
                 var numberValue=obj2.installmentAmount;
                 var number= "R$ "+ numberValue.toFixed(2).replace(".",",");
                 var numberParcelas= numberValue.toFixed(2);
                 $('#qtdParcelas').show().append("<option value='"+obj2.quantity+"'>"+numberValue+"</option>");
               });
           });
       }
   });
  }

  //Pegar o valor da parcela
  $("#qtdParcelas").on('change',function(){
   var valueSelected=document.getElementById('qtdParcelas');
   $("#valorParcelas").val(valueSelected.options[valueSelected.selectedIndex].label);
  });

    var globalTokenCardValue;
  //Chamar a função de token
  $('#cardVerification').on('blur',function(){
      getTokenCard();
      window.globalTokenCardValue = globalTokenCardValue;
  });


  //Obter o token do cartão de crédito
  function getTokenCard() {
     PagSeguroDirectPayment.createCardToken({
         cardNumber: $('#cardNumber').val(),
         brand: $('#cardBrand').val(),
         cvv: $('#cardVerification').val(),
         expirationMonth: $('#validMonth').val(),
         expirationYear: $('#validYear').val(),
         success: function(response)
         {
            $('#tokenCard').val(response.card.token);
            globalTokenCardValue = response.card.token;

         }
     });

  }

  //Pega o hash do cartão
  $("#submitPayment").on('submit',function(event){
     event.preventDefault();

       PagSeguroDirectPayment.onSenderHashReady(function(response){
           $("#hashCard").val(response.senderHash);

           var value = globalSelectedCodeFrame;

           itemUrl = "checkout_response.php?tamanho="+globalSize+"&cor="+globalColor+"&selectedImage="+globalImageSelected+"&codigo="+value;

           if(response.status=='success'){
             $("#submitPayment").trigger('submit');
             window.open(itemUrl,'_blank');
           }
       });

  });
};
