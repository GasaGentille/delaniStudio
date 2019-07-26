$(document).ready(function() {
    $("form").submit(function(event) {
        var inputData =$("input#nameInput").val();
        var inputEmail=$("input#emailInput").val();
        var textareaData= $("textarea#textareaInput").val();
       
        alert("Dear " +inputData+" we have received your message and thank you for contacting us.");
        });
        $(".icons").click(function(){
            $(".description").toggle();
            $(".icons").toggle();
        });
        $(".description").click(function(){
            $(".description").toggle();
            $(".icons").toggle();
        }); 
});

