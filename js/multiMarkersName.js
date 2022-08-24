//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		

		for(var k=0; k<1; k++)
		{
			var markerEl = document.createElement('a-marker');
		
			markerEl.setAttribute('type','barcode');
			markerEl.setAttribute('type','barcode');
			markerEl.setAttribute('value',k);
			markerEl.setAttribute('id',k);
			markerEl.setAttribute('class','marker-' + k);
			
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var img = document.createElement('a-image');
			
			img.setAttribute('src','#Marker_' + k);
			img.setAttribute('link','href: https://google.com/search?q=Marker' + k);
			img.setAttribute('id',k);
			img.setAttribute('scale','1 1 1'); 
			img.setAttribute('class','image clickable');
			img.object3D.position.set(0, 0.3, 0);
			img.object3D.rotation.set(65, 0, 0);

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
