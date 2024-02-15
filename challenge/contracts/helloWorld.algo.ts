import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class helloWorld extends Contract {
    helloWorld(name: string): string {
      return 'Hello, ' + name + '! Congratulations! You have successfully fixed the bug.';
    }
  }
  