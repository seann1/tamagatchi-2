var tamagotchi = {
    initialize: function (initializedName) {
        this.name = initializedName;
        this.foodLevel = 10;
        this.sleepLevel = 10;
        this.activityLevel = 10;
    },
    name: "",
    foodLevel: 0,
    sleepLevel: 0,
    activityLevel: 0,
    timePasses: function () {
        this.foodLevel--;
        this.sleepLevel--;
        this.activityLevel--;
    },
    isAlive: function () {
        if (this.foodLevel > 0) {
            return true;
        } else {
            return false;
        }
    },
    isTired: function () {
        if (this.sleepLevel < 5) {
            return true;
        } else {
            return false;
        }
    },
    isHungry: function () {
        if (this.foodLevel < 5 && this.foodLevel > 0) {
            return true;
        } else {
            return false;
        };
    },
    wantsToPlay: function () {
        if (this.activityLevel > 5) {
            return true;
        } else {
            return false;
        }
    },
    isHappy: function () {
        var x = this.foodLevel + this.activityLevel + this.sleepLevel;
        if (x > 20) {
            return this.name + " Is Very Happy";
        } else if (x <= 20 && x > 10) {
            return this.name + " Is Okay";
        } else {
            return this.name + " Is Almost Dead";
        };
    },
    tomFace: function () {
        var x = this.foodLevel + this.activityLevel + this.sleepLevel;
        if (x > 20) {
            return "<h1 class='animated infinite tada'><span  id='tom-face'>(ಠ‿ಠ)</span></h1>";
        } else if (x <= 20 && x > 10) {
            return "<h1 class='animated infinite bounce'><span  id='tom-face'>(ಠ_ಠ)</span></h1>";
        } else {
            return "<h1 class='animated infinite shake'><span  id='tom-face'>(ಥ﹏ಥ)</span></h1>";
        };
    }
};

$(document).ready(function () {
    $("form#petCreator").submit(function (event) {
        var newPet = Object.create(tamagotchi);
        var petName = $("input#petName").val();
        newPet.initialize(petName);

        $("input#petName").val("");
        $("div#create-tom").hide();
        $("div#tom").show();

        var time = window.setInterval(function () {
            if (newPet.isAlive() === true) {
                newPet.timePasses();
                $("#foodBar").css('width', (newPet.foodLevel * 10) + '%').attr('aria-valuenow', newPet.foodLevel);
                $("#sleepBar").css('width', (newPet.sleepLevel * 10) + '%').attr('aria-valuenow', newPet.sleepLevel);
                $("#activityBar").css('width', (newPet.activityLevel * 10) + '%').attr('aria-valuenow', newPet.activityLevel);
                $("#foodNum").text(newPet.foodLevel);
                $("#sleepNum").text(newPet.sleepLevel);
                $("#activityNum").text(newPet.activityLevel);
                $("#putName").text(petName);
                $("#moodLevel").text(newPet.isHappy());
                $("#bounceFace").html(newPet.tomFace());
            } else {
                window.clearInterval(time);
                $("#tom").hide();
                $("#alert").text(petName + " is Dead.");
            }
        }, 2000);

        $("#putName").text(petName);
        $("button#feed").click(function (event) {
            newPet.foodLevel += 3;
            $("#foodNum").text(newPet.foodLevel);
            event.preventDefault();
        });
        $("button#sleep").click(function (event) {
            newPet.sleepLevel += 3;
            $("#sleepNum").text(newPet.sleepLevel);
            event.preventDefault();
        });
        $("button#play").click(function (event) {
            newPet.activityLevel += 3;
            $("#activityNum").text(newPet.activityLevel);
            event.preventDefault();
        });

        event.preventDefault();
    });
});
