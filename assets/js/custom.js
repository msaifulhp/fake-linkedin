
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    /**nicescroll**/
     

    /**formvalidation**/
    $("#contacTForm").validate({
    	rules:{
    		emaila:{
    			required:true,
    		},
    		pasword:{
    			required:true,
    			minlength:8,
    		},
            fname:{
                required:true,
            },
            lname:{
                required:true,
            },
            Email:{
                required:true,
            },
            Pass:{
                required:true,
            },
          
    	}
    }) 
    /*****/
    $("html").niceScroll();    
});


