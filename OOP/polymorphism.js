class Bird {
  move() {
    console.log("The bird flies.");
  }
}

class Fish {
  move() {
    console.log();
  }
}


function moveAnimal(animal) {
  animal.move();
}

const bird = new Bird();
const fish = new Fish();

moveAnimal(bird); // "The bird flies."
moveAnimal(fish); // "The fish swims."