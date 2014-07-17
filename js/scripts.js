var tamagotchi = {
    initialize: function(initializedName) {
      this.name = initializedName;
      this.foodLevel = 10;
      this.sleepLevel = 10;
      this.activityLevel = 10;
    },
    name: "",
    foodLevel: 0,
    sleepLevel: 0,
    activityLevel: 0,
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
    var newPet = Object.create(tamagotchi);
    var petName = $("input#petName").val();
    newPet.initialize(petName);

    $("input#petName").val("");
    $("div#create-tom").hide();
    $("div#tom").show();

    var time = window.setInterval(function(){
      if (newPet.isAlive() === true) {
        newPet.timePasses();
        $("#foodNum").text(newPet.foodLevel);
        $("#sleepNum").text(newPet.sleepLevel);
        $("#activityNum").text(newPet.activityLevel);
        $("#putName").text(petName);
      } else {
        window.clearInterval(time);
        $("#tom").hide();
        $("#alert").text(petName + " Is Dead");
      }
    }, 1000);

    $("#putName").text(petName);
    $("button#feed").click(function(event){
      newPet.foodLevel = 10;
      $("#foodNum").text(newPet.foodLevel);
      event.preventDefault();
    });
     $("button#sleep").click(function(event){
      newPet.sleepLevel = 10;
      $("#sleepNum").text(newPet.sleepLevel);
      event.preventDefault();
    });
     $("button#play").click(function(event){
      newPet.activityLevel = 10;
      $("#activityNum").text(newPet.activityLevel);
      event.preventDefault();
    });

    event.preventDefault();
  });
});


