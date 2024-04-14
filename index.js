$(document).ready(function(e) {
      var timeout;
      var delay = 600;

      $('#type_text_field').keyup(function(e) {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
              delayFunction();
          }, delay);
      });

      function delayFunction() {
        AddText();
      }

      $('#type_text_field_mobile').keyup(function(e) {
          clearTimeout(timeout);
          timeout = setTimeout(function() {
              delayFunctionMobile();
          }, delay);
      });

      function delayFunctionMobile() {
        AddTextMobile();
      }



    var slider = new Slider("#image_size_range", {
    ticks: [1, 2, 3, 4],
    ticks_labels: ['25%', '', '', '', '100%'],
    ticks_snap_bounds: 30
    });

});


function setTextColor2(){
    if(document.getElementById('color_picker_div').style.display=='none'){
        document.getElementById('color_picker_div').style.display='block';
        document.getElementById('text_align_div').style.display='none';
    }else{
        document.getElementById('color_picker_div').style.display='none';
    }

}

function setTextColor2Mobile(){
    if(document.getElementById('color_picker_div_mobile').style.display=='none'){
        document.getElementById('color_picker_div_mobile').style.display='block';
        document.getElementById('text_align_div_mobile').style.display='none';
    }else{
        document.getElementById('color_picker_div_mobile').style.display='none';
    }

}



function loadImage(img_url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error('Failed to load image'));
        image.src = img_url;
  });
}


async function drawLogo(img_url='', text_image='', text='', priority=1, text_align='center', text_color='white', text_size='30px', text_family='Block', text_bold='bold'){
    const canvas = document.getElementById('image_combination');

    const ctx = canvas.getContext('2d');
    ctx.canvas.width=1920;
    ctx.canvas.height=1920;


    if(img_url=='' || img_url==null){
        img_url='/not_found.png';
    }

    if(img_url!=''){
          var image= await loadImage(img_url);

          // Define the desired width and height
          const desiredWidth = 1550; // in pixels
          const desiredHeight = 1550; // in pixels

          // Calculate the aspect ratio of the image
          const aspectRatio = image.width / image.height;
          var percent=0.8;
          // Calculate the scaled width and height while maintaining the aspect ratio
          let scaledWidth = desiredWidth;
          let scaledHeight = desiredWidth / aspectRatio;

          // Check if the calculated height exceeds the desired height
          if (scaledHeight > desiredHeight) {
            scaledHeight = desiredHeight;
            scaledWidth = desiredHeight * aspectRatio;
          }
          // scaledHeight=scaledHeight*percent;
          // scaledWidth=scaledWidth*percent;
          // Draw the image on the canvas
          ctx.drawImage(image, 80, 80,scaledWidth, scaledHeight);


    }

    if(text_image!=''){
          var image= await loadImage(text_image);

          // Define the desired width and height
          const desiredWidth = 1600; // in pixels
          const desiredHeight = 200; // in pixels

          // Calculate the aspect ratio of the image
          const aspectRatio = image.width / image.height;
          var percent=0.8;
          // Calculate the scaled width and height while maintaining the aspect ratio
          let scaledWidth = desiredWidth;
          let scaledHeight = desiredWidth / aspectRatio;

          // Check if the calculated height exceeds the desired height
          if (scaledHeight > desiredHeight) {
            scaledHeight = desiredHeight;
            scaledWidth = desiredHeight * aspectRatio;
          }
          // scaledHeight=scaledHeight*percent;
          // scaledWidth=scaledWidth*percent;
          // Draw the image on the canvas
          ctx.drawImage(image, 0, 1700,scaledWidth, scaledHeight);

    }

    var imgObject=canvas.toDataURL('images/png');
    document.getElementById('sample-product'+selected_elevation_real_id).src=imgObject;
    return imgObject;
}


async function drawImageWithText(img_url='', elevation_id){
    const canvas = document.getElementById('image_combination');
    // canvas.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
    //                      'image-rendering: -moz-crisp-edges;' + // FireFox
    //                      'image-rendering: -o-crisp-edges;' +  // Opera
    //                      'image-rendering: -webkit-crisp-edges;' + // Chrome
    //                      'image-rendering: crisp-edges;' + // Chrome
    //                      'image-rendering: -webkit-optimize-contrast;' + // Safari
    //                      'image-rendering: pixelated; ' + // Future browsers
    //                      '-ms-interpolation-mode: nearest-neighbor;';
    const ctx = canvas.getContext('2d');
    ctx.canvas.width=1920;
    ctx.canvas.height=1920;


    if(img_url=='' || img_url==null){
        img_url='/not_found.png';
    }

    if(img_url!=''){
          var image= await loadImage(img_url);

          // Define the desired width and height
          const desiredWidth = 1920; // in pixels
          const desiredHeight = 1920; // in pixels

          // Calculate the aspect ratio of the image
          const aspectRatio = image.width / image.height;
          var percent=0.8;
          // Calculate the scaled width and height while maintaining the aspect ratio
          let scaledWidth = desiredWidth;
          let scaledHeight = desiredWidth / aspectRatio;

          // Check if the calculated height exceeds the desired height
          if (scaledHeight > desiredHeight) {
            scaledHeight = desiredHeight;
            scaledWidth = desiredHeight * aspectRatio;
          }
          // scaledHeight=scaledHeight*percent;
          // scaledWidth=scaledWidth*percent;
          // Draw the image on the canvas
          ctx.drawImage(image, 0, 0,scaledWidth, scaledHeight);


    }
    var html='';
    await Promise.all(DrawPositions.map(async (position, value) => {

      if(elevation_id==42 && (value==26 || value==27 || value==33 || value==40 || value==41 || value==31 || value==32)){
              if(position!=null && position[0]!=''){
                    var pos_img_url=position[0];
                    var left=position[1];
                    var top=position[2];
                    var width=position[3];
                    var height=position[4];

                      var text_image= await loadImage(pos_img_url);

                      // Define the desired width and height
                      const desiredWidth = parseInt(width)*2; // in pixels
                      const desiredHeight = parseInt(height)*2; // in pixels

                      // Calculate the aspect ratio of the image
                      const aspectRatio = text_image.width / text_image.height;

                      // Calculate the scaled width and height while maintaining the aspect ratio
                      let scaledWidth = desiredWidth;
                      let scaledHeight = desiredWidth / aspectRatio;

                      // Check if the calculated height exceeds the desired height
                      if (scaledHeight > desiredHeight) {
                        scaledHeight = desiredHeight;
                        scaledWidth = desiredHeight * aspectRatio;
                      }

                      // scaledHeight=scaledHeight*percent;
                      // scaledWidth=scaledWidth*percent;
                    ctx.drawImage(text_image, parseInt(left)*3.65,parseInt(top)*3.65,parseInt(scaledWidth), parseInt(scaledHeight));

              }
        }

        if(elevation_id==42 && (value==228)){
              if(position!=null && position[0]!=''){
                    var pos_img_url=position[0];
                    var left=position[1];
                    var top=position[2];
                    var width=position[3];
                    var height=position[4];

                      var text_image= await loadImage(pos_img_url);

                      // Define the desired width and height
                      const desiredWidth = parseInt(width)*2; // in pixels
                      const desiredHeight = parseInt(height)*2; // in pixels

                      // Calculate the aspect ratio of the image
                      const aspectRatio = text_image.width / text_image.height;

                      // Calculate the scaled width and height while maintaining the aspect ratio
                      let scaledWidth = desiredWidth;
                      let scaledHeight = desiredWidth / aspectRatio;

                      // Check if the calculated height exceeds the desired height
                      if (scaledHeight > desiredHeight) {
                        scaledHeight = desiredHeight;
                        scaledWidth = desiredHeight * aspectRatio;
                      }

                      // scaledHeight=scaledHeight*percent;
                      // scaledWidth=scaledWidth*percent;

                    var pid=document.getElementById('product_id').value;

                    if(pid==100){

                      ctx.drawImage(text_image, parseInt(135)*3.65,parseInt(78)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(265)*3.65,parseInt(105)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(405)*3.65,parseInt(95)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(185)*3.65,parseInt(285)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(320)*3.65,parseInt(325)*3.65,parseInt(420), parseInt(420));

                    }else{

                      ctx.drawImage(text_image, parseInt(133)*3.65,parseInt(80)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(275)*3.65,parseInt(75)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(407)*3.65,parseInt(92)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(182)*3.65,parseInt(290)*3.65,parseInt(150), parseInt(150));

                      ctx.drawImage(text_image, parseInt(320)*3.65,parseInt(325)*3.65,parseInt(420), parseInt(420));

                  }

              }
        }

        if(position!=null && elevation_id==43){
              if(position[0]!='' && (value==30 || value==39 || value==41)){
                    var pos_img_url=position[0];
                    var left=position[1];
                    var top=position[2];
                    var width=position[3];
                    var height=position[4];

                      var text_image= await loadImage(pos_img_url);

                       // Define the desired width and height
                      const desiredWidth = parseInt(width)*2; // in pixels
                      const desiredHeight = parseInt(height)*2; // in pixels

                      // Calculate the aspect ratio of the image
                      const aspectRatio = text_image.width / text_image.height;

                      // Calculate the scaled width and height while maintaining the aspect ratio
                      let scaledWidth = desiredWidth;
                      let scaledHeight = desiredWidth / aspectRatio;

                      // Check if the calculated height exceeds the desired height
                      if (scaledHeight > desiredHeight) {
                        scaledHeight = desiredHeight;
                        scaledWidth = desiredHeight * aspectRatio;
                      }
                    ctx.drawImage(text_image, parseInt(left)*3.65,parseInt(top)*3.65,parseInt(scaledWidth), parseInt(scaledHeight));

              }
        }

        if(position!=null && elevation_id==44 && (value==28)){
              if(position[0]!=''){
                    var pos_img_url=position[0];
                    var left=position[1];
                    var top=position[2];
                    var width=position[3];
                    var height=position[4];

                      var text_image= await loadImage(pos_img_url);

                       // Define the desired width and height
                      const desiredWidth = parseInt(width)*2; // in pixels
                      const desiredHeight = parseInt(height)*2; // in pixels

                      // Calculate the aspect ratio of the image
                      const aspectRatio = text_image.width / text_image.height;

                      // Calculate the scaled width and height while maintaining the aspect ratio
                      let scaledWidth = desiredWidth;
                      let scaledHeight = desiredWidth / aspectRatio;

                      // Check if the calculated height exceeds the desired height
                      if (scaledHeight > desiredHeight) {
                        scaledHeight = desiredHeight;
                        scaledWidth = desiredHeight * aspectRatio;
                      }
                    ctx.drawImage(text_image, parseInt(left)*3.65,parseInt(top)*3.65,parseInt(scaledWidth), parseInt(scaledHeight));

              }
        }

        if(position!=null && elevation_id==45 && (value==29)){
              if(position[0]!=''){
                    var pos_img_url=position[0];
                    var left=position[1];
                    var top=position[2];
                    var width=position[3];
                    var height=position[4];

                      var text_image= await loadImage(pos_img_url);

                       // Define the desired width and height
                      const desiredWidth = parseInt(width)*2; // in pixels
                      const desiredHeight = parseInt(height)*2; // in pixels

                      // Calculate the aspect ratio of the image
                      const aspectRatio = text_image.width / text_image.height;

                      // Calculate the scaled width and height while maintaining the aspect ratio
                      let scaledWidth = desiredWidth;
                      let scaledHeight = desiredWidth / aspectRatio;

                      // Check if the calculated height exceeds the desired height
                      if (scaledHeight > desiredHeight) {
                        scaledHeight = desiredHeight;
                        scaledWidth = desiredHeight * aspectRatio;
                      }
                    ctx.drawImage(text_image, parseInt(left)*3.65,parseInt(top)*3.65,parseInt(scaledWidth), parseInt(scaledHeight));

              }
        }
        if(position!=null && position[0]!='' && value==26){
            html+='<tr><td>Left Chest</td><td><button onclick="removeimg(26, 44);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==27){
            html+='<tr><td>Right Chest</td><td><button onclick="removeimg(27, 45);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==28){
            html+='<tr><td>Left Sleeve</td><td><button onclick="removeimg(28, 44);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==29){
            html+='<tr><td>Right Sleeve</td><td><button onclick="removeimg(29, 45);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==31){
            html+='<tr><td>Left Leg</td><td><button onclick="removeimg(31, 44);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==32){
            html+='<tr><td>Right Leg</td><td><button onclick="removeimg(32, 45);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==40){
            html+='<tr><td>Full Chest</td><td><button onclick="removeimg(40, 43);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==33){
            html+='<tr><td>Hat Front</td><td><button onclick="removeimg(33, 42);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==39){
            html+='<tr><td>Back Shoulders</td><td><button onclick="removeimg(39, 43);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==41){
            html+='<tr><td>Full Back</td><td><button onclick="removeimg(41, 43);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==30){
            html+='<tr><td>Back Yoke</td><td><button onclick="removeimg(30, 43);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==35){
            html+='<tr><td>Hat Right</td><td><button onclick="removeimg(35, 45);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==36){
            html+='<tr><td>Hat Left</td><td><button onclick="removeimg(36, 44);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==158){
            html+='<tr><td>Bag Front</td><td><button onclick="removeimg(158, 42);" >Remove</button></td></tr>';
        }
        if(position!=null && position[0]!='' && value==97){
            html+='<tr><td>Bag Back</td><td><button onclick="removeimg(97, 43);" >Remove</button></td></tr>';
        }
    }));
    document.getElementById('logos_to_position').innerHTML=html;
    if(html!=''){
        document.getElementById('logos_to_position_div').style.display='block';
    }else{
        document.getElementById('logos_to_position_div').style.display='none';
    }

    var imgObject=canvas.toDataURL('images/png');
    document.getElementById('sample-product'+elevation_id).src=imgObject;
}

$( document ).ready(function() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    if(isTablet){
    var splide = new Splide( '.splide', {
      perPage: 2,
      rewind : true,
    } );
    }else{
     var splide = new Splide( '.splide', {
      perPage: 4,
      rewind : true,
    } );
    }

    splide.mount();
});

    function addLogoErrorMsg(){
        $('#msg_failed').modal('show');
        $('#failed_msg_title').text('');
        $('#failed_msg').text('Sorry, this decoration is unavailable for this garment');
    }
    $( document ).ready(function() {
        if(document.cookie.indexOf('cart_id') == -1){
            postData("/create-cart", {}).then((data) => {
                              if(data.status){
                                document.cookie = 'cart_id='+data.cart_id+'; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/';
                              }

            });
        }
        setColor(0, 1, 0);
    });

    $( document ).ready(function() {
        var cid=getCookie('cart_id');
        var position_ids=[];
        var position_objects=document.getElementsByName('position_ids[]');
        var posType1=0;
        var posType2=0;
        var posType3=0;
        var posType4=0;
        position_objects.forEach((pos)=>{
            position_ids.push(pos.value);
            if(pos.value==26 || pos.value==27 || pos.value==28 || pos.value==29 || pos.value==41 || pos.value==31 || pos.value==32){
                posType1=1;
            }
            if(pos.value==39 || pos.value==40){
                posType2=1;
            }

            if(pos.value==33 || pos.value==35 || pos.value==36){
                posType3=1;
            }

            if(pos.value==228){
                posType4=1;
            }
        })
        postData("/existing-logos", {cart_id:cid}).then((data) => {
            var html='';
            if(data.logos.length>0){
                html='<p style="font-weight:300; padding:0px; font-size:14px;">Select one of your previously uploaded logos below to add it to a position, alternatively you can also add a new logo or text to this product using the new logo button</p>';
            }
            data.logos.forEach(logo=>{
            var img=logo.image;
            var name=logo.name;
            var p_type_html='';
            var p_size_html='';
            var p_price_html='';

            if(logo.production_type==1){
                p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px;"><img src="/print-white-icon.png" style="width:30px; height:25px; object-fit:contain; float:left; margin-top:-4px; position:relative;" /></span>';
            }
            if(logo.production_type==2){
                p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px"><img src="/embroidery-white-icon.png" style="width:30px; height:25px; object-fit:contain; margin-top:-4px; float:left; position:relative;" /></span>';
            }

            if(logo.production_size==1){
                p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">10x10cm</span>';
                if(logo.production_type==1){
                    p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                }else{
                    p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                }
            }
            if(logo.production_size==2){
                p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">25x25cm</span>';
                if(logo.production_type==1){
                    p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 15.00</span>';
                }else{
                    p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                }
            }
            if(logo.production_size==3){
                p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">7x7cm</span>';
                if(logo.production_type==1){
                    p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                }else{
                    p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                }
            }

            p_tick='<img  alt="success icon" src="https://createworkwear.com/success-icon.png" id="img_tick'+logo.id+'" style=" display:none; margin-left:5px; width:20px; height:20px; margin-top:4px; position:absolute;" />';
            if(img=='' || img==null){
                img='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
            }
            var logotext=logo.text;
            if(logotext!=null && logotext!=''){
                logotext=logotext.replace("'", "")
            }
            if((logo.production_size==1 && posType1==1) || (logo.production_size==2 && posType2==1) || (logo.production_size==3 && posType3==1) || (posType4==1)){
                html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logotext+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
            }else{
                html+='<div class="col-md-3" onclick="addLogoErrorMsg();" style="text-align:center; opacity:0.7; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
            }

          });
            if(data.logos.length>0){
                html+='<div class="col-md-3" data-bs-toggle="modal" data-bs-target="#customizer-modal" onclick="PersonaliseNow();" onclick="PersonaliseNow();" style="text-align:center; cursor:pointer; position:relative; margin-bottom:30px; height:fit-content; border:1.5px solid #979797; padding:0px; margin-right:10px;"><img src="/add-icon-dark.png" style="height:125px; padding:30px; width:100%; object-fit:contain; cursor:pointer;" name="LogoPositions[]"  /><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">New Logo</p></div></div>';
            }

          document.getElementById('existing_customisations').innerHTML=html;

        });
    });

    var selected_logo_id;
    var selected_logo_url;
    var selected_logo_img_left;
    var selected_logo_img_top;
    var selected_logo_img_width;
    var selected_logo_img_height;
    var selected_text_top;
    var selected_text_align;
    var selected_text;
    var selected_text_width;
    var selected_text_height;
    var selected_text_image;
    var selected_text_left;
    function setBgColorCustomizer(id){
        if(id==1){
            document.getElementById('customizer').style.backgroundImage="url('/royal.png')";
        }

        if(id==2){
            document.getElementById('customizer').style.backgroundImage="url('/black.png')";
        }

        if(id==3){
            document.getElementById('customizer').style.backgroundImage="url('/heather-grey.png')";
        }

        if(id==4){
            document.getElementById('customizer').style.backgroundImage="url('/white.png')";
        }

        if(id==5){
            document.getElementById('customizer').style.backgroundImage="url('/red.png')";
        }

        if(id==6){
            document.getElementById('customizer').style.backgroundImage="url('/green.png')";
        }

        for(i=2; i<=3; i++){
            if(i==id){
                document.getElementById('bg_color_selected'+i).style.display='block';
            }else{
                document.getElementById('bg_color_selected'+i).style.display='none';
            }
        }

    }
    var selected_type;
    function OpenLogoToPositionDialog(logo_id, logo_url, img_left, img_top, img_width, img_height, text_top, text_left, text, type, text_align, text_image, text_width, text_height){

        if(type==1){
            if(document.getElementById('position-div-26')){
                document.getElementById('position-div-26').style.display='block';
            }
            if(document.getElementById('position-div-27')){
                document.getElementById('position-div-27').style.display='block';
            }
            if(document.getElementById('position-div-40')){
                document.getElementById('position-div-40').style.display='none';
            }
             if(document.getElementById('position-div-39')){
                document.getElementById('position-div-39').style.display='none';
            }
            if(document.getElementById('position-div-28')){
                document.getElementById('position-div-28').style.display='block';
            }
            if(document.getElementById('position-div-29')){
                document.getElementById('position-div-29').style.display='block';
            }
            if(document.getElementById('position-div-30')){
                document.getElementById('position-div-30').style.display='block';
            }
            if(document.getElementById('position-div-41')){
                document.getElementById('position-div-41').style.display='none';
            }
            // document.getElementById('position-div-27').style.display='block';
            // document.getElementById('position-div-40').style.display='none';
            // document.getElementById('position-div-39').style.display='none';
            // document.getElementById('position-div-28').style.display='block';
            // document.getElementById('position-div-29').style.display='block';
            // document.getElementById('position-div-30').style.display='block';
            // document.getElementById('position-div-41').style.display='none';
        }

        if(type==2){

            if(document.getElementById('position-div-26')){
                document.getElementById('position-div-26').style.display='none';
            }
            if(document.getElementById('position-div-27')){
                document.getElementById('position-div-27').style.display='none';
            }
            if(document.getElementById('position-div-40')){
                document.getElementById('position-div-40').style.display='block';
            }
            if(document.getElementById('position-div-39')){
                document.getElementById('position-div-39').style.display='block';
            }
            if(document.getElementById('position-div-28')){
                document.getElementById('position-div-28').style.display='none';
            }
            if(document.getElementById('position-div-29')){
                document.getElementById('position-div-29').style.display='none';
            }
            if(document.getElementById('position-div-30')){
                document.getElementById('position-div-30').style.display='none';
            }
            if(document.getElementById('position-div-41')){
                document.getElementById('position-div-41').style.display='none';
            }

        }

        if(type==3){

            if(document.getElementById('position-div-26')){
                document.getElementById('position-div-26').style.display='none';
            }
            if(document.getElementById('position-div-27')){
                document.getElementById('position-div-27').style.display='none';
            }
            if(document.getElementById('position-div-40')){
                document.getElementById('position-div-40').style.display='block';
            }
            if(document.getElementById('position-div-28')){
                document.getElementById('position-div-28').style.display='none';
            }
            if(document.getElementById('position-div-29')){
                document.getElementById('position-div-29').style.display='none';
            }
            if(document.getElementById('position-div-30')){
                document.getElementById('position-div-30').style.display='none';
            }
            if(document.getElementById('position-div-41')){
                document.getElementById('position-div-41').style.display='block';
            }

        }
        $('#position_modal').modal('show');
        selected_logo_id=logo_id;
        selected_logo_url=logo_url;
        selected_logo_img_height=img_height;
        selected_logo_img_left=img_left;
        selected_logo_img_width=img_width;
        selected_logo_img_top=img_top;
        selected_text_top=text_top;
        selected_text_left=text_left;
        selected_text_align=text_align;
        selected_text=text;
        selected_text_image=text_image;
        selected_text_width=text_width;
        selected_text_height=text_height;

    }
    function getCookie(name) {

      var id=document.getElementById('cart_id').value;

    // Return null if not found
    return parseInt(id);
}


    var personalise=0;
    var selected_elevation_id=null;
    var selected_elevation_real_id=42;
    async function setColor(colorId, product_id, type=1){
        var colors=document.getElementsByName('colors[]');
        var found=0;
        colors.forEach(color=>{
            if(color.dataset.id==colorId){
                color.style.border='2px solid #4AC815';
                found=1;
                document.getElementById('tick'+colorId).style.display='block';
                document.getElementById('color_id').value=colorId;
                document.getElementById('loader').style.display='block';
                var jsondata= postData('/get-image-by-color-and-elevation', { elevation_id:selected_elevation_real_id, option_id:colorId, product_id: product_id }).then(function(data){
                    if(data.status==true){
                        if(data.productImages.length>0){
                            data.productImages.forEach((productImage)=>{



                                if(productImage.elevation_id>=42 && productImage.elevation_id<=45){
                                    if(productImage.img_url!=''){
                                        document.getElementById('main-image'+productImage.elevation_id).value=productImage.img_url;
                                        if(document.getElementById('sample-product'+productImage.elevation_id)){
                                            document.getElementById('sample-product'+productImage.elevation_id).src=productImage.img_url;
                                        }else{
                                            // document.getElementById('sample-product'+productImage.elevation_id).src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                        }
                                        if(document.getElementById('elevation_id_'+productImage.elevation_id)){
                                            document.getElementById('elevation_id_'+productImage.elevation_id).src=productImage.img_url;
                                        }else{
                                            // document.getElementById('elevation_id_'+productImage.elevation_id).src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';

                                        }
                                    }else{
                                        if(document.getElementById('sample-product'+productImage.elevation_id)){
                                            document.getElementById('sample-product'+productImage.elevation_id).src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                        }
                                        if(document.getElementById('elevation_id_'+productImage.elevation_id)){
                                            document.getElementById('elevation_id_'+productImage.elevation_id).src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                        }

                                    }
                                }

                                document.getElementById('loader').style.display='none';
                            });
                             drawImageWithText(document.getElementById('main-image'+selected_elevation_real_id).value, selected_elevation_real_id);
                        }else{
                            if(document.getElementById('sample-product42')){
                                document.getElementById('sample-product42').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }
                            if(document.getElementById('elevation_id_42')){
                                document.getElementById('elevation_id_42').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }

                            if(document.getElementById('sample-product43')){
                                document.getElementById('sample-product43').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }
                            if(document.getElementById('elevation_id_43')){
                                document.getElementById('elevation_id_43').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }


                            if(document.getElementById('sample-product44')){
                                document.getElementById('sample-product44').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }
                            if(document.getElementById('elevation_id_44')){
                                document.getElementById('elevation_id_44').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }

                            if(document.getElementById('sample-product45')){
                                document.getElementById('sample-product45').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }
                            if(document.getElementById('elevation_id_45')){
                                document.getElementById('elevation_id_45').src='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                            }
                            document.getElementById('loader').style.display='none';
                        }


                    }
                });
            }else{
                color.style.border='1px solid transparent';
                document.getElementById('tick'+color.dataset.id).style.display='none';
            }
        });

        if(found==1){
            if(type==1){
                document.getElementById('first_section').style.display='none';
                document.getElementById('first_section_title_div').style.borderBottom='1px solid #595958';
            }
            // document.getElementById('first_arrow').style.display='block';

            document.getElementById('first_step').style.background='#4AC815';

            document.getElementById('second_section').style.display='flex';

            document.getElementById('second_step').style.background='#004482';
        }else{
            document.getElementById('first_step').style.background='#004482';
            document.getElementById('second_section').style.display='none';
            document.getElementById('second_step').style.background='#C1C1C1';
        }
    }

    function setPersonalisation(){
        document.getElementById('second_step').style.background='#4AC815';
         document.getElementById('third_step').style.background='#004482';
         document.getElementById('third_section').style.display='block';
         var personalise_now_btn=document.getElementById('personalise_now_btn');
         var plain_btn=document.getElementById('plain_btn');
         if(personalise!=1){
            plain_btn.style.background='#0279B8';
            plain_btn.style.color='#fff';
            personalise=1;
            document.getElementById('second_section').style.display='none';
            // document.getElementById('second_arrow').style.display='block';

            personalise_now_btn.style.background='#fff';
            personalise_now_btn.style.color='#0279B8';
            personalise_now_btn.style.border='2px solid #0279B8';
            document.getElementById('existing_customisations').style.display='none';
            if(document.getElementById('second_section_title_div')){
                document.getElementById('second_section_title_div').style.borderBottom='1px solid #595958';
            }
        }else{
            plain_btn.style.background='#fff';
            plain_btn.style.color='#0279B8';
            personalise=0;
            document.getElementById('existing_customisations').style.display='flex';
        }
    }

    function setPersonalisationExistingLogos(){
        document.getElementById('second_step').style.background='#4AC815';
         document.getElementById('third_step').style.background='#004482';
         document.getElementById('third_section').style.display='block';
         var personalise_now_btn=document.getElementById('personalise_now_btn');
         var plain_btn=document.getElementById('plain_btn_existing');
         if(personalise!=1){
            //plain_btn.style.background='#0279B8';
            //plain_btn.style.color='#fff';
            personalise=1;
            document.getElementById('second_section').style.display='none';
            // document.getElementById('second_arrow').style.display='block';
            if(personalise_now_btn){
                personalise_now_btn.style.background='#fff';
                personalise_now_btn.style.color='#0279B8';
                personalise_now_btn.style.border='2px solid #0279B8';
            }
            // document.getElementById('existing_customisations').style.display='none';
            if(document.getElementById('second_section_title_div')){
                document.getElementById('second_section_title_div').style.borderBottom='1px solid #595958';
            }
        }else{
            plain_btn.style.background='#fff';
            plain_btn.style.color='#0279B8';
            personalise=0;
            document.getElementById('existing_customisations').style.display='flex';
        }
        setLogoToPositions=[];
        DrawPositions=[];
        var LogoPositions=document.getElementsByName('LogoPositions[]');
        LogoPositions.forEach((element)=>{
            var checkId=element.dataset.id;
            element.style.border='2px solid #ccc';
            // document.getElementById('img_tick'+checkId).style.display='none';
            document.getElementById('img_tick'+checkId).style.display='none';
        });
        var product_id=document.getElementById('product_id').value;
        subTotal(product_id);
        var img_object=document.getElementById('main-image42').value;
        drawImageWithText(img_object, 42);
        var img_object=document.getElementById('main-image43').value;
        drawImageWithText(img_object, 43);
        var img_object=document.getElementById('main-image44').value;
        drawImageWithText(img_object, 44);
        var img_object=document.getElementById('main-image45').value;
        drawImageWithText(img_object, 45);
    }

    function ResetCustomizer(){
        embroidery_type=0;
        embroiderty_size_position=0;
        document.getElementById('screen1').style.display='block';
        document.getElementById('screen2').style.display='none';
        document.getElementById('screen3').style.display='none';
        document.getElementById('save_as').value='';
        document.getElementById('type_text_field').value='';
        document.getElementById('text-type-img').src='https://createworkwear.com/logo.png';
        // document.getElementById('logo-filter-1').src='https://createworkwear.com/logo.png';
        // document.getElementById('logo-filter-2').src='https://createworkwear.com/logo.png';
        // document.getElementById('logo-filter-3').src='https://createworkwear.com/logo.png';

        document.getElementById('customizer_configs_stage1').style.display='block';
        document.getElementById('customizer_configs_stage2').style.display='none';

        document.getElementById('upload_logo_selected').style.display='block';
        document.getElementById('type_text_selected').style.display='none';

        document.getElementById('print-btn').style.color='#0279B8';
        document.getElementById('print-btn').style.border='2px solid #0279B8';
        document.getElementById('print-btn').style.background='#fff';

        document.getElementById('embroidery-btn').style.color='#0279B8';
        document.getElementById('embroidery-btn').style.border='2px solid #0279B8';
        document.getElementById('embroidery-btn').style.background='#fff';

        document.getElementById('embroidery_size_btn3').style.color='#0279B8';
        document.getElementById('embroidery_size_btn3').style.border='2px solid #0279B8';
        document.getElementById('embroidery_size_btn3').style.background='#fff';

        document.getElementById('embroidery_size_btn2').style.color='#0279B8';
        document.getElementById('embroidery_size_btn2').style.border='2px solid #0279B8';
        document.getElementById('embroidery_size_btn2').style.background='#fff';

        document.getElementById('embroidery_size_btn1').style.color='#0279B8';
        document.getElementById('embroidery_size_btn1').style.border='2px solid #0279B8';
        document.getElementById('embroidery_size_btn1').style.background='#fff';

        document.getElementById('text_object').textContent='';
        document.getElementById('image_object').src='';

        document.getElementById('text_object').style.top='240px';
        document.getElementById('text_object').style.left='50px';

        document.getElementById('type_text_field_mobile').value='';
        document.getElementById('mobile_font_id').value='Block';
        document.getElementById('font_id').value='Block';

        document.getElementById('photo-filter-1').border='1px solid #ccc';
        document.getElementById('mobile-screen-main').style.display='block';
        document.getElementById('mobile-screen-text').style.display='none';
        document.getElementById('upload_logo_selected_mobile').style.display='block';
        document.getElementById('type_text_selected_mobile').style.display='none';
        document.getElementById('mobile-screen-save').style.display='none';



        // document.getElementById('photo-filter-1').style.border='1px solid rgb(204, 204, 204)';
        // document.getElementById('photo-filter-2').style.border='1px solid rgb(204, 204, 204)';
        // document.getElementById('photo-filter-3').style.border='2px solid rgb(0, 0, 0)';
        ChangeImageSize(2);
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            document.getElementById('image_object').style.top='60px';
        document.getElementById('image_object').style.left='20px';
        document.getElementById('image_object').style.maxHeight='340px';
        }else{
            document.getElementById('image_object').style.top='200px';
            document.getElementById('image_object').style.left='140px';
            document.getElementById('image_object').style.maxHeight='430px';
        }
        document.getElementById('image_object').style.width='250px';


        document.getElementById('checkbox_agreed').checked=false;

    }

    function PersonaliseNow(){
        ResetCustomizer();
        var personalise_now_btn=document.getElementById('personalise_now_btn');
        var plain_btn=document.getElementById('plain_btn');
        if(personalise!=0){
            personalise_now_btn.style.background='#0279B8';
            personalise_now_btn.style.color='#fff';
            personalise=0;
            plain_btn.style.background='#fff';
            plain_btn.style.color='#0279B8';
            document.getElementById('third_step').style.background='#C1C1C1';
            document.getElementById('third_section').style.display='none';
            document.getElementById('existing_customisations').style.display='flex';
        }
    }
    function SaveCustomizerPage(){
        document.getElementById('customizer_configs_stage1').style.display='none';
        document.getElementById('customizer_configs_stage2').style.display='block';
        document.getElementById('customizer').scrollIntoView();

    }

    function SaveCustomizerPageMobile(){
        //document.getElementById('mobile-screen-3').style.display='none';
        //document.getElementById('mobile-screen-4').style.display='block';
        document.getElementById('mobile-screen-main').style.display='none';
        document.getElementById('mobile-screen-text').style.display='none';

        document.getElementById('mobile-screen-save').style.display='block';
        document.getElementById('customizer').scrollIntoView();


    }

    function backToCustomizer(){
        document.getElementById('customizer_configs_stage2').style.display='none';
        document.getElementById('customizer_configs_stage1').style.display='block';
    }

    function backToCustomizerMobile(){
        //document.getElementById('mobile-screen-3').style.display='block';
        //document.getElementById('mobile-screen-4').style.display='none';
        document.getElementById('mobile-screen-main').style.display='block';
        document.getElementById('mobile-screen-save').style.display='none';

    }

    var abortController = null;

    async function postData2(url = "", data = {}) {
      // Cancel the previous fetch request, if it exists
      if (abortController) {
        abortController.abort();
      }

      // Create a new AbortController
      abortController = new AbortController();

      try {
        document.getElementById('loader').style.display='block';
        const response = await fetch(url, {
          signal: abortController.signal,
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(data),
        });
        document.getElementById('loader').style.display='none';
        return response.json();
      } catch (error) {
        if (error.name === 'AbortError') {
          // Request was aborted
          return {status:false};
        } else {
          // Handle other errors
          return {status:false};
        }
      }
    }

    // Example POST method implementation:
    async function postData(url = "", data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    setLogoToPositions=[];

    function removeimg(id, elevation_id){
        // document.getElementById('position-'+id).innerHTML='<a href="#"><img src="{{ url('/add-icon-dark.png') }}" style="width:100%; height: 100%; object-fit:contain;" /></a>';

        document.getElementById('position-'+id).innerHTML='';
        setLogoToPositions[id]=null;
        // if (index >= 0) {
        //   setLogoToPositions.splice( index, 1 );
        // }

        var LogoPositions=document.getElementsByName('LogoPositions[]');
        LogoPositions.forEach((element)=>{
            var checkId=element.dataset.id;
            element.style.border='2px solid #ccc';
            // document.getElementById('img_tick'+checkId).style.display='none';
            setLogoToPositions.forEach((setLogo)=>{
                if(setLogo==checkId){
                    element.style.border='2px solid #4AC815';
                    if(document.getElementById('img_tick'+setLogo)){
                        document.getElementById('img_tick'+setLogo).style.display='block';
                    }
                }else{
                    // document.getElementById('img_tick'+setLogo).style.display='none';
                }
            })
        });
        DrawPositions[id]=null;
        //  var index = DrawPositions.indexOf(id);
        // if (index >= 0) {
        //   DrawPositions.splice( index, 1 );
        // }
        var img_object=document.getElementById('main-image'+elevation_id).value;
        drawImageWithText(img_object, elevation_id);
        console.log(setLogoToPositions);
    }
    var DrawPositions=[];
    function SetLogoToPosition(id, real_id, product_id, left=250, top=250, width=55, height=55){

        if(id==30 || id==39 || id==41){
            setElevation(real_id, product_id, 43);
        }

        if(id==26 || id==27 || id==40 || id==31 || id==32){
            setElevation(real_id, product_id, 42);
        }

        if(id==28){
            setElevation(real_id, product_id, 44);
        }

        if(id==29){
            setElevation(real_id, product_id, 45);
        }
        var main_img_url=document.getElementById('main-image'+selected_elevation_real_id).value;
        DrawPositions[id]=[selected_logo_url, left, top, width, height];
        drawImageWithText(main_img_url, selected_elevation_real_id);

        setLogoToPositions[id]=selected_logo_id;

        var LogoPositions=document.getElementsByName('LogoPositions[]');
        LogoPositions.forEach((element)=>{
            var checkId=element.dataset.id;
           // document.getElementById('img_tick'+checkId).style.display='none';
            element.style.borderBottom='1.5px solid #ccc';
                setLogoToPositions.forEach((setLogo)=>{
                    if(setLogo==checkId){
                       // element.style.border='2px solid #4AC815';
                        if(document.getElementById('img_tick'+setLogo)){
                            document.getElementById('img_tick'+setLogo).style.display='block';
                        }
                    }else{
                        // document.getElementById('img_tick'+setLogo).style.display='none';
                    }
                });
        });

        console.log(setLogoToPositions);

        $('#position_modal').modal('hide');

        var new_text_align=selected_text_align;
        if(id==39){
            var new_text_top=selected_text_top/8.2;
            var new_text_left=selected_text_left/3.6;
            // var new_img_width=selected_logo_img_width/2.6;
            // var new_img_height=selected_logo_img_height/5.6;
            var new_img_width=190;
            var new_img_height=selected_logo_img_height/5.6;
            // var new_img_left=((selected_logo_img_left-55)/2.6);
            new_img_left=0;
            var new_img_top=((selected_logo_img_top-55)/5.2);
            selected_text_height=(selected_text_height/4.8);
        }else if(id==40 || id==41){
            var new_text_top=selected_text_top/2.6;
            var new_text_left=selected_text_left/4.2;
            // var new_img_width=selected_logo_img_width/2.6;
            var new_img_width=200;
            var new_img_height=selected_logo_img_height/2.2;
            var new_img_left=0;
            var new_img_top=((selected_logo_img_top-55)/2.2);
            selected_text_height=(selected_text_height/4.5);
        }else{
            var new_text_top=selected_text_top/6.2;
            var new_text_left=selected_text_left/8.8;
            var new_img_width=selected_logo_img_width/5.5;
            var new_img_height=selected_logo_img_height/5.5;
            var new_img_left=((selected_logo_img_left-55)/5.8);
            var new_img_top=((selected_logo_img_top-55)/5.8);
            selected_text_height=(selected_text_height/4.5);
        }


        html='<button id="position_btn"  onclick="removeimg('+id+','+selected_elevation_real_id+');">X</button>';

        if(selected_logo_url!=''){
            if(id==30 || id==39 || id==41){
                html+='<img src="'+selected_logo_url+'" style="height:100%; left:0px; top:0px; width:100%; object-fit:cover; position:relative;" />';
            }else{
                html+='<img src="'+selected_logo_url+'" style="height:100%; left:0px; top:0px; width:100%; object-fit:contain; position:relative;" />';
            }
        }

        document.getElementById('position-'+id).innerHTML=html;

        if(setLogoToPositions.length>0){
            //document.getElementById('second_section').style.display='none';
            //document.getElementById('second_arrow').style.display='block';
            document.getElementById('second_step').style.background='#4AC815';
            document.getElementById('third_step').style.background='rgb(0, 68, 130)';
            document.getElementById('third_section').style.display='block';

        }else{

            document.getElementById('third_step').style.background='#C1C1C1';
            document.getElementById('second_step').style.background='rgb(0, 68, 130)';
            document.getElementById('third_section').style.display='none';
        }
        $('#logo_added_successfully').modal('show');
    }


    function SetLogoToPosition2(id, real_id, product_id, left=250, top=250, width=55, height=55){

        if(id==228){
            setElevation(real_id, product_id, 42);
        }

        var main_img_url=document.getElementById('main-image'+selected_elevation_real_id).value;
        // DrawPositions=[];

        DrawPositions[id]=[selected_logo_url, left, top, width, height];

        drawImageWithText(main_img_url, selected_elevation_real_id);

        setLogoToPositions[id]=selected_logo_id;

        var LogoPositions=document.getElementsByName('LogoPositions[]');
        LogoPositions.forEach((element)=>{
            var checkId=element.dataset.id;
           // document.getElementById('img_tick'+checkId).style.display='none';
            element.style.borderBottom='1.5px solid #ccc';
                setLogoToPositions.forEach((setLogo)=>{
                    if(setLogo==checkId){
                       // element.style.border='2px solid #4AC815';
                        if(document.getElementById('img_tick'+setLogo)){
                            document.getElementById('img_tick'+setLogo).style.display='block';
                        }
                    }else{
                        // document.getElementById('img_tick'+setLogo).style.display='none';
                    }
                });
        });

        console.log(setLogoToPositions);

        $('#position_modal').modal('hide');

        var new_text_align=selected_text_align;
        if(id==39){
            var new_text_top=selected_text_top/8.2;
            var new_text_left=selected_text_left/3.6;
            // var new_img_width=selected_logo_img_width/2.6;
            // var new_img_height=selected_logo_img_height/5.6;
            var new_img_width=190;
            var new_img_height=selected_logo_img_height/5.6;
            // var new_img_left=((selected_logo_img_left-55)/2.6);
            new_img_left=0;
            var new_img_top=((selected_logo_img_top-55)/5.2);
            selected_text_height=(selected_text_height/4.8);
        }else if(id==40 || id==41){
            var new_text_top=selected_text_top/2.6;
            var new_text_left=selected_text_left/4.2;
            // var new_img_width=selected_logo_img_width/2.6;
            var new_img_width=200;
            var new_img_height=selected_logo_img_height/2.2;
            var new_img_left=0;
            var new_img_top=((selected_logo_img_top-55)/2.2);
            selected_text_height=(selected_text_height/4.5);
        }else{
            var new_text_top=selected_text_top/6.2;
            var new_text_left=selected_text_left/8.8;
            var new_img_width=selected_logo_img_width/5.5;
            var new_img_height=selected_logo_img_height/5.5;
            var new_img_left=((selected_logo_img_left-55)/5.8);
            var new_img_top=((selected_logo_img_top-55)/5.8);
            selected_text_height=(selected_text_height/4.5);
        }


        html='<button id="position_btn"  onclick="removeimg('+id+','+selected_elevation_real_id+');">X</button>';

        if(selected_logo_url!=''){
            if(id==30 || id==39 || id==41){
                html+='<img src="'+selected_logo_url+'" style="height:100%; left:0px; top:0px; width:100%; object-fit:cover; position:relative;" />';
            }else{
                html+='<img src="'+selected_logo_url+'" style="height:100%; left:0px; top:0px; width:100%; object-fit:contain; position:relative;" />';
            }
        }

        // document.getElementById('position-'+id).innerHTML=html;

        if(setLogoToPositions.length>0){
            //document.getElementById('second_section').style.display='none';
            //document.getElementById('second_arrow').style.display='block';
            document.getElementById('second_step').style.background='#4AC815';
            document.getElementById('third_step').style.background='rgb(0, 68, 130)';
            document.getElementById('third_section').style.display='block';

        }else{

            document.getElementById('third_step').style.background='#C1C1C1';
            document.getElementById('second_step').style.background='rgb(0, 68, 130)';
            document.getElementById('third_section').style.display='none';
        }
        $('#logo_added_successfully').modal('show');
    }

    function SaveCustomizerImage(){
        var save_as=document.getElementById('save_as').value;
        document.getElementById('customizer').scrollIntoView();
        var image_object=$('#image_object');
        var text_object=$('#text_object');
        var img_left=image_object.position().left;
        var img_top=image_object.position().top;
        var img_width=image_object.width();
        var img_height=image_object.height();
        var text_top=text_object.position().top;
        var text_left=text_object.position().left;
        var text_align=text_object.css('text-align');
        var text=text_object.text();
        text=document.getElementById('type_text_field').value;
        var text_color=document.getElementById('color_text_id').value;
        var img_url=image_object.attr('src');
        var img_url_full=image_object.attr('src');
        var type=0;
        if(img_url!=''){
            type=1;
        }
        var element = $("#customizer"); // global variable
        var getCanvas; // global variable
        var cart_id=getCookie('cart_id');
        var newData;
        var html='';

        var fontFamily=document.getElementById('font_id').value;
        var checkbox_agreed=document.getElementById('checkbox_agreed').checked;

        if(checkbox_agreed){
            if(img_url!="" || text!="" || $('#text_image').attr('src')!=undefined){
                if(save_as!=''){
                    html2canvas(element, {
                        onrendered: function(canvas) {
                            getCanvas = canvas;
                            var imgageData = getCanvas.toDataURL("image/png");
                            document.getElementById('loader').style.display='block';
                            var text_image='';
                            var text_width='';
                            var text_height='';
                            if(document.getElementById('text_image')){
                                text_image= document.getElementById('text_image').src;
                                text_height= $('#text_image').height();
                                text_width= $('#text_image').width();
                            }
                            if(text_image!=''){

                                  var div = document.getElementById('customizer-main');
                                  div.style.backgroundImage='none';
                                  html2canvas(div, {
                                                    backgroundImage:'none',
                                                    onrendered: function(canvas) {
                                                          const img_url = canvas.toDataURL('image/png', 1.0);
                                                          var div = document.getElementById('customizer-main');
                                                          div.style.backgroundImage="url('https://createworkwear.com/10cm-frame.png')";

                                                          // drawLogo(img_url, text_image, text, 0, 'center', 'red', '70px', 'Block');

                                                        postData("/save-customizer", { image_data: imgageData, name:save_as, img_left:img_left, img_top:img_top, img_width:img_width, img_height:img_height, text_top:text_top, text:text, text_left:text_left, text_align:text_align, img_url:img_url, img_url_full:img_url_full, cart_id:cart_id, production_size:embroiderty_size_position, production_type:embroidery_type, text_image:text_image, type:type, text_color:text_color, text_width:text_width, text_height:text_height, font_family:fontFamily }).then((data) => {
                                                                                    if(data.status==true){

                                                                                        var position_ids=[];
                                                                                        var position_objects=document.getElementsByName('position_ids[]');
                                                                                        var posType1=0;
                                                                                        var posType2=0;
                                                                                        var posType3=0;
                                                                                        var posType4=0;
                                                                                        if(position_objects.length>0){
                                                                                            position_objects.forEach((pos)=>{
                                                                                                position_ids.push(pos.value);
                                                                                                if(pos.value==26 || pos.value==27 || pos.value==28 || pos.value==29 || pos.value==41 || pos.value==31 || pos.value==32){
                                                                                                    posType1=1;
                                                                                                }
                                                                                                if(pos.value==39 || pos.value==40){
                                                                                                    posType2=1;
                                                                                                }
                                                                                                if(pos.value==33 || pos.value==35 || pos.value==36){
                                                                                                    posType3=1;
                                                                                                }

                                                                                                if(pos.value==228){
                                                                                                    posType4=1;
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                      data.logos.forEach(logo=>{
                                                                                        var img=logo.image;
                                                                                        var name=logo.name;
                                                                                        var p_type_html='';
                                                                                        var p_size_html='';
                                                                                        var p_price_html='';

                                                                                        if(logo.production_type==1){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px;"><img src="/print-white-icon.png" style="width:30px; height:25px;  object-fit:contain; float:left; margin-top:-4px; position:relative;" /></span>';
                                                                                        }
                                                                                        if(logo.production_type==2){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px"><img src="/embroidery-white-icon.png" style="width:30px; height:25px;  object-fit:contain; margin-top:-4px; float:left; position:relative;" /></span>';
                                                                                        }

                                                                                        if(logo.production_size==1){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">10x10cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==2){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">25x25cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 15.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==3){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">7x7cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }



                                                                                        p_tick='<img src="https://createworkwear.com/success-icon.png" id="img_tick'+logo.id+'" style=" display:none; margin-left:5px; width:20px; height:20px; margin-top:4px; position:absolute;" />';
                                                                                        if(img=='' || img==null){
                                                                                            img='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                                                                        }

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }
                                                                                        if((logo.production_size==1 && posType1==1) || (logo.production_size==2 && posType2==1) || (logo.production_size==3 && posType3==1) || (posType4==1)){
                                                                                            html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logotext+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }else{
                                                                                            html+='<div class="col-md-3" onclick="addLogoErrorMsg();" style="text-align:center; opacity:0.7; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }

                                                                                        // html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logo.text+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';


                                                                                      });

                                                                                    html+='<div class="col-md-3" data-bs-toggle="modal" data-bs-target="#customizer-modal" onclick="PersonaliseNow();" onclick="PersonaliseNow();" style="text-align:center; cursor:pointer; position:relative; margin-bottom:30px; border:1.5px solid #979797; padding:0px; margin-right:10px; height:fit-content;"><img src="/add-icon-dark.png" style="height:125px; width:100%; padding:30px; object-fit:contain; cursor:pointer;" name="LogoPositions[]"  /><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">New Logo</p></div></div>';

                                                                                      document.getElementById('loader').style.display='none';
                                                                                      // var id=data.id;
                                                                                        $("#customizer-modal").modal("hide");
                                                                                        var logo=data.last_logo;
                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }
                                                                                        OpenLogoToPositionDialog(logo.id, ""+logo.img_url+"", logo.img_left, logo.img_top, logo.img_width, logo.img_height, logo.text_top, logo.text_left, ""+logotext+"", logo.production_size, ''+logo.text_align+'', ''+logo.text_image+'',logo.text_width,logo.text_height);
                                                                                        document.getElementById('existing_customisations').innerHTML=html;
                                                                                    }else{
                                                                                        document.getElementById('loader').style.display='none';
                                                                                        alert(data.msg);
                                                                                    }
                                                                                });

                                                    } });
                            }else{
                                var div = document.getElementById('customizer-main');
                                  div.style.backgroundImage='none';
                                  html2canvas(div, {
                                                    backgroundImage:'none',
                                                    onrendered: function(canvas) {
                                                           const img_url = canvas.toDataURL('image/png',1.0);
                                                          var div = document.getElementById('customizer-main');
                                                          div.style.backgroundImage="url('https://createworkwear.com/10cm-frame.png')";
                                                           // drawLogo(img_url, text_image, text, 0, 'center', 'red', '70px', 'Block');
                                                        postData("/save-customizer", { image_data: imgageData, name:save_as, img_left:img_left, img_top:img_top, img_width:img_width, img_height:img_height, text_top:text_top, text:text, text_left:text_left, text_align:text_align, img_url:img_url, img_url_full:img_url_full, text_color:text_color, cart_id:cart_id, production_size:embroiderty_size_position, production_type:embroidery_type, type:type, text_image:text_image, text_width:text_width, text_height:text_height,font_family:fontFamily }).then((data) => {
                                                                                    if(data.status==true){

                                                                                        var position_ids=[];
                                                                                        var position_objects=document.getElementsByName('position_ids[]');
                                                                                        var posType1=0;
                                                                                        var posType2=0;
                                                                                        var posType3=0;
                                                                                        var posType4=0;
                                                                                        if(position_objects.length>0){
                                                                                            position_objects.forEach((pos)=>{
                                                                                                position_ids.push(pos.value);
                                                                                                if(pos.value==26 || pos.value==27 || pos.value==28 || pos.value==29 || pos.value==41 || pos.value==31 || pos.value==32){
                                                                                                    posType1=1;
                                                                                                }
                                                                                                if(pos.value==39 || pos.value==40){
                                                                                                    posType2=1;
                                                                                                }
                                                                                                if(pos.value==33 || pos.value==35 || pos.value==36){
                                                                                                    posType3=1;
                                                                                                }
                                                                                                if(pos.value==228){
                                                                                                    posType4=1;
                                                                                                }
                                                                                            })
                                                                                        }

                                                                                      data.logos.forEach(logo=>{
                                                                                        var img=logo.image;
                                                                                        var name=logo.name;
                                                                                        var p_type_html='';
                                                                                        var p_size_html='';
                                                                                        var p_price_html='';

                                                                                        if(logo.production_type==1){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px;"><img src="/print-white-icon.png" style="width:30px; height:25px;  object-fit:contain; float:left; margin-top:-4px; position:relative;" /></span>';
                                                                                        }
                                                                                        if(logo.production_type==2){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px"><img src="/embroidery-white-icon.png" style="width:30px; height:25px; object-fit:contain; margin-top:-4px; float:left; position:relative;" /></span>';
                                                                                        }

                                                                                        if(logo.production_size==1){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">10x10cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==2){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">25x25cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 15.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==3){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">7x7cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }



                                                                                        p_tick='<img src="https://createworkwear.com/success-icon.png" id="img_tick'+logo.id+'" style=" display:none; margin-left:5px; width:20px; height:20px; margin-top:4px; position:absolute;" />';
                                                                                        if(img=='' || img==null){
                                                                                            img='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                                                                        }

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }

                                                                                        if((logo.production_size==1 && posType1==1) || (logo.production_size==2 && posType2==1) || (logo.production_size==3 && posType3==1) || (posType4==1)){
                                                                                            html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logotext+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }else{
                                                                                            html+='<div class="col-md-3" onclick="addLogoErrorMsg();" style="text-align:center; opacity:0.7; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }
                                                                                        // html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logo.text+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';


                                                                                      });

                                                                                        html+='<div class="col-md-3" data-bs-toggle="modal" data-bs-target="#customizer-modal" onclick="PersonaliseNow();" onclick="PersonaliseNow();" style="text-align:center; cursor:pointer; position:relative; margin-bottom:30px; border:1.5px solid #979797; padding:0px; margin-right:10px; height:fit-content;"><img src="/add-icon-dark.png" style="height:125px; padding:30px; width:100%; object-fit:contain; cursor:pointer;" name="LogoPositions[]"  /><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">New Logo</p></div></div>';
                                                                                      document.getElementById('loader').style.display='none';
                                                                                      // var id=data.id;
                                                                                        $("#customizer-modal").modal("hide");
                                                                                        var logo=data.last_logo;

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }

                                                                                        OpenLogoToPositionDialog(logo.id, ""+logo.img_url+"", logo.img_left, logo.img_top, logo.img_width, logo.img_height, logo.text_top, logo.text_left, ""+logotext+"", logo.production_size, ''+logo.text_align+'', ''+logo.text_image+'',logo.text_width,logo.text_height);
                                                                                        document.getElementById('existing_customisations').innerHTML=html;
                                                                                    }else{
                                                                                        document.getElementById('loader').style.display='none';
                                                                                        alert(data.msg);
                                                                                    }
                                                                                });
                                                    }});
                            }

                        }
                    });
                }else{
                    alert('Please set a name and then try again to save.');
                }
            }else{
                alert("Please upload an image or set text to be able to create a logo.");
            }
        }else{
            alert('Please accept terms and conditions and try again to save.');
        }
    }

    function SaveCustomizerImageMobile(){
        document.getElementById('customizer').scrollIntoView();
        setTimeout(function(){
        var save_as=document.getElementById('save_as_mobile').value;
        var image_object=$('#image_object');
        var text_object=$('#text_object');
        var img_left=image_object.position().left;
        var img_top=image_object.position().top;
        var img_width=image_object.width();
        var img_height=image_object.height();
        var text_top=text_object.position().top;
        var text_left=text_object.position().left;
        var text_align=text_object.css('text-align');
        var text=text_object.text();
        text=document.getElementById('type_text_field_mobile').value;
        var text_color=document.getElementById('mobile_color_text_id').value;
        var img_url=image_object.attr('src');
        var img_url_full=image_object.attr('src');
        var element = $("#customizer"); // global variable
        var getCanvas; // global variable
        var cart_id=getCookie('cart_id');
        var newData;
        var html='';

        var type=0;
        if(img_url!=''){
            type=1;
        }
        var fontFamily=document.getElementById('mobile_font_id').value;
        var checkbox_agreed=document.getElementById('checkbox_agreed_mobile').checked;
        if(checkbox_agreed){
            if(img_url!="" || text!="" || $('#text_image').attr('src')!=undefined){
                if(save_as!=''){
                    html2canvas(element, {
                        onrendered: function(canvas) {
                            getCanvas = canvas;
                            var imgageData = getCanvas.toDataURL("image/png");
                            document.getElementById('loader').style.display='block';
                            var text_image='';
                            var text_width='';
                            var text_height='';
                            if(document.getElementById('text_image')){
                                text_image= document.getElementById('text_image').src;
                                text_height= $('#text_image').height();
                                text_width= $('#text_image').width();
                            }
                            if(text_image!=''){

                                  var div = document.getElementById('customizer-main');
                                  div.style.backgroundImage='none';
                                  html2canvas(div, {
                                                    backgroundImage:'none',
                                                    onrendered: function(canvas) {
                                                          const img_url = canvas.toDataURL('image/png');
                                                          var div = document.getElementById('customizer-main');
                                                          div.style.backgroundImage="url('https://createworkwear.com/10cm-frame.png')";

                                                        postData("/save-customizer", { image_data: imgageData, name:save_as, img_left:img_left, img_top:img_top, img_width:img_width, img_height:img_height, text_top:text_top, text:text, text_left:text_left, text_align:text_align, img_url:img_url, img_url_full:img_url_full, text_color:text_color, cart_id:cart_id, production_size:embroiderty_size_position, production_type:embroidery_type, type:type, text_image:text_image, text_width:text_width, text_height:text_height,font_family:fontFamily }).then((data) => {
                                                                                    if(data.status==true){

                                                                                        var position_ids=[];
                                                                                        var position_objects=document.getElementsByName('position_ids[]');
                                                                                        var posType1=0;
                                                                                        var posType2=0;
                                                                                        var posType3=0;
                                                                                        var posType4=0;
                                                                                        if(position_objects.length>0){
                                                                                            position_objects.forEach((pos)=>{
                                                                                                position_ids.push(pos.value);
                                                                                                if(pos.value==26 || pos.value==27 || pos.value==28 || pos.value==29 || pos.value==41 || pos.value==31 || pos.value==32){
                                                                                                    posType1=1;
                                                                                                }
                                                                                                if(pos.value==39 || pos.value==40){
                                                                                                    posType2=1;
                                                                                                }
                                                                                                if(pos.value==33 || pos.value==35 || pos.value==36){
                                                                                                    posType3=1;
                                                                                                }
                                                                                                if(pos.value==228){
                                                                                                    posType4=1;
                                                                                                }
                                                                                            })
                                                                                        }

                                                                                      data.logos.forEach(logo=>{
                                                                                        var img=logo.image;
                                                                                        var name=logo.name;
                                                                                        var p_type_html='';
                                                                                        var p_size_html='';
                                                                                        var p_price_html='';

                                                                                        if(logo.production_type==1){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px;"><img src="/print-white-icon.png" style="width:30px; height:25px; object-fit:contain; float:left; margin-top:-4px; position:relative;" /></span>';
                                                                                        }
                                                                                        if(logo.production_type==2){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px"><img src="/embroidery-white-icon.png" style="width:30px; height:25px; object-fit:contain; margin-top:-4px; float:left; position:relative;" /></span>';
                                                                                        }

                                                                                        if(logo.production_size==1){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">10x10cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==2){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">25x25cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 15.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==3){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">7x7cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }



                                                                                        p_tick='<img src="https://createworkwear.com/success-icon.png" id="img_tick'+logo.id+'" style=" display:none; margin-left:5px; width:20px; height:20px; margin-top:4px; position:absolute;" />';
                                                                                        if(img=='' || img==null){
                                                                                            img='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                                                                        }

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }

                                                                                        if((logo.production_size==1 && posType1==1) || (logo.production_size==2 && posType2==1) || (logo.production_size==3 && posType3==1) || (posType4==1)){
                                                                                            html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logotext+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }else{
                                                                                            html+='<div class="col-md-3" onclick="addLogoErrorMsg();" style="text-align:center; opacity:0.7; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }
                                                                                        // html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logo.text+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';


                                                                                      });

                                                                                    html+='<div class="col-md-3" data-bs-toggle="modal" data-bs-target="#customizer-modal" onclick="PersonaliseNow();" onclick="PersonaliseNow();" style="text-align:center; cursor:pointer; position:relative; margin-bottom:30px; border:1.5px solid #979797; padding:0px; margin-right:10px; height:fit-content;"><img src="/add-icon-dark.png" style="height:125px; width:100%; padding:30px; object-fit:contain; cursor:pointer;" name="LogoPositions[]"  /><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">New Logo</p></div></div>';

                                                                                      document.getElementById('loader').style.display='none';
                                                                                      // var id=data.id;
                                                                                        $("#customizer-modal").modal("hide");
                                                                                        var logo=data.last_logo;

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }
                                                                                        OpenLogoToPositionDialog(logo.id, ""+logo.img_url+"", logo.img_left, logo.img_top, logo.img_width, logo.img_height, logo.text_top, logo.text_left, ""+logotext+"", logo.production_size, ''+logo.text_align+'', ''+logo.text_image+'',logo.text_width,logo.text_height);
                                                                                        document.getElementById('existing_customisations').innerHTML=html;
                                                                                    }else{
                                                                                        document.getElementById('loader').style.display='none';
                                                                                        alert(data.msg);
                                                                                    }
                                                                                });

                                                    } });
                            }else{
                                var div = document.getElementById('customizer-main');
                                  div.style.backgroundImage='none';
                                  html2canvas(div, {
                                                    backgroundImage:'none',
                                                    onrendered: function(canvas) {
                                                          const img_url = canvas.toDataURL('image/png');
                                                          var div = document.getElementById('customizer-main');
                                                          div.style.backgroundImage="url('https://createworkwear.com/10cm-frame.png')";
                                                        postData("/save-customizer", { image_data: imgageData, name:save_as, img_left:img_left, img_top:img_top, img_width:img_width, img_height:img_height, text_top:text_top, text:text, text_left:text_left, text_align:text_align, img_url:img_url, img_url_full:img_url_full, text_color:text_color, cart_id:cart_id, production_size:embroiderty_size_position, production_type:embroidery_type, type:type, text_image:text_image, text_width:text_width, text_height:text_height,font_family:fontFamily }).then((data) => {
                                                                                    if(data.status==true){

                                                                                        var position_ids=[];
                                                                                        var position_objects=document.getElementsByName('position_ids[]');
                                                                                        var posType1=0;
                                                                                        var posType2=0;
                                                                                        var posType3=0;
                                                                                        var posType4=0;
                                                                                        if(position_objects.length>0){
                                                                                            position_objects.forEach((pos)=>{
                                                                                                position_ids.push(pos.value);
                                                                                                if(pos.value==26 || pos.value==27 || pos.value==28 || pos.value==29 || pos.value==41 || pos.value==31 || pos.value==32){
                                                                                                    posType1=1;
                                                                                                }
                                                                                                if(pos.value==39 || pos.value==40){
                                                                                                    posType2=1;
                                                                                                }
                                                                                                if(pos.value==33 || pos.value==35 || pos.value==36){
                                                                                                    posType3=1;
                                                                                                }
                                                                                                if(pos.value==228){
                                                                                                    posType4=1;
                                                                                                }
                                                                                            })
                                                                                        }

                                                                                      data.logos.forEach(logo=>{
                                                                                        var img=logo.image;
                                                                                        var name=logo.name;
                                                                                        var p_type_html='';
                                                                                        var p_size_html='';
                                                                                        var p_price_html='';

                                                                                        if(logo.production_type==1){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px;"><img src="/print-white-icon.png" style="width:30px; height:25px; object-fit:contain; float:left; margin-top:-4px; position:relative;" /></span>';
                                                                                        }
                                                                                        if(logo.production_type==2){
                                                                                            p_type_html+='<span style="padding:1px; color:#fff; position:absolute; font-size:8px; width:60%; top:82%; left:0px"><img src="/embroidery-white-icon.png" style="width:30px; height:25px; object-fit:contain; margin-top:-4px; float:left; position:relative;" /></span>';
                                                                                        }

                                                                                        if(logo.production_size==1){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">10x10cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 3.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==2){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">25x25cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 15.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }
                                                                                        if(logo.production_size==3){
                                                                                            p_size_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 45%; left: 21%; top:87%; bottom:40px;">7x7cm</span>';
                                                                                            if(logo.production_type==1){
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }else{
                                                                                                p_price_html+='<span style="padding: 0px; color: #595958; position: absolute; font-size: 8px; width: 40%; bottom:40px; top:87%; left:65%;">£ 4.00</span>';
                                                                                            }
                                                                                        }

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }

                                                                                        p_tick='<img src="https://createworkwear.com/success-icon.png" id="img_tick'+logo.id+'" style=" display:none; margin-left:5px; width:20px; height:20px; margin-top:4px; position:absolute;" />';
                                                                                        if(img=='' || img==null){
                                                                                            img='https://foodcleanhms.strongsense.co.uk/assets/images/not_found.png';
                                                                                        }

                                                                                        if((logo.production_size==1 && posType1==1) || (logo.production_size==2 && posType2==1) || (logo.production_size==3 && posType3==1) || (posType4==1)){
                                                                                            html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logotext+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }else{
                                                                                            html+='<div class="col-md-3" onclick="addLogoErrorMsg();" style="text-align:center; opacity:0.7; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';
                                                                                        }
                                                                                        // html+='<div class="col-md-3" onclick="OpenLogoToPositionDialog('+logo.id+', \''+logo.image+'\', '+logo.img_left+', '+logo.img_top+', '+logo.img_width+', '+logo.img_height+', '+logo.text_top+', '+logo.text_left+', \''+logo.text+'\', '+logo.production_size+', \''+logo.text_align+'\',  \''+logo.text_image+'\', '+logo.text_width+','+logo.text_height+');" style="text-align:center; cursor:pointer; position:relative; margin-bottom:45px; border:1.5px solid #979797; padding:0px; margin-right:10px;">'+p_tick+'<img src="'+img+'" style="height:100px; width:100%; object-fit:contain; border-bottom:1.5px solid #979797; cursor:pointer;" name="LogoPositions[]" data-id="'+logo.id+'" /><div class="row" style="height:25px;"><div class="col-md-3">'+p_type_html+'</div><div class="col-md-4">'+p_size_html+'</div><div class="col-md-1" style="color:#ccc;">|</div><div class="col-md-4" >'+p_price_html+'</div></div><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">'+name+'</p></div></div>';


                                                                                      });

                                                                                        html+='<div class="col-md-3" data-bs-toggle="modal" data-bs-target="#customizer-modal" onclick="PersonaliseNow();" onclick="PersonaliseNow();" style="text-align:center; cursor:pointer; position:relative; margin-bottom:30px; border:1.5px solid #979797; padding:0px; margin-right:10px; height:fit-content;"><img src="/add-icon-dark.png" style="height:125px; padding:30px; width:100%; object-fit:contain; cursor:pointer;" name="LogoPositions[]"  /><p style="margin-top: 5%; font-size:11px; padding:0px; position:absolute; left:0px; color:#595958; width: 100%; margin-bottom: 0px;">New Logo</p></div></div>';
                                                                                      document.getElementById('loader').style.display='none';
                                                                                      // var id=data.id;
                                                                                        $("#customizer-modal").modal("hide");
                                                                                        var logo=data.last_logo;

                                                                                        var logotext=logo.text;
                                                                                        if(logotext!=null && logotext!=''){
                                                                                            logotext=logotext.replace("'", "")
                                                                                        }
                                                                                        OpenLogoToPositionDialog(logo.id, ""+logo.img_url+"", logo.img_left, logo.img_top, logo.img_width, logo.img_height, logo.text_top, logo.text_left, ""+logotext+"", logo.production_size, ''+logo.text_align+'', ''+logo.text_image+'',logo.text_width,logo.text_height);
                                                                                        document.getElementById('existing_customisations').innerHTML=html;
                                                                                    }else{
                                                                                        document.getElementById('loader').style.display='none';
                                                                                        alert(data.msg);
                                                                                    }
                                                                                });
                                                    }});
                            }

                        }
                    });
                }else{
                    alert('Please set a name and then try again to save.');
                }
            }else{
                alert("Please upload an image or set text to be able to create a logo.");
            }
        }else{
            alert('Please accept terms and conditions and try again to save.');
        }
    }, 1000);
    }
    var text_size=2;
    function SetTextSize(size){
        text_size=size;
        if(size==1){
            document.getElementById('text_object').style.fontSize='15px';
            if(document.getElementById('text_image')){
                document.getElementById('text_image').style.height='15px';
            }
            document.getElementById('small_size_btn').style.borderBottom='2px solid green';
        }else{
            document.getElementById('small_size_btn').style.borderBottom='none';
        }

        if(size==2){
            document.getElementById('text_object').style.fontSize='22px';
            if(document.getElementById('text_image')){
                document.getElementById('text_image').style.height='22px';
            }
            document.getElementById('medium_size_btn').style.borderBottom='2px solid green';
        }else{
            document.getElementById('medium_size_btn').style.borderBottom='none';
        }

        if(size==3){
            document.getElementById('text_object').style.fontSize='34px';
            if(document.getElementById('text_image')){
                document.getElementById('text_image').style.height='34px';
            }
            document.getElementById('large_size_btn').style.borderBottom='2px solid green';
        }else{
            document.getElementById('large_size_btn').style.borderBottom='none';
        }
    }

    function SetBoldText(){
        if(document.getElementById('bold_btn').style.fontWeight!='bold'){
            document.getElementById('bold_btn').style.fontWeight='bold';
            document.getElementById('text_object').style.fontWeight='bold';

            document.getElementById('bold_btn').style.borderBottom='2px solid green';

        }else{
            document.getElementById('bold_btn').style.fontWeight='normal';
            document.getElementById('text_object').style.fontWeight='normal';
            document.getElementById('bold_btn').style.borderBottom='none';
        }
    }

    function SetTextAlign(align){
        if(align==1){
            document.getElementById('text_object').style.textAlign='left';
        }

        if(align==2){
            document.getElementById('text_object').style.textAlign='center';
        }

        if(align==3){
            document.getElementById('text_object').style.textAlign='right';
        }
        SetTextAlign2();
    }

    function SetTextAlign2(){
        if(document.getElementById('text_align_div').style.display=='none'){
            document.getElementById('text_align_div').style.display='block';
            document.getElementById('color_picker_div').style.display='none';
        }else{
            document.getElementById('text_align_div').style.display='none';
        }
    }

    function SetTextAlignMobile(align){
        if(align==1){
            document.getElementById('text_object').style.textAlign='left';
        }

        if(align==2){
            document.getElementById('text_object').style.textAlign='center';
        }

        if(align==3){
            document.getElementById('text_object').style.textAlign='right';
        }
        SetTextAlign2Mobile();
    }

    function SetTextAlign2Mobile(){
        if(document.getElementById('text_align_div_mobile').style.display=='none'){
            document.getElementById('text_align_div_mobile').style.display='block';
            document.getElementById('color_picker_div_mobile').style.display='none';
        }else{
            document.getElementById('text_align_div_mobile').style.display='none';
        }
    }





    embroiderty_size_position=0;
    embroidery_type=0;

    function setEmbroiderySizePosition(id){
        embroiderty_size_position=id;
        if(id==1){
            document.getElementById('customizer-main').style.backgroundImage="url('https://createworkwear.com/10cm-frame.png')";
        }
        if(id==2){
            document.getElementById('customizer-main').style.backgroundImage="url('https://createworkwear.com/25x25-frame.png')";
        }
        if(id==3){
            document.getElementById('customizer-main').style.backgroundImage="url('https://createworkwear.com/7x7-frame.png')";
        }
        for(i=1; i<=3; i++){
            if(id==i){
                document.getElementById('embroidery_size_btn'+i).style.background='#0279B8';
                document.getElementById('embroidery_size_btn'+i).style.color='#fff';
            }else{
                document.getElementById('embroidery_size_btn'+i).style.background='#fff';
                document.getElementById('embroidery_size_btn'+i).style.color='#0279B8';
            }

        }
        document.getElementById('screen1').style.display='none';
        document.getElementById('screen2').style.display='block';
    }

    function setEmbroideryType(id){
        embroidery_type=id;
        if(id==1){
            document.getElementById('embroidery-btn').style.background='#0279B8';
            document.getElementById('embroidery-btn').style.color='#fff';
            document.getElementById('print-btn').style.background='#fff';
            document.getElementById('print-btn').style.color='#0279B8';
        }
        if(id==2){
            document.getElementById('print-btn').style.background='#0279B8';
            document.getElementById('print-btn').style.color='#fff';
            document.getElementById('embroidery-btn').style.background='#fff';
            document.getElementById('embroidery-btn').style.color='#0279B8';
        }
        document.getElementById('screen2').style.display='none';
        document.getElementById('screen3').style.display='block';
    }
    function UploadLogo(){

        document.getElementById('type_text').style.display='none';
        if(document.getElementById('upload_logo').style.display=='flex'){
            document.getElementById('upload_logo_file').click();
        }
        document.getElementById('upload_logo').style.display='flex';
        document.getElementById('upload_logo_selected').style.display='block';
        document.getElementById('type_text_selected').style.display='none';
        // document.getElementById('accredited_logos').style.display='none';
    }

    function UploadLogoMobile(){
        if(document.getElementById('upload_logo_selected_mobile').style.display=='block'){
            document.getElementById('upload_logo_file').click();
        }
        //document.getElementById('upload_logo_file').click();
        document.getElementById('mobile-screen-text').style.display='none';
        document.getElementById('mobile-screen-main').style.display='block';
        document.getElementById('upload_logo_selected_mobile').style.display='block';
        document.getElementById('type_text_selected_mobile').style.display='none';
    }
    function TypeText(){
        document.getElementById('type_text').style.display='flex';
        document.getElementById('upload_logo').style.display='none';
        document.getElementById('type_text_selected').style.display='block';
        document.getElementById('upload_logo_selected').style.display='none';

        // divToImage();
        // document.getElementById('accredited_logos').style.display='none';
    }

    function TypeTextMobile(){
        // document.getElementById('text_object').style.display='flex';
        document.getElementById('upload_logo_selected_mobile').style.display='none';
        document.getElementById('type_text_selected_mobile').style.display='block';
        document.getElementById('mobile-screen-text').style.display='block';
        document.getElementById('mobile-screen-main').style.display='none';
    }


    function AccreditedLogos(){
        document.getElementById('type_text').style.display='none';
        document.getElementById('upload_logo').style.display='none';
        document.getElementById('accredited_logos').style.display='flex';
    }

    function ExportImage(){
        var c = document.getElementById('product-div');
        var t = c.getContext('2d');
        window.open('', document.getElementById('product-div').toDataURL());

    }
    async function AddText(){
        //console.log('ok1');
       // document.getElementById('loader').style.display='block';
        document.getElementById('add_text').style.display='none';
        document.getElementById('remove_text').style.display='block';
        document.getElementById('text_object').style.display='block';
        var fontFamily=document.getElementById('font_id').value;
        var fontColor=document.getElementById('color_text_id').value;
        if(embroidery_type==2){
            document.getElementById('text_object').textContent=document.getElementById('type_text_field').value;
        }
        if(embroidery_type==1){
            document.getElementById('loader').style.display='block';
            var jsondata = await postData2('/add-text-embroidery', {text:document.getElementById('type_text_field').value, font_family:fontFamily, font_color:fontColor});
            if(jsondata.status==true){
                if(text_size==1){
                    document.getElementById('text_object').innerHTML='<img id="text_image" src="data:image/jpeg;base64, '+jsondata.photo_url+'" style="height:15px; object-fit:contain; max-width:100%; width:fit-content;" />';
                }

                if(text_size==2){
                    document.getElementById('text_object').innerHTML='<img id="text_image" src="data:image/jpeg;base64, '+jsondata.photo_url+'" style="height:22px; object-fit:contain; max-width:100%; width:fit-content;" />';
                }

                if(text_size==3){
                    document.getElementById('text_object').innerHTML='<img id="text_image" src="data:image/jpeg;base64, '+jsondata.photo_url+'" style="height:34px; object-fit:contain; max-width:100%; width:fit-content;" />';
                }

                document.getElementById('loader').style.display='none';

            }
        }

        // document.getElementById('loader').style.display='none';
    }

    async function AddTextMobile(){
        //console.log('ok1');
       // document.getElementById('loader').style.display='block';
        document.getElementById('add_text').style.display='none';
        document.getElementById('remove_text').style.display='block';
        document.getElementById('text_object').style.display='block';
        var fontFamily=document.getElementById('mobile_font_id').value;
        var fontColor=document.getElementById('mobile_color_text_id').value;
        if(embroidery_type==2){
            document.getElementById('text_object').textContent=document.getElementById('type_text_field_mobile').value;
        }
        if(embroidery_type==1){
            document.getElementById('loader').style.display='block';
            var jsondata = await postData2('/add-text-embroidery', {text:document.getElementById('type_text_field_mobile').value, font_family:fontFamily, font_color:fontColor});
            if(jsondata.status==true){
                if(text_size==1){
                    document.getElementById('text_object').innerHTML='<img id="text_image" src="data:image/jpeg;base64, '+jsondata.photo_url+'" style="height:15px; object-fit:contain; max-width:100%; width:fit-content;" />';
                }

                if(text_size==2){
                    document.getElementById('text_object').innerHTML='<img id="text_image" src="data:image/jpeg;base64, '+jsondata.photo_url+'" style="height:22px; object-fit:contain; max-width:100%; width:fit-content;" />';
                }

                if(text_size==3){
                    document.getElementById('text_object').innerHTML='<img id="text_image" src="data:image/jpeg;base64, '+jsondata.photo_url+'" style="height:34px; object-fit:contain; max-width:100%; width:fit-content;" />';
                }

                document.getElementById('loader').style.display='none';

            }
        }

        // document.getElementById('loader').style.display='none';
    }
    function RemoveText(){
        document.getElementById('remove_text').style.display='none';
        document.getElementById('add_text').style.display='block';
        document.getElementById('text_object').style.display='none';
        document.getElementById('image_object').style.display='none';
        document.getElementById('type_text_field').value='';
        document.getElementById('text_object').value='';
    }

    function RemoveImage(){
        document.getElementById('image_object').style.display='none';
        document.getElementById('add_img').style.display='block';
        document.getElementById('remove_img').style.display='none';
        document.getElementById('text-type-img').src='https://createworkwear.com/logo.png';
        document.getElementById('logo-filter-1').src='/logo-no-bg.png';
        // document.getElementById('logo-filter-2').src='https://createworkwear.com/logo.png';
        document.getElementById('logo-filter-3').src='/logo-with-bg.png';

    }

    function UpdateTypeText(txt){
        AddText();
    }
    var selected_options=[];
    function addQty(id, product_id){
        if(!isNaN(parseInt(document.getElementById('qty'+id).value))){
            document.getElementById('qty'+id).value=parseInt(document.getElementById('qty'+id).value)+parseInt(1);
        }else{
            document.getElementById('qty'+id).value=parseInt(0)+parseInt(1);
        }
        selected_options[id]=document.getElementById('qty'+id).value;

        var qtys=document.getElementsByName('qty[]');
        qtys.forEach((qty)=>{
            if(qty.value>0){
                selected_option_names[id]=document.getElementById('size_name'+id).dataset.id;
                document.getElementById('third_step').style.background='#4AC815';
            }
        });

        subTotal(product_id);
    }

    function updateQty(id, product_id){
        document.getElementById('qty'+id).value=parseInt(document.getElementById('qty'+id).value);

        selected_options[id]=document.getElementById('qty'+id).value;

        var qtys=document.getElementsByName('qty[]');
        qtys.forEach((qty)=>{
            if(qty.value>0){
                selected_option_names[id]=document.getElementById('size_name'+id).dataset.id;
                document.getElementById('third_step').style.background='#4AC815';
            }
        });
        if(document.getElementById('qty'+id).value=='' || document.getElementById('qty'+id).value==0){
            removeUpdateQty(id, product_id);
        }
        subTotal(product_id);
    }

    function sendAddToCartClick(name, product_id, price, qty){
            // var regex = /[+-]?\d+(\.\d+)?/g;
            // var str = $('#option_price').text().toString();
            // var floats = str.match(regex).map(function(v) { return parseFloat(v); });
            // dataLayer.push({ ecommerce: null });
            dataLayer.push({
              'event': 'add_to_cart',
              'ecommerce': {
                'currencyCode': 'GBP',
                'add': {
                  'products': [{
                    'name': name,
                    'id': product_id,
                    'price': price,
                    'brand': '',
                    'category': '',
                    'variant': '',
                    'quantity': qty
                   }]
                }
              }
            });

        gtag("event", "add_to_cart", {
              currency: "GBP",
              value: price,
              items: [
                {
                  item_id: product_id,
                  item_name: name,
                  affiliation: "",
                  coupon: "",
                  discount: 0.00,
                  index: 0,
                  item_brand: "",
                  item_category: "",
                  item_category2: "",
                  item_category3: "",
                  item_category4: "",
                  item_category5: "",
                  item_list_id: "",
                  item_list_name: "",
                  item_variant: "",
                  location_id: "",
                  price: price,
                  quantity: qty
                }
              ]
            });
        }


    var selected_option_names=[];
    async function add_to_cart(product_id){
        document.getElementById('loader').style.display='block';
        var cid=getCookie('cart_id');
        var colorId=document.getElementById('color_id').value;
        var color_name=document.getElementById('color_id');
        var color_name=color_name.options[color_name.selectedIndex].text;
        var product_name=document.getElementById('product_name').value;
        var price=document.getElementById('list_price').value;
        if(selected_elevation_real_id==null){
            selected_elevation_real_id=document.getElementById('elevation-btn42').dataset.value;
        }
        var checkIfEmpty=0
        var qtys=document.getElementsByName('qty[]');
            qtys.forEach((qty)=>{
                checkIfEmpty+=parseInt(qty.value);
            });

        if(checkIfEmpty>0){
        var jsondata = await postData('/add-to-cart', {options:selected_options, color_id:colorId, color_name:color_name, size_name:selected_option_names, elevation_id:selected_elevation_real_id, product_id:product_id, logo_to_positions:setLogoToPositions, cart_id:cid, personalise:personalise, product_name:product_name, price:price});
            if(jsondata.status==true){
                document.getElementById('third_step').style.background='#004482';
                $('#product_added_successfully').modal('show');
                var qtys=document.getElementsByName('qty[]');
                qtys.forEach((qty)=>{
                    qty.value=0;
                });
                 document.getElementById('cart_count').textContent=jsondata.cart_count;
                 document.getElementById('mobile_cart_count').textContent=jsondata.cart_count;
                 selected_options=[];''

                 sendAddToCartClick(product_name, product_id, price, checkIfEmpty);

            }
        }else{
            $('#msg_failed').modal('show');
            $('#failed_msg').text('No Size selected. Please select at least one size and try again.');
        }
        document.getElementById('loader').style.display='none';
    }

    function close_basket_popup(){
        document.getElementById('basket_popup').style.display='none';
    }

    async function RemoveFromCartAsync(id){
        document.getElementById('loader').style.display='block';
        var jsondata = await postData('/delete-product-from-cart', {id:id});
        if(jsondata.status==true){
            document.getElementById('cart_count').textContent=jsondata.cart_count;
            document.getElementById('mobile_cart_count').textContent=jsondata.cart_count;
            document.getElementById('cart_items_num').textContent=jsondata.cart_count+' items';
            var cartProducts=jsondata.cart_products;
            var html='';
            var total=0;
            cartProducts.forEach((element)=>{
                html+='<div class="row" id="basket_item">';
                    html+='<div class="col-md-4">';
                        html+='<img src="'+element.img_url+'" style="width: 100%;" />';
                    html+='</div>'
                    html+='<div class="col-md-8" style="padding:15px;">';
                        html+='<p>'+element.product_name+'</p>';
                        html+='<p><b>Color :</b> '+element.color+'</p>';
                        html+='<p><b>Size :</b> '+element.size+'</p>';
                        html+='<p>£ '+element.price+'</p>';
                        total+=element.price*element.qty;
                        html+='<div class="row" style="margin-bottom:10px;">';
                        var logos_html='';
                        element.logos.forEach((logo)=>{
                            logos_html+='<div class="col-md-4">';
                                logos_html+='<img src="'+logo.img_url+'" style="width: 100%;" />';
                            logos_html+='</div>';

                            logos_html+='<div class="col-md-8">';
                                logos_html+='<p style="font-size:12px; margin-bottom:5px;"><b>Position :</b> '+logo.position+'</p>';
                                logos_html+='<p style="font-size:12px; margin-bottom:5px;"><b>Production Type :</b> '+logo.type+'</p>';
                                logos_html+='<p style="font-size:12px; margin-bottom:5px;"><b>Price :</b> £ '+logo.price+'</p>';
                            logos_html+='</div>';
                            total+=logo.price*element.qty;
                        });
                        html+=logos_html;
                        html+='</div>';
                        html+='<button onclick="RemoveFromCartAsync('+element.id+')" class="btn btn-primary" style="background:#0279B8; border:none;">Remove</button>';
                        //html+='<a href="/delete-product-from-cart/'+element.id+'" class="btn btn-primary" style="background:#0279B8; border:none;">Remove</a>';
                    html+='</div>';
                html+='</div>';
            });
            document.getElementById('basket_items').innerHTML=html;
            document.getElementById('sub_total_basket_popup').textContent='£ '+parseFloat(total).toFixed(2);
            document.getElementById('basket_popup').style.display='block';
            document.getElementById('loader').style.display='none';
        }
        event.preventDefault();

    }

    async function subTotal(product_id){
        document.getElementById('loader').style.display='block';
        var cid=getCookie('cart_id');
        var colorId=document.getElementById('color_id').value;
        var price=document.getElementById('list_price').value;
        if(selected_elevation_id==null){
            selected_elevation_id=document.getElementById('elevation-btn42').dataset.value;
        }
        var jsondata = await postData('/retrieve-subtotal', {options:selected_options, price:price, color_id:colorId, elevation_id:selected_elevation_id, product_id:product_id, logo_to_positions:setLogoToPositions, cart_id:cid});
        if(jsondata.status==true){
            document.getElementById('sub_total').textContent=jsondata.total;
        }
        document.getElementById('loader').style.display='none';

    }

    function removeQty(id, product_id){
        if(!isNaN(parseInt(document.getElementById('qty'+id).value))){
            if(parseInt(document.getElementById('qty'+id).value)-1>=0){
                if(parseInt(document.getElementById('qty'+id).value)-1==0){
                    var index = selected_options.indexOf(id);
                    if (index >= 0) {
                      selected_options.splice( index, 1 );
                    }
                    selected_options[id]=null;
                }
                selected_options[id]=parseInt(document.getElementById('qty'+id).value)-1;
                document.getElementById('qty'+id).value=parseInt(document.getElementById('qty'+id).value)-1;
            }
        }else{
            document.getElementById('qty'+id).value=parseInt(0);
        }
        flag=0;
        var qtys=document.getElementsByName('qty[]');
        qtys.forEach((qty)=>{
            if(qty.value>0){
                flag=1;
            }else{
                selected_option_names[id]=null;
            }
        });

        if(flag==0){
            document.getElementById('third_step').style.background='#004482';
        }

        subTotal(product_id)
    }

    function removeUpdateQty(id, product_id){
        if(!isNaN(parseInt(document.getElementById('qty'+id).value))){
            if(parseInt(document.getElementById('qty'+id).value)==0){
                var index = selected_options.indexOf(id);
                if (index >= 0) {
                  selected_options.splice( index, 1 );
                }
                selected_options[id]=null;
                document.getElementById('qty'+id).value=parseInt(document.getElementById('qty'+id).value);
            }
        }else{
            document.getElementById('qty'+id).value=parseInt(0);
        }
        flag=0;
        var qtys=document.getElementsByName('qty[]');
        qtys.forEach((qty)=>{
            if(qty.value>0){
                flag=1;
            }else{
                selected_option_names[id]=null;
            }
        });

        if(flag==0){
            document.getElementById('third_step').style.background='#004482';
        }

        subTotal(product_id)
    }

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device

  $( function() {
    $( "#image_object" ).draggable({
        drag: function( event, ui ) {
            if(ui.position.left<10){
                ui.position.left = 5;
            }
            img_width=$('#image_object').width();
            if(ui.position.left>(335-img_width)){
                ui.position.left = (335-img_width);
            }

            if(ui.position.top<70){
                ui.position.top = 70;
            }
            img_height=$('#image_object').height();
            if(ui.position.top>(400-img_height)){
                ui.position.top = (400-img_height);
            }
         }
    });
  } );
  $( function() {
    $( "#text_object" ).draggable({
        drag: function( event, ui ) {
           if(ui.position.left<45){
                ui.position.left = 45;
            }else{
                if(ui.position.left>45){
                    // ui.position.left = Math.min( 0, ui.position.left );
                    ui.position.left=45;
                }
            }
            if(ui)
            if(ui.position.top<65){
                ui.position.top = 65;
            }

            if((380-ui.position.top)<50){
                document.getElementById('image_object').style.top=50+'px';
            }else{
                var temp_img_height=$('#image_object').height();
                var temp_top=400-ui.position.top;
                var temp_img_position=temp_top+temp_img_height;
                if(temp_img_position<=360){
                    document.getElementById('image_object').style.top=(temp_top)+'px';
                }else{
                    document.getElementById('image_object').style.top=360-temp_img_height+'px';
                }
            }

            if(ui.position.top>340){
                ui.position.top = 340;
            }
         }
    });
  } );
}else{
  // false for not mobile device
  //document.write("not mobile device");

  $( function() {
    $( "#image_object" ).draggable({
        drag: function( event, ui ) {
            if(ui.position.left<55){
                ui.position.left = 55;
            }
            img_width=$('#image_object').width();
            if(ui.position.left>(475-img_width)){
                ui.position.left = (475-img_width);
            }

            if(ui.position.top<65){
                ui.position.top = 65;
            }
            img_height=$('#image_object').height();
            if(ui.position.top>(500-img_height)){
                ui.position.top = (500-img_height);
            }
         }
    });
  } );
  $( function() {
    $( "#text_object" ).draggable({
        drag: function( event, ui ) {
           if(ui.position.left<50){
                ui.position.left = 50;
            }else{
                ui.position.left = Math.min( 50, ui.position.left );
            }

            if(ui.position.top<65){
                ui.position.top = 65;
            }

            // if((420-ui.position.top)<65){
            //     document.getElementById('image_object').style.top=65+'px';
            // }else{
            //     document.getElementById('image_object').style.top=(400-ui.position.top)+'px';
            // }
            if((420-ui.position.top)<65){
                document.getElementById('image_object').style.top=65+'px';
            }else{
                var temp_img_height=$('#image_object').height();
                var temp_top=400-ui.position.top;
                var temp_img_position=temp_top+temp_img_height;
                console.log(temp_img_position);
                console.log(temp_img_height);
                if(temp_img_position<=440){
                    document.getElementById('image_object').style.top=temp_top+'px';
                }else{
                    document.getElementById('image_object').style.top=500-temp_img_height+'px';
                }
            }


            if(ui.position.top>450){
                ui.position.top = 450;
            }
         }
    });
  } );

}


  function ChangeImageSize(range_number){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        var new_width=(108*range_number);
        if(range_number>1){
            var new_left=(((200-new_width))/range_number)+52;
        }

        document.getElementById('image_object').style.width=new_width+'px';
        var new_height = $('#image_object').height();
        if(range_number>1){
            var new_top=((340-new_height)/range_number)+72;
        }

        document.getElementById('image_object').style.left=new_left+'px';
        document.getElementById('image_object').style.top=new_top+'px';
    }else{
        var new_width=(108*range_number);
        if(range_number>1){
            var new_left=(((432-new_width))/range_number)+52;
        }

        document.getElementById('image_object').style.width=new_width+'px';
        var new_height = $('#image_object').height();
        if(range_number>1){
            var new_top=((430-new_height)/range_number)+72;
        }

        document.getElementById('image_object').style.left=new_left+'px';
        document.getElementById('image_object').style.top=new_top+'px';
    }
  }
  var upload_login_url='';

  var original_logo_url='';
  var removed_bg_logo_url='';
  var logo_type=0;
  async function uploadFile() {
    document.getElementById('loader').style.display='block';
        let formData = new FormData();
        var fileupload=document.getElementById('upload_logo_file');
        if(fileupload.files[0]!=''){
            formData.append("photo", fileupload.files[0]);
            const response=await fetch('/upload-logo', {
              method: "POST",
              body: formData
            }).then(response => response.json())
          .then(data => {
            if(data.status)
            {
                document.getElementById('image_object').style.display='block';
                upload_login_url=data.photo_data;
                original_logo_url=data.photo_data;
                removed_bg_logo_url=data.removed_bg_photo_data;
                if(logo_type==0){
                    document.getElementById('image_object').src=original_logo_url;
                }else{
                    document.getElementById('image_object').src=removed_bg_logo_url;
                }

                document.getElementById('logo-filter-1').src=upload_login_url;
                // document.getElementById('logo-filter-2').src=upload_login_url;
                document.getElementById('logo-filter-3').src=upload_login_url;
                document.getElementById('text-type-img').src=upload_login_url;
                document.getElementById('add_img').style.display='none';
                document.getElementById('remove_img').style.display='block';
                document.getElementById('loader').style.display='none';
                // TypeText();
                // ChangeImageSize(2);

            }
            document.getElementById('loader').style.display='none';
            document.getElementById('upload_logo_file').value=null;
          }).catch(error => {
            document.getElementById('loader').style.display='none';
            document.getElementById('upload_logo_file').value=null;
            console.error(error)
          });
        }else{
            document.getElementById('loader').style.display='none';
        }
    }

    function setElevation(id, product_id, real_id){
        selected_elevation_id=id;
        selected_elevation_real_id=real_id;
        colorId=document.getElementById('color_id').value;
        if(colorId!=''){
            colorId=parseInt(colorId);

            drawImageWithText(document.getElementById('main-image'+selected_elevation_real_id).value, selected_elevation_real_id);
                if(real_id==42){
                        if(document.getElementById('e43')){
                            document.getElementById('e43').style.display='none';
                        }
                        if(document.getElementById('e44')){
                            document.getElementById('e44').style.display='none';
                        }
                        if(document.getElementById('e45')){
                            document.getElementById('e45').style.display='none';
                        }
                        if(document.getElementById('e42')){
                            document.getElementById('e42').style.display='flex';
                        }
                        if(document.getElementById('elevation-btn42')){
                            document.getElementById('elevation-btn42').style.background='#0279B8';
                             document.getElementById('elevation-btn42').style.color='#fff';
                         }
                         if(document.getElementById('elevation-btn43')){
                            document.getElementById('elevation-btn43').style.background='transparent';
                             document.getElementById('elevation-btn43').style.color='#000';
                         }
                         if(document.getElementById('elevation-btn44')){
                            document.getElementById('elevation-btn44').style.background='transparent';
                             document.getElementById('elevation-btn44').style.color='#000';
                         }
                         if(document.getElementById('elevation-btn45')){
                            document.getElementById('elevation-btn45').style.background='transparent';
                             document.getElementById('elevation-btn45').style.color='#000';
                         }
                    }

                    if(real_id==43){
                        if(document.getElementById('e43')){
                            document.getElementById('e43').style.display='flex';
                        }
                        if(document.getElementById('elevation-btn43')){
                            document.getElementById('elevation-btn43').style.background='#0279B8';
                            document.getElementById('elevation-btn43').style.color='#fff';
                        }

                        if(document.getElementById('elevation-btn42')){
                            document.getElementById('elevation-btn42').style.background='transparent';
                            document.getElementById('elevation-btn42').style.color='#000';
                        }
                        if(document.getElementById('elevation-btn44')){
                            document.getElementById('elevation-btn44').style.background='transparent';
                            document.getElementById('elevation-btn44').style.color='#000';
                        }
                        if(document.getElementById('elevation-btn45')){
                            document.getElementById('elevation-btn45').style.background='transparent';
                            document.getElementById('elevation-btn45').style.color='#000';
                        }
                        if(document.getElementById('e44')){
                            document.getElementById('e44').style.display='none';
                        }
                        if(document.getElementById('e45')){
                            document.getElementById('e45').style.display='none';
                        }
                        if(document.getElementById('e42')){
                            document.getElementById('e42').style.display='none';
                        }
                    }

                    if(real_id==44){
                        if(document.getElementById('e43')){
                            document.getElementById('e43').style.display='none';
                        }
                        if(document.getElementById('e44')){
                            document.getElementById('e44').style.display='flex';
                        }
                        if(document.getElementById('e45')){
                            document.getElementById('e45').style.display='none';
                        }
                        if(document.getElementById('e42')){
                            document.getElementById('e42').style.display='none';
                        }
                        if(document.getElementById('elevation-btn44')){
                            document.getElementById('elevation-btn44').style.background='#0279B8';
                            document.getElementById('elevation-btn44').style.color='#fff';
                        }
                        if(document.getElementById('elevation-btn43')){
                            document.getElementById('elevation-btn43').style.background='transparent';
                            document.getElementById('elevation-btn43').style.color='#000';
                        }
                        if(document.getElementById('elevation-btn42')){
                            document.getElementById('elevation-btn42').style.background='transparent';
                            document.getElementById('elevation-btn42').style.color='#000';
                        }
                        if(document.getElementById('elevation-btn45')){
                            document.getElementById('elevation-btn45').style.background='transparent';
                            document.getElementById('elevation-btn45').style.color='#000';
                        }
                    }

                    if(real_id==45){
                        if(document.getElementById('e43')){
                            document.getElementById('e43').style.display='none';
                        }
                        if(document.getElementById('e44')){
                            document.getElementById('e44').style.display='none';
                        }
                        if(document.getElementById('e45')){
                            document.getElementById('e45').style.display='flex';
                        }
                        if(document.getElementById('elevation-btn45')){
                            document.getElementById('elevation-btn45').style.background='#0279B8';
                            document.getElementById('elevation-btn45').style.color='#fff';
                        }
                        if(document.getElementById('elevation-btn43')){
                            document.getElementById('elevation-btn43').style.background='transparent';
                            document.getElementById('elevation-btn43').style.color='#000';
                        }
                        if(document.getElementById('elevation-btn44')){
                            document.getElementById('elevation-btn44').style.background='transparent';
                            document.getElementById('elevation-btn44').style.color='#000';
                        }
                        if(document.getElementById('elevation-btn42')){
                            document.getElementById('elevation-btn42').style.background='transparent';
                            document.getElementById('elevation-btn42').style.color='#000';
                        }
                        document.getElementById('e42').style.display='none';
                    }
        }else{
            alert('You need to select a color before you select an elevation.');
        }

    }
    async function RemoveBGRequest(id){
        if(id==1){
        if(original_logo_url!=''){
            document.getElementById('loader').style.display='block';
                let formData = new FormData();
                formData.append("photo", original_logo_url);
                const response=await fetch('/upload-removed-logo', {
                  method: "POST",
                  body: formData
                }).then(response => response.json())
              .then(data => {
                if(data.status)
                {
                    removed_bg_logo_url=data.removed_bg_photo_data;
                    document.getElementById('loader').style.display='none';
                    for(i=1; i<=3; i++){

                        if(id==1){
                            logo_type=1;
                            document.getElementById('image_object').src=removed_bg_logo_url;
                        }else{
                            logo_type=0;
                            document.getElementById('image_object').src=original_logo_url;
                        }
                        if(id==i){
                            if(document.getElementById('photo-filter-'+i)){
                                document.getElementById('photo-filter-'+i).style.border='2px solid #000';
                            }
                        }else{
                            if(document.getElementById('photo-filter-'+i)){
                                document.getElementById('photo-filter-'+i).style.border='1px solid #ccc';
                            }
                        }
                    }

                }
                document.getElementById('loader').style.display='none';
              }).catch(error => {
                document.getElementById('loader').style.display='none';
                console.error(error)
              });
          }
        }else{
            logo_type=0;
            document.getElementById('image_object').src=original_logo_url;
        }
        for(i=1; i<=3; i++){
            if(id==i){
                if(document.getElementById('photo-filter-'+i)){
                    document.getElementById('photo-filter-'+i).style.border='2px solid #000';
                }
            }else{
                if(document.getElementById('photo-filter-'+i)){
                    document.getElementById('photo-filter-'+i).style.border='1px solid #ccc';
                }
            }
        }

    }
    function setPhotoFilter(id){
        RemoveBGRequest(id);
    }

    function BackToProductionSize(){
        document.getElementById('screen3').style.display='none';
        document.getElementById('screen2').style.display='block';
    }

    function setTextColor(id){
         document.getElementById('color_text_id').value=id;
        document.getElementById('mobile_color_text_id').value=id;
         AddText();
         if(id=='Navy Blue'){
            id='Navy';
         }
         document.getElementById('text_object').style.color=id.replace(' ', '');
         setTextColor2();
         //document.getElementById('loader').style.display='none';
    }

    function setTextColorMobile(id){
         document.getElementById('color_text_id').value=id;
        document.getElementById('mobile_color_text_id').value=id;
        AddTextMobile();
        setTextColor2Mobile();
        if(id=='Navy Blue'){
            id='Navy';
         }
        document.getElementById('text_object').style.color=id.replace(' ', '');
    }

    function setFontFamily(id){
        document.getElementById('mobile_font_id').value=id;
         if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            AddTextMobile();
        }else{
            AddText();
        }
        if(id=='Block'){
            document.getElementById('text_object').style.fontFamily='Russo One';
        }

        if(id=='Casual'){
            document.getElementById('text_object').style.fontFamily='Damion';
        }

         if(id=='Charisma'){
            document.getElementById('text_object').style.fontFamily='Oxanium';
        }

         if(id=='Old English'){
            document.getElementById('text_object').style.fontFamily='UnifrakturCook';
        }

         if(id=='Script'){
            document.getElementById('text_object').style.fontFamily='Script Style';
        }
    }

    function setClear(id, obj){
        if(id==0){
            obj.value='';
        }
    }
    function openArrow(id){
        if(id==1){
            if(document.getElementById('first_section').style.display!='flex'){
                document.getElementById('first_section').style.display='flex';
                $('#first_arrow img').attr('src', 'https://cdn.icon-icons.com/icons2/910/PNG/512/up-arrow_icon-icons.com_71060.png');
                document.getElementById('first_section_title_div').style.borderBottom='1px solid transparent';

            }else{
                document.getElementById('first_section').style.display='none';
                $('#first_arrow img').attr('src', 'https://cdn.icon-icons.com/icons2/2518/PNG/512/arrow_down_circle_icon_151618.png');
                document.getElementById('first_section_title_div').style.borderBottom='1px solid #595958';

            }

        }
        if(id==2){
            if(document.getElementById('second_section').style.display!='flex'){
                document.getElementById('second_section').style.display='flex';
                $('#second_arrow img').attr('src', 'https://cdn.icon-icons.com/icons2/910/PNG/512/up-arrow_icon-icons.com_71060.png');
                if(document.getElementById('second_section_title_div')){
                    document.getElementById('second_section_title_div').style.borderBottom='1px solid transparent';
                }
            }else{
                document.getElementById('second_section').style.display='none';
                $('#second_arrow img').attr('src', 'https://cdn.icon-icons.com/icons2/2518/PNG/512/arrow_down_circle_icon_151618.png');
                if(document.getElementById('second_section_title_div')){
                    document.getElementById('second_section_title_div').style.borderBottom='1px solid #595958';
                }
            }
        }
        if(id==3){
            if(document.getElementById('third_section').style.display!='flex'){
                document.getElementById('third_section').style.display='flex';
                $('#third_arrow img').attr('src', 'https://cdn.icon-icons.com/icons2/910/PNG/512/up-arrow_icon-icons.com_71060.png');
                document.getElementById('third_section_title_div').style.borderBottom='1px solid transparent';
            }else{
                document.getElementById('third_section').style.display='none';
                $('#third_arrow img').attr('src', 'https://cdn.icon-icons.com/icons2/2518/PNG/512/arrow_down_circle_icon_151618.png');
                document.getElementById('third_section_title_div').style.borderBottom='1px solid #595958';
            }
        }
    }
    function MainPageMobile(){
        document.getElementById('mobile-screen-text').style.display='none';
        document.getElementById('mobile-screen-main').style.display='block';
    }
    function OpenAndCloseDesc(){
        var ifOpen=document.getElementById('description_div');
        var btnObject=document.getElementById('open_close_btn_desc');
        if(ifOpen.style.display=='block'){
            ifOpen.style.display='none';
            btnObject.src='/plus_btn1.png';
        }else{
            ifOpen.style.display='block';
            btnObject.src='/x_btn.png';
        }
    }
    function OpenAndCloseShipping(){
        var ifOpen=document.getElementById('shipping_div');
        var btnObject=document.getElementById('open_close_btn_shipping');
        if(ifOpen.style.display=='block'){
            ifOpen.style.display='none';
            btnObject.src='/plus_btn1.png';
        }else{
            ifOpen.style.display='block';
            btnObject.src='/x_btn.png';
        }
    }

    function SelectMore(){
         $('#logo_added_successfully').modal('hide');
    }

    function ContinueToStep3(){
        $('#logo_added_successfully').modal('hide');
        openArrow(2);
    }
    $(document).ready(function(){
        $("#customizer-modal").modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    function CloseCustomiser(){
        if(embroiderty_size_position==0){
            $('#customizer-modal').modal('hide');
        }else{
            $('#error_modal').modal('show');
        }
    }

    function FinalCloseCustomizer(){
        $('#error_modal').modal('hide');
        $('#customizer-modal').modal('hide');
    }

    $( document ).ready(function() {
        var pName=document.getElementById('product_name').value;
        var pId=document.getElementById('product_id').value;
        var pPrice=document.getElementById('list_price').value;
        sendProductClick(pName, pId, pPrice);
    });

    function zoomIn(){
        $('#zoom_in_div').modal('show');
        var img_data=document.getElementById('sample-product'+selected_elevation_real_id).src;
        document.getElementById('zoom_in_img').src=img_data;
    }

    function sendProductClick(productName, productId, price){
            //dataLayer.push({ ecommerce: null });
            dataLayer.push({
            'event': 'view_item',
            'ecommerce': {
              'click': {
                'actionField': {'list': 'Single Product Page'},      // Optional list property.
                'products': [{
                  'name': productName,                      // Name or ID is required.
                  'id': productId,
                  'price': price,
                  'brand': '',
                  'category': '',
                  'variant': '',
                  'position': ''
                 }]
               }
             }
          });

            gtag("event", "view_item", {
              currency: "GBP",
              value: price,
              items: [
                {
                  item_id: productId,
                  item_name: productName,
                  price: price,
                  quantity: 1
                }
              ]
            });
        }
