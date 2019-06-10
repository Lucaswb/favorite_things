$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    // event.preventDefault();

    var things = [];
    things.push($("#item1").val());
    things.push($("#item2").val());
    things.push($("#item3").val());
    things.push($("#item4").val());

    var generator = function(n){
      return "<li>"+things[n]+"</li>"
    }
    alert(generator(0));
    $("ul.output").append(generator(0));
    $("ul.output").append(generator(1));
    $("ul.output").append(generator(2));
    $("ul.output").append(generator(3));
      event.preventDefault();

  });
});
