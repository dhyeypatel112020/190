AFRAME.registerComponent("cups", {
    init: function () {
      //starting x position
      posX = -20;
      //starting z-position
      posZ = 85;
  
      for (var i = 0; i < 10; i++) {
        //create wire-fence entity
        var cup1 = document.createElement("a-entity");
        var cup2 = document.createElement("a-entity");
        var cup3 = document.createElement("a-entity");
        var cup4 = document.createElement("a-entity");
  
  
        //set x, y and z position
        posX = posX + 3;
        posY = 1;
        posZ = posZ - 10;
  
        //scale 
        var scale = { x: 2, y: 2, z: 2 };
  
        //set the id
        cup1.setAttribute("id", "cup1" + i);
        cup2.setAttribute("id", "cup2" + i);
        cup3.setAttribute("id", "cup3" + i);
        cup4.setAttribute("id", "cup4" + i);
  
        //set the position
        cup1.setAttribute("position", { x: posX, y: 0, z: -35 });
        cup2.setAttribute("position", { x: posX, y: 0, z: 85 });
        cup3.setAttribute("position", { x: -30, y: 0, z: posZ });
        cup4.setAttribute("position", { x: 50, y: 0, z: posZ });
  
        //set the scale
        cup1.setAttribute("scale", scale);
        cup2.setAttribute("scale", scale);
        cup3.setAttribute("scale", scale);
        cup4.setAttribute("scale", scale);
  
        //set the model
        cup1.setAttribute(
          "gltf-model",
          "./soda_can/scene.gltf"
        );
  
        cup2.setAttribute(
          "gltf-model",
          "./soda_can/scene.gltf"
        );
  
        cup3.setAttribute(
          "gltf-model",
          "./soda_can/scene.gltf"
        );
  
        cup4.setAttribute(
          "gltf-model",
          "./soda_can/scene.gltf"
        );
  
        //set the rotation
        cup3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        cup4.setAttribute("rotation", { x: 0, y: 90, z: 0 });
  
        //set the physics body
        cup1.setAttribute("static-body", {});
        cup2.setAttribute("static-body", {});
        cup3.setAttribute("static-body", {});
        cup4.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        //attach the entity to the scene
        sceneEl.appendChild(cup1);
        sceneEl.appendChild(cup2);
        sceneEl.appendChild(cup3);
        sceneEl.appendChild(cup4);
  
      }
    },
  });
  
  