class MyExtension {
    getInfo() {
      return {
        id: 'my_extension',
        name: 'My Extension',
        blocks: [
          {
            opcode: 'myCustomBlock',
            blockType: Scratch.BlockType.COMMAND,
            text: 'My Custom Block',
            arguments: {},
          },
        ],
      };
    }
  
    myCustomBlock() {
      console.log('Custom block executed');
    }
  }
  
  Scratch.extensions.register(new MyExtension());
  