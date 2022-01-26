// Business Logic ------




// User Interface Logic -------
$(document).ready(function() {
  $("#formZero").submit(function(event) {
    event.preventDefault();  
    const row1Input = $("input#row1").val();
    const row2Input = $("input#row2").val();
    const row3Input = $("input#row3").val();
    const row4Input = $("input#row4").val();
    const row5Input = $("input#row5").val();
    const 
    const
    const  
    $(".row1").text(row1Input);
    $(".row2").text(row2Input);
    $(".row3").text(row3Input);
    $(".row4").text(row4Input);
    $(".row5").text(row5Input);
    
    $("#languages").show();
  });
});