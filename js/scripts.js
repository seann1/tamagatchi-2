var tamagotchi = {
    name: "",
    foodLevel: 0,
    sleepLevel: 0,
    activityLevel: 0,
    initialize: function(initializedName) {
      this.name = initializedName;
      this.foodLevel = 10;
      this.sleepLevel = 10;
      this.activityLevel = 10;
    },
    timePasses: function() {
      this.foodLevel --;
      this.sleepLevel --;
      this.activityLevel --;
    },
    isAlive: function() {
      if (this.foodLevel > 0) {
        return true;
      } else {
        return false;
      }
    },
    isTired: function() {
      if (this.sleepLevel < 5) {
        return true;
      } else {
        return false;
       }
    },
    isHungry: function() {
      if (this.foodLevel < 5 && this.foodLevel > 0) {
        return true;
      } else {
        return false;
      };
    },
    wantsToPlay: function() {
      if (this.activityLevel > 5) {
        return true;
      } else {
        return false;
      }
    }
}

$(document).ready(function() {
  $("form#petCreator").submit(function(event){
    var petName = $("input#petName").val();


  var newPet = Object.create(tamagotchi);

  var time = window.setInterval(function(){
    if (newPet.isAlive === true) {
      newPet.timePasses();
    } else {
      window.clearInterval(time);
    }
  }, 1000);

  event.preventDefault();
  });
});


