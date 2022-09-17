//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<19; i++)
		{
			var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		for(var k=0; k<18; k++)
		{
			var markerEl = document.createElement('a-marker');
			const number = k;
		
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);
			markerEl.setAttribute('class','marker');
			
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var img = document.createElement('a-image');
			
			img.setAttribute('src','#' + markersNameArray[k]);
			img.setAttribute('link','href: https://ar.cerq.com/redirect.html?link=' + markersNameArray[k]);
			img.setAttribute('id',markersNameArray[k]);
			img.setAttribute('scale','4 2 1'); 
			img.setAttribute('class','image clickable');
			img.object3D.position.set(0, 0.3, 0);
			img.object3D.rotation.set(250, 0, 0);

			markerEl.appendChild(img);
		}
		for(var k=17; k<19; k++)
		{
			var markerEl = document.createElement('a-marker');
			const number = k;
		
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);
			markerEl.setAttribute('class','marker');
			
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var video = document.createElement('a-video');
			
			video.setAttribute('src','#' + markersNameArray[k]);
			video.setAttribute('link','href: https://ar.cerq.com/redirect.html?link=' + markersNameArray[k]);
			video.setAttribute('id',markersNameArray[k]);
			video.setAttribute('width','16');
			video.setAttribute('height','9');
			video.object3D.position.set(0, 0, -20);

			markerEl.appendChild(video);
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