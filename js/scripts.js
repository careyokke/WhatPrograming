$(document).ready(function() {
  var age = parseInt(prompt("Are you older than 18??"));

  if (age > 18) {
    $('#age').show();
  } else if (age === 18) {
    alert("Not allowed in this GUILD YET!");
    $('#age').show();
  } else {
    $('#under-21').show();
  }
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var javaandroid = 0;
    var cssdesign = 0;
    var cnet = 0;
    var ruby = 0;
    var interest = parseInt($("#interest").val());
    var experience = $("#experience").val();
    var personality = $("#personality").val();
    var availablity = $("#availablity").val();
    var name  = $("#name").val();

    if(availablity === 'M') {
      cnet += 1;
    } else if (availablity === 'N') {
      cssdesign += 1;
    } else if (availablity === 'O') {
      javaandroid += 1;
    } else if (availablity === 'P') {
      ruby += 1;
    }

    if(interest === 'I') {
      cnet += 1;
    } else if (interest === 'J') {
      cssdesign += 1;
    } else if (interest === 'K') {
      javaandroid += 1;
    } else if (interest === 'L') {
      ruby += 1;
    }

    if(experience === 'A') {
      cnet += 1;
    } else if (experience === 'B') {
      ruby += 1;
    } else if (experience === 'C') {
      cssdesign += 1;
    } else if (experience === 'D') {
      javaandroid += 1;
    }

    if(personality === 'E') {
      cnet += 1;
    } else if (personality === 'F') {
      ruby += 1;
    } else if (personality === 'G') {
      cssdesign += 1;
    } else if (personality === 'H') {
      javaandroid += 1;
    }

    if (cnet >= ruby && cnet >= javaandroid && cnet >= cssdesign) {
      $(".cnet").show();
      $(".cssdesign").hide();
      $(".ruby").hide();
      $(".javaandroid").hide();
    } else if (cssdesign >= ruby && cssdesign >= javaandroid && cssdesign >= cnet) {
      $(".cssdesign").show();
      $(".cnet").hide();
      $(".ruby").hide();
      $(".javaandroid").hide();
    } else if (ruby >= cnet && ruby >= javaandroid && ruby >= cssdesign) {
      $(".ruby").show();
      $(".cssdesign").hide();
      $(".javaandroid").hide();
      $(".cnet").hide();
    } else if (javaandroid >= ruby && javaandroid >= cnet && javaandroid >= cssdesign) {
      $(".javaandroid").show();
      $(".cssdesign").hide();
      $(".ruby").hide();
      $(".cnet").hide();
    }
      $("#foot").show();
      $(".name").text(name);


    event.preventDefault();
  });
});
