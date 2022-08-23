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
		
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('preset','custom');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('cursor','fuse: false; rayOrigin: mouse;');
			markerEl.setAttribute('raycaster','objects: '+markersNameArray[k]);
			markerEl.setAttribute('emitevents','true');

			markerEl.setAttribute('class',markersNameArray[k]);
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var img = document.createElement('a-image');
			var marker = markersNameArray[k];
			
			img.setAttribute('src','#' + marker);
			img.setAttribute('id',marker);
			img.setAttribute('scale','1 1 1');
			img.setAttribute('class',markersNameArray[k]);
			img.setAttribute('link',"href: https://google.com/search?q=" + marker);
			img.object3D.position.set(0, 0, 0);
			img.object3D.rotation.set(160, 0, 0);

			markerEl.appendChild(img);

				//Adding link to each marker
				var anchor = document.createElement('a-link');
			
				anchor.setAttribute('title',marker);
				anchor.setAttribute('href',"https://google.com/search?q=" + marker);
	
				sceneEl.appendChild(anchor);
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
