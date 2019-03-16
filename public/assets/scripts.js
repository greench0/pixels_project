$(document).ready(function () {
//==================================================================================================================================================================//
// ====================================================================
$("#hidden").hide();


// function to create arboard blocks
const totalBlocks = 144;

  function makeBlocks(blockTotal) {
    for (i = 0; i < blockTotal; i++) {
      var create = $("<div style='background: rgb(144, 140, 140)' class='b" + i + " data'></div>");
      $('#art-board').append(create);
    }
  };

  makeBlocks(totalBlocks);


// like button on blick events
$("#like").click(function () {
  console.log('click');
});


$("#like").on("click", ".fas", function () {
  console.log(color);
});


// ====================================================================
// generate colors for pixel creator
let colors = [
      [244, 244, 244]
    , [144, 140, 140]
    , [54, 54, 54]
    , [250, 60, 100]
    , [240, 120, 85]
    , [254, 192, 80]
    , [20, 202, 128]
    , [30, 112, 250]
    , [112, 100, 205]
  ];


  function generateColors() {
    for (var i = 0; i < colors.length; i++) {
      var c = $("<div class='color-card color-btn'></div>");
      var colortype = "background: rgb" + "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")";
      
      colors.toString();
      c.attr("style", colortype);
      c.attr("colorval", "(" + colors[i][0] + "," + colors[i][1] + "," + colors[i][2] + ")")
      $("#colors").append(c);
    };
  };
  generateColors();


// ====================================================================
  // on Click Event for adding THIS Color to selected DIV
  $("#colors").on("click", ".color-card", function () {
    let color = ($(this).attr("colorval"));

    // on click event to add SELECTED color to art board DIV
    $("#art-board").on("click", ".data", function () {
      $(this).css("background", 'rgb' + color + ' ');

    });
  });


// on click event for adding THIS color to all DIVS
  $("#colors").on("click", ".color-card", function () {
    let color = ($(this).attr("colorval"));
    $(".color-card").removeClass("color-stroke");
    $(this).addClass("color-stroke");


    // on click event to add SELECTED color to art board DIV
    $("#btn-fill").click(function () {
      for (var i = 0; i < totalBlocks; i++) {
        $(".b" + i + "").css("background", 'rgb' + color + ' ');
      };
    });

  });
  
// ====================================================================
  // button events to show / hide the grid - strokes
  $("#btn-s-on").click(function () {
    $(".data").addClass("grid");
  });

  $("#btn-s-off").click(function () {
    $(".data").removeClass("grid");
  });

// ====================================================================
  // save div color when you hit the save button
  
  $("#btn-data").click(function () {
    colorArr = [];

    for (var i = 0; i < totalBlocks; i++) {
      var divColor = $(".b" + i + "").css("background-color");
      colorArr.push(divColor);

  document.getElementById('post_data' + i + '').value = divColor;

    };

  });

  
// creates inputs for post data
  function makePostData(blockTotal) {
    for (i = 0; i < blockTotal; i++) {
      var create = $('<input type="text" class="inner" name="post_data' + i + '" id="post_data'+ i + '">');

      $('#form-post-data').append(create);
    }
  };

  makePostData(totalBlocks);

//==================================================================================================================================================================//
// GALLERY SECTION
//==================================================================================================================================================================//
  // variables for saved colors
var colorData = [
  ["rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);"]
, ["rgb(222, 255, 0);", "rgb(111, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);"]
, ["background: rgb(255, 255, 0);", "background: rgb(255, 188, 15)", "background: rgb(128, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(255, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(128, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(128, 255, 0);"].map(s => s.slice(12, -1))
, ["background: rgb(255, 255, 0);", "background: rgb(255, 188, 15)", "background: rgb(128, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(255, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(128, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(128, 255, 0);"].map(s => s.slice(12, -1))
, ["rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);"]
, ["rgb(222, 255, 0);", "rgb(255, 255, 255)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);", "rgb(155, 188, 15)", "rgb(128, 255, 0);"]
, ["background: rgb(255, 255, 144);", "background: rgb(255, 188, 15)", "background: rgb(128, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(255, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(128, 255, 0);", "background: rgb(155, 188, 15)", "background: rgb(128, 255, 0);"].map(s => s.slice(12, -1))
, ["background: rgb(111, 111, 111);", "background: rgb(255, 255, 0);", "background: rgb(255, 255, 0);", "background: rgb(255, 255, 0);", "background: rgb(111, 111, 111);", "background: rgb(255, 255, 0);", "background: rgb(255, 255, 0);", "background: rgb(255, 255, 0);", "background: rgb(111, 111, 111);"].map(s => s.slice(12, -1))
];

//==================================================================================================================================================================//


  
//==================================================================================================================================================================//
//==================================================================================================================================================================//
}); // end document ready
