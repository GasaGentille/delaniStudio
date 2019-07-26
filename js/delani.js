$(document).ready(function() {
    $("form").submit(function(event) {
        var inputData =$("input#nameInput").val();
        var textareaData= $("textarea#textareaInput").val();
       
        alert("Dear" +inputData+ "we have");
        });



});
var inputData ;
var textareaData;
