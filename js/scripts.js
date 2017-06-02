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

    if(interest === 'E') {
      cnet += 1;
    } else if (interest === 'F') {
      ruby += 1;
    } else if (interest === 'G') {
      cssdesign += 1;
    } else if (interest === 'H') {
      javaandroid += 1;

    }
     if(experience === 'E') {
          cnet += 1;
        } else if (experience === 'F') {
          ruby += 1;
        } else if (experience === 'G') {
          cssdesign += 1;
        } else if (experience === 'H') {
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
      $(".sandy").hide();
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
