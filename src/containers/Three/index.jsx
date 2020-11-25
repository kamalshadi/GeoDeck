import React, { useState, useEffect, useRef } from 'react';
import data from './sample.json';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import DatGui, { DatBoolean, DatColor, DatNumber, DatString } from 'react-dat-gui';
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
    const controls = new OrbitControls( camera, renderer.domElement );
    renderer.setSize(domElement.current.clientWidth, domElement.current.clientHeight);
    domElement.current.appendChild( renderer.domElement );
    const group = new THREE.Group();
    for (let i = 0; i < data.ni; i++) {
      for (let j = 0; j < data.nj; j++) {
        for (let k = 0; k < data.nk; k++) {
          const geometry = new THREE.BoxBufferGeometry(1/ni,1/nj,1/nk);
          const ind = k + data.nk*j + data.nj*i
          const material = new THREE.MeshBasicMaterial( { color: RGBAToHexA(parseInt(data.data[ind]*255),0,0,1)});
          const cube = new THREE.Mesh( geometry, material );
          cube.position.set(i/ni,j/nj,k/nk);
          group.add( cube );
        }
      }
    }

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
