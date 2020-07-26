import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { MinifyHtml } from 'scully-plugin-minify-html';
import { DisableAngular } from 'scully-plugin-disable-angular';

const postRenderers = [DisableAngular, MinifyHtml];

setPluginConfig(DisableAngular, 'render', {
  removeState: true
});

export const config: ScullyConfig = {
  thumbnails: true,
  projectRoot: './src',
  defaultPostRenderers: postRenderers,
  projectName: 'kerrongordon',
  outDir: './dist/static',
  routes: {
    '/projects/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      }
    },
  }
};
