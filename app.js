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


function getData(){
  var cells = $("td");
  var grid = Array(9).fill(0).map(e => Array(9).fill(0));

  for(var i = 0; i < cells.length; i++){
    var row = Math.floor(i/9)
    var col = i%9;
    if (     $(cells[i]).html().length > 1     ){
      grid [row][col] = $(cells[i]).find("input").val();
    }
    else {
      grid[row][col] = $(cells[i]).html();
    }
    }
return grid
}


$("#button").click(function(){
  $.ajax({
    url: "http://fvi-grad.com:4004/sudoku",
    method: 'POST',
    data: {board: getData()},
    success: function(res,txt, xhr){
      alert("validation result: " + res);
    }
  })
}
)
