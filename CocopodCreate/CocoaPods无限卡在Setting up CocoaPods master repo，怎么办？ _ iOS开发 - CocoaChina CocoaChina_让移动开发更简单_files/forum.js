// JavaScript Document

// JavaScript Document
jQuery(function(){
			 var tt;
			  jQuery("#test a").each(function(index){
				  jQuery(this).mouseover(function(){
					 var tt=setTimeout(function(){
					  if (index == 0){
						 jQuery("#test a span").eq(index).addClass("hg").siblings().removeClass("hg");
						 jQuery("#test a").eq(index).addClass("hover").siblings().removeClass("hover");
						 jQuery(".show_box").eq(index).addClass("display").siblings().removeClass("display");
					  }else {
																jQuery("#test a span").removeClass("hg");
																jQuery("#test a").eq(index).addClass("hover").siblings().removeClass("hover");
																jQuery(".show_box").eq(index).addClass("display").siblings().removeClass("display");
					  }
													                                    },0)
																						
																						
																						
																					
																	})
										 jQuery(this).mouseout(function(){
																    clearTimeout(tt);
																   })
										       })
			 });
																	   






/*�����˵�*/

function menu(x){
	if(x==1){document.getElementById("nav1").style.display="block"}
	if(x==2){document.getElementById("nav1").style.display="none"}
	if(x==3){document.getElementById("nav2").style.display="block"}
	if(x==4){document.getElementById("nav2").style.display="none"}	
	if(x==5){document.getElementById("nav3").style.display="block"}
	if(x==6){document.getElementById("nav3").style.display="none"}								 
	
	}


/*����*/
			
					 function chang(w)
			 {
					 if(w == 1) {
					  jQuery("#search1").show() //ѡ�е���������
					 	document.getElementById("bg").style.background="url(images/search_button.png?1223) no-repeat 0 0";
						 jQuery("#search2").hide(); //ѡ�е���������
					 }else {
						jQuery("#search2").show(); //ѡ�е���������
						jQuery("#search1").hide(); //ѡ�е���������
					 	document.getElementById("bg").style.background="url(images/search_button.png?1223) no-repeat left -29px";

					}
					
			 }
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
			 
function change(){
	var status = jQuery(".forum_center_wrap").css('display');

	if (status == 'none'){
		jQuery("#userclick").removeClass('useform_selectadd');
		jQuery("#userclick").addClass('click');
		jQuery(".forum_center_wrap").css('display','block');
	}else {
		jQuery("#userclick").removeClass('click');
		jQuery("#userclick").addClass('useform_selectadd');
		jQuery(".forum_center_wrap").css('display','none');
	}
}		


// JavaScript Document

// JavaScript Document
jQuery(function(){
	var tt;
	jQuery("#test a").each(function(index){
		 jQuery(this).mouseover(function(){
			var tt=setTimeout(function(){
			if (index == 0){
				jQuery("#test a span").eq(index).addClass("hg").siblings().removeClass("hg");
				jQuery("#test a").eq(index).addClass("hover").siblings().removeClass("hover");
				jQuery(".show_box").eq(index).addClass("display").siblings().removeClass("display");
			}else {
				jQuery("#test a span").removeClass("hg");
				jQuery("#test a").eq(index).addClass("hover").siblings().removeClass("hover");
				jQuery(".show_box").eq(index).addClass("display").siblings().removeClass("display");
			}
										},0)
										
										
										
									
					})
jQuery(this).mouseout(function(){
					clearTimeout(tt);
				   })
		  })
	})

 
 /*�����˵�*/

function menu(x){
	if(x==1){document.getElementById("nav1").style.display="block"}
	if(x==2){document.getElementById("nav1").style.display="none"}
	if(x==3){document.getElementById("nav2").style.display="block"}
	if(x==4){document.getElementById("nav2").style.display="none"}	
	if(x==5){document.getElementById("nav3").style.display="block"}
	if(x==6){document.getElementById("nav3").style.display="none"}								 
	
	}
 
/*����*/
 function chang(w)
 {
		 if(w == 1) {
		  jQuery("#search1").show() //ѡ�е���������
			document.getElementById("bg").style.background="url(images/search_button.png?1223) no-repeat 0 0";
			 jQuery("#search2").hide(); //ѡ�е���������
		 }else {
			jQuery("#search2").show(); //ѡ�е���������
			jQuery("#search1").hide(); //ѡ�е���������
			document.getElementById("bg").style.background="url(images/search_button.png?1223) no-repeat left -29px";

		}
		
 }
 
  
function change(){
	var status = jQuery(".forum_center_wrap").css('display');

	if (status == 'none'){
		jQuery("#userclick").removeClass('useform_selectadd');
		jQuery("#userclick").addClass('click');
		jQuery(".forum_center_wrap").css('display','block');
	}else {
		jQuery("#userclick").removeClass('click');
		jQuery("#userclick").addClass('useform_selectadd');
		jQuery(".forum_center_wrap").css('display','none');
	}
}		

/*���鷴��*/

 
jQuery(function() {
	jQuery("#fd_open").click(function() {
		var _this = jQuery(this);
		var _fb = jQuery("#feedback");
		if(_this.hasClass("close")) {
			_fb.animate({right: "-370px"}, 500, function() {
				_this.removeClass("close").addClass("open");
				_fb.css("z-index", "7777");
			});
		}
		else {
			_fb.css("z-index", "9999");
			_fb.animate({right: "0"}, 500, function() {
				_this.removeClass("open").addClass("close");
			});
		}
	})

	jQuery("#cc_add").click(function() {
		var type =  jQuery("input[name=fb_type]:checked").val();   
 		var fd_content = jQuery("#fd_content").val();	
		var code_msg = jQuery("#show").html();
		if(!fd_content) {  jQuery("#fb_sussess").html('���ݲ���Ϊ��'); return false;}

  		if(code_msg == "��֤��������ȷ"){
			var url = "http://d.cocoachina.com/main/feedback";
			jQuery.post(url,{"type": type, "fd_content": fd_content,  "winduid": winduid},function(result) {
  				jQuery("#fb_sussess").html('��л���ķ��������ǻ��һʱ�䴦��.'); 
				setTimeout(function() {
					var _this = jQuery("#fd_open");
					var _fb =jQuery("#feedback");
					_fb.animate({right: "-370px"}, 500, function() {
						_this.removeClass("close").addClass("open");
						_fb.css("z-index", "7777");
					});
				}, 1000);
				
				setTimeout(function() {
					jQuery("#fd_content").val('');
					jQuery("#show").html('');
					jQuery("#fb_sussess").html(''); 
					jQuery("#input1").val('');
				 
				}, 1500);

			});
		}else{
			jQuery("#show").html("��֤���������");
			jQuery("#fb_sussess").html('����ʧ��'); 
		}
 	})

	
	//�ص�����
	jQuery("#back2top").click(function() {
		jQuery(window).scrollTop(0); return false;
	});
	jQuery(window).scroll(function() {
		var _scroll = jQuery(document).scrollTop();
		if(_scroll > 200) {
			if(jQuery("#back2top").is(":hidden")) {
				jQuery("#back2top").fadeIn();
			}
			else {
				return;
			}
		}
		else {
			if(!jQuery("#back2top").is(":hidden")) {
				jQuery("#back2top").fadeOut();
			}
			else {
				return;
			}
		}
	})
});       
 


var code ; //��ȫ�� ������֤��
function createCode(){ 
	code = new Array();
	var codeLength = 4;//��֤��ĳ���
	var checkCode = document.getElementById("checkCode");
	checkCode.value = "";

	var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');

	for(var i=0;i<codeLength;i++) {
	   var charIndex = Math.floor(Math.random()*32);
	   code +=selectChar[charIndex];
	}
	if(code.length != codeLength){
	   createCode();
	}
	checkCode.value = code;
}

function validate () {
	var inputCode = document.getElementById("input1").value.toUpperCase();

	if(inputCode.length <=0) {
	   jQuery("#show").html("��������֤��");
	   return false;
	}
	else if(inputCode != code ){
	   jQuery("#show").html("��֤���������");
	   createCode();
	   return false;
	}else {
	   jQuery("#show").html("��֤��������ȷ");
	   return true;
	}
}
 
























