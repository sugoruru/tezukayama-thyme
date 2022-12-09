$("#HOME").fadeIn(500);
$("#HOMEButton").css("background", "#999");

$("#title").on("click", () => {
  if ($("#HOME").css("display") === "none") {
    initButtonBackground();
    hiddenBody();
    $("#HOME").fadeIn(500);
    $("#HOMEButton").css("background", "#999");
  }
});

$("#HOMEButton").on("click", () => {
  initButtonBackground();
  hiddenBody();
  $("#HOME").fadeIn(500);
  $("#HOMEButton").css("background", "#999");
});
$("#ProjectButton").on("click", () => {
  initButtonBackground();
  hiddenBody();
  $("#Project").fadeIn(500);
  $("#ProjectButton").css("background", "#999");
});
$("#RobotButton").on("click", () => {
  initButtonBackground();
  hiddenBody();
  $("#Robot").fadeIn(500);
  $("#RobotButton").css("background", "#999");
});
$("#coreValueButton").on("click", () => {
  initButtonBackground();
  hiddenBody();
  $("#coreValue").fadeIn(500);
  $("#coreValueButton").css("background", "#999");
});

const initButtonBackground = () => {
  $("#HOMEButton").css("background", "");
  $("#ProjectButton").css("background", "");
  $("#RobotButton").css("background", "");
  $("#coreValueButton").css("background", "");
};

const hiddenBody = () => {
  $("#HOME").hide();
  $("#Project").hide();
  $("#Robot").hide();
  $("#coreValue").hide();
};
setInterval(() => {
  const $img = document.getElementById("coreValueProjectSlide");
  if ($img.getAttribute("nowImg") === "1") {
    $img.src = "./img/coreValueProject2.jpg";
    $img.setAttribute("nowImg", "2");
  } else if ($img.getAttribute("nowImg") === "2") {
    $img.src = "./img/coreValueProject3.jpg";
    $img.setAttribute("nowImg", "3");
  } else if ($img.getAttribute("nowImg") === "3") {
    $img.src = "./img/coreValueProject1.jpg";
    $img.setAttribute("nowImg", "1");
  }
  $("#coreValueProjectSlide").hide().fadeIn(500);
}, 4000);
