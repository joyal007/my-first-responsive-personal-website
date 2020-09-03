$(document).ready(function(){
    $("#comment-form").validate({
        rules:{
            name:{
                required:true,
                minlegth:4
            },
            phone:{
                required:true,
            },
            emailid:{
                required:true,
                email:true,
            },

        }
    })
})