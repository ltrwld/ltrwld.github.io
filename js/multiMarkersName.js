//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<23; i++)
		{
			var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		for(var k=0; k<22; k++)
		{
			var markerEl = document.createElement('a-marker');
			const number = k;
		
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);
			markerEl.setAttribute('raycaster','objects: .clickable');
			markerEl.setAttribute('emitevents','true');
			markerEl.setAttribute('cursor','fuse: false; rayOrigin: mouse;');
			
			if(number % 2 == 0) {
				//IF EVEN CREATE LINK
				markerEl.setAttribute('onclick',"location.href='https://www.google.de/" + markersNameArray[k] + "'");
			}
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var img = document.createElement('a-image');
			
			img.setAttribute('src','#' + markersNameArray[k]);
			img.setAttribute('id',markersNameArray[k]);
			img.setAttribute('scale','1 1 1');
			img.setAttribute('class','clickable');
			img.setAttribute('gesture-handler','');
			img.object3D.position.set(0, 0.3, 0);
			img.object3D.rotation.set(-90, 0, 0);

			markerEl.appendChild(img);
		}
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
