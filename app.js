$.ajax({
  url: `http://fvi-grad.com:4004/sudoku`,
  success: function(res,txt,xhr){
    for (var row = 0; row < res.length; row++){
      var $newRow = $("<tr></tr>");
      $('tbody').append($newRow);
      for(var c = 0; c < res[row].length; c++){
        // $newRow.append("<td>"+ res[row][c] + "</td>");
        if (res[row][c] == ""){
          $newRow.append("<td><input></td>");
        }
        else{
          $newRow.append("<td>"+ res[row][c] + "</td>");
        }
      }
    }
  }
});

button.onClick = function(){
  // what happens when the button is clicked
}
