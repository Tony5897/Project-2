





$(document).ready(function() {
  $("form#new-boxes").submit(function(event)  {  
    event.preventDefault();
    const row1Input = $("input#row1").val();
    const row2Input = $("input#row2").val();
    const row3Input = $("input#row3").val();
    const row4Input = $("input#row4").val();
    const row5Input = $("input#row5").val();
  });
});