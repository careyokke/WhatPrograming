$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var javaandroid = 0;
    var cssdesign = 0;
    var cnet = 0;
    var ruby = 0;
    var interest = parseInt($("#interest").val());
    var experience = $("#experience").val();
    var personality = $("#personality").val();
    var name  = $("#name").val();

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
