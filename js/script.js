   const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
    window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    });
    
   var controls = new THREE.OrbitControls( camera, renderer.domElement);
			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshNormalMaterial( { color: 0xFFFFFF, wireframe: false } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
			camera.position.z = 5;
			
			const animate = function() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;
    
				renderer.render( scene, camera );
			};
			
			animate();
