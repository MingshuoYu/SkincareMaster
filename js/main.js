// This serves as a fake database:

var complexData = [
  {'company': 'Fresh','productName': 'Soy Face Cleanser','picture': 'img/cleanser3.jpg','rating': 5,'index': 1,'fav':30},
  {'company': 'PHILOSOPHY','productName': 'Purity Made Simple Cleanser','picture': 'img/cleanser4.jpg','rating': 4,'index': 2,'fav':40},
  {'company': 'EVE LOM','productName': 'Cleanser/Traitement De Nettoyage','picture': 'img/cleanser1.jpg','rating': 5,'index': 3,'fav':50},
  {'company': 'SK-II','productName': 'Facial Treatment Cleanser','picture': 'img/cleanser2.jpg','rating': 5,'index': 4,'fav':60}
]




// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");

  // BEGIN - STEP 1
  


  
  
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  

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
  });

  */
  // END - STEP 2


  // BEGIN - STEP 3
  

  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams


  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }

  */
  // END - STEP 3
});
