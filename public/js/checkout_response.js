function showCheckout(){
   var img_selected = "";
   var img_size = "";
   var img_color = "";
   var img_hash = "";

   var parameters = location.search.substring(1).split("&");

   var temp = parameters[0].split("=");
   l = unescape(temp[1]);

   temp = parameters[1].split("=");
   p = unescape(temp[1]);

   temp = parameters[2].split("=");
   m = unescape(temp[1]);

   temp = parameters[3].split("=");
   k = unescape(temp[1]);

   var num1 = parseInt(m,10);
   var num2 = 1;
   var result = num1 + num2;
   const img = new Image();

     img.onload = function() {
       var widthSize = this.width;
       var heightSize = this.height;
       var adapt_size = "";
       var adaptContainerToImage = "";
       var adaptPaperToImage = "";

       if (widthSize > heightSize){
         adapt_size += 'width:160px;height:110px;';
       }else{
         adapt_size += 'width:70px;height:120px;';
       }

       img_hash +='<div class="order-number" style="text-align:center;">'+k+'</div></div>';

        if (l === "pequeno"){
              img_size += '<div class="order-number-label">Tamanho: 30x40 (cm)</div>';
          }
          if (l === "medio"){
              img_size += '<div class="order-number-label">Tamanho: 50x70 (cm)</div>';
          }
          if (l === "grande"){
              img_size += '<div class="order-number-label">Tamanho: 50x80 (cm)</div>'
          }

          if (p === "preta"){
              img_color += '<div class="order-number-label">Moldura: Preta</div>';
              img_selected += '<div><img style="border: 2px solid black;'+adapt_size+'" src="pics/All/0'+result+'.jpg"/></div>';
          }else{
              img_color += '<div class="order-number-label">Moldura: Branca</div>';
              img_selected += '<div><img style="border: 2px solid white;'+adapt_size+'" src="pics/All/0'+result+'.jpg"/></div>';
          }

     document.getElementById("itemSelectedPicture").innerHTML = img_selected;
     document.getElementById("itemSelectedOrderNumber").innerHTML = img_hash;
     document.getElementById("itemSelectedColor").innerHTML = img_color;
     document.getElementById("itemSelectedSize").innerHTML = img_size;
   }
   img.src = 'pics/All/0'+result+'.jpg';

 }
 showCheckout();
