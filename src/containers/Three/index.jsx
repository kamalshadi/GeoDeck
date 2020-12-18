import React, { useState, useEffect, useRef } from 'react'
import data from './sample.json';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import DatGui, { DatBoolean, DatColor, DatNumber, DatString, DatSelect } from 'react-dat-gui';
import { Interaction } from 'three.interaction';
import 'react-dat-gui/dist/index.css';
import { connect } from 'react-redux'
import PlaneHelper from './helper-plane'
import { drawSamplingPlane } from './shapes'

const {ni, nj, nk } = data

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
  sphere.position.set(x,y,z);
  return sphere
}

const Cube = ({three}) => {
  const [count, _] = useState(0);
  const [stage,setStage] = useState(null);
  const [samplePlane, setSamplePlane] = useState(null);
  const [data1, setData1] = useState({
    package: 'react-dat-gui',
    power: 9000,
    isAwesome: true,
    feelsLike: '#2FA1D6',
  })
  const [points, setPoints] = useState([])
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


    // draw line
    // const points = [];
    // points.push( new THREE.Vector3( -0.5, -.5, -0.5 ) );
    // points.push( new THREE.Vector3( 1, 1, 1 ) );
    // points.push( new THREE.Vector3( -1, -1, -1 ) );
    // material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    // const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
    // const line = new THREE.Line( geometry2, material );
    // scene.add(line)

    // slicing
    // let _plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    // let geom = new THREE.BoxGeometry(1, 1, 1);
    // geom = sliceGeometry(geom, _plane);
    // let mat = new THREE.MeshBasicMaterial({ wireframe: true });
    // let mesh = new THREE.Mesh(geom, mat);
    // scene.add(mesh);
    //
    //
    // sampling
    const plane = drawSamplingPlane()

    group.cursor = 'pointer';
    group.on('click', (ev) => {
        if (points.length === 1) {
          setPoints([points[0], [ev.intersects[0].point.x, ev.intersects[0].point.y, ev.intersects[0].point.z]])
        } else {
          setPoints([[ev.intersects[0].point.x, ev.intersects[0].point.y, ev.intersects[0].point.z]])
        }
    })
    scene.add(group)


    camera.position.z = 2;
    camera.position.y = 1;
    camera.position.x = 1;
    camera.lookAt(0, 0, 0);
    controls.update();

    const animate = () => {
      requestAnimationFrame(animate)
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };
    setStage(scene)
    window.stage = scene
    setSamplePlane(plane)
    scene.add(PlaneHelper); // the help grid on the floor
    animate();
  }, []);

  useEffect(() => {
    switch (three.activeWidget){
      case 'plane':
        if (!stage.getObjectByName('sampling-plane')) {
          stage.add(samplePlane)
          setData1({
            plane: 'XY',
            translate: 0,
            rotate: 0
          })
        } else {
          switch (data1.plane) {
            case 'XY':
              samplePlane.rotation.set(0,0,0)
              samplePlane.position.set(0,0,0)
              samplePlane.lookAt(new THREE.Vector3(0, 0, 10)) // z direction blue
              samplePlane.translateX(0.45)
              samplePlane.translateY(0.45)
              samplePlane.translateZ(0.05)
              samplePlane.position.z = data1.translate + 0.05
              break;
            case 'YZ':
              samplePlane.rotation.set(0,0,0)
              samplePlane.position.set(0,0,0)
              samplePlane.lookAt(new THREE.Vector3(10, 0, 0)) // x direction blue
              samplePlane.translateX(0.05)
              samplePlane.translateY(0.45)
              samplePlane.translateZ(0.45)
              samplePlane.translateX(data1.translate + 0.05)
              break
            default:
              samplePlane.rotation.set(0,0,0)
              samplePlane.position.set(0,0,0)
              samplePlane.lookAt(new THREE.Vector3(0, 10, 0)) // y direction blue
              samplePlane.translateX(0.45)
              samplePlane.translateY(0.05)
              samplePlane.translateZ(0.45)
              samplePlane.translateY(data1.translate + 0.05)
          }
          // plane.lookAt(new THREE.Vector3(10, 0, 0)); // x direction red
          // plane.lookAt(new THREE.Vector3(0, 10, 0)); // y direction green

        }

        break
      case 'line':
        stage.remove(stage.getObjectByName('sampling-plane'))
        lineMode()
        setData1({
          color: '#f50',
          size: 1
        })
        break
      default:
        if (stage) stage.remove(stage.getObjectByName('sampling-plane'))
        break
    }
  }, [three, points, data1])


  const myInc = ls => ls.map(v => v + 0.1)

  const lineMode = () => {
    points.map((p, ind) => {
      const s = getSphere(...p)
      stage.add(s)
      console.log('pints',points)
      if (ind === 1) {
        const sps = [] // sample line
        sps.push(new THREE.Vector3(...myInc(points[0])));
        sps.push(new THREE.Vector3(...myInc(points[1])));
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const geometry2 = new THREE.BufferGeometry().setFromPoints(sps);
        const line = new THREE.Line(geometry2, material);
        stage.add(line)
      }
      return null
    })
  }

  const renderLegend = () => {
    switch (three.activeWidget) {
      case 'plane':
        return (
          <DatGui data={data1} onUpdate={handleUpdate} style={{ position: 'absolute' }}>
            <DatSelect path="plane" options={['XY', 'ZY', 'XZ']} />
            <DatNumber path="translate" label="Move" min={0} max={1} step={0.05} />
            <DatNumber path="rotate" label="Rotate" min={-90} max={90} step={5} />
          </DatGui>
        )
      case 'line':
        return (
          <DatGui data={data1} onUpdate={handleUpdate} style={{ position: 'absolute' }}>
            <DatColor path="color" label="Color" />
            <DatNumber path="size" label="Size" min={0.1} max={10} step={0.5} />
          </DatGui>
        )
      default:
        return (
          <DatGui data={data1} onUpdate={handleUpdate} style={{ position: 'absolute' }}>
            <DatString path="package" label="Package" />
            <DatNumber path="power" label="Power" min={9000} max={9999} step={1} />
            <DatBoolean path="isAwesome" label="Awesome?" />
            <DatColor path="feelsLike" label="Feels Like" />
          </DatGui>
        )
    }
  }


  return (
    <div ref={domElement} className="chart" style={{position: 'relative'}}>
      {renderLegend()}
    </div>
  )
}


function mapStateToProps ({
  three
  }) {
  return {
    three
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cube)
