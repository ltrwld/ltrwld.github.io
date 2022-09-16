//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];
const link19 = "href: https://www.cash-online.de/investmentfonds/nachhaltigkeit-investmentfonds/2022/energiewende-kohlschwarze-aussichten-fuer-die-zukunft/616776/"
            const link20 = "https://wikipedia.org"
            const link21 = "https://jenabatteries.de"
            const link22 = "https://www.youtube.com/watch?v=61W1gN3ETjQ"
            const link23 = "https://github.com"
            const link24 = "https://wikipedia.org"
            const link25 = "https://jenabatteries.de"
            const link26 = "https://www.youtube.com/watch?v=61W1gN3ETjQ"
            const link27 = "https://github.com"
            const link28 = "https://wikipedia.org"
            const link29 = "https://github.com"
            const link30 = "https://wikipedia.org"

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
			markerEl.setAttribute('class','marker');
			
			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var img = document.createElement('a-image');
			
			img.setAttribute('src','#' + markersNameArray[k]);
			img.setAttribute('link', link+k);
			img.setAttribute('id',markersNameArray[k]);
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