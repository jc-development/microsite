import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols/OrbitControls';
import FeaturesMenu from './child-components/FeaturesMenu';
import { createBlackMaterial, createBaseMaterial, createThumbsaverMaterial, createCableStringMaterial, createWhiteMaterial, createStockLimbMaterial, createOpaqueMaterial } from './assets/utils/createColors';

import './assets/css/cad-model-tour.css';

import a4LogoImg from './../assets/images/a4-logo.png';
import symbol360Img from './assets/images/symbol-360.png';
import crossbowLoaderImg from './assets/images/crossbow-loader.png';


export default class CADModelTour extends Component {

  constructor(props) {
    super(props);

    this.camera, this.scene, this.renderer;
    this.geometry, this.material, this.mesh;
    this.crossbowObject, this.loader, this.ambientLight, this.hemisphereLight;
    this.controls;
    this.textureLoader;

    this.baseMaterial;
    this.thumbsaverMaterial;
    this.stringCableMaterial;
    this.whiteMaterial;
    this.stockLimbMaterial;
    this.blackMaterial;
    this.realTreeCamoMaterial;
    this.mossyOakCamoMaterial;
    this.opaqueMaterial;

    this.handleCrossbowResize = this.handleCrossbowResize.bind(this);

    this.setBlackColor = this.setBlackColor.bind(this);

    this.setBaseMaterial = this.setBaseMaterial.bind(this);
    this.setRealTreeCamoMaterial = this.setRealTreeCamoMaterial.bind(this);
    this.setMossyOakCamoMaterial = this.setMossyOakCamoMaterial.bind(this);
    this.setOpaqueMaterial = this.setOpaqueMaterial.bind(this);

    this.disposeHierchy = this.disposeHierchy.bind(this);
    this.disposeNode = this.disposeNode.bind(this);

    this.startCAD = this.startCAD.bind(this);

    this.handleFeatureClick = this.handleFeatureClick.bind(this);
    this.handleResetCrossbow = this.handleResetCrossbow.bind(this);
    this.handleColorClick = this.handleColorClick.bind(this);

    this.state = {
      percentLoaded: 0,
      resetFeatureList: false,
      colorSelected: "Realtree Xtra"
    }

  }

  setRealTreeCamoMaterial() {
    this.textureLoader.load(
      'https://s3.amazonaws.com/elite-website/bow-3d-models/realtree-xtra.png',
      (colorFinish) => {
        this.realTreeCamoMaterial = this.realTreeCamoMaterial || (new THREE.MeshBasicMaterial({
          map: colorFinish,
          skinning: true,
          precision: 'highp'
        }));

          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'comfortek-stock':
                child.material = this.realTreeCamoMaterial;
                break;

              case 'armor-tuff-quad-limbs':
                child.material = this.realTreeCamoMaterial;
                break;
            }
          });
    });
  }

  setMossyOakCamoMaterial() {
    this.textureLoader.load(
      'https://s3.amazonaws.com/elite-website/bow-3d-models/mossy-oak-tree-stand.jpg',
      (colorFinish) => {
        this.mossyOakCamoMaterial = this.mossyOakCamoMaterial || (new THREE.MeshBasicMaterial({
          map: colorFinish,
          skinning: true,
          precision: 'highp'
        }));

          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'comfortek-stock':
                child.material = this.mossyOakCamoMaterial;
                break;

              case 'armor-tuff-quad-limbs':
                child.material = this.mossyOakCamoMaterial;
                break;
            }
          });
    });
  }

  setBlackColor() {
      this.blackMaterial = this.blackMaterial || createBlackMaterial();
      this.crossbowObject.traverse( (child) => {
        switch(child.name) {
          case 'comfortek-stock':
            child.material = this.blackMaterial;
            break;

          case 'armor-tuff-quad-limbs':
            child.material = this.blackMaterial;
            break;
        }
      });
  }

  handleColorClick(colorName) {
    this.setState({
      resetFeatureList: false
    });

    switch (colorName) {
      case 'NINJA BLACK':
        this.setBlackColor();
        this.setState({colorSelected: "Ninja Black"});
        break;

      case 'REALTREE XTRA':
        this.setRealTreeCamoMaterial();
        this.setState({colorSelected: "Realtree Xtra"});
        break;

      case 'MOSSY OAK TREESTAND':
        this.setMossyOakCamoMaterial();
        this.setState({colorSelected: "Mossy Oak Treestand"});
        break;

      default:
        break;
    }
  }

  setOpaqueMaterial() {
    this.opaqueMaterial = this.opaqueMaterial || createOpaqueMaterial();
  }

  setBaseMaterial() {

        this.baseMaterial = this.baseMaterial || createBaseMaterial();

        this.thumbsaverMaterial = this.thumbsaverMaterial || createThumbsaverMaterial();

        this.stringCableMaterial = this.stringCableMaterial || createCableStringMaterial();

        this.whiteMaterial = this.whiteMaterial || createWhiteMaterial();

        this.stockLimbMaterial = this.stockLimbMaterial || createStockLimbMaterial();

        this.crossbowObject.traverse( (child) => {
          switch(child.name) {

            case 'arrow-white-fletching':
              child.material = this.whiteMaterial;
              break;

            case 'arrow-red-fletching':
              child.material = this.thumbsaverMaterial;
              break;

            case 'pars':
              child.material = this.thumbsaverMaterial;
              break;

            case 'thumbsaver':
              child.material = this.thumbsaverMaterial;
              break;

            case 'thumbsaver-II':
              child.material = this.thumbsaverMaterial;
              break;

            case 'strings-and-cables':
              child.material = this.stringCableMaterial;
              break;

            default:
              child.material = this.baseMaterial;
              break;
          }
        });
  }

  handleResetCrossbow() {
    this.setState({
      resetFeatureList: true
    });

    this.setBaseMaterial();
    this.setRealTreeCamoMaterial();
  }

  handleFeatureClick(partName) {

    this.setState({
      resetFeatureList: false
    });

    switch (partName) {

      case 'THUMBSAVER':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'thumbsaver':
              child.material = this.thumbsaverMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'ARC 370 4X32 ILLUMINATED CROSSBOW SCOPE':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'arc-illuminated-scope':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'INBOARD SWINGARM TECHNOLOGY':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'inboard-swingarm-technology':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'CUSTOM STRINGS & CABLES':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'strings-and-cables':
              child.material = this.stringCableMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'FREE FLIGHT BARREL':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'free-flight-barrel':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'LIMB DAMPENER':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'limb-dampeners':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'STRING SUPPRESSORS':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'string-suppressors':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'LO-RIDER RISER':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'lo-rider-riser':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'GRIPPER COCKING STIRRUP':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'gripper-cocking-stirrup':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'WISHBONE SIDE MOUNT QUIVER':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'quiver-head':
              child.material = this.baseMaterial;
              break;

            case 'quiver-parts':
              child.material = this.baseMaterial;
              break;

            case 'arrow-shafts':
              child.material = this.baseMaterial;
              break;

            case 'arrow-white-fletching':
              child.material = this.whiteMaterial;
              break;

            case 'arrow-red-fletching':
              child.material = this.thumbsaverMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

      case 'ARMOR TUFF QUAD LIMBS':
        this.crossbowObject.traverse( (child) => {
          switch(child.name) {
            case 'armor-tuff-quad-limbs':
              child.material = this.baseMaterial;
              break;

            default:
              child.material = this.opaqueMaterial;
              break;
          }
        });
        break;

        case 'THUMBSAVER II':
          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'thumbsaver-II':
                child.material = this.thumbsaverMaterial;
                break;

              default:
                child.material = this.opaqueMaterial;
                break;
            }
          });
          break;

        case 'FREEFLOAT CABLE SYSTEM':
          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'strings-and-cables':
                child.material = this.stringCableMaterial;
                break;

              case 'inboard-swingarm-technology':
                child.material = this.baseMaterial;
                break;

              case 'free-flight-barrel':
                child.material = this.baseMaterial;
                break;

              default:
                child.material = this.opaqueMaterial;
                break;
            }
          });
          break;

        case 'BALLISTIC LIMB CAPS':
          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'ballistic-nylon-limb-tips':
                child.material = this.baseMaterial;
                break;

              default:
                child.material = this.opaqueMaterial;
                break;
            }
          });
          break;

        case 'COMFORTEK STOCK':
          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'comfortek-stock':
                child.material = this.baseMaterial;
                break;

              default:
                child.material = this.opaqueMaterial;
                break;
            }
          });
          break;

        case 'MONOBLOC SCOPE BASE':
          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'monobloc-scopebase':
                child.material = this.baseMaterial;
                break;

              default:
                child.material = this.opaqueMaterial;
                break;
            }
          });
          break;

        case 'PIVOTING ARROW RETENTION':
          this.crossbowObject.traverse( (child) => {
            switch(child.name) {
              case 'pars':
                child.material = this.thumbsaverMaterial;
                break;

              case 'pars-mechanism':
                child.material = this.baseMaterial;
                break;

              default:
                child.material = this.opaqueMaterial;
                break;
            }
          });
          break;

      default:
        break;

    }
  }


  disposeNode(node) {
    // console.log('this.scene: ', this.scene);
    if (node instanceof THREE.Mesh) {
      if (node.material) {
        if (node.material instanceof THREE.MeshFaceMaterial || node.material instanceof THREE.MultiMaterial) {
          node.material.materials.forEach( function(mtrl, idx) {
            if (mtrl.map) mtrl.map.dispose();
            if (mtrl.lightMap) mtrl.lightMap.dispose();
            if (mtrl.bumpMap) mtrl.bumpMap.dispose();
            if (mtrl.normalMap) mtrl.normalMap.dispose();
            if (mtrl.specularMap) mtrl.specularMap.dispose();
            if (mtrl.envMap) mtrl.envMap.dispose();

            mtrl.dispose();
            mtrl = undefined;
          } );
        }
        else {
          if (node.material.map) node.material.map.dispose();
          if (node.material.lightMap) node.material.lightMap.dispose();
          if (node.material.bumpMap) node.material.bumpMap.dispose();
          if (node.material.normalMap) node.material.normalMap.dispose();
          if (node.material.specularMap) node.material.specularMap.dispose();
          if (node.material.envMap) node.material.envMap.dispose();

          node.material.dispose();
          node.material = undefined;
        }
      }
      if (node.geometry) {
        node.geometry.dispose();
        node.geometry = undefined;
      }
    }
    // console.log('node before removal: ', node);
    this.scene.remove( node );
    this.renderer.dispose();
    node = undefined;
  }

  disposeHierchy(node, callback) {
    for (var i = node.children.length - 1; i >= 0; i--) {
      var child = node.children[i];

      this.disposeHierchy(child, callback);
      callback(child);
    }
  }

  handleCrossbowResize() {
    const canvasEl = document.getElementById('crossbow-ui');
    if (canvasEl && this.renderer) {
      const containerWidth = canvasEl.offsetWidth;
      const containerHeight = canvasEl.offsetHeight;

      this.renderer.setSize(containerWidth, containerHeight);
      this.camera.aspect = containerWidth / containerHeight;

      this.camera.left = -1000 * this.camera.aspect / 2;
      this.camera.right = 1000 * this.camera.aspect / 2;
      this.camera.top = 1000 / 2;
      this.camera.bottom = -1000 / 2;
      this.camera.updateProjectionMatrix();
    }
  }

  startCAD() {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const canvasEl = document.getElementById('three-d-wrapper');
    const containerWidth = canvasEl.offsetWidth;
    const containerHeight = canvasEl.offsetHeight;
    this.camera = new THREE.OrthographicCamera(containerWidth / - 2, containerWidth / 2, containerHeight / 2, containerHeight / - 2, -1000, 1000);
    this.camera.position.x = 120;
    this.camera.position.y = 100;
    this.camera.position.z = 200;

    this.camera.aspect = containerWidth / containerHeight;

    this.camera.left = -1000 * this.camera.aspect / 2;
    this.camera.right = 1000 * this.camera.aspect / 2;
    this.camera.top = 1000 / 2;
    this.camera.bottom = -1000 / 2;
    this.camera.updateProjectionMatrix();


    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xFFFFFF );

    this.scene.translateY(200);

    // instantiate a loader
    this.loader = new THREE.ObjectLoader();

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, autoClear: true, physicallyCorrectLights: true });

    this.renderer.setPixelRatio(2);
    this.renderer.setSize( containerWidth, containerHeight );

    // controls
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.enableZoom = false;

    this.controls.enablePan = false;
    canvasEl.appendChild( this.renderer.domElement );

    this.textureLoader = new THREE.TextureLoader();

    // load a resource
    this.loader.load(
    	// resource URL
      'https://s3.amazonaws.com/elite-website/bow-3d-models/a4-uv.json',

    	// onLoad callback
    	( geometry ) => {
        this.crossbowObject = geometry;
        this.crossbowObject.rotation.z = Math.PI/-1;
        this.crossbowObject.rotation.y = Math.PI/-1;

        // console.log('this.crossbowObject: ', this.crossbowObject);

        this.ambientLight = new THREE.AmbientLight( 0x404040, 0.001 );

        this.hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        this.scene.add( this.hemisphereLight );

        if (window.innerWidth < 700) {
          this.crossbowObject.scale.x = this.crossbowObject.scale.y = this.crossbowObject.scale.z = 275;
        } else {
          this.crossbowObject.scale.x = this.crossbowObject.scale.y = this.crossbowObject.scale.z = 375;
        }

        this.setBaseMaterial();
        this.setRealTreeCamoMaterial();

    		this.scene.add( this.crossbowObject );
        this.scene.add( this.ambientLight);
    	},

    	// onProgress callback
    	( xhr ) => {
        this.setState({
          percentLoaded: ( () => parseInt(xhr.loaded / xhr.total * 100) )()
        })
    	}
    );

    const renderThree = () => {
      this.renderer.render( this.scene, this.camera);
    };

    const loop = () => {
      requestAnimationFrame( loop );
      renderThree();
    };

    loop();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleCrossbowResize);
    this.setOpaqueMaterial();
  }

  componentWillUnmount() {
    this.disposeHierchy(this.scene, this.disposeNode);
    window.removeEventListener('resize', this.handleCrossbowResize);
  }

  render() {
    const logos = () => {
      return (
        <img id="a4-logo-cad-model" alt="CAMX A4 2018 Crossbow" src={a4LogoImg} />
      );
    }

    const displayStats = () => {
      return (
        <ul id="stats">
          <li>SPEED<span>370 <div>FPS</div></span></li>
          <li>MASS WEIGHT<span>7 <div>LBS</div> 8 <div>OZ</div></span></li>
          <li>AXLE TO AXLE COCKED<span>10.5 <div>INCHES</div></span></li>
          <li>LENGTH<span>35 <div>INCHES</div></span></li>
          <li>POWER STROKE<span>13 <div>INCHES</div></span></li>
          <li>ARROW<span>18 <div>INCHES</div></span></li>
        </ul>
      );
    };

    const progressStyle = () => {
      return {
        height: `${this.state.percentLoaded}%`
      };
    };

    const displayLoader = () => {
      if (this.state.percentLoaded === 0) {
        return (
          <div>
            <div id="loader-img">
              <div id="black-bg"></div>
              {/* <div id="red-bg"></div> */}
              <img src={crossbowLoaderImg} />
            </div>
            <p onClick={this.startCAD} id="start-load">CLICK TO VIEW INTERACTIVE A4 CROSSBOW</p>
          </div>
        );
      } else if (this.state.percentLoaded > 0 && this.state.percentLoaded < 100) {
        return (
          <div>
            <div id="loader-img">
              <div id="black-bg"></div>
              <div style={progressStyle()} id="red-bg"></div>
              <img src={crossbowLoaderImg} />
            </div>
            <p id="start-load">CAMX A4 CROSSBOW <br/>DOWNLOAD {this.state.percentLoaded}% COMPLETE</p>
          </div>
        );
      } else {
        return null;
      }
    }

    const display3DContent = () => {
      if (this.state.percentLoaded === 100) {
        return (
          <div id="symbol-360">
            <img src={symbol360Img} />
            <small>drag crossbow to rotate</small>
          </div>
        );
      } else null;
    }

    const displayInteractiveContent = () => {
      if (this.state.percentLoaded === 100) {
        return (
          <FeaturesMenu
            updateCad={this.handleFeatureClick}
            resetCrossbow={this.handleResetCrossbow}
            switchColor={this.handleColorClick}
            resetFeatures={this.state.resetFeatureList}
          />
        );
      } else {
        return null;
      }
    }

    const displayColorSelected = () => {
      if (this.state.percentLoaded === 100) {
        return (
          <p className="current-crossbow-color">*Shown with {this.state.colorSelected}</p>
        );
      }
    }

    return (
      <section id="crossbow-3d">
        <div id="crossbow-ui">
          <article>
            <img src={a4LogoImg} />
            <h2>DISCOVER THE CAMX A4 CROSSBOW</h2>
            {this.state.percentLoaded === 100 ? <p>Click or tap a crossbow feature to activate X-Ray</p> : null}
            {displayInteractiveContent()}
          </article>
          <div id="three-d-wrapper">
            {display3DContent()}
            {displayColorSelected()}
          </div>

          {displayLoader()}

          {displayStats()}
        </div>
      </section>
    );
  }
}
