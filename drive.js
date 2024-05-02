AFRAME.registerComponent('drive', {
    init: function(){
        var gameStateValue = this.el.getAttribute("game")
        if (gameStateValue.gameState == 'play') {
            this.driveCar();
        }
    },
    driveCar: function(){
        var wheel = document.querySelector("#steeringwheel")

        var wheelRotation = 0

        window.addEventListener('keydown',(e) => {
            if(e.code == 'ArrowLeft' && wheelRotation < 40){
                wheelRotation += 5
                wheel.setAttribute('rotation', {x: 0, y: 0, z: wheelRotation})
            }
            if(e.code == 'ArrowRight' && wheelRotation > -40) {
                wheelRotation -= 5;
                wheel.setAttribute('rotation', {x: 0, y: 0, z: wheelRotation})
            }
            var camera = document.querySelector("#camera-rig")
            var cameraPos = camera.getAttribute("position")
            var cameraRotation = camera.getAttribute("rotation")
            var movementControl = camera.getAttribute("movement-controls")

            console.log(movementControl.speed)

            if(e.code == 'ArrowRight'){
                cameraRotation.y -= 5
                camera.setAttribute("rotation",{x: 0,y: cameraRotation.y, z: 0})
                camera.setAttribute("movement-controls",{speed : movementControl.speed + 0.005})
            }
            if(e.code == 'ArrowLeft'){
                cameraRotation.y += 5
                camera.setAttribute("rotation", {x: 0, y: cameraRotation.y, z: 0})
                camera.setAttribute("movement-controls", {speed: movementControl.speed += 0.005})
            }
            if(e.code == 'ArrowUp'){
                
            }
        })
        
    }
})