// This serves as a fake database:

var cleanser = [
  { 'company': 'Fresh', 'productName': 'Soy Face Cleanser', 'picture': 'img/cleanser3.jpg', 'rating': 5, 'index': 1, 'fav': 30 },
  { 'company': 'PHILOSOPHY', 'productName': 'Purity Made Simple Cleanser', 'picture': 'img/cleanser4.jpg', 'rating': 4, 'index': 2, 'fav': 40 },
  { 'company': 'EVE LOM', 'productName': 'Cleanser/Traitement De Nettoyage', 'picture': 'img/cleanser1.jpg', 'rating': 5, 'index': 3, 'fav': 50 },
  { 'company': 'SK-II', 'productName': 'Facial Treatment Cleanser', 'picture': 'img/cleanser2.jpg', 'rating': 5, 'index': 4, 'fav': 60 }
]
var reviewList = [
  { 'rating': 5, 'comment': 'It is great' },
  { 'rating': 1, 'comment': 'It is not OK' },
  { 'rating': 2, 'comment': 'It is soso' },
  { 'rating': 3, 'comment': 'It is Ok' }
]




// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  console.log('hello world');

  
  var queryParams = new URLSearchParams(window.location.search);
  var Name = queryParams.get('product');

  // compile the template
  /*
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#templatedProjects"); */
  
  var sourceP = $("#productDetail-template").html();
  var templateP = Handlebars.compile(sourceP);
  var parentDivP = $("#templatedProduct");
  // BEGIN - STEP 1
  
  for (var i = 0; i < cleanser.length; i++) {
    var currData = cleanser[i];
    if (currData.productName == Name) {
      var currHTML = templateP(currData)
      parentDiv.append(curHtml);
      
    }

  }



  /*
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < cleanser.length; i++) {
    var curData = cleanser[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  

  }
  */
  for (var i = 0; i < cleanser.length; i++) {
    localStorage.setItem(cleanser[i]['productName'], JSON.stringify(reviewList));
  }

  // END - STEP 1


  // BEGIN - STEP 2
  /*

  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#myName").html(name);
  }

  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#myName").html(newName);
      localStorage.setItem('customName', newName);
    }
  });*/

});
