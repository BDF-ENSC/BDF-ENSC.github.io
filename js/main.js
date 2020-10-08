$(document).ready(function() {

    $("#submitButton").on("click", function (){
        let name = $("#identifiant1A").val();
        /*console.log(name);
        alert(name);*/

        let ioJson = new IOjson(liste);

        let strColor = ioJson.get1AColor(name);
        let strImg = ioJson.getImg(name);
        let strEnigme = ioJson.getEnigme(name)
        let strAdresse = ioJson.getAdresse(name)

        let color = null;

        let colorResult = $("#color");
        colorResult.text(strColor);
        let imgResult = $("#img")
        imgResult.attr('src', strImg );
        let enigmeResult = $("#enigme");
        enigmeResult.text(strEnigme);
        let adresseResult = $("#adresse");
        adresseResult.text(strAdresse);



        switch (strColor) {

            case "Jaune" :
                color = "yellow";
                break;
            case "Vert" :
                color = "green";
                break;
            case "Bleu" :
                color = "#4d4dff";
                break;
            case "Orange" :
                color = "orange";
                break;
            case "Rouge" :
                color = "red";
                break;

        }
        colorResult.css("color", color);

        $("#mainDiv").fadeOut(1000,function (){
            $("#resultDiv").fadeIn(1500, function (){
                startParticle(color);
            });
        })
    })
});

function startParticle(color){
    canvas=document.getElementById("canvas");
    context=canvas.getContext("2d");
    width=canvas.width=window.innerWidth;
    height=canvas.height=window.innerHeight;
    /*position=vector.create(100,500);
    velocity=vector.create(0,0);
    velocity.setLength(10);
    velocity.setAngle(degreeToRadians(135))
    console.log(position)*/
    particles=[];
    numparticles=500;
    for(i=0;i<numparticles;i++){
        particles.push(particle.create(width/2,height/2,(Math.random()*10)+1,Math.random()*Math.PI*2))
    }

    update(color);

    function update(color){
        context.clearRect(0,0,width,height);

        /*position.addTo(velocity);
        context.arc(position.getX(),position.getY(),10,0,2*Math.PI,false);
        */
        for (var i = 0; i < numparticles; i++) {
            particles[i].update();
            context.beginPath();
            context.fillStyle = color;
            context.arc(particles[i].position.getX(),particles[i].position.getY(),3,0,2*Math.PI,false);
            context.fill();
        }

        requestAnimationFrame(update);
    }
}
