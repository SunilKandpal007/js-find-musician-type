function musicianType(){
	
    var singerValue = Number(document.getElementById("musicianValue").value);
	var singerImg = document.getElementById('musician_img');
	
	var noSound = new Audio('./sound/nosound.mp3');
	var soloSound = new Audio('./sound/guitar.wav');
	var duetSound = new Audio('./sound/guitar01.mp3');
	var trioSound = new Audio('./sound/guitar02.mp3');
	var quartetSound = new Audio('./sound/guitar03.mp3');
	var largeGroupSound = new Audio('./sound/largeband.mp3');


    if(singerValue <= 0){
        document.getElementById('getResult').style.color = 'Navy';
        document.getElementById('getResult').innerText = `There are no musician group. Please enter value.`;
			singerImg.src ="./img/no-music.jpg";
			singerImg.style.border = "1px solid white";
			noSound.play();
    }

    else if(singerValue === 1){
        document.getElementById('getResult').style.color = '#16A085';
        document.getElementById('getResult').innerHTML = `Hi! I am SOLO Performer.`;
		singerImg.src = "./img/solo.png";
		singerImg.style.border = "1px solid darkgreen";
			soloSound.play();
    }
    else if(singerValue === 2){
        document.getElementById('getResult').style.color = '#E74C3C';
        document.getElementById('getResult').innerHTML = `Hi! We are DUET Performers.`;
		singerImg.src ="./img/duet.png";
		duetSound.play();
    }
	
	else if(singerValue === 3){
        document.getElementById('getResult').style.color = '#8E44AD';
        document.getElementById('getResult').innerHTML = `Hello! We are TRIO Performers.`;
		singerImg.src ="./img/trio.jpg";
		
		trioSound.play();
    }
	
	else if(singerValue === 4){
		document.getElementById('getResult').style.color = '#F1C40F';
        document.getElementById('getResult').innerHTML = `Hello! We are QUARTET Performers.`;
		singerImg.src ="./img/quartet.jpg";
		quartetSound.play();
	}
	
	else if(singerValue >= 5){
		document.getElementById('getResult').style.color = '#6495ED';
        document.getElementById('getResult').innerHTML = `This is a large musicians group.`;
		singerImg.src ="./img/large_group.jpg";
		
		largeGroupSound.play();
		
	}
	
	console.log(singerValue);
}