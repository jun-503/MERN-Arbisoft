class Animal {
    showName() {  // instead of this.name = 'animal'
      console.log('animal');
    }
  
    constructor() {
      this.showName(); // instead of alert(this.name);
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      console.log('rabbit');
    }
    
  }
  
  new Animal(); // animal
  new Rabbit(); // rabbit