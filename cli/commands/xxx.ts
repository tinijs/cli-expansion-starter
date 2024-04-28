import {createCLICommand} from '@tinijs/cli';

export const xxxCommand = createCLICommand(
  {
    meta: {
      name: 'xxx',
      description: 'The command description.',
    },
  },
  async () => {
    // command logic
  }
);

export default xxxCommand;
