import * as THREE from 'three';

// Video tutorial code that doesn't work at the moment
// const renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.z = 5;

// renderer.render(scene, camera);

// Threejs documentation tutorial

// Setting up a new scene
const scene = new THREE.Scene();
// Setting up a PerspectiveCamera. First attribute is the FOV. Second one aspect ratio. Always use width of the element divided by the height of it.
// Next two arguments ar the near and far clipping plane. Anything outside these two values won't be rendered.
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// Setting up a renderer instance and set the size we want to render in our app.
const renderer = new THREE.WebGLRenderer();
// Using the width and height of the browser window.
// For performance intensive apps, you can give 'setSize' smaller values like 'window.innerWidth/2 and window.innerHeight/2'
// which will make the app render at quarter size.
// Keep size of the app but at lower resolution? call 'setSize' with false as updateStyle (the third argument)
// Example 'setSize(window.innerWidth/2, window.innerHeight/2, false) which will render the app at half resolution, given that the <canvas> has 100% width and height.
renderer.setSize( window.innerWidth, window.innerHeight );
// Add the renderer element to our HTML document.
document.body.appendChild( renderer.domElement );

// Add the cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFEA1A1 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
// Rendering the scene
function animate() {
	requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
