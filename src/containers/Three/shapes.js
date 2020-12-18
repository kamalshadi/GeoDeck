import * as THREE from 'three'
import alpha_map from './alphamap.png'


const netTexture = () => {
  const canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d')
  canvas.width = 64;
  canvas.height = 64;
  ctx.clearRect(0,0,64,64);
  ctx.fillStyle = '#fff';
  for (let i = 1; i < 10; i++) {
    ctx.fillRect(i * 6, 0, 2, 64)
  }
  for (let i = 1; i < 10; i++){
    ctx.fillRect(0, i * 6, 64, 2)
  }

  // ctx.fillRect(0, 0, 32, 32)
  return new THREE.CanvasTexture(canvas);
}

const drawSamplingPlane = () => {
  const geometry = new THREE.PlaneGeometry(1.4, 1.4);
  // const material = new THREE.MeshBasicMaterial({ color: 0xffff0022, });
  // const alphaMap = new THREE.ImageUtils.loadTexture(alpha_map)
  const material = new THREE.MeshBasicMaterial({
    color: '#F2AB1f', // red (can also use a CSS color string here)
    alphaMap: netTexture(),
    side: THREE.DoubleSide,
    transparent: true,
  });
  const plane = new THREE.Mesh(geometry, material)
  plane.name = 'sampling-plane'
  // plane.lookAt(new THREE.Vector3(10, 0, 0)); // x direction red
  // plane.lookAt(new THREE.Vector3(0, 10, 0)); // y direction green
  plane.lookAt(new THREE.Vector3(0, 0, 10)) // z direction blue
  plane.translateX(0.45)
  plane.translateY(0.45)
  plane.translateZ(0.05)
  return plane
}

const drawSamplingLine = () => {
  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.MeshBasicMaterial({ color: '#F2AB1f', side: THREE.DoubleSide });
  const plane = new THREE.Mesh(geometry, material)
  // plane.lookAt(new THREE.Vector3(10, 0, 0)); // x direction red
  // plane.lookAt(new THREE.Vector3(0, 10, 0)); // y direction green
  plane.lookAt(new THREE.Vector3(0, 0, 10)); // z direction blue
  // plane.rotation.set(new THREE.Vector3( 0, 0, Math.PI / 2));
  return plane
}



export { drawSamplingPlane, drawSamplingLine }
