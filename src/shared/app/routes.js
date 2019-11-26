import loadable from 'loadable-components';

export const HomePage = loadable( () => import('../home/HomePage') );

//
// export const CADModelTour = loadable( () => import('../cad-model-tour/CADModelTour') );
// export const PackagesContainer = loadable( () => import('../packages/PackagesContainer') );
// export const CrossbowScope = loadable( () => import('../crossbow-scope/CrossbowScope') );
