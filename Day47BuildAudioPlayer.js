window.onload =function() {
    var uploadInput = document.getElementById("upload-input");
    uploadInput.onchange = function() {
        var file =this.files[0];
        var size = ((file.size/1000)/1000).toFixed(1);
        var filename=file.name;
        var url =URL.createObjectURL(file);

        //creating toolbar
        var playIcon =document.getElementById("play-icon");
        var muteIcon =document.getElementById("mute-icon");
        var loopIcon = document.getElementById("loop-icon");

        //Show filename
        var title =document.getElementById("title");
        title.innerHTML = filename;

        //size filesize
        var sizeE1 = document.getElementById("size");
        sizeE1.innerHTML ='Size :'+size+' Mb';

        //creating audio tag

        var audio = document.createElement("audio");
        audio.src=url;
        audio.play();
        playIcon.className ="ri-pause-fill";

        //Enabling Toolbaars
        var toolbaars = document.getElementsByClassName("toolbaar");
        for(var i=0 ; i<toolbaars.length ;i++)
        {
            toolbaars[i].disabled =false;
        }

        //setting play & pause
        var playBtn =document.getElementById("play-btn");
        playBtn.onclick = function() {
            
            if(audio.paused)
            {
            playIcon.className ="ri-pause-fill";
            audio.play();
            }
            else{
                playIcon.className ="ri-play-fill";
                audio.pause();
            }
        
        }

        //mutebtn
        var muteBtn = document.getElementById("mute-btn");
        muteBtn.onclick = function() {
            if(audio.muted)
            {
                audio.muted= false;
                muteIcon.className ="ri-volume-up-line";

            }
            else{
                audio.muted =true;
                muteIcon.className="ri-volume-mute-line";
            }
        }

        //loopbtn
        var loopBtn =document.getElementById("loop-btn");
        loopBtn.onclick =function() {
            if(audio.loop)
            {
                audio.loop =false;
                loopIcon.className="ri-repeat-2-line";
            }
            else{
                audio.loop=true;
                loopIcon.className="ri-repeat-one-line"
            }
        }

        //forward btn
        var forwardBtn =document.getElementById("forward-btn");
        forwardBtn.onclick =function() {
            var current = audio.currentTime;
            audio.currentTime=(current+10);
        }
          //backward btn
          var backwardBtn =document.getElementById("backward-btn");
          backwardBtn.onclick =function() {
            var current = audio.currentTime;
          if(current>10)  audio.currentTime=(current-10);
        }
      
        //show full duration
        audio.onloadedmetadata =function() {
            var duration =audio.duration;
            var minutes =Math.floor(duration/60);
            var seconds=Math.floor(duration%60);
            var fullDuration =document.getElementById("full-duration");
            fullDuration.innerHTML = minutes+ ':' +seconds;


        }

        //Progress & current duration
        audio.ontimeupdate =function() {
            var totalDuration =audio.duration; 
            var duration =audio.currentTime;
            var minutes =Math.floor(duration/60);
            var seconds = Math.floor(duration%60);
            var currentDuration =document.getElementById("current-duration");
            currentDuration.innerHTML = minutes+':'+seconds;
            var percentage  =Math.floor((duration/totalDuration)*100);
            var progressBar = document.getElementById("progress-bar");
            progressBar.style.width = percentage+'%';


        }



    

    }
}