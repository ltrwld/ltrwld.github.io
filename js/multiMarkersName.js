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
			if (x >  90) { x =  90};
			if (x < -90) { x = -90};

			// To make computation easier we shift the range of
			// x and y to [0,180]
			x += 90;
			y += 90;

			// if device is 45 degree load ground (1-20)
			if (x < 45) {

			//remove all old marker and images
			const deleteall = document.getElementById('markersArray');
			deleteall.remove();

			//list of the markers
			for(var i=1; i<23; i++) {
				var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
				markersURLArray.push(url);
				markersNameArray.push('Marker_'+i);
				console.log(url);
			}

			for(var k=0; k<22; k++) {
				var markerEl = document.createElement('a-marker');
				const number = k;
	
				markerEl.setAttribute('type','pattern');
				markerEl.setAttribute('url',markersURLArray[k]);
				markerEl.setAttribute('id','markersArray');
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
			}

			// If device is over 45 degree load wall (21-50)
			} else {
				
				//remove all old marker and images
				const deleteall = document.getElementById('markersArray');
				deleteall.remove();

				//list of the markers
				for(var i=24; i<50; i++) {
					var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
					markersURLArray.push(url);
					markersNameArray.push('Marker_'+i);
					console.log(url);
				}

				for(var k=23; k<50; k++) {
					var markerEl = document.createElement('a-marker');
					const number = k;
	
					markerEl.setAttribute('type','pattern');
					markerEl.setAttribute('url',markersURLArray[k]);
					markerEl.setAttribute('id','markersArray');
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
				}
			}
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
