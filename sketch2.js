const sketch2 = (p) => {
    let shape;
    let angle = 0;
  
    p.preload = function () {
      shape = p.loadModel('/src/oldbook-obj.obj', true);
    };
  
    p.setup = function () {
      let cnv = p.createCanvas(250, 250, p.WEBGL);
      cnv.parent("book2");
      p.noStroke();
    };
  
    p.draw = function () {
      p.background('rgba(207, 219, 230, 0)'); // andere kleur achtergrond
  
      p.rotateY(angle); 
  
      p.pointLight(255, 255, 0);
      p.pointLight(255, 0, 0, -p.height / 2, -p.width / 2, -1);
      p.pointLight(255, 0, 0);
      p.pointLight(255, 255, 0, -p.height / 2, p.width / 2, 1);
  
      p.scale(0.8); 
      p.rotateY(1);
      p.rotate(270)
      p.model(shape);
  
      angle += 0.03;
    };
  };
  
  new p5(sketch2);