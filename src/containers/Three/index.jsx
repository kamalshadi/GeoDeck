import React, { useState, useEffect, useRef } from 'react';
import data from './sample.json';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';
import { Interaction } from 'three.interaction';
import 'react-dat-gui/dist/index.css';

const {ni, nj, nk } = data

console.log(ni, nk, nj)

function RGBAToHexA(r,g,b,a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  if (a.length == 1)
    a = "0" + a;

  return "#" + r + g + b;
}

const getSphere = (x,y,z)=>{
  const geometry = new THREE.SphereGeometry( .05, .05, .05 );
  const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  const sphere = new THREE.Mesh( geometry, material );
  console.log(x,y,z);
  sphere.position.set(x,y,z);
  return sphere
}

const Cube = () => {
  const [count, _] = useState(0);
  const [data1, setData1] = useState({
    package: 'react-dat-gui',
    power: 9000,
    isAwesome: true,
    feelsLike: '#2FA1D6',
  })
  const domElement = useRef(null);

  const handleUpdate = newData => {
    setData1({...data1,...newData})
  }

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, domElement.current.clientWidth / domElement.current.clientHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({alpha:true});

    //light
    var light = new THREE.PointLight( 0xffffff, 1, 100 );
       light.position.set( 20, 30, 40 );
       scene.add( light );

     var light = new THREE.AmbientLight( 0x404040 ); // soft white light
     scene.add( light );


     // plane helper
     var PlaneHelper = function(plane) {
       var geom = new THREE.PlaneGeometry( 5, 5, 50, 50 );
       var material = new THREE.MeshBasicMaterial({
         color: '#333',
         side: THREE.DoubleSide,
         wireframe: true
       });
       var obj = new THREE.Mesh( geom, material );
       obj.lookAt(plane.normal);
       obj.translateOnAxis(
         new THREE.Vector3(1, 0, 0).cross(plane.normal).normalize(),
         plane.constant * -1
       );
       return obj;
     };

     var wavyPlaneGeom = function() {
       var degree = 3;
       var knots = [0, 0, 0, 0, 1, 1, 1, 1];
       var pts = [];
       var numPoints = 4;
       for (let u = 0; u < numPoints; u++) {
         var ptsV = [];
         for (let v = 0; v < numPoints; v++) {
           ptsV.push([
             u/numPoints - 0.5,
             Math.random() - 0.5,
             v/numPoints - 0.1
           ])
         }
         pts.push(ptsV)
       }
       var srf = window.verb.geom.NurbsSurface.byKnotsControlPointsWeights(degree, degree, knots, knots, pts);
       var geom = srf.toThreeGeometry();
       return geom;
     }

     var floor = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)

     var planeHelper = new PlaneHelper(floor);
     scene.add( planeHelper );

     // var localPlane = new THREE.Plane( new THREE.Vector3( .5, -.5, .1 ), .1 );

     // var globalPlane = new THREE.Plane( new THREE.Vector3( -.5, .6, -.34 ), .1 );

     // renderer.clippingPlanes = [ globalPlane ];

     // renderer.localClippingEnabled = true;

    //interaction
    const interaction = new Interaction(renderer, scene, camera);
    const controls = new OrbitControls( camera, renderer.domElement );
    renderer.setSize(domElement.current.clientWidth, domElement.current.clientHeight);
    domElement.current.appendChild( renderer.domElement );
    const group = new THREE.Group();
    for (let i = 0; i < data.ni; i++) {
      for (let j = 0; j < data.nj; j++) {
        for (let k = 0; k < data.nk; k++) {
          const geometry = new THREE.BoxBufferGeometry(1/ni,1/nj,1/nk);
          const ind = k + data.nk*j + data.nj*i
          const material = new THREE.MeshBasicMaterial( { color: RGBAToHexA(parseInt(data.data[ind]*255),0,0,1), clippingPlanes: []});
          const cube = new THREE.Mesh( geometry, material );
          cube.position.set(i/ni,j/nj,k/nk);
          group.add( cube );
        }
      }
    }

    //axis helper
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    // draw plane
    const geometry = new THREE.PlaneGeometry( 2, 2 );
    let material = new THREE.MeshBasicMaterial( {color: 0xffff0022, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry, material );
    scene.add( plane );

    // draw line
    const points = [];
    points.push( new THREE.Vector3( -0.5, -.5, -0.5 ) );
    points.push( new THREE.Vector3( 1, 1, 1 ) );
    points.push( new THREE.Vector3( -1, -1, -1 ) );
    material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
    const line = new THREE.Line( geometry2, material );
    scene.add(line)

    // slicing
    // let _plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    // let geom = new THREE.BoxGeometry(1, 1, 1);
    // geom = sliceGeometry(geom, _plane);
    // let mat = new THREE.MeshBasicMaterial({ wireframe: true });
    // let mesh = new THREE.Mesh(geom, mat);
    // scene.add(mesh);


    group.cursor = 'pointer';
    group.on('click', function(ev) {
      console.log(ev.intersects)
      let s = getSphere(ev.intersects[0].point.x,ev.intersects[0].point.y,ev.intersects[0].point.z)
      scene.add(s)
    });
    scene.add(group)


    camera.position.z = 2;
    camera.position.y = 1;
    camera.position.x = 1;
    camera.lookAt( 0, 0, 0);
    controls.update();

    const animate = function () {
      requestAnimationFrame( animate );
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      controls.update();
      renderer.render( scene, camera );
    };

    animate();
  },[]);
  return (
    <div ref={domElement} className="chart" style={{position: 'relative'}}>
      <DatGui data={data1} onUpdate={handleUpdate} style={{position: 'absolute'}}>
        <DatString path='package' label='Package' />
        <DatNumber path='power' label='Power' min={9000} max={9999} step={1} />
        <DatBoolean path='isAwesome' label='Awesome?' />
        <DatColor path='feelsLike' label='Feels Like' />
      </DatGui>
    </div>
  );
};


export default Cube;
