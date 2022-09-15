//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');

		// only load ground/ wall if device is tilted correctly
		function handleOrientation(event) {
			let x = event.beta;  // In degree in the range [-180,180)
			let y = event.gamma; // In degree in the range [-90,90)

			output.textContent  = `beta : ${x}\n`;
			output.textContent += `gamma: ${y}\n`;

			// Because we don't want to have the device upside down
			// We constrain the x value to the range [-90,90]
			// if (x >  90) { x =  90};
			// if (x < -90) { x = -90};

			// To make computation easier we shift the range of
			// x and y to [0,180]
			// x += 90;
			// y += 90;

			// if device is 45 degree load ground (1-20)
			if (x < 49) {

				var vali1=1;
				var vali2=20;

				var valk1=0;
				var valk2=19;
				// if device is 45 degree load ground (1-20)
				const deleteall = document.getElementById('markersArray-ground');
				deleteall.remove();
	

			} else {

				var vali1=1;
				var vali2=99;

				var valk1=20;
				var valk2=39;

				// if device is 45 degree load ground (1-20)
				const deleteall = document.getElementById('markersArray-wall');
				deleteall.remove();
			}
				
			if (x < 49) {
				//list of the markers
				for(var i=vali1; i<vali2; i++) {
					var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
					markersURLArray.push(url);
					markersNameArray.push('Marker_'+i);
					console.log(url); 
				}

				for(var k=valk1; k<valk2; k++) {
					var markerEl = document.createElement('a-marker');
		
					markerEl.setAttribute('type','pattern');
					markerEl.setAttribute('url',markersURLArray[k]);
					markerEl.setAttribute('id','markersArray-wall');
					markerEl.setAttribute('class','marker');
			
					markerEl.setAttribute('registerevents','');
					sceneEl.appendChild(markerEl);
	
					//Adding img to each marker
					var img = document.createElement('a-image');
			
					img.setAttribute('src','#' + markersNameArray[k]);
					img.setAttribute('link','href: https://ltrwld.github.io/redirect.html?link=' + markersNameArray[k]);
					img.setAttribute('id','markersArray');
					img.setAttribute('scale','1 1 1'); 
					img.setAttribute('class','image clickable');
					img.object3D.position.set(0, 0.3, 0);
					img.object3D.rotation.set(65, 0, 0);
	
					markerEl.appendChild(img);

					// if device is 45 degree load ground (1-20)
				const deleteall = document.getElementById('markersArray-ground');
				deleteall.remove();
				}
			} else {
				//list of the markers
				for(var i=vali1; i<vali2; i++) {
					var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
					markersURLArray.push(url);
					markersNameArray.push('Marker_'+i);
					console.log(url); 
				}

				for(var k=valk1; k<valk2; k++) {
					var markerEl = document.createElement('a-marker');
		
					markerEl.setAttribute('type','pattern');
					markerEl.setAttribute('url',markersURLArray[k]);
					markerEl.setAttribute('id','markersArray-ground');
					markerEl.setAttribute('class','marker');
			
					markerEl.setAttribute('registerevents','');
					sceneEl.appendChild(markerEl);
	
					//Adding img to each marker
					var img = document.createElement('a-image');
			
					img.setAttribute('src','#' + markersNameArray[k]);
					img.setAttribute('link','href: https://ltrwld.github.io/redirect.html?link=' + markersNameArray[k]);
					img.setAttribute('id','markersArray');
					img.setAttribute('scale','1 1 1'); 
					img.setAttribute('class','image clickable');
					img.object3D.position.set(0, 0.3, 0);
					img.object3D.rotation.set(65, 0, 0);
	
					markerEl.appendChild(img);

					// if device is 45 degree load ground (1-20)
				const deleteall = document.getElementById('markersArray-wall');
				deleteall.remove();
				}
			}
			
			// if device is 45 degree load ground (1-20)
			if (x < 49) {

				var vali1=1;
				var vali2=20;

				var valk1=0;
				var valk2=19;
				// if device is 45 degree load ground (1-20)
				const deleteall = document.getElementById('markersArray-ground');
				deleteall.remove();
	

			} else {

				var vali1=1;
				var vali2=99;

				var valk1=20;
				var valk2=39;

				// if device is 45 degree load ground (1-20)
				const deleteall = document.getElementById('markersArray-wall');
				deleteall.remove();
			}
				
			
			

			console.log('#### LOAD GROUNDL');
		}

		window.addEventListener('deviceorientation', handleOrientation);
		
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
