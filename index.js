document.addEventListener("DOMContentLoaded", () => {
  const canvas = new fabric.Canvas("canvas", {
    preserveObjectStacking: true,
    backgroundColor: "#ffffff",
    stateful: true,
  });
  window.canvas = canvas;
  var isDrawing = false;
  var isDrawingMode = false;
  function init() {
    const img = new Image();
    img.onload = function () {
      const {width,height} = calculateSize(this)
      canvas.setWidth(width);
      canvas.setHeight(height);
      canvas.setBackgroundImage(this.src, canvas.renderAll.bind(canvas), {
        crossOrigin: "anonymous",
        originX: "left",
        originY: "top",
        scaleX: canvas.width / this.width,
        scaleY: canvas.height / this.height,
      });
    };
    img.src = "./assets/images/placeholder.jpg";
  }
  function initRectangle() {
    canvas.on("mouse:down", function (o) {
      onMouseDown(o);
    });
    canvas.on("mouse:move", function (o) {
      onMouseMove(o);
    });
    canvas.on("mouse:up", function (o) {
      onMouseUp(o);
    });
    canvas.on("object:moving", function (o) {
      disable();
    });

    onMouseUp = function (o) {
      disable();
    };

    onMouseMove = function (o) {
      if (!isEnable() || !isDrawingMode) {
        return;
      }

      var pointer = canvas.getPointer(o.e);
      var activeObj = canvas.getActiveObject();

      (activeObj.stroke = "#374151"), (activeObj.strokeWidth = 5);
      activeObj.fill = "transparent";

      if (origX > pointer.x) {
        activeObj.set({ left: Math.abs(pointer.x) });
      }
      if (origY > pointer.y) {
        activeObj.set({ top: Math.abs(pointer.y) });
      }

      activeObj.set({ width: Math.abs(origX - pointer.x) });
      activeObj.set({ height: Math.abs(origY - pointer.y) });

      activeObj.setCoords();
      canvas.renderAll();
    };

    onMouseDown = function (o) {
      if (!isDrawingMode) return;
      enable();

      var pointer = canvas.getPointer(o.e);
      origX = pointer.x;
      origY = pointer.y;

      var rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: "left",
        originY: "top",
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        transparentCorners: false,
        hasBorders: false,
        hasControls: false,
      });

      canvas.add(rect).setActiveObject(rect);
    };

    isEnable = function () {
      return isDrawing;
    };

    enable = function () {
      isDrawing = true;
    };

    disable = function () {
      isDrawing = false;
    };
  }
  function resizeCanvas() {
    const {width,height} = calculateSize(canvas.backgroundImage)
    
    canvas.setWidth(width);
    canvas.setHeight(height);
    canvas.backgroundImage.scaleX = canvas.width / canvas.backgroundImage.width;
    canvas.backgroundImage.scaleY = canvas.height / canvas.backgroundImage.height;
    canvas.renderAll();
  }
  function calculateSize({width,height}){
    document.querySelector("#originalImage").style.display = ''
    let { clientWidth, clientHeight } = document.querySelector("#originalImage");
    document.querySelector("#originalImage").style.display = 'none'

    // clientWidth = window.innerWidth > 0 ? (window.innerWidth - (window.innerWidth / 3) ): screen.width;
    // clientHeight = window.innerHeight > 0 ? (window.innerHeight - (window.innerHeight / 2)) : screen.height;
    // width = this.width;
    // height = this.height;
    let widthAspectRatio = clientWidth / width;
    let heightAspectRatio = clientHeight / height;

    let finalAspectRatio = Math.min(widthAspectRatio, heightAspectRatio);

    width *= finalAspectRatio;
    height *= finalAspectRatio;
    return {
      width,
      height
    }
  }

  init();
  initRectangle();

  window.addEventListener("resize", resizeCanvas, false);
  document.getElementById("rectangle").addEventListener("click", (el) => {
    isDrawingMode = isDrawingMode ? false : true;

    isDrawingMode ? el.currentTarget.classList.remove("bg-gray-700") : el.currentTarget.classList.add("bg-gray-700");
    console.log(isDrawingMode);
  });
});
