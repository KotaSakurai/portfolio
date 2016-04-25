$(function() {
	var flag = 0;
    $("#position2").click(function(){
    	

    	if ( flag == 0){
    		flag = 1;
    		$("#position2").animate({
            	"top":"200px",
            	"left":"200px"
        	});
        
       		$("#position3").css("display", "none");
   		    $("#position4").css("display", "none");
    	    $("#position5").css("display", "none");
    	    $("#position6").css("display", "none");
    	    $("#position7").css("display", "none");
    	}
    	else {
    		flag = 0;
			$("#position2").animate({
            	"top":"-200px",
            	"left":"-200px"
        	});
    	}
        
		     
    });
});