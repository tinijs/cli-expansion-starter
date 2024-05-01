import {defineTiniCLIExpansion, resolveCommand} from '@tinijs/cli';

export type MyCLIExpansionOptions = {};

export default defineTiniCLIExpansion<MyCLIExpansionOptions>({
  meta: {
    name: 'my-cli',
    url: 'https://tinijs.dev/cli', // optional usage url
  },
  setup(options, tini) {
    // register the list of expandable commands
    return {
      xxx: () => import('./commands/xxx.js').then(resolveCommand),
    };
  },
});
