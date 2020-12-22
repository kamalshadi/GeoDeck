import React, { useState, useEffect, useRef } from 'react'
import data from './sample.json';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import DatGui, { DatBoolean, DatColor, DatNumber, DatString, DatSelect } from 'react-dat-gui';
import { Interaction } from 'three.interaction';
import 'react-dat-gui/dist/index.css';
import { connect } from 'react-redux'
import PlaneHelper from './helper-plane'
import { drawSamplingPlane, drawSamplingLine, drawSamplingDot } from './shapes'
import cubeData from './cube.json'

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

const Cube = ({three}) => {
  const [groupP, setGroupP] = useState(null) // pressure
  const [groupT, setGroupT] = useState(null)// temprature
  const [count, _] = useState(0);
  const [stage, setStage] = useState(null);
  const [samplePlane, setSamplePlane] = useState(null);
  const [sampleLine, setSampleLine] = useState(null);
  const [sampleDot, setSampleDot] = useState(null);
  const [data1, setData1] = useState({
    project: 'GeoDeck Demo',
    simulation: 'S1',
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
    const _groupT = new THREE.Group();
    _groupT.name = 'cube-temprature'
    const _groupP = new THREE.Group();
    _groupP.name = 'cube-pressure'
    cubeData.map(node => {
      const {i, j, k} = node
      const geometry = new THREE.BoxBufferGeometry(0.04, 0.04, 0.04);
      const materialT = new THREE.MeshBasicMaterial({ color: node.Temprature, clippingPlanes: [] });
      const materialP = new THREE.MeshBasicMaterial({ color: node.Pressure, clippingPlanes: [] });
      const cube = new THREE.Mesh(geometry, materialT);
      const cubeP = new THREE.Mesh(geometry, materialP);
      cube.position.set(i/100,j/100,k/25)
      cubeP.position.set(i/100,j/100,k/25)
      _groupT.add(cube)
      _groupP.add(cubeP)
    })

    //axis helper
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );


    const line = drawSamplingLine()
    setSampleLine(line)

    const dot = drawSamplingDot()
    setSampleDot(dot)

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

    _groupP.cursor = 'pointer';
    _groupP.on('click', (ev) => {
        if (points.length === 1) {
          setPoints([points[0], [ev.intersects[0].point.x, ev.intersects[0].point.y, ev.intersects[0].point.z]])
        } else {
          setPoints([[ev.intersects[0].point.x, ev.intersects[0].point.y, ev.intersects[0].point.z]])
        }
    })
    scene.add(groupP)


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
    setGroupP(_groupP)
    setGroupT(_groupT)
    window.stage = scene
    setSamplePlane(plane)
    scene.add(PlaneHelper); // the help grid on the floor
    animate();
  }, []);

  useEffect(() => {
    switch (three.activeWidget){
      case 'plane':
        if (stage) stage.remove(stage.getObjectByName('sampling-line'))
        if (stage) stage.remove(stage.getObjectByName('sampling-dot'))
        if (!stage.getObjectByName('sampling-plane')) {
          stage.add(samplePlane)
        }
        break
      case 'line':
        if (stage) stage.remove(stage.getObjectByName('sampling-plane'))
        if (stage) stage.remove(stage.getObjectByName('sampling-dot'))
        if (!stage.getObjectByName('sampling-line')) {
          stage.add(sampleLine)
        }
        break
      case 'point':
        if (stage) stage.remove(stage.getObjectByName('sampling-plane'))
        if (stage) stage.remove(stage.getObjectByName('sampling-line'))
        if (!stage.getObjectByName('sampling-line')) {
          stage.add(sampleDot)
        }
        break
      default:
        if (stage) stage.remove(stage.getObjectByName('sampling-plane'))
        if (stage) stage.remove(stage.getObjectByName('sampling-line'))
        if (stage) stage.remove(stage.getObjectByName('sampling-dot'))
        break
    }
  }, [three])

  useEffect(() => {
    if (!stage) return
    switch (three.sample.variable){
      case 'Temprature':
        stage.remove(stage.getObjectByName('cube-pressure'))
        stage.add(groupT)
        break
      default:
        stage.remove(stage.getObjectByName('cube-temprature'))
        stage.add(groupP)
    }
  },[three.sample.variable, groupP, groupT])


  const myInc = ls => ls.map(v => v + 0.1)

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
            <DatString path="project" label="Project" />
            <DatSelect path="simulation" options={['S1', 'S2', 'S3', 'S4']} />
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


function mapStateToProps({
  three
  }){
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
