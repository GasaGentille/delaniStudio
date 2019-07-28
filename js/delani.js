$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault()
        var inputData =$("input#nameInput").val();
        var inputEmail=$("input#emailInput").val();
        var textAreaData= $("textarea#textareaInput").val();
       
        $("#form")[0].reset();
        alert("Dear " +inputData+" we have received your message and thank you for contacting us.");
      
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