<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Customizer</title>
	<link rel="stylesheet" type="text/css" href="./styles.css">
	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/merge-images/2.0.0/index.umd.js" integrity="sha512-fvpI73Use1lqB6JfcuIpveq8/bNu7iFrNNrWfECG7XEcb4V8orMq/C7scfEqvoYD0IuonHtmF76WRPecvoNC2A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script type="text/javascript" src="./index.js"></script>
</head>
<body>
<a href="javascript:;" id="personalise_now_btn" data-bs-toggle="modal" data-bs-target="#customizer-modal" onclick="PersonaliseNow();" style="padding:22px 60px; background: #0279B8; border:none; border-radius:50px;" class="btn btn-primary">PERSONALISE NOW</a>

<div class="modal fade" id="customizer-modal" tabindex="-1" aria-labelledby="customizer-modal-label" aria-hidden="true">
  <div class="modal-dialog" style="width: 1150px; max-width: 1150px; margin-top: 7%; ">
    <div class="modal-content" style="border-radius: 0px;">
      <div class="modal-body" style="padding:0px; margin:0px;">

            <div id="screen1" >
                <div class="modal-header" style="padding-left: 0px; padding-right: 0px; border:none">
                    <div class="row" style="width:100%;">
                        <div class="col-md-2">
                            <img src="{{ url('/logo.png') }}" style="width: 100%;" />
                        </div>
                        <div class="col-md-2">
                            <img src="{{ url('/CREO-Logo.png') }}" style="max-height:30px; object-fit:contain; width:100%;" />
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-2" style="text-align:right; padding-right: 0px;">
                            <button type="button" class="btn-close" onclick="CloseCustomiser();"></button>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-bottom:80px;">

                    <?php

                        $size_option_1=0;
                        $size_option_2=0;
                        $size_option_3=0;

                        $size_option_4=0;
                        $size_option_5=0;

                        $size_option_6=0;

                        $product_variant_ids=[];

                        foreach($product_variants as $product_variant){
                            array_push($product_variant_ids, $product_variant->product_attribute_value_id[0]);
                        }

                        if(in_array(39, $product_variant_ids) || in_array(40, $product_variant_ids)){
                            $size_option_1=1;
                        }

                        if(in_array(26, $product_variant_ids) || in_array(27, $product_variant_ids) || in_array(28, $product_variant_ids) || in_array(29, $product_variant_ids) || in_array(30, $product_variant_ids) || in_array(31, $product_variant_ids) || in_array(32, $product_variant_ids)){
                            $size_option_2=1;
                        }

                        if(in_array(33, $product_variant_ids) || in_array(35, $product_variant_ids) || in_array(36, $product_variant_ids)){
                            $size_option_3=1;
                        }

                        if(in_array(162, $product_variant_ids)){
                            $size_option_4=1;
                        }

                        if(in_array(161, $product_variant_ids)){
                            $size_option_5=1;
                        }

                        if(in_array(228, $product_variant_ids)){
                            $size_option_6=1;
                        }
                    ?>

                    <div class="col-md-4" style="margin-top:30px; <?php if($size_option_3==0 || $size_option_6==1){ ?>opacity: 0.7;<?php } ?> text-align: center; padding:0px 15px;">
                        <img src="{{ url('/7x7.png') }}" style="width: 100%; object-fit:contain;" />
                        <h5 style="margin-top:30px;">Best for:</h5>
                        <p style="min-height: 60px;">Headwear.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <p style="font-weight:400; color:#0279B8;">£ 4.00</p>
                                <p>Per print</p>
                            </div>
                            <div class="col-md-6">
                                <p style="font-weight:400; color:#0279B8;">£ 4.00</p>
                                <p>Per embroidery</p>
                            </div>
                        </div>
                        <button onclick="setEmbroiderySizePosition(3);" <?php if($size_option_3==0 || $size_option_6==1){ ?>disabled="true"<?php } ?> style="padding: 22px 70px; margin-top: 20px; width: 100%; background: white; border: 2px solid #0279B8; color: #0279B8; border-radius: 50px;" id="
                        	3" class="btn btn-primary">SELECT</button>
                    </div>

                    <div class="col-md-4" style="margin-top:30px; <?php if($size_option_2==0 && $size_option_6==0){ ?>opacity: 0.7;<?php } ?> text-align: center; padding:0px 15px;">
                        <img src="{{ url('/10x10.png') }}" style="width: 100%; object-fit:contain;" />
                        <h5 style="margin-top:30px;">Best for:</h5>
                        <p style="min-height: 60px;">Left chest, right chest, left sleeve, right sleeve, back yoke.</p>
                        <p style="font-weight:400; color:#0279B8;">£ 3.00</p>
                        <p>Print or Embroidery</p>
                        <button onclick="setEmbroiderySizePosition(1);" <?php if($size_option_2==0 && $size_option_6==0){ ?>disabled="true"<?php } ?> style="padding: 22px 70px; margin-top: 20px; width: 100%; background: white; border: 2px solid #0279B8; color: #0279B8; border-radius: 50px;" id="embroidery_size_btn1" class="btn btn-primary">SELECT</button>
                    </div>

                    <div class="col-md-4" style="margin-top:30px; <?php if($size_option_1==0 || $size_option_6==1){ ?>opacity: 0.7;<?php } ?> text-align: center; padding:0px 15px;">
                        <img src="{{ url('/25x25.png') }}" style="width: 100%; object-fit:contain;" />
                        <h5 style="margin-top:30px;">Best for:</h5>
                        <p style="min-height: 60px;">Front chest, back/shoulders</p>
                        <div class="row">
                            <div class="col-md-6">
                                <p style="font-weight:400; color:#0279B8;">£ 5.00</p>
                                <p>Per print</p>
                            </div>
                            <div class="col-md-6">
                                <p style="font-weight:400; color:#0279B8;">£ 10.00</p>
                                <p>Per embroidery</p>
                            </div>
                        </div>
                        <button onclick="setEmbroiderySizePosition(2);" <?php if($size_option_1==0 || $size_option_6==1){ ?>disabled="true"<?php } ?> style="padding: 22px 70px; margin-top: 20px; width: 100%; background: white; border: 2px solid #0279B8; color: #0279B8; border-radius: 50px;" id="embroidery_size_btn2" class="btn btn-primary">SELECT</button>
                    </div>
                </div>
            </div>

            <div id="screen2" >
                <div class="modal-header" style="padding-left: 0px; padding-right: 0px; border:none">
                    <div class="row" style="width:100%;">
                        <div class="col-md-2">
                            <img src="{{ url('/logo.png') }}" style="width: 100%;" />
                        </div>
                        <div class="col-md-2">
                            <img src="{{ url('/CREO-Logo.png') }}" style="max-height:30px; object-fit:contain; width:100%;" />
                        </div>
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-2" style="text-align:right; padding-right: 0px;">
                            <button type="button" class="btn-close" onclick="CloseCustomiser();"></button>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-bottom:80px;">
                    <div class="col-md-6" style="margin-top:100px; <?php if(isset($productObject) && ($productObject->production_type_id!=2 && $productObject->production_type_id!=3) && ($size_option_6==0)){ ?>opacity: 0.7;<?php } ?>  text-align: center; padding:0px 15px;">
                        <img src="{{ url('/embroidery-icon.png') }}" style="width: 150px; height: 120px; object-fit:contain;" />
                        <h5 style="margin-top:30px;">Best for:</h5>
                        <p style="font-size:15px;">Embroidery is best for creating durable logos on thicker garments like polo shirts or jumpers. While it may cost more, the longevity makes it cost-effective. Consider printing for larger designs. Avoid heavy gradients and complex colour palettes for optimal results.</p>
                        <button onclick="setEmbroideryType(1);" <?php if(isset($productObject) && ($productObject->production_type_id!=2 && $productObject->production_type_id!=3) && ($size_option_6==0)){ ?>disabled="true"<?php } ?> id="embroidery-btn" style="padding: 22px 70px; margin-top: 50px; width: 100%; background: white; border: 2px solid #0279B8; color: #0279B8; border-radius: 50px;" class="btn btn-primary">EMBROIDERY</button>
                    </div>
                    <div class="col-md-6" style="margin-top:100px; <?php if(isset($productObject) && ($productObject->production_type_id!=1 && $productObject->production_type_id!=3)&& ($size_option_6==0)){ ?>opacity: 0.7;<?php } ?>  text-align: center; padding:0px 15px;">
                        <img src="{{ url('/print-icon.png') }}" style="width: 280px; height: 120px; object-fit:contain;" />
                        <h5 style="margin-top:30px;">Best for:</h5>
                        <p style="font-size:15px;">Print is a versatile option for workwear, suitable for various designs and garments. It offers vibrant colours, intricate details, and is cost-effective for larger designs. Print is ideal for lighter fabrics and designs with gradients and complex colour palettes.</p>
                        <button onclick="setEmbroideryType(2);" <?php if(isset($productObject) && ($productObject->production_type_id!=1 && $productObject->production_type_id!=3) && ($size_option_6==0)){ ?>disabled="true"<?php } ?> id="print-btn" style="padding: 22px 70px; margin-top: 50px; width: 100%; background: white; border: 2px solid #0279B8; color: #0279B8; border-radius: 50px;" class="btn btn-primary">PRINT</button>
                    </div>
                </div>
            </div>


            <div id="screen3" >
                <div class="row" id="mobile-screen-3" style="margin-bottom:80px; padding:0px; margin:0px;">
                    <div class="col-md-6 screen3-main">
                        <div class="col-md-2 mobile-customizer-x">
                                <button type="button" class="btn-close" onclick="CloseCustomiser();"></button>
                            </div>
                        <div id="customizer" class="row">
                            <div id="customizer-main" >
                                <img src="" id="image_object" style="display:none; cursor: pointer; width:258px; margin-left:40px; position: absolute;" />
                                <p id="text_object" ></p>
                            </div>
                        </div>
                        <div class="row d-none d-md-flex" style="padding:0px 10%;">
                            <h5 style="margin-top: 25px; padding:0px; text-align: left; margin-bottom:25px;">Want to see a different colour?</h5>

                            <div onclick="setBgColorCustomizer(2);" style="background:black; position: relative; cursor: pointer; background-image:url('{{ url("/black.png") }}'); background-size: contain; width: 24%; margin-right: 2.5%;" class="col-md-2">
                                <p style="font-size:12px; color:#fff; margin-top:15px;">Dark Background</p>
                                <div id="bg_color_selected2" style="width: 100%; display: none; float: left; position: absolute; top: 70px; margin-top: 5px; background: #4AC815; height: 3px; border-radius: 4px; left: 0px;"></div>
                            </div>
                            <div onclick="setBgColorCustomizer(3);" style="background:grey; position: relative; cursor: pointer; background-image:url('{{ url("/heather-grey.png") }}'); background-size: contain; width: 24%; margin-right: 2.5%;" class="col-md-2">
                                <p style="font-size:12px; color:#000; margin-top:15px;">Light Background</p>
                                <div id="bg_color_selected3" style="width: 100%; display: none; float: left; position: absolute; top: 70px; margin-top: 5px; background: #4AC815; height: 3px; border-radius: 4px; left: 0px;"></div>
                            </div>
                        </div>
                        <div class="row d-block d-md-none">
                            <div id="mobile-screen-main" >
                                <a href="#" onclick="UploadLogoMobile();" style="text-decoration: none; width: 40%; padding: 0px; margin-right: 3%; position: relative; float: left; top: 10px; margin-left: 20px;" >
                                    <div class="col-md-6" style="background: #004482; border-radius: 5px; width: 100%; padding-bottom: 5px; height: 60px; font-size: 10px;">
                                        <img src="{{ url('/upload-icon.png') }}" style="height: 25px; margin-top: 5px; margin-bottom: 10px;" />
                                        <p style="color:#fff; font-weight:500; font-size: 10px; margin-bottom: 5px;">Upload your Logo</p>
                                    </div>
                                    <div id="upload_logo_selected_mobile" style="width:100%; display: block; float:left; position:relative; margin-top:5px; background: #4AC815; height:3px; border-radius:4px;">

                                    </div>
                                </a>
                                <a href="#" onclick="TypeTextMobile();" style="text-decoration: none; width: 40%; padding: 0px; margin-right: 3%; position: relative; float: left; top: 10px;" >
                                    <div class="col-md-6" style="background: #0279B8; border-radius: 5px; width: 100%; padding-bottom: 5px; height: 60px;">
                                        <img src="{{ url('/text-icon-white.png') }}" style="height: 15px; margin-top: 15px; margin-bottom: 10px; font-size: 10px;" />
                                        <p style="color:#fff; font-weight:500; font-size: 10px; margin-bottom: 5px;">Type text</p>
                                    </div>
                                    <div id="type_text_selected_mobile" style="width:100%; display: none; float:left; position:relative; margin-top:5px; background: #4AC815; height:3px; border-radius:4px;"></div>
                                </a>
                                <div id="before_upload" style="width:100%;">
                                    <p style="font-weight:bold; margin-top:25px; float: left; position: relative; width: 100%; font-size: 12px; margin-bottom:5px;">Supported formats:</p>
                                    <p style="font-size: 14px; position:relative; float:left; width:100%; margin-bottom:5px;">AI, EPS, GIF, JPG, PDF, PNG, SVG</p>
<?php if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){ ?>
                                    <div class="row" style="margin-top:30px; margin-bottom: 30px; position: relative; float:left; width:100%; padding-left:30px; padding-right: 25px;">
                                        <div class="col-md-8" style="border:1px solid #ccc; min-height:50px;"><p style="margin-top: 15px;">Image Size</p></div>
                                        <div class="col-md-12" style="border:1px solid #ccc; min-height:70px;">
                                            <div class="range" style="position:relative;">
                                              <input id="image_size_range" style="position: relative; display: block; float: right; text-align: right; top: -22px; right: -20px;" onchange="ChangeImageSize(this.value);" type="text" data-slider-tooltip="hide" data-slider-value="2" data-slider-min="1" data-slider-ticks="[1, 2, 3, 4]" data-slider-ticks-snap-bounds="30" data-slider-ticks-labels='["25%", "", "", "", "100%"]'/>
                                            </div>

                                        </div>
                                    </div>
                                <?php } ?>

                                    <div class="row" style="padding:0px 30px;">
                                        <div class="col-3" id="photo-filter-1" onclick="setPhotoFilter(1);" style="border:1px solid #ccc; padding: 0px; cursor: pointer; margin-top: 20px;  border-radius:7px;">
                                            <img id="logo-filter-1" src="/logo-no-bg.png" style="width: 100%; height: 60px; margin-top: 0px; object-fit: contain;">
                                        </div>
                                        <div class="col-9" style="text-align:left; margin-top: 20px;">
                                            <p style="font-weight:600; margin-bottom: 5px; margin-top:0px; font-size: 12px;">Remove all background</p>
                                            <span style="font-size:9px;">Remove all parts of logo that match the top left colour</span>
                                        </div>
                                    </div>

                                    <div class="row" style="padding:0px 30px;">
                                        <div class="col-3" id="photo-filter-2" onclick="setPhotoFilter(3);" style="border:1px solid #ccc; padding: 0px; cursor: pointer; margin-top: 20px;  border-radius:7px;">
                                            <img id="logo-filter-3" src="/logo-with-bg.png" style="width: 100%; height: 60px; margin-top: 0px; object-fit: contain;">
                                        </div>
                                        <div class="col-9" style="text-align:left; margin-top: 20px;">
                                            <p style="font-weight:600; margin-bottom: 5px; margin-top:0px; font-size: 12px;">Original</p>
                                            <span style="font-size:9px;">Remove all parts of logo that match the top left colour</span>
                                        </div>
                                    </div>
                                    <div class="row" style="padding:0px 30px;">
                                        <div style="float:left; position:relative; margin-top:15px;" class="col-5">
                                        <p style="font-size:12px; visibility: hidden;">How to add a logo</p>
                                    </div>
                                    <div style="float:left; position:relative; text-align:right; margin-top:15px; padding:0px;" class="col-7">
                                        <button onclick="MainPageMobile();"class="btn btn-primary" style="
                                        width: 50%;
                                        padding: 4px;
                                        border-radius: 50px;
                                        font-size: 12px;
                                        background: transparent;
                                        color: #000;
                                    ">BACK</button>
                                        <button onclick="SaveCustomizerPageMobile();" class="btn btn-primary" style="
                                        width: 47%;
                                        padding: 4px;
                                        border-radius: 50px;
                                        font-size: 12px;
                                        background: green;
                                    ">NEXT</button>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div id="mobile-screen-text" style="display:none;" >
                                <div class="mobile-text-main-div">
                                    <a href="#" onclick="UploadLogoMobile();" style="text-decoration: none; width: 40%; padding: 0px; margin-right: 3%; position: relative; float: left; top: 10px; margin-left: 20px;" >
                                    <div class="col-md-6" style="background: #004482; border-radius: 5px; width: 100%; padding-bottom: 5px; height: 60px; font-size: 10px;">
                                        <img src="{{ url('/upload-icon.png') }}" style="height: 25px; margin-top: 5px; margin-bottom: 10px;" />
                                        <p style="color:#fff; font-weight:500; font-size: 10px; margin-bottom: 5px;">Upload your Logo</p>
                                    </div>
                                    <div id="upload_logo_selected_mobile" style="width:100%; display: none; float:left; position:relative; margin-top:5px; background: #4AC815; height:3px; border-radius:4px;">

                                    </div>
                                </a>
                                    <a href="#" onclick="TypeTextMobile();" style="text-decoration: none; width: 40%; padding: 0px; margin-right: 3%; position: relative; float: left; top: 10px;" >
                                        <div class="col-md-6" style="background: #0279B8; border-radius: 5px; width: 100%; padding-bottom: 5px; height: 60px;">
                                            <img alt="text icon white" src="{{ url('/text-icon-white.png') }}" style="height: 15px; margin-top: 15px; margin-bottom: 10px; font-size: 10px;" />
                                            <p style="color:#fff; font-weight:500; font-size: 10px; margin-bottom: 5px;">Type text</p>
                                        </div>
                                        <div id="type_text_selected_mobile" style="width:100%; display: block; float:left; position:relative; margin-top:5px; background: #4AC815; height:3px; border-radius:4px;"></div>
                                    </a>
                                    <div class="col-12 text-div-item" style="margin-top:15px; padding-top:0px; margin-bottom: 5px;">
                                        <input type="text" id="type_text_field_mobile" style="width:100%;" placeholder="Type text..." />
                                    </div>
                                    <div id="color_picker_div_mobile" style="display:none; background: #fff; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; position:absolute; width:100%; margin-left:-3%; top:0%; min-height: 220px; padding: 12px; z-index: 10000;">
                                                <button class="btn-close" style="float:right; position:relative; right:0px; margin-bottom: 20px;" onclick="setTextColor2Mobile();"></button>
                                                <span style="position:absolute; left:20px; top:20px; color:#000;">Set a text color</span>
                                                <div class="row" style="width:100%; position:relative; padding-left: 5%; text-align:center;">


                                                    <div class="col-md-2" onclick="setTextColorMobile('black');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px; background:black; height:40px;">
                                                <span style="color:#fff;">Black</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('white');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:white; height:40px;">
                                                <span>White</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Light Yellow');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightYellow; height:40px;">
                                                <span style="color: #000">Light Yellow</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('yellow');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:yellow; height:40px;">
                                                <span style="color: #000;">Yellow</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('orange');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:orange; height:40px;">
                                                <span style="color: #000;">Orange</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Purple');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Purple; height:40px;">
                                                <span style="color: #fff;">Purple</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Pink');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Pink; height:40px;">
                                                <span style="color: #000;">Pink</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Light Pink');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightPink; height:40px;">
                                                <span style="color: #000;">Light Pink</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Light Blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightBlue; height:40px;">
                                                <span style="color: #000">Light Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Royal Blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Royalblue; height:40px;">
                                                <span style="color: #000">Royal Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('red');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:red; height:40px;">
                                                <span style="color: #fff">Red</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Navy Blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Navy; height:40px;">
                                                <span style="color: #fff">Navy Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Light Green');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightGreen; height:40px;">
                                                <span style="color: #000;">Light Green</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Green');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Green; height:40px;">
                                                <span style="color: #fff">Green</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Forest Green');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:ForestGreen; height:40px;">
                                                <span style="color: #fff">Forest Green</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Gold');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Gold; height:40px;">
                                                <span style="color: #000;">Gold</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Silver');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Silver; height:40px;">
                                                <span style="color: #fff">Silver</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Light Grey');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightGrey; height:40px;">
                                                <span style="color: #fff">Light Grey</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('Dark Grey');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:DarkGrey; height:40px;">
                                                <span style="color: #fff">Dark Grey</span>
                                            </div>

                                            <div class="col-md-2" onclick="setTextColorMobile('blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:blue; height:40px;">
                                                <span style="color: #fff">Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColorMobile('brown');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px; background:brown; height:40px;">
                                                <span style="color: #fff">Brown</span>
                                            </div>

                                                </div>
                                            </div>

                                            <div id="text_align_div_mobile" style="display:none; background: #fff; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; position:absolute; width:100%; margin-left:-3%; top:0%; min-height: 150px; padding: 12px; z-index: 10000;">
                                                <button class="btn-close" style="float:right; position:relative; right:0px; margin-bottom: 20px;" onclick="SetTextAlign2Mobile();"></button>
                                                <span style="position:absolute; left:20px; top:20px; color:#000;">Set a text alignment</span>
                                                <div class="row" style="width:100%; position:relative; padding-left: 5%; text-align:center;">
                                                    <div class="col-md-2" onclick="SetTextAlignMobile(1);" style="width:30%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 12px; padding-top: 10px;  height:50px;">
                                                        <img src="/left-icon.png" style="height:30px;" />
                                                    </div>
                                                    <div class="col-md-2" onclick="SetTextAlignMobile(2);" style="width:30%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 12px; padding-top: 10px; height:50px;">
                                                        <img src="/text-align.png" style="height:30px;" />
                                                    </div>
                                                    <div class="col-md-2" onclick="SetTextAlignMobile(3);" style="width:30%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 12px; padding-top: 10px;  height:50px;">
                                                        <img src="/right-icon.png" style="height:30px;" />
                                                    </div>
                                                </div>
                                            </div>
                                    <div onclick="setTextColor2Mobile();" class="col-2 text-div-item" style="border:0.8px solid #000; width:12.6%;"><img src="{{ url('/circle-color.png') }}" style="height:20px; width:20px;" /></div>
                                    <div onclick="SetTextAlign2Mobile();" class="col-2 text-div-item" style="border-right:0.8px solid #000; width:12.6%; border-top:0.8px solid #000; border-bottom:0.8px solid #000;"><img src="{{ url('/text-align.png') }}" style="height:20px; width:20px;" /></div>
                                    <div onclick="SetTextSize(1);" class="col-2 text-div-item" style="width:24.8%; border-right:0.8px solid #000; border-top:0.8px solid #000; border-bottom:0.8px solid #000;">S</div>
                                    <div onclick="SetTextSize(2);" class="col-2 text-div-item" style="width:24.8%; border-right:0.8px solid #000; border-top:0.8px solid #000; border-bottom:0.8px solid #000;">M</div>
                                    <div onclick="SetTextSize(3);" class="col-2 text-div-item" style="width:24.8%; border-right:0.8px solid #000; border-top:0.8px solid #000; border-bottom:0.8px solid #000;">L</div>

                                    <div class="col-12 text-div-item" style="margin-top:15px; padding-top:0px; margin-bottom: 15px;">
                                        <select id="mobile_font_id" onchange="setFontFamily(this.value);">
                                            <option value="Block">Font - Block</option>
                                            <option value="Casual">Casual</option>
                                            <option value="Charisma">Charisma</option>
                                            <option value="Old English">Old English</option>
                                            <option value="Script">Script</option>
                                        </select>
                                    </div>

                                    <div style="float:left; position:relative; margin-top:15px;" class="col-5">
                                        <p style="font-size:14px; visibility: hidden;">How to add a logo</p>
                                    </div>
                                    <div style="float:left; position:relative; text-align:right; margin-top:15px; padding: 0px;" class="col-7">
                                        <button onclick="MainPageMobile();"class="btn btn-primary" style="
                                        width: 50%;
                                        padding: 4px;
                                        border-radius: 50px;
                                        font-size: 12px;
                                        background: transparent;
                                        color: #000;
                                    ">BACK</button>
                                        <button onclick="SaveCustomizerPageMobile();" class="btn btn-primary" style="
                                        width: 47%;
                                        padding: 4px;
                                        border-radius: 50px;
                                        font-size: 12px;
                                        background: green;
                                    ">NEXT</button>
                                    </div>

                                </div>
                            </div>

                            <div class="mobile-screen-save" style="display:none;" id="mobile-screen-save">
                                    <div class="row" style="display: block; padding: 15px;">
                                            <div class="row" style="display: block; text-align:center;">
                                                <!-- <img src="https://createworkwear.com/success-icon.png" style="height:70px; width:100px; object-fit: contain;"> -->
                                                <h3 style="color:#4AC815; font-size: 22px; font-weight: bold;">Success!</h3>
                                                <p style="font-size:10px; margin-bottom: 5px;">Please name your logo for easy ordering in the future</p>
                                                <input type="text" name="save_as_mobile" id="save_as_mobile" style="width: 90%; margin-left: 6%; border-radius: 50px;" class="form-control" placeholder="Save as...">
                                            </div>
                                            <div class="row" style="display: block; margin-top: 10px; margin-bottom:10px; padding-left:30px; padding-right: 10px; text-align: center;">
                                                <!-- <p style="font-size: 13px; margin-bottom: 7px;">Copyright &amp; license agreement wording... Lorem ipsum dolor sit amet, consectetur</p> -->
                                                <p style="font-size: 10px; color: #595958; line-height: 20px; width: 100%; margin:auto; margin-top:5px;">By proceeding with your order, you acknowledge and agree to the terms and conditions.</p>
                                                <p style="margin-top: 3px; margin-bottom: 10px; font-size: 10px;"><input type="checkbox" name="checkbox_agreed" id="checkbox_agreed_mobile"> I have read and accept the terms and conditions</p>
                                                <button onclick="SaveCustomizerImageMobile();" style="padding:10px 40px; margin-top: 3px; border:none; width: 100%; border-radius:50px; background: #4AC815; color:#fff;">SAVE</button>
                                            </div>

                                            <div id="footer" class="row" style="margin-top:10px; text-align: center;">
                                                <div class="col-md-4 d-md-block d-none" style="margin-top:5px;"><img src="https://createworkwear.com/play-icon.png" style="height:25px; visibility: hidden;  float:left; position:relative;"><p style="font-size: 14px; float:left; position:relative; margin-top: 2px; margin-left:10px; visibility: hidden;">How to add a logo</p></div>
                                                <div class="col-md-1"></div>
                                                <div class="col-md-7">
                                                    <div class="row" style="text-align:left;">
                                                        <div class="col-12" style="margin-left: 10px;"><button class="btn btn-primary" onclick="backToCustomizerMobile()" style="background:transparent; color:#000; border:2px solid #4AC815; border-radius:50px; width: 100%;">Back</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </div>

                        </div>
                    </div>
                    <div class="d-md-block d-none col-md-6 screen3-main-2" style="margin-top:0px; text-align: center; padding:0px 0px; padding-right: 10px; padding-left:20px; box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);">
                        <div class="modal-header" style="padding-left: 0px; padding-right: 0px; border:none">
                            <div class="row d-md-flex d-none" style="width:100%;">
                                <div class="col-md-4">
                                    <img src="{{ url('/logo.png') }}" style="width: 100%;" />
                                </div>
                                <div class="col-md-4">
                                    <img src="{{ url('/CREO-Logo.png') }}" style="max-height:30px; object-fit:contain; width:100%;" />
                                </div>
                                <div class="col-md-2">
                                </div>
                                <div class="col-md-2" style="text-align:right; padding-right: 0px;">
                                    <button type="button" class="btn-close" onclick="CloseCustomiser();"></button>
                                </div>
                            </div>
                        </div>
                        <div id="customizer_configs_stage1">

                            <div class="row" style="padding: 0px 0px 0px 10px; margin-top: 20px;">
                                <input type="file" onchange="uploadFile()" name="upload_logo_file" id="upload_logo_file" style="display: none;">
                                <a href="#" onclick="UploadLogo();" style="text-decoration: none; width: 47%; padding: 0px; margin-right: 3%; position: relative; float:left;" >
                                    <div class="col-md-6" style="background:#004482; border-radius:5px; width: 100%; padding-bottom:5px;">
                                        <img src="{{ url('/upload-icon.png') }}" style="height: 45px; margin-top:20px; margin-bottom:10px;" />
                                        <p style="color:#fff; font-weight:500;">Upload your Logo</p>
                                    </div>
                                    <div id="upload_logo_selected" style="width:100%; display: block; float:left; position:relative; margin-top:5px; background: #4AC815; height:3px; border-radius:4px;"></div>
                                </a>
                                <a href="#" onclick="TypeText();" style="text-decoration: none; width: 47%; padding: 0px; margin-right: 3%; position: relative; float:left;" >
                                    <div class="col-md-6" style="background:#0279B8; border-radius:5px; width: 100%; padding-bottom:5px;">
                                        <img src="{{ url('/text-icon-white.png') }}" style="height: 45px; margin-top:20px; margin-bottom:10px;" />
                                        <p style="color:#fff; font-weight:500;">Type text</p>
                                    </div>
                                    <div id="type_text_selected" style="width:100%; display: none; float:left; position:relative; margin-top:5px; background: #4AC815; height:3px; border-radius:4px;"></div>
                                </a>

                               <!--  <div class="col-md-3" style="background:#595958; border-radius:5px; width: 22%; margin-right: 3%;">
                                    <a href="#" onclick="AccreditedLogos();" style="text-decoration: none;" ><img src="{{ url('/image-icon.png') }}" style="height: 45px; margin-top:20px; margin-bottom:10px;" />
                                    <p style="color:#fff; font-weight:500;">Accreditor logos</p></a>
                                </div>

                                <div class="col-md-3" style="background:#DB0D13; border-radius:5px; width: 22%; margin-right: 3%;">
                                    <a href="#" onclick="StartOver();" style="text-decoration: none;" ><img src="{{ url('/undo-icon.png') }}" style="height: 45px; margin-top:20px; margin-bottom:10px;" />
                                    <p style="color:#fff; font-weight:500;">Start over</p></a>
                                </div> -->
                            </div>

                            <div id="upload_logo" class="row" style="padding: 0px 0px 0px 10px; margin-top: 20px; display: flex;">

                                <div class="row" style="margin-top:30px; margin-bottom: 30px;">
                                    <div class="col-md-2" style="border:1px solid #ccc; min-height:50px;"><img id="text-type-img" style="height: 50px; object-fit: contain; width:50px;" src="https://createworkwear.com/logo.png" style="width:100%; height:50px; object-fit:contain;" /></div>
                                    <div class="col-md-8" style="border:1px solid #ccc; min-height:50px;"><p style="margin-top: 15px;">Image Size</p></div>
                                    <div class="col-md-2" style="border:1px solid #ccc; min-height:50px;">
                                        <p onclick="UploadLogo();" style="cursor:pointer; display: block; top:15px; position:relative;" id="add_img">Add</p>
                                        <p onclick="RemoveImage();" id="remove_img" style="font-weight: 700; display: none; cursor: pointer; text-align: center; font-size: 30px; top: 8px; position: relative; color: red;">X</p>
                                    </div>
                                    <div class="col-md-12" style="border:1px solid #ccc; min-height:70px;">
                                        <div class="range" style="position:relative;">

                                          <input id="image_size_range" onchange="ChangeImageSize(this.value);" type="text" data-slider-tooltip="hide" data-slider-value="2" data-slider-min="1" data-slider-ticks="[1, 2, 3, 4]" data-slider-ticks-snap-bounds="30" data-slider-ticks-labels='["25%", "", "", "", "100%"]'/>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-3" id="photo-filter-1" onclick="setPhotoFilter(1);" style="border:1px solid #ccc; cursor: pointer; margin-top: 20px;  border-radius:7px;">
                                    <img alt="logo no background" id="logo-filter-1" src="/logo-no-bg.png" style="width: 100%; height: 120px; margin-top: 0px; object-fit: contain;" />
                                </div>
                                <div class="col-md-9" style="text-align:left; margin-top: 20px;">
                                    <p style="font-weight:600; margin-top:15px;">Remove all background</p>
                                    <span>Remove all parts of logo that match the top left colour</span>
                                </div>
                                <div class="col-md-3" id="photo-filter-3" onclick="setPhotoFilter(3);"  style="border:2px solid #000; cursor: pointer; margin-top: 20px; border-radius:7px;">
                                    <img alt="logo with background" id="logo-filter-3" src="/logo-with-bg.png" style="width: 100%; height: 120px; margin-top: 0px; object-fit: contain;" />
                                </div>
                                <div class="col-md-9" style="text-align:left; margin-top: 20px;">
                                    <p style="font-weight:600; margin-top:15px;">Original</p>
                                    <span>Keep the background on your image</span>
                                </div>

                                <div id="footer" class="row" style="margin-top:15%; margin-bottom:4%;">
                                    <div class="col-md-4 d-md-block d-none" style="margin-top:5px;"><img src="{{ url('/play-icon.png') }}" style="height:25px;  float:left; position:relative; visibility: hidden;" /><p style="font-size: 13px; visibility: hidden; float:left; position:relative; margin-top: 2px; margin-left:10px;">How to add a logo</p></div>
                                    <div class="col-md-1"></div>
                                    <div class="col-md-7">
                                        <div class="row">
                                            <div class="col-md-6"><button onclick="BackToProductionSize();" class="btn btn-primary" style="background:transparent; color:#000; border:2px solid #4AC815; border-radius:50px; width: 100%;">Back</button></div>
                                            <div class="col-md-6"><button id="next_btn" onclick="SaveCustomizerPage();" class="btn btn-primary" style="background:#4AC815;  color:#fff; border:2px solid #4AC815; border-radius:50px; width:100%;">Next</button></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="type_text" class="row" style="padding: 0px 0px 0px 10px; margin-top: 20px; display:none;">


                                <div class="row" style="margin-top:20px;">
                                    <div class="col-md-2" style="border:1px solid #ccc; min-height:50px;">
                                        <img src="{{ url('/text-icon-dark.png') }}" style="height:70%; margin-top:15%;" />
                                    </div>
                                    <div class="col-md-8" style="border:1px solid #ccc; min-height:50px;">
                                        <input id="type_text_field" type="text" style="height: 100%; outline: none; box-shadow: none; border-radius: 0; border: none;" class="form-control" placeholder="Type your text here...">
                                    </div>
                                    <div class="col-md-2" style="border:1px solid #ccc; min-height:50px;">
                                        <p onclick="AddText();" style="cursor:pointer; top:15px; position:relative;" id="add_text">Add</p>
                                        <p onclick="RemoveText();" id="remove_text" style="font-weight: 700; cursor:pointer; display: none; text-align: center; font-size: 30px; top: 8px; position: relative; color: red;">X</p>
                                    </div>
                                    <div id="color_picker_div" style="display:none; background: #fff; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; position:absolute; width:35%; margin-left:5%; top:51%; min-height: 220px; padding: 12px; z-index: 10000;">
                                        <button class="btn-close" style="float:right; position:relative; right:0px; margin-bottom: 20px;" onclick="setTextColor2();"></button>
                                        <span style="position:absolute; left:20px; top:20px; color:#000;">Set a text color</span>
                                        <div class="row" style="width:100%; position:relative; padding-left: 5%; text-align:center;">
                                            <div class="col-md-2" onclick="setTextColor('black');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px; background:black; height:40px;">
                                                <span style="color:#fff;">Black</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('white');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:white; height:40px;">
                                                <span>White</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Light Yellow');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightYellow; height:40px;">
                                                <span style="color: #000">Light Yellow</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('yellow');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:yellow; height:40px;">
                                                <span style="color: #000;">Yellow</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('orange');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:orange; height:40px;">
                                                <span style="color: #000;">Orange</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Purple');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Purple; height:40px;">
                                                <span style="color: #fff;">Purple</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Pink');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Pink; height:40px;">
                                                <span style="color: #000;">Pink</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Light Pink');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightPink; height:40px;">
                                                <span style="color: #000;">Light Pink</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Light Blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightBlue; height:40px;">
                                                <span style="color: #000">Light Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Royal Blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Royalblue; height:40px;">
                                                <span style="color: #000">Royal Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('red');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:red; height:40px;">
                                                <span style="color: #fff">Red</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Navy Blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Navy; height:40px;">
                                                <span style="color: #fff">Navy Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Light Green');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightGreen; height:40px;">
                                                <span style="color: #000;">Light Green</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Green');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Green; height:40px;">
                                                <span style="color: #fff">Green</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Forest Green');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:ForestGreen; height:40px;">
                                                <span style="color: #fff">Forest Green</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Gold');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Gold; height:40px;">
                                                <span style="color: #000;">Gold</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Silver');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:Silver; height:40px;">
                                                <span style="color: #fff">Silver</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Light Grey');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:LightGrey; height:40px;">
                                                <span style="color: #fff">Light Grey</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('Dark Grey');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:DarkGrey; height:40px;">
                                                <span style="color: #fff">Dark Grey</span>
                                            </div>

                                            <div class="col-md-2" onclick="setTextColor('blue');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px;  background:blue; height:40px;">
                                                <span style="color: #fff">Blue</span>
                                            </div>
                                            <div class="col-md-2" onclick="setTextColor('brown');" style="width:17%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 10px; padding-top: 10px; background:brown; height:40px;">
                                                <span style="color: #fff">Brown</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div id="text_align_div" style="display:none; background: #fff; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; position:absolute; width:35%; margin-left:5%; top:51%; min-height: 150px; padding: 12px; z-index: 10000;">
                                        <button class="btn-close" style="float:right; position:relative; right:0px; margin-bottom: 20px;" onclick="SetTextAlign2();"></button>
                                        <span style="position:absolute; left:20px; top:20px; color:#000;">Set a text alignment</span>
                                        <div class="row" style="width:100%; position:relative; padding-left: 5%; text-align:center;">
                                            <div class="col-md-2" onclick="SetTextAlign(1);" style="width:30%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 12px; padding-top: 10px;  height:50px;">
                                                <img src="/left-icon.png" style="height:30px;" />
                                            </div>
                                            <div class="col-md-2" onclick="SetTextAlign(2);" style="width:30%; margin-right:3%; border-radius: 4px; border:1px solid #ccc; margin-bottom: 15px; cursor: pointer; font-size: 12px; padding-top: 10px; height:50px;">
                                                <img src="/text-align.png" style="height:30px;" />
                                            </div>
                                            <div class="col-md-2" onclick="SetTextAlign(3);" style="width:30%; margin-right:3%; border-radius: 4px; border:1px solid #ccc;  margin-bottom: 15px; cursor: pointer; font-size: 12px; padding-top: 10px;  height:50px;">
                                                <img src="/right-icon.png" style="height:30px;" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12" style="border:1px solid #ccc; min-height:70px; padding:0px;">
                                        <div class="row" style="padding:0px; margin:0px; height: 100%;">
                                            <div class="col-md-4 col-6" style="padding:0px; margin:0px; border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;">
                                                <select id="font_id" onchange="setFontFamily(this.value);" style="height: 100%; outline: none; box-shadow: none; border: none !important; border-radius: 0; font-weight:600;" name="font_id" class="form-control">
                                                    <option value="Block">Font - Block</option>
                                                    <option value="Casual">Casual</option>
                                                    <option value="Charisma">Charisma</option>
                                                    <option value="Old English">Old English</option>
                                                    <option value="Script">Script</option>

                                                </select>
                                            </div>
                                            <div class="col-md-2 col-6" style="padding:0px; margin:0px; border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;">
                                                <img onclick="setTextColor2();" src="https://createworkwear.com/circle-color.png" style="height:20px; width:20px; cursor: pointer; margin-top: 20px;">
                                                <input type="hidden" name="color_text_id" id="color_text_id">
                                                <input type="hidden" name="mobile_color_text_id" id="mobile_color_text_id">

                                            </div>

                                            <div class="col-md-2 col-6" style="padding:0px; margin:0px; border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;">
                                                <img onclick="SetTextAlign2();" src="https://createworkwear.com/text-align.png" style="height:20px; width:20px; cursor: pointer; margin-top: 20px;">
                                                <input type="hidden" name="color_text_id" id="color_text_id">
                                            </div>
                                            <div class="col-md-1 col-3" style="border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;" >
                                                <a href="javascript:;" id="bold_btn" onclick="SetBoldText()" style="font-weight: normal; color:#000; position: relative; top:20px; text-decoration:none;">B</a>
                                            </div>
                                            <div class="col-md-1 col-3" style="border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;" >
                                                <a href="javascript:;" onclick="SetTextSize(1);" style="text-decoration:none;" ><p id="small_size_btn" style="margin-top:20px; color:#000; text-decoration:none;">S</p></a>
                                            </div>
                                            <div class="col-md-1 col-3" style="border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;">
                                                 <a href="javascript:;"  onclick="SetTextSize(2);" style="text-decoration:none;" ><p id="medium_size_btn" style="margin-top:20px; color:#000; text-decoration:none;">M</p></a>
                                            </div>
                                            <div class="col-md-1 col-3" style="border-bottom: 2px solid #ccc; border-right: 2px solid #ccc;">
                                                 <a href="javascript:;"  onclick="SetTextSize(3);" style="text-decoration:none;" ><p id="large_size_btn" style="margin-top:20px; color:#000; text-decoration:none;">L</p></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id="footer" class="row" style="margin-top:45%;">
                                    <div class="col-md-4 d-md-block d-none" style="margin-top:5px;"><img src="{{ url('/play-icon.png') }}" style="height:25px; visibility: hidden; float:left; position:relative;" /><p style="font-size: 13px; float:left; position:relative; visibility: hidden; margin-top: 2px; margin-left:10px;">How to add a logo</p></div>
                                    <div class="col-md-1"></div>
                                    <div class="col-md-7">
                                        <div class="row">
                                            <div class="col-md-6"><button onclick="BackToProductionSize();" class="btn btn-primary" style="background:transparent; color:#000; border:2px solid #4AC815; border-radius:50px; width: 100%;">Back</button></div>
                                            <div class="col-md-6"><button id="next_btn" onclick="SaveCustomizerPage();" class="btn btn-primary" style="background:#4AC815;  color:#fff; border:2px solid #4AC815; border-radius:50px; width:100%;">Next</button></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="accredited_logos" class="row" style="padding: 0px 0px 0px 10px; margin-top: 20px; display:none;">
                                <div class="col-md-10"><h5 style="text-align:center;">Select an industry standard logo</h5></div>
                                <div class="col-md-2"><a href="#"><</a> <a href="#">></a></div>
                                <div class="row">
                                <div class="col-md-3">
                                    <img src="" style="width:100%; height:100px; object-fit:contain; border:2px solid #ccc;" />
                                </div>
                                <div class="col-md-3">
                                    <img src="" style="width:100%; height:100px; object-fit:contain; border:2px solid #ccc;" />
                                </div>
                                <div class="col-md-3">
                                    <img src="" style="width:100%; height:100px; object-fit:contain; border:2px solid #ccc;" />
                                </div>
                                <div class="col-md-3">
                                    <img src="" style="width:100%; height:100px; object-fit:contain; border:2px solid #ccc;" />
                                </div>
                                </div>
                                <div id="footer" class="row" style="margin-top:350px;">
                                    <div class="col-md-4 d-md-block d-none" style="margin-top:5px;"><img src="{{ url('/play-icon.png') }}" style="height:25px; visibility: hidden; float:left; position:relative;" /><p style="font-size: 13px; float:left; visibility: hidden; position:relative; margin-top: 2px; margin-left:10px;">How to add a logo</p></div>
                                    <div class="col-md-1"></div>
                                    <div class="col-md-7">
                                        <div class="row">
                                            <div class="col-md-6"><button class="btn btn-primary" style="background:transparent; color:#000; border:2px solid #4AC815; border-radius:50px; width: 100%;">Back</button></div>
                                            <div class="col-md-6"><button id="next_btn" onclick="SaveCustomizerPage();" class="btn btn-primary" style="background:#4AC815;  color:#fff; border:2px solid #4AC815; border-radius:50px; width:100%;">Next</button></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div id="customizer_configs_stage2" style="display:none;">
                            <div class="row" style="display: block;">
                                <img src="{{ url('/success-icon.png') }}" style="height:80px; width:100px; object-fit: contain;" />
                                <h3 style="color:#4AC815; font-size: 20px; margin-top: 5px; font-weight: bold;">Success!</h3>
                                <p style="font-size:14px;">Please name your logo for easy ordering in the future</p>
                                <input type="text" name="save_as" id="save_as" style="width: 70%; text-align: center; margin-left: 15%; border-radius: 50px;" class="form-control" placeholder="Save Logo as..." />
                            </div>
                            <div class="row" style="display: block; margin-top: 30px; margin-bottom:30px;">

								<p style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto; margin-top:15px;">By proceeding with your order, you acknowledge and agree to the following terms and conditions:</p>

								 <p style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto;">Please be advised that we exclusively accept the following:</p>

								<ul style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto;">
								    <li>Logos or designs created by you</li>
								    <li>Team or company logos for which you have the necessary usage rights</li>
								</ul>

								<p style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto;">However, please note that we are unable to accept the following:</p>
								<ul style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto;">
								    <li>Trademarked or copyrighted content, which brand logos or trademarks</li>
								    <li>Professional and collegiate sports team logos or mascots </li>
								    <li>Images or text that are offensive or deemed inappropriate</li>
								</ul>
								<p style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto; margin-top: 15px;">Please be aware that you are solely responsible for the ownership or rights associated with any files you upload. We retain the right to decline any content that does not adhere to these guidelines. In the event that your artwork is deemed unacceptable, your order will be cancelled, and you will be duly notified. </p>
								<p style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto;">By clicking the "Agree" button, you confirm that you have carefully read, understood, and consented to abide by these terms and conditions.</p>

                                <p style="margin-top:10px; margin-bottom: 10px;"><input type="checkbox" name="checkbox_agreed" id="checkbox_agreed" > I have read and accept the terms and conditions</p>
                                <button onclick="SaveCustomizerImage();" style="padding:15px 40px; margin-top: 15px; border:none; width: 70%; border-radius:50px; background: #4AC815; color:#fff;">SAVE</button>
                            </div>

                            <div id="footer" class="row" style="margin-top:30px; margin-bottom: 10px;">
                                <div class="col-md-4 d-md-block d-none" style="margin-top:5px;"><img src="{{ url('/play-icon.png') }}" style="height:25px; visibility: hidden; float:left; position:relative;" /><p style="font-size: 14px; float:left; position:relative; margin-top: 2px; visibility: hidden; margin-left:10px;">How to add a logo</p></div>
                                <div class="col-md-1"></div>
                                <div class="col-md-7">
                                    <div class="row">
                                        <div class="col-md-9 offset-md-3"><button class="btn btn-primary" onclick="backToCustomizer()" style="background:transparent; color:#000; border:2px solid #4AC815; border-radius:50px; width: 100%;">Back</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="screen3-main-3">

                </div>
                <div class="row" id="mobile-screen-4" style="display:none; padding:15px;">
                    <div class="row" style="display: block; text-align:center;">
                                <img src="{{ url('/success-icon.png') }}" style="height:100px; width:100px; object-fit: contain;" />
                                <h3 style="color:#4AC815; font-weight: bold;">Success!</h3>
                                <p>Please name your logo for easy ordering in the future</p>
                                <input type="text" name="save_as_mobile" id="save_as_mobile" style="width: 90%; margin-left: 6%; border-radius: 50px;" class="form-control" placeholder="Save as..." />
                            </div>
                            <div class="row" style="display: block; margin-top: 30px; margin-bottom:30px; padding-left:30px; padding-right: 10px; text-align: center;">
                                <p style="font-size: 10px; color: #595958; line-height: 20px; width: 90%; margin:auto; margin-top:15px;">By proceeding with your order, you acknowledge and agree to the terms and conditions.</p>
                                <p style="margin-top:10px; margin-bottom: 10px;"><input type="checkbox" name="checkbox_agreed" id="checkbox_agreed_mobile" > I have read and accept the terms and conditions</p>
                                <button onclick="SaveCustomizerImageMobile();" style="padding:15px 40px; margin-top: 30px; border:none; width: 100%; border-radius:50px; background: #4AC815; color:#fff;">SAVE</button>
                            </div>

                            <div id="footer" class="row" style="margin-top:25px; text-align: center;">
                                <div class="col-md-4 d-md-block d-none" style="margin-top:5px;"><img src="{{ url('/play-icon.png') }}" style="height:25px; visibility: hidden;  float:left; position:relative;" /><p style="font-size: 14px; float:left; position:relative; margin-top: 2px; visibility: hidden; margin-left:10px;">How to add a logo</p></div>
                                <div class="col-md-1"></div>
                                <div class="col-md-7">
                                    <div class="row" style="text-align:left;">
                                        <div class="col-12" style="margin-left: 10px;" ><button class="btn btn-primary" onclick="backToCustomizerMobile()" style="background:transparent; color:#000; border:2px solid #4AC815; border-radius:50px; width: 100%;">Back</button></div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            <div id="screen4" >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="product_added_successfully" style="z-index: 10000;" tabindex="-1" aria-labelledby="position_modal_label" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 40%; z-index: 10000; margin-top: 15%; ">
        <div class="modal-content" style="border-radius: 0px; height: 230px;">

          <div class="modal-body" style="padding:0px; margin:0px;  text-align: center; min-height:230px; height: 230px;">
            <button type="button" class="btn-close" style="right:10px; top:8px; float:right; position: relative;" data-bs-dismiss="modal" aria-label="Close"></button>
                <img src="https://createworkwear.com/success-icon.png" style="height: 70px; margin-top: 35px; margin-bottom: 12px; margin-left:5px;  position:relative;" />
                <p style="color:#4AC815; font-size: 26px; margin-bottom: 5px; font-weight: 500;">Success!</p>
                <p style="font-weight:300;">Product has successfully been added to your basket.</p>
          </div>
      </div>
    </div>
</div>

<div class="modal fade" id="msg_failed" style="z-index: 10000;" tabindex="-1" aria-labelledby="position_modal_label" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 40%; z-index: 10000; margin-top: 15%; ">
        <div class="modal-content" style="border-radius: 0px; height: 230px;">

          <div class="modal-body" style="padding:0px; margin:0px;  text-align: center; min-height:230px; height: 230px;">
            <button type="button" class="btn-close" style="right:10px; top:8px; float:right; position: relative;" data-bs-dismiss="modal" aria-label="Close"></button>
                <img src="https://createworkwear.com/oops.png" style="height: 100px; margin-top: 35px; margin-bottom: 12px; margin-left:22px;  position:relative;" />
                <p id="failed_msg_title" style="color:#DB0D14; font-size: 26px; margin-bottom: 5px; font-weight: 500;">Failed!</p>
                <p id="failed_msg" style="font-weight:300;"></p>
          </div>
      </div>
    </div>
</div>

<div class="modal fade" id="error_modal" style="z-index: 10000;" tabindex="-1" aria-labelledby="errr_modal_label" aria-hidden="true">
  <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-body" style="padding:0px; margin:0px;  text-align: center; min-height:230px; height: 230px;">
            <button type="button" class="btn-close" style="right:10px; top:8px; float:right; position: relative;" data-bs-dismiss="modal" aria-label="Close"></button>
                <h3 style="margin-top:20px; color:#595958;">Is there something wrong?</h3>
                <p style="color:#595958;">Did you mean to stop personalising your product?</p>
                <p style="color: #595958;">If so, your design will be lost</p>
                <div class="row">
                    <div class="col-md-6" style="padding:0px 40px;"><button  data-bs-dismiss="modal" onclick="FinalCloseCustomizer();" class="btn btn-primary error_modal_yes">YES</button></div>
                    <div class="col-md-6" style="padding:0px 40px;"><button  data-bs-dismiss="modal" aria-label="Close" class="btn-primary btn" style="width:100%; padding: 12px; background: #DB0D13; border:none; border-radius: 50px;">CANCEL</button></div>
                </div>
          </div>
      </div>
    </div>
</div>

<div class="modal fade" id="logo_added_successfully" style="z-index: 10000;" tabindex="-1" aria-labelledby="logo_modal_label" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 40%; z-index: 10000; margin-top: 15%; ">
        <div class="modal-content" style="border-radius: 0px; height: 380px;">
          <div class="modal-body" style="padding:0px; margin:0px;  text-align: center; min-height:380px; height: 380px;">
                <img src="https://createworkwear.com/success-icon.png" style="height: 70px; margin-top: 35px; margin-bottom: 12px; margin-left:5px;  position:relative;" />
                <p style="color:#4AC815; font-size: 26px; margin-bottom: 5px; font-weight: 500;">Success!</p>
                <p style="font-weight:300;">Your Logo has successfully been added to your product.</p>
                <div class="row">
                    <div class="col-md-6"><p style="font-weight:300; padding:20px 20px 0px 20px;">Would you like to add more  logos to this product?</p>
                        <button onclick="SelectMore();" style="padding:10px 25px; width: 200px;  border-radius: 50px; color:#fff; background:#0079B8; border:none;" >SELECT</button></div>
                    <div class="col-md-6"><p style="font-weight:300; padding:20px 20px 0px 20px; ">Are you happy with the logo you have added?</p>
                        <button onclick="ContinueToStep3();" style="padding:10px 25px; width: 200px;  color:#fff; border-radius: 50px; background:#4AC816; border:none;">CONTINUE</button></div>
                </div>
          </div>
      </div>
    </div>
</div>

<div class="modal fade" id="zoom_in_div" style="z-index: 10000;" tabindex="-1" aria-labelledby="zoom_in_div_label" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 1200px; max-height: 850px; z-index: 10000; margin-top: 2%; ">
        <div class="modal-content" style="border-radius: 0px; max-height: 850px;">
          <div class="modal-body" style="padding:0px; margin:0px;  text-align: center; max-height: 850px;">
            <div class="col-md-2 offset-md-10" style="text-align:right; padding-right: 0px;">
                    <button type="button" style="position:relative; top:10px; left:-10px;" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <img id="zoom_in_img" >
          </div>
      </div>
    </div>
</div>

<div class="modal fade" id="position_modal" tabindex="-1" aria-labelledby="position_modal_label" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 97%; margin-top: 3%; ">
    <div class="modal-content" style="border-radius: 0px;">
      <div class="modal-body" style="padding:0px; margin:0px;">

            <div class="modal-header" style="padding-left: 0px; padding-right: 0px; padding:20px 20px; border:none">
                <div class="row" style="width:100%;">
                    <div class="col-md-2">
                        <img src="{{ url('/logo.png') }}" style="width: 100%;" />
                    </div>
                    <div class="col-md-2">
                        <img src="{{ url('/CREO-Logo.png') }}" style="max-height:30px; object-fit:contain; width:100%;" />
                    </div>
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-2" style="text-align:right; padding-right: 0px;">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
            </div>

            <div class="row" style="padding:20px 20px;">
                <h3>Positions</h3>
                <p style="margin-top:10px; margin-bottom: 30px;">Please select the position you would like your personalisation to appear</p>
                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==26)
                        <div class="col-md-3" id="position-div-26" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                            <h5 style="font-size: 15px; font-weight: 600;">Left Chest</h5>
                            <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/left-chest.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>
                            <button onclick="SetLogoToPosition(26, {{ $product_variant->id }}, {{ $product_id }}, '<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                        </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==228)
                        <div class="col-md-3" id="position-div-228" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                            <h5 style="font-size: 15px; font-weight: 600;">Bundle</h5>
                            <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/left-chest.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>
                            <button onclick="SetLogoToPosition2(228, {{ $product_variant->id }}, {{ $product_id }}, '<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{ echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                        </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==27)
                        <div class="col-md-3" id="position-div-27" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                            <h5 style="font-size: 15px; font-weight: 600;">Right Chest</h5>
                            <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/right-chest.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>
                            <button onclick="SetLogoToPosition(27, {{ $product_variant->id }}, {{ $product_id }}, '<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 180; } }else{ echo 180; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                        </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==40)
                    <div class="col-md-3" id="position-div-40" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Large Chest</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/large-front.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(40, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach


                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==39)
                    <div class="col-md-3" id="position-div-39" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Shoulders</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/shoulders.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(39, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==28)
                    <div class="col-md-3" id="position-div-28" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Left Sleeve</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/left-sleeve.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(28, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==29)
                    <div class="col-md-3" id="position-div-29" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Right Sleeve</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/right-sleeve.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(29, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==30)
                    <div class="col-md-3" id="position-div-30" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Back Yoke</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/back-yoke.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(30, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==41)
                    <div class="col-md-3" id="position-div-41" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Full Back</h5>
                         <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(41, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==31)
                    <div class="col-md-3" id="position-div-31" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Left Leg</h5>
                         <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(31, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==32)
                    <div class="col-md-3" id="position-div-32" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Right Leg</h5>
                         <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(32, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==33)
                    <div class="col-md-3" id="position-div-33" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Hat Front</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(33, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==35)
                    <div class="col-md-3" id="position-div-33" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Hat Right</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(35, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==36)
                    <div class="col-md-3" id="position-div-33" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Hat Left</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(36, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach

                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==158)
                    <div class="col-md-3" id="position-div-158" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Bag Front</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                               <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>
                        <button onclick="SetLogoToPosition(158, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach


                @foreach($product_variants as $product_variant)
                    @if($product_variant->attribute_id[0]==8 && $product_variant->product_attribute_value_id[0]==97)
                    <div class="col-md-3" id="position-div-97" style="text-align:center; padding:0px 50px; margin-bottom: 25px;">
                        <h5 style="font-size: 15px; font-weight: 600;">Bag Back</h5>
                        <?php
                            $position_id=$product_variant->product_attribute_value_id[0];
                            $ProductPosition=\App\Models\ProductPosition::where('product_id', $product_id)->where('position_id', $position_id)->first();
                            if(isset($ProductPosition) && isset($ProductPosition->img_url) && $ProductPosition->img_url!=''){ ?>
                                <img src="{{ $ProductPosition->img_url }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php }else{ ?>
                                <img src="{{ url('/full-back.png') }}" style="width:100%; height:300px; object-fit: contain;" />
                            <?php } ?>

                        <button onclick="SetLogoToPosition(97, {{ $product_variant->id }}, {{ $product_id }},'<?php if(isset($ProductPosition)){
                              if($ProductPosition->left_desktop!=''){ echo $ProductPosition->left_desktop; }else{ echo 290; } }else{ echo 290; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->top_desktop!=''){ echo $ProductPosition->top_desktop; }else{ echo 130; } }else{echo 130; } ?>', '<?php if(isset($ProductPosition)){
                        if($ProductPosition->width!=''){ echo  $ProductPosition->width; }else{ echo 55; } }else{ echo 55; } ?>','<?php if(isset($ProductPosition)){
                        if($ProductPosition->height!=''){ echo $ProductPosition->height; }else{ echo 55; } }else{ echo 55; } ?>');" style="padding:5px 40px; width: 100%; margin-top: 20px; border:2px solid #000; background: #fff; border-radius:50px;">Select</button>
                    </div>
                    @endif
                @endforeach


            </div>

      </div>
    </div>
  </div>
</div>
</body>
</html>
