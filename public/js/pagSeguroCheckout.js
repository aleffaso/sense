   var Root = "http://"+document.location.hostname+":8000/Documents/sense/Webpage/";
   var Amount = 500.00;

  // Iniciar a seção de pagamento
  function iniciarSessao(){
      $.ajax({
         url: Root+"controller/controllerId.php",
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
        amount: Amount,
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

$('#NumeroCartao').on('keyup',function(){
    var NumeroCartao=$(this).val();
    var QtdCaracteres=NumeroCartao.length;

    if(QtdCaracteres == 6){
        PagSeguroDirectPayment.getBrand({
            cardBin: NumeroCartao,
            success: function(response){
                var BandeiraImg=response.brand.name;
                $('.BandeiraCartao').html("<img src=https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/"+BandeiraImg+".png>")
                getParcelas(BandeiraImg);
            },
            error: function (response) {
                alert('Cartão não reconhecido');
                $('.BandeiraCartao').empty();
            }
        });
      }
});

//Exibe a quantidade e valores das parcelas
function getParcelas(Bandeira) {
    PagSeguroDirectPayment.getInstallments({
        amount: Amount,
        maxInstallmentNoInterest: 2,
        brand: Bandeira,
        success: function(response) {
            $.each(response.installments,function(i,obj){
                $.each(obj,function(i2,obj2){
                  var NumberValue=obj2.installmentAmount;
                  var Number= "R$ "+ NumberValue.toFixed(2).replace(".",",");
                  var NumberParcelas= NumberValue.toFixed(2);
                  $('#QtdParcelas').show().append("<option value='"+obj2.quantity+"'>"+NumberValue+"</option>");
                });
            });
        }
    });
  }

  //Pegar o valor da parcela
$("#QtdParcelas").on('change',function(){
    var ValueSelected=document.getElementById('QtdParcelas');
    $("#ValorParcelas").val(ValueSelected.options[ValueSelected.selectedIndex].label);
});

  //Obter o token do cartão de crédito
  function getTokenCard(){
      PagSeguroDirectPayment.createCardToken({
          cardNumber: '4111111111111111',
          brand: 'visa',
          cvv: '123',
          expirationMonth: '12',
          expirationYear: '2030',
          success: function(response)
          {
             $('#TokenCard').val(response.card.token);

          }
      });
  }

  //Pega o hash do cartão
  $("#Form1").on('submit',function(event){
      event.preventDefault();
      PagSeguroDirectPayment.onSenderHashReady(function(response){
          $("#HashCard").val(response.senderHash);

          if(response.status=='success'){
          	$("#Form1").trigger('submit');
  		}
      });
  });
