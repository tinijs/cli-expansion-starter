import {defineTiniCLIExpansion, resolveCommand} from '@tinijs/cli';

export default defineTiniCLIExpansion({
  meta: {
    name: 'my-cli',
  },
  setup() {
    // register the list of expandable commands
    return {
      xxx: () => import('./commands/xxx.js').then(resolveCommand),
    };
  },
});
