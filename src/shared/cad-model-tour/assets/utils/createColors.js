import * as THREE from 'three';

export const createOpaqueMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0x000000,
    color: 0x1E1E1E,
    specular: 0x282828,
    shininess: 40,
    transparent: true,
    opacity: 0.25
  });
}

export const createBlackMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0x9090909,
    color: 0x000000,
    specular: 0x111111,
    shininess: 40
  });
};

export const createBaseMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0x000000,
    color: 0x1E1E1E,
    specular: 0x282828,
    shininess: 40
  });
};

export const createThumbsaverMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0xDE0000,
    color: 0x282828,
    specular: 0x111111,
    shininess: 40
  });
}

export const createCableStringMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0x7A0000,
    color: 0x000000,
    specular: 0x50303,
    shininess: 40
  });
};

export const createWhiteMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0xC5C5C5,
    color: 0x000000,
    specular: 0x50303,
    shininess: 40
  });
};

export const createStockLimbMaterial = () => {
  return new THREE.MeshPhongMaterial({
    emissive: 0x000000,
    color: 0x6D728C,
    specular: 0x000000,
    shininess: 40
  });
};
