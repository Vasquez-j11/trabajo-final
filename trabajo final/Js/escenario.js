const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load(
    '../img/mapa rubiela.png',function(texture){
        scene.background = texture;
    }
);

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render    

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria 1
const geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material = new THREE.MeshBasicMaterial( {color: 0xa52828} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
controls = new THREE.DragControls([cube], camera, renderer.domElement)

//geometria 2
const geometry1 = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material1= new THREE.MeshBasicMaterial( {color: 0xa52828} );
const cube1= new THREE.Mesh( geometry, material );
scene.add( cube1 );
controls = new THREE.DragControls([cube1], camera, renderer.domElement)

//geometria 3
const geometry2 = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material2= new THREE.MeshBasicMaterial( {color: 0xa52828} );
const cube2= new THREE.Mesh( geometry, material );
scene.add( cube2 );
controls = new THREE.DragControls([cube2], camera, renderer.domElement)

//geometria 4
const geometry3 = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material3= new THREE.MeshBasicMaterial( {color: 0xa52828} );
const cube3= new THREE.Mesh( geometry, material );
scene.add( cube3 );
controls = new THREE.DragControls([cube2], camera, renderer.domElement)

//geometria 5
const geometry4 = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const material4= new THREE.MeshBasicMaterial( {color: 0xa52828} );
const cube4= new THREE.Mesh( geometry, material );
scene.add( cube4 );
controls = new THREE.DragControls([cube2], camera, renderer.domElement)

//MODELO GTÇLTF MODELO1

const gltfloader = new THREE.GLTFLoader();
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add( light );
gltfloader.load('../3d/police_02/scene.gltf', (gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.04, 0.04 ,0.04)
    scene.add(loaderObjeto);
    console.log('carga completa');
    loaderObjeto.position.x = -4;
    loaderObjeto.position.y = 1;
  
    controls = new THREE.DragControls([loaderObjeto], camera, renderer.domElement)
    }, ()=>{
        console.log ('cargando')
    }, ()=>{
        console.log ('error')
    },
    );
    cube.position.x = -5;
    cube.position.y = -4.5;
    cube1.position.x = -2.2;
    cube1.position.y = 2;
    cube2.position.x = -14;
    cube2.position.y = 5.5;
    cube3.position.x = 22;
    cube3.position.y = 0.5;
    cube4.position.x = 1;
    cube4.position.y = -8.8;

 camera.position.z = 20;
    function animate (){
        requestAnimationFrame(animate);
        cube.rotation.x += 0.03;
        cube.rotation.y += 0.03;
        cube.rotation.z += 0.03;
        cube1.rotation.x += 0.03;
        cube1.rotation.y += 0.03;
        cube1.rotation.z += 0.03;
        cube2.rotation.y += 0.03;
        cube2.rotation.z += 0.03;
        cube3.rotation.y += 0.03;
        cube3.rotation.z += 0.03;
        cube4.rotation.y += 0.03;
        cube4.rotation.z += 0.03;
        renderer.render(scene, camera)
    }
    animate();