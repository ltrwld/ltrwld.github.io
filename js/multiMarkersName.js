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
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var textEl = document.createElement('a-entity');
			
			textEl.setAttribute('id','text');
			textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});
			textEl.object3D.position.set(0, 0.7, 0);
			textEl.object3D.rotation.set(-90, 0, 0);




			const image = document.createElement('img');

// 👇️ Local image
// image.setAttribute('src', 'my-img.png');

// 👇️ Remote image
image.setAttribute(
  'src',
  'http://bobbyhadz.com/images/blog/javascript-show-div-on-select-option/banner.webp',
);

image.setAttribute('alt', 'nature');

image.setAttribute('height', 350); // 👈️ height in px
image.setAttribute('width', 550); // 👈️ width in px

// 👇️ optionally style the image
image.style.border = '5px solid yellow';

image.onerror = function handleError() {
  console.log('Image could not be loaded');
  // 👇️ Can set image.src to a backup image here
  // image.src = 'backup-image.png'

  // 👇️ Or hide image
  // image.style.display = 'none';
};

image.onload = function handleImageLoaded() {
  console.log('image loaded successfully');
};

const box = document.getElementById('box');
box.appendChild(image);

			markerEl.appendChild(textEl);
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
