// Tests Go Here!
describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.name.should.equal("lil dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });
  describe("timePasses", function() {
    it("decreases the amount of food the Tamagotchi has left by 1", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
    });
  });
  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isAlive().should.equal(true);
    });
  });
  describe("isDead", function() {
    it("is dead if the food level is 0", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });
  describe("isTired", function() {
    it("is tired if the sleep level is less than 5", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.sleepLevel = 4;
      myPet.isTired().should.equal(true);
    });
  });
  describe("isHungry", function() {
    it("is hungry if food level is less than 5", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.foodLevel = 4;
      myPet.isHungry().should.equal(true);
    });
  });
  describe("wantsToPlay", function() {
    it("wants to play if activityLevel is more than 5", function() {
      var myPet = Object.create(tamagotchi);
      myPet.initialize("lil dragon");
      myPet.activityLevel = 8;
      myPet.wantsToPlay().should.equal(true);
    });
  });
});

