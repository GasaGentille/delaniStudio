$(document).ready(function() {

    $("form").submit(function(event) {
        event.preventDefault()
        var inputData =$("input#nameInput").val();
        var inputEmail=$("input#emailInput").val();
        var textAreaData= $("textarea#textareaInput").val();

        $(".error").remove();
        
        if (inputData.length < 1) {
            $('#nameInput').after('<span class="error">This field is required</span>');
        }
        else if (inputEmail.length < 1) {
            $('#emailInput').after('<span class="error">This field is required</span>');
            
        }else{
            var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            var validEmail = regEx.test(inputEmail);
            if (!validEmail) {
                $('#emailInput').after('<span class="error">Enter a valid email</span>');
            }else{
                if (textAreaData.length < 1) {
                    $('#textareaInput').after('<span class="error">This field is required</span>');
                }  else {
            
                        $("#form")[0].reset();
                        alert("Dear " +inputData+" we have received your message and thank you for contacting us.");
                    }
                }
            }
        });
        
        var icn = $(".icons");
        $.each(icn, function(index, element){
                $(element).click(function(){
                $(".description"+(index+1)).toggle();
                $(this).toggle();
            })
            $(".description"+(index+1)).click(function(){
                $(this).toggle();
                $(element).toggle();

            } );
        });
        
});