$(function() {
	var flag = 0;
	var position =[0,0, 70,70,200,200,330,330,  125,275,50,350,125,275];
	var position_number = 0;
	var display_what;
	var hold_position;

	function center (name){

		$(name).toggle();
		$(name).css({
    	    "top":"200px",
    	    "left":"200px"
    	});
	}

	function center_move (name){
		$(name).animate({
    	    "top":"200px",
    	    "left":"200px"
    	});

	}
	function toggle( number ){
		for (i=1;i < 8; i++){

			if(i == number){
				continue;
			}
			//変数のくっつけ方
			$("#position"+ i).toggle();

		}
	}
	function circle_delete ( name ){
		
		if ( name == "product" || name =="d_product"){
            console.log("sss");
			for ( i=1; i < 7; i++){
                /*if(i==3 || i==2){
                    $("#"+　name　+ i).toggle();
                    $("#"+　name　+ i).css({
                        "top":"100px",
                        "left":"200px"
                    });
                    continue;
                }*/
				$("#"+　name　+ i).toggle();
				$("#"+　name　+ i).css({
		    	    "top":"100px",
		    	    "left":"200px"
    			});
			}
		}
		
		else {
			for ( i=1; i < 9; i++){
				$("#"+　name　+ i).toggle();
				$("#"+　name　+ i).css({
	    	    	"top":"200px",
	    	    	"left":"200px"
    			});
			}
		}
		
	}

	function circle_display_product ( number ){
        //なぜか-95するtopからの距離
		var array =[0,-25,125,  -25,275,  105,50,  105,350,  330,125,  330,275];
		var j=1;
		for( i=1; i < 5; i++){
			console.log(array[i])
			//$("#product" + i).toggle();
			$("#product"+ i).delay(i*100).toggle().animate({
    	    	"opacity":"0.8",
    	    	"top": array[j]+"px",
    	    	"left": array[j+1] + "px"
    	    });
    	    j += 2;
		}
	}

	function display_backbutton(number) {
		$("#back").toggle();
		$("#back").animate({
			"opacity":"0.8",
			"top": "460px",
			"left":"200px"
		});
	}


	function circle_display_profile ( number ){
		var array =[0,70,125,  70,275,  200,50,  200,350,  330,125,  330,275];
		var j=1;

		$("#profile1").toggle();
		$("#profile1").delay(500).animate({
    	    	"opacity":"0.7",
    	    	"top": "70px",
    	    	"left": "125px"
    	});

    	$("#profile6").toggle();
		$("#profile6").delay(500).animate({
    	    	"opacity":"0.7",
    	    	"top": array[11]+"px",
    	    	"left": array[11+1] + "px"
    	});

    	$("#profile2").toggle();
		$("#profile2").delay(1000).animate({
    	    	"opacity":"0.7",
    	    	"top": array[3]+"px",
    	    	"left": array[3+1] + "px"
    	});

    	$("#profile5").toggle();
		$("#profile5").delay(1000).animate({
    	    	"opacity":"0.7",
    	    	"top": array[9]+"px",
    	    	"left": array[9+1] + "px"
    	});

    	$("#profile3").toggle();
		$("#profile3").delay(1500).animate({
    	    	"opacity":"0.7",
    	    	"top": array[5]+"px",
    	    	"left": array[5+1] + "px"
    	});

    	$("#profile4").toggle();
		$("#profile4").delay(1500).animate({
    	    	"opacity":"0.7",
    	    	"top": array[7]+"px",
    	    	"left": array[7+1] + "px"
    	});

	}

    function circle_display_d_product ( number ){
        //なぜか-95するtopからの距離
        var array =[0,-25,125,  -25,275,  105,50,  105,350,  235,125,  235,275];
        var j=1;
        for( i=1; i < 6; i++){
            console.log(array[i])
            //$("#product" + i).toggle();
            $("#d_product"+ i).delay(i*100).toggle().animate({
                "opacity":"0.8",
                "top": array[j]+"px",
                "left": array[j+1] + "px"
            });
            j += 2;
        }
    }

    function circle_display_skill ( number ){
        var array =[0,70,125,  200,50,  330,125, 70,275,  200,350, 330,275,   70,425,   200,500, 200,500];
        var j=1;

        for(i=1; i < 9; i++){
            $("#skill"+ i ).toggle();
            $("#skill" + i).delay(i * 100).animate({
                "opacity":"0.8",
                "top": array[j]+"px",
                "left": array[j+1]+"px"
            });
            j += 2;
        }

    }


	$("#back").click(function(){
		$(hold_position).animate({
            "top": position[position_number]+"px",
            "left":position[position_number + 6]+"px"
        });
        toggle(position_number); 
        circle_delete(display_what);
        center_move("#back");
        setTimeout(function(){
            $("#back").animate({"opacity":"0"},200).toggle();
        },400);
        
        //かぶせ解除
        $("#cover").toggle();

        if (display_what=="profile"){
            for(i=1; i<15; i++){
                $("#name"+i).hide();
            }

        }
        else if (display_what=="skill"){
            for(i=1; i<15; i++){
                $("#skill"+i).hide();
            }

        }
	});


	

    $("#position2").click(function(){
    	hold_position = "#position2";
    	position_number =2;
    	display_what = "product";

    	center_move("#position2");
    	toggle(2);

    	//かぶせ
    	$("#cover").toggle();
      
      	//表示のアニメ
      	circle_display_product();
      	display_backbutton();
    });

    $("#position3").click(function(){
    	hold_position = "#position3";
    	position_number = 3;
    	display_what = "profile";

    	center_move("#position3");
    	toggle(3);
      
      	//かぶせ
    	$("#cover").toggle();
      
      	//表示のアニメ
      	circle_display_profile();
      	display_backbutton();
    });

    $("#position4").click(function(){
        hold_position = "#position4";
        position_number = 4;
        display_what = "d_product";      		//表示のアニメ
      	
        center_move("#position4");
        toggle(4);

        $("#cover").toggle();

        circle_display_d_product();
        display_backbutton();
    	
    });

    $("#position5").click(function(){
    	
    });

    $("#position6").click(function(){
    	hold_position = "#position6";
        position_number = 6;
        display_what = "skill";             //表示のアニメ
        
        center_move("#position6");
        toggle(6);

        $("#cover").toggle();

        circle_display_skill();
        display_backbutton();
    });

    $("#position7").click(function(){
    	if ( flag == 0){
    		flag = 1;
    		center_move("#position7");
    		toggle(7);
      
      		//表示のアニメ
      		circle_display_profile();
    	}
    	else {
    		flag = 0;
    		//戻るアニメ
			$("#position7").animate({
            	"top":"330px",
            	"left":"275px"
        	});
        	toggle(7); 
        	circle_delete("profile");
    	}  
    });



    //mouse overの処理
    $("#pkpk").hover(
        function(){
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();
            $("#sen1").html('<p>TODOリストにアイデアを足したTODOリストアプリ。TODOの入力が全てキューのように管理され、入力したTODOのうち、一番最初にいれたものしか見えないといったもの。そのことによってやり残すTODOがなくなるといったアプリ。</p>');
            $('.consept').html('<span >--- concept ---</span><br><span >やりのこしのないToDo app</span>');
            $(".title").html("<span>PAKUPAKUTODO</span>");
            $("#sen3").html("<span >Lang:  HTML / CSS / JavaScript</span><br><span>Tool: Monaca(ハイブリッドアプリplatform)</span><br><span>Days: 4days</span><br><span >make : character / idea / logo design / layout / UI design </span><br><span> 2014/10</span><br>");
            $(".pic").html('<img src="../image/pkpksc.png" width="375" height="667">');
        },
        function(){
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();
        }
    );

     $("#radio").hover(
        function(){
            
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();

            $("#sen1").html('<p>アプリを使う仲間うちでそれぞれが好きなアーティストを登録し、その登録に応じたアーティストの曲をランダムで流す。その流れる音楽をそれぞれの端末でリアルタイムに同期され曲が流れる。そのことによって同時刻に同じ場所にいなくても同じ音楽を共有できるといったゆる〜いつながりを生み出す。</p>');
            $(".title").html("<span>RadioS</span>");
            $(".consept").html('<span >--- concept ---</span><br><span>音楽を共有してゆる〜いつながりを生みたい</span>');
            $("#sen3").html('<span >Lang:  HTML / CSS / JavaScript</span><br><span>Tool: Monaca(ハイブリッドアプリplatform)</span><br><span>Days: 15days</span><br><span >make : character / idea / logo design / layout / UI design </span><br><span> 2015/11</span><br>');
            $(".pic").html('<img src="../image/radiosc.png" width="375" height="667">');
        },
        function(){
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();
            
        }
    );

    $("#cocoyan").hover(
        function(){
            
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();

            $("#sen1").html('<p>"COCO-YAN" はTwitterから友達が行きたかった場所を一緒に探してくれます.</p><p>https://cocoyan.herokuapp.com/</p>');
            $(".title").html("<span>COCO-YAN</span>");
            $(".consept").html('<span >--- concept ---</span><br><span>彼女にここいきたかったんでしょ？を提供して喜ばせたい</span>');
            $("#sen3").html('<span >Lang:  HTML / CSS / JavaScript / Ruby / Ruby on rails </span><br><span>Tool: </span><br><span>Days: 13days</span><br><span >make : layout / idea / logo design / UI design </span><br><span> 2015/10</span><br>');
            $(".pic").html('<img src="../image/cocoyansc.png" width="375" height="667">');
        },
        function(){
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();
            
        }
    );

    $("#hack").hover(
        function(){
            
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();

            $("#sen1").html('<p>動くんです。</p><p>hack day 2016 by yahoo!　出場作品。磁石と砂鉄を組み合わせた時のかわいさで面白いものをつくれないかと工作した。</p>');
            $(".title").html("<span>動くんです。</span>");
            $(".consept").html('<span >--- concept ---</span><br><span>砂鉄×磁石×プログラミング</span>');
            $("#sen3").html('<span >Lang: </span><br><span>Tool: Arduino / 3Dprinter </span><br><span>Days: 24 hours</span><br><span >make : idea / name / 組み立て / program </span><br><span> 2016/02</span><br>');
            $(".pic").html('<img src="../image/hackdaysc.png" width="375" height="667">');
        },
        function(){
            $(".description").toggle();
            $(".description2").toggle();
            $(".pic").toggle();
            
        }
    );

    $("#profile1").hover(
        function(){
            $("#name1").toggle();
            $("#name2").toggle();
            
        },
        function(){
            /*
            for(i=1; i<7; i++){
                $("#name"+i).toggle();
            }*/
            
        }
    );

    $("#profile2").hover(
        function(){
            $("#name3").toggle();
            $("#name4").toggle();
            
        },
        function(){   
        }
    );
    $("#profile3").hover(
        function(){
            $("#name5").toggle();
            $("#name6").toggle();   
        },
        function(){   
        }
    );

    $("#profile4").hover(
        function(){
            $("#name7").toggle();
            $("#name8").toggle();
            $("#name9").toggle();
        },
        function(){   
        }
    );

    $("#d1").hover(
        function(){
            $("#d_dis_product1").toggle();
        },
        function(){
            $("#d_dis_product1").toggle();
        }
    );
    $("#d2").hover(
        function(){
            $("#d_dis_product2").toggle();
        },
        function(){
            $("#d_dis_product2").toggle();
        }
    );
    $("#d3").hover(
        function(){
            $("#d_dis_product3").toggle();
        },
        function(){
            $("#d_dis_product3").toggle();
        }
    );
    $("#d4").hover(
        function(){
            $("#d_dis_product4").toggle();
        },
        function(){
            $("#d_dis_product4").toggle();
        }
    );
    $("#d5").hover(
        function(){
            $("#d_dis_product5").toggle();
        },
        function(){
            $("#d_dis_product5").toggle();
        }
    );

    $("#d6").hover(
        function(){
            $("#d_dis_product6").toggle();
        },
        function(){
            $("#d_dis_product6").toggle();
        }
    );

});