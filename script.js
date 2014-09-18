$(document).ready(function(){

	// start with 16 pixels per column. 
	var numberOfPixelsColumn = 16;
	

	// function to create a grid with x * x/2 pixels.
	function grid (){
		var numberOfPixels = numberOfPixelsColumn * (numberOfPixelsColumn/2);

		for (var i = 0; i < numberOfPixels; i++){
			$("#container").append("<div class='pixel'></div>");
		};

		var widthPixel = 800 / numberOfPixelsColumn;				// width of container divided by number of pixels
		$(".pixel").css({"width":widthPixel,"height":widthPixel});	// change CSS of width and height
	};

	// function to draw only when mouse is pressed and moved around. 
	function draw (){
		var isDown = false;							//Is mouse pressed? 

		$(document).mousedown(function(){
			isDown = true;							//When mouse is pressed, set "isDown = true;" 
		})

		.mouseup(function(){						//When mouse is not pressed, set "isDown = false;"
			isDown = false;
		});


		$(".pixel").mousedown(function(){			//When mouse is pressed for a single time (and released), change the class (and therefore draw a pixel).
			$(this).addClass("drawn");	
		});

		$(".pixel").mouseover(function(){			//When mouse is pressed and moved around, change the class (and therefore draw).
			if(isDown){
				$(this).addClass("drawn");	
			}
		});
	};

	// Launch both functions. 
	grid();
	draw();

	// Create a new grid if you click on button "No. of pixels". 
	$("#noPixels").click(function (){					

		numberOfPixelsColumn = prompt("How many pixels per row? Please choose an even number smaller than 100!");

		while (numberOfPixelsColumn > 100 || numberOfPixelsColumn % 2 != 0){
			if (numberOfPixelsColumn > 100){
				numberOfPixelsColumn = prompt("Your number is too large, please choose a smaller number (than 100)!");				
			}

			else if(numberOfPixelsColumn % 2 != 0){
				numberOfPixelsColumn = prompt("Your number is not even, please choose an even number!");					
			}
		}
		$(".pixel").remove();						//removes all divs. 
		grid();										//creates new div grid. It must be an even number or the grid has empty spaces.
		draw();	
	});

	// Clear drawing without changing number of pixels.
	$("#clear").click(function(){
		$(".pixel").removeClass("drawn");
	});

});







