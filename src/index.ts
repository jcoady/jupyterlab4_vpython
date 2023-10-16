import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the Jupyterlab4_vpython extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'Jupyterlab4_vpython:plugin',
  description: 'A vpython extension for Jupyterlab version 4',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension Jupyterlab4_vpython is activated!');
  }
};

export default plugin;
