$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    // Pull the 4 items input from the HTML input form
    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();
    var item4 = $("input#item4").val();
    
    // Put the 4 values into an array, sort them, and log them
    var items = [item1, item2, item3, item4];
    items.sort();
    console.log(items);
    
    // Transfer the original 4 values into a new array called newItems using the map() method. Uppercase them, and return the original list.
    var newItems = items.map(function(item) {
      item = item.toUpperCase();
      return item;
    });
    
    // A for loop to go through the length of the newItems array, and send each one back to a corresponding ID on the html page
    for(var index = 0; index < newItems.length; index +=1) {
      $("#result" + [index]).text(newItems[index]);
    }   
    
    event.preventDefault();
  });
});