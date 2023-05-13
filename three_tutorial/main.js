import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


//const loader = new GLTFLoader();
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
// The code below makes it possible that we can rotate the object with the mouse (IMPORTANT, code has to come AFTER setting up the camera!)
const controls = new OrbitControls( camera, renderer.domElement );

// Adding a cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFEA1A1 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Adding a sphere
const sphereGeometry = new THREE.SphereGeometry(4); // 4 is the radius of the sphere
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0xB6EAFA,
  // wireframe: true, makes the sphere surface made out of lines, squares and triangles. Like having a sphere made out of wires.
  // If we set it to false, the surface would be black because we don't have any light in our scene yet (just like in the real world how objects need to be illuminated).
  wireframe: true
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// To move objects, use the following code:
// geometry_object.position.set(x, y, z); coordinates or geometry_object.x = n || geometry_object.y = n || geometry_object.z = n

camera.position.z = 5;
// controls.update() must be called after any manual changes to the camera's transform
controls.update();
// Rendering the scene
function animate() {
	requestAnimationFrame( animate );

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
