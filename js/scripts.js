$(document).ready(function() {
  var groceryList = [];
  $("form#groceriesForm").submit(function(event) {
    var groceriesInput = $("#input-Groceries").val()
    groceryList.push(groceriesInput);
    var groceryListTwo = groceryList.map(function(item) {
      return item.toUpperCase();
    });
    $("#list").text(groceryListTwo.sort());
  event.preventDefault();
  });
});
