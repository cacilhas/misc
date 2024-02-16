gdjs.Race_32sceneCode = {};
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2_1final = [];

gdjs.Race_32sceneCode.GDBurgerMenuObjects2_1final = [];

gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final = [];

gdjs.Race_32sceneCode.GDTopArrowButtonObjects2_1final = [];

gdjs.Race_32sceneCode.forEachIndex3 = 0;

gdjs.Race_32sceneCode.forEachObjects3 = [];

gdjs.Race_32sceneCode.forEachTemporary3 = null;

gdjs.Race_32sceneCode.forEachTotalCount3 = 0;

gdjs.Race_32sceneCode.GDBoundaryObjects1= [];
gdjs.Race_32sceneCode.GDBoundaryObjects2= [];
gdjs.Race_32sceneCode.GDBoundaryObjects3= [];
gdjs.Race_32sceneCode.GDBoundaryObjects4= [];
gdjs.Race_32sceneCode.GDBoundaryObjects5= [];
gdjs.Race_32sceneCode.GDTrailsObjects1= [];
gdjs.Race_32sceneCode.GDTrailsObjects2= [];
gdjs.Race_32sceneCode.GDTrailsObjects3= [];
gdjs.Race_32sceneCode.GDTrailsObjects4= [];
gdjs.Race_32sceneCode.GDTrailsObjects5= [];
gdjs.Race_32sceneCode.GDSpeedometerObjects1= [];
gdjs.Race_32sceneCode.GDSpeedometerObjects2= [];
gdjs.Race_32sceneCode.GDSpeedometerObjects3= [];
gdjs.Race_32sceneCode.GDSpeedometerObjects4= [];
gdjs.Race_32sceneCode.GDSpeedometerObjects5= [];
gdjs.Race_32sceneCode.GDFoeObjects1= [];
gdjs.Race_32sceneCode.GDFoeObjects2= [];
gdjs.Race_32sceneCode.GDFoeObjects3= [];
gdjs.Race_32sceneCode.GDFoeObjects4= [];
gdjs.Race_32sceneCode.GDFoeObjects5= [];
gdjs.Race_32sceneCode.GDSpawnerObjects1= [];
gdjs.Race_32sceneCode.GDSpawnerObjects2= [];
gdjs.Race_32sceneCode.GDSpawnerObjects3= [];
gdjs.Race_32sceneCode.GDSpawnerObjects4= [];
gdjs.Race_32sceneCode.GDSpawnerObjects5= [];
gdjs.Race_32sceneCode.GDExplosionObjects1= [];
gdjs.Race_32sceneCode.GDExplosionObjects2= [];
gdjs.Race_32sceneCode.GDExplosionObjects3= [];
gdjs.Race_32sceneCode.GDExplosionObjects4= [];
gdjs.Race_32sceneCode.GDExplosionObjects5= [];
gdjs.Race_32sceneCode.GDScoreObjects1= [];
gdjs.Race_32sceneCode.GDScoreObjects2= [];
gdjs.Race_32sceneCode.GDScoreObjects3= [];
gdjs.Race_32sceneCode.GDScoreObjects4= [];
gdjs.Race_32sceneCode.GDScoreObjects5= [];
gdjs.Race_32sceneCode.GDLineLightJoystickObjects1= [];
gdjs.Race_32sceneCode.GDLineLightJoystickObjects2= [];
gdjs.Race_32sceneCode.GDLineLightJoystickObjects3= [];
gdjs.Race_32sceneCode.GDLineLightJoystickObjects4= [];
gdjs.Race_32sceneCode.GDLineLightJoystickObjects5= [];
gdjs.Race_32sceneCode.GDStuffSpawnerObjects1= [];
gdjs.Race_32sceneCode.GDStuffSpawnerObjects2= [];
gdjs.Race_32sceneCode.GDStuffSpawnerObjects3= [];
gdjs.Race_32sceneCode.GDStuffSpawnerObjects4= [];
gdjs.Race_32sceneCode.GDStuffSpawnerObjects5= [];
gdjs.Race_32sceneCode.GDStuffObjects1= [];
gdjs.Race_32sceneCode.GDStuffObjects2= [];
gdjs.Race_32sceneCode.GDStuffObjects3= [];
gdjs.Race_32sceneCode.GDStuffObjects4= [];
gdjs.Race_32sceneCode.GDStuffObjects5= [];
gdjs.Race_32sceneCode.GDRestartObjects1= [];
gdjs.Race_32sceneCode.GDRestartObjects2= [];
gdjs.Race_32sceneCode.GDRestartObjects3= [];
gdjs.Race_32sceneCode.GDRestartObjects4= [];
gdjs.Race_32sceneCode.GDRestartObjects5= [];
gdjs.Race_32sceneCode.GDBurgerMenuObjects1= [];
gdjs.Race_32sceneCode.GDBurgerMenuObjects2= [];
gdjs.Race_32sceneCode.GDBurgerMenuObjects3= [];
gdjs.Race_32sceneCode.GDBurgerMenuObjects4= [];
gdjs.Race_32sceneCode.GDBurgerMenuObjects5= [];
gdjs.Race_32sceneCode.GDLeaderboardBtObjects1= [];
gdjs.Race_32sceneCode.GDLeaderboardBtObjects2= [];
gdjs.Race_32sceneCode.GDLeaderboardBtObjects3= [];
gdjs.Race_32sceneCode.GDLeaderboardBtObjects4= [];
gdjs.Race_32sceneCode.GDLeaderboardBtObjects5= [];
gdjs.Race_32sceneCode.GDTopArrowButtonObjects1= [];
gdjs.Race_32sceneCode.GDTopArrowButtonObjects2= [];
gdjs.Race_32sceneCode.GDTopArrowButtonObjects3= [];
gdjs.Race_32sceneCode.GDTopArrowButtonObjects4= [];
gdjs.Race_32sceneCode.GDTopArrowButtonObjects5= [];
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects1= [];
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2= [];
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3= [];
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects4= [];
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects5= [];
gdjs.Race_32sceneCode.GDPlayerObjects1= [];
gdjs.Race_32sceneCode.GDPlayerObjects2= [];
gdjs.Race_32sceneCode.GDPlayerObjects3= [];
gdjs.Race_32sceneCode.GDPlayerObjects4= [];
gdjs.Race_32sceneCode.GDPlayerObjects5= [];


gdjs.Race_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Race_32sceneCode.GDTopArrowButtonObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDTopArrowButtonObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDTopArrowButtonObjects2[i].getBehavior("Opacity").setOpacity(128);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2[i].getBehavior("Opacity").setOpacity(128);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.Race_32sceneCode.GDBottomArrowButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Race_32sceneCode.GDLineLightJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Race_32sceneCode.GDTopArrowButtonObjects1);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDLineLightJoystickObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDLineLightJoystickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDTopArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDTopArrowButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDBottomArrowButtonObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDBottomArrowButtonObjects1[i].hide();
}
}}

}


};gdjs.Race_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "0b0f7350-f012-47af-a27d-8774408b5e8d", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


};gdjs.Race_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.Race_32sceneCode.GDBurgerMenuObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Race_32sceneCode.GDBurgerMenuObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Tab");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BurgerMenu"), gdjs.Race_32sceneCode.GDBurgerMenuObjects3);
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDBurgerMenuObjects3.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDBurgerMenuObjects3[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Race_32sceneCode.GDBurgerMenuObjects3[k] = gdjs.Race_32sceneCode.GDBurgerMenuObjects3[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDBurgerMenuObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Race_32sceneCode.GDBurgerMenuObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Race_32sceneCode.GDBurgerMenuObjects2_1final.indexOf(gdjs.Race_32sceneCode.GDBurgerMenuObjects3[j]) === -1 )
            gdjs.Race_32sceneCode.GDBurgerMenuObjects2_1final.push(gdjs.Race_32sceneCode.GDBurgerMenuObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Race_32sceneCode.GDBurgerMenuObjects2_1final, gdjs.Race_32sceneCode.GDBurgerMenuObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeaderboardBt"), gdjs.Race_32sceneCode.GDLeaderboardBtObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDLeaderboardBtObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDLeaderboardBtObjects2[i].getBehavior("MultitouchButton").IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDLeaderboardBtObjects2[k] = gdjs.Race_32sceneCode.GDLeaderboardBtObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDLeaderboardBtObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "0b0f7350-f012-47af-a27d-8774408b5e8d", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Race scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Race_32sceneCode.GDRestartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDRestartObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDRestartObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDRestartObjects2[k] = gdjs.Race_32sceneCode.GDRestartObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDRestartObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDRestartObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDRestartObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDRestartObjects2[k] = gdjs.Race_32sceneCode.GDRestartObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDRestartObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Race scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Startup", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BurgerMenu"), gdjs.Race_32sceneCode.GDBurgerMenuObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeaderboardBt"), gdjs.Race_32sceneCode.GDLeaderboardBtObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Race_32sceneCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDScoreObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDBurgerMenuObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDBurgerMenuObjects2[i].getBehavior("Opacity").setOpacity(128 - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDLeaderboardBtObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDLeaderboardBtObjects2[i].getBehavior("Opacity").setOpacity(128 - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
{ //Subevents
gdjs.Race_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Race_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Speedometer"), gdjs.Race_32sceneCode.GDSpeedometerObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].setFillOpacity(64);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].setFillColor("155;155;155");
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].drawCircle(64, 64, 64);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].setFillOpacity(128);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Speedometer"), gdjs.Race_32sceneCode.GDSpeedometerObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].setFillColor("255;2;28");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 80;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Speedometer"), gdjs.Race_32sceneCode.GDSpeedometerObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].setFillColor(gdjs.evtTools.common.toString(gdjs.evtTools.common.lerp(208, 248, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 100)) + ";" + gdjs.evtTools.common.toString(gdjs.evtTools.common.lerp(2, 231, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) / 100)) + ";28");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 80;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Speedometer"), gdjs.Race_32sceneCode.GDSpeedometerObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects2[i].setFillColor("126;211;33");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Speedometer"), gdjs.Race_32sceneCode.GDSpeedometerObjects1);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDSpeedometerObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDSpeedometerObjects1[i].drawCircle(64, 64, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 0.64);
}
}}

}


};gdjs.Race_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Race_32sceneCode.GDPlayerObjects1, gdjs.Race_32sceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDPlayerObjects2[i].getY() > 72 ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDPlayerObjects2[k] = gdjs.Race_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Race_32sceneCode.GDPlayerObjects2[i].getBehavior("Tween").isPlaying("MoveY")) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDPlayerObjects2[k] = gdjs.Race_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween2("MoveY", (gdjs.Race_32sceneCode.GDPlayerObjects2[i].getPointX("")), (gdjs.Race_32sceneCode.GDPlayerObjects2[i].getPointY("")) - 160, "easeInOutQuad", 0.25, false);
}
}}

}


};gdjs.Race_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Race_32sceneCode.GDPlayerObjects1, gdjs.Race_32sceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDPlayerObjects2[i].getY() < 552 ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDPlayerObjects2[k] = gdjs.Race_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Race_32sceneCode.GDPlayerObjects2[i].getBehavior("Tween").isPlaying("MoveY")) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDPlayerObjects2[k] = gdjs.Race_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween2("MoveY", (gdjs.Race_32sceneCode.GDPlayerObjects2[i].getPointX("")), (gdjs.Race_32sceneCode.GDPlayerObjects2[i].getPointY("")) + 160, "easeInOutQuad", 0.25, false);
}
}}

}


};gdjs.Race_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/accel.wav", 1, true, 40, 1);
}}

}


};gdjs.Race_32sceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 100;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(Math.floor(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1));
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{ //Subevents
gdjs.Race_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Race_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.Race_32sceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/slowingdown.wav", 2, true, 40, 1);
}}

}


};gdjs.Race_32sceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(0.25);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.Race_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Race_32sceneCode.GDPlayerObjects2});
gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects = Hashtable.newFrom({"Foe": gdjs.Race_32sceneCode.GDFoeObjects2});
gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Race_32sceneCode.GDExplosionObjects2});
gdjs.Race_32sceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.Race_32sceneCode.GDTopArrowButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Race_32sceneCode.GDTopArrowButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.Race_32sceneCode.GDTopArrowButtonObjects3);
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDTopArrowButtonObjects3.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDTopArrowButtonObjects3[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Race_32sceneCode.GDTopArrowButtonObjects3[k] = gdjs.Race_32sceneCode.GDTopArrowButtonObjects3[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDTopArrowButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Race_32sceneCode.GDTopArrowButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Race_32sceneCode.GDTopArrowButtonObjects2_1final.indexOf(gdjs.Race_32sceneCode.GDTopArrowButtonObjects3[j]) === -1 )
            gdjs.Race_32sceneCode.GDTopArrowButtonObjects2_1final.push(gdjs.Race_32sceneCode.GDTopArrowButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Race_32sceneCode.GDTopArrowButtonObjects2_1final, gdjs.Race_32sceneCode.GDTopArrowButtonObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10760468);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Race_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3);
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3[k] = gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2_1final.indexOf(gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3[j]) === -1 )
            gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2_1final.push(gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2_1final, gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10762788);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Race_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.Race_32sceneCode.GDLineLightJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Race_32sceneCode.GDLineLightJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[k] = gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final.indexOf(gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[j]) === -1 )
            gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final.push(gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final, gdjs.Race_32sceneCode.GDLineLightJoystickObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Race_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.Race_32sceneCode.GDLineLightJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Race_32sceneCode.GDLineLightJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[k] = gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final.indexOf(gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[j]) === -1 )
            gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final.push(gdjs.Race_32sceneCode.GDLineLightJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Race_32sceneCode.GDLineLightJoystickObjects2_1final, gdjs.Race_32sceneCode.GDLineLightJoystickObjects2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Race_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LineLightJoystick"), gdjs.Race_32sceneCode.GDLineLightJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDLineLightJoystickObjects2.length;i<l;++i) {
    if ( !(gdjs.Race_32sceneCode.GDLineLightJoystickObjects2[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDLineLightJoystickObjects2[k] = gdjs.Race_32sceneCode.GDLineLightJoystickObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDLineLightJoystickObjects2.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Race_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Foe"), gdjs.Race_32sceneCode.GDFoeObjects2);
gdjs.copyArray(gdjs.Race_32sceneCode.GDPlayerObjects1, gdjs.Race_32sceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDPlayerObjects2Objects, gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects2 */
/* Reuse gdjs.Race_32sceneCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Race_32sceneCode.GDRestartObjects2);
gdjs.Race_32sceneCode.GDExplosionObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 4);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "68d16e38f82501c538c69cacf2f2491b4ff15cb34fa3ad08ce8e9445b4f1812a_Explosion 1.aac", 3, false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDExplosionObjects2Objects, (( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getCenterXInScene()) - 60, (( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getCenterYInScene()) - 60, "");
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].setVariableBoolean(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/adrift.mp3", 4, false, 100, 1);
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDRestartObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDRestartObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Race_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDPlayerObjects1[i].setX(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 80);
}
}}

}


};gdjs.Race_32sceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDPlayerObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDPlayerObjects1[k] = gdjs.Race_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Race_32sceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Race_32sceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 100;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(100);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationSpeedScale(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 100);
}
}}

}


};gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDStuffObjects1Objects = Hashtable.newFrom({"Stuff": gdjs.Race_32sceneCode.GDStuffObjects1});
gdjs.Race_32sceneCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Race_32sceneCode.GDBoundaryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stuff"), gdjs.Race_32sceneCode.GDStuffObjects2);
gdjs.copyArray(runtimeScene.getObjects("Trails"), gdjs.Race_32sceneCode.GDTrailsObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDBoundaryObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDBoundaryObjects2[i].setX(gdjs.Race_32sceneCode.GDBoundaryObjects2[i].getX() - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
for(var i = 0, len = gdjs.Race_32sceneCode.GDTrailsObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDTrailsObjects2[i].setX(gdjs.Race_32sceneCode.GDTrailsObjects2[i].getX() - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDStuffObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDStuffObjects2[i].setX(gdjs.Race_32sceneCode.GDStuffObjects2[i].getX() - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Race_32sceneCode.GDBoundaryObjects2);
gdjs.copyArray(runtimeScene.getObjects("Trails"), gdjs.Race_32sceneCode.GDTrailsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDBoundaryObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDBoundaryObjects2[i].getX() <= -(1280) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDBoundaryObjects2[k] = gdjs.Race_32sceneCode.GDBoundaryObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDBoundaryObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDTrailsObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDTrailsObjects2[i].getX() <= -(1280) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDTrailsObjects2[k] = gdjs.Race_32sceneCode.GDTrailsObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDTrailsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDBoundaryObjects2 */
/* Reuse gdjs.Race_32sceneCode.GDTrailsObjects2 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDBoundaryObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDBoundaryObjects2[i].setX(gdjs.Race_32sceneCode.GDBoundaryObjects2[i].getX() + (2560));
}
for(var i = 0, len = gdjs.Race_32sceneCode.GDTrailsObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDTrailsObjects2[i].setX(gdjs.Race_32sceneCode.GDTrailsObjects2[i].getX() + (2560));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stuff"), gdjs.Race_32sceneCode.GDStuffObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDStuffObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDStuffObjects2[i].getX() < -((gdjs.Race_32sceneCode.GDStuffObjects2[i].getWidth())) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDStuffObjects2[k] = gdjs.Race_32sceneCode.GDStuffObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDStuffObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDStuffObjects2 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDStuffObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDStuffObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) >= runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StuffSpawner"), gdjs.Race_32sceneCode.GDStuffSpawnerObjects1);
gdjs.Race_32sceneCode.GDStuffObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(4).sub(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomFloatInRange(20, 1000));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDStuffObjects1Objects, (( gdjs.Race_32sceneCode.GDStuffSpawnerObjects1.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDStuffSpawnerObjects1[0].getPointX("")), (( gdjs.Race_32sceneCode.GDStuffSpawnerObjects1.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDStuffSpawnerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDStuffObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDStuffObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.random(3));
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDStuffObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDStuffObjects1[i].setY((gdjs.Race_32sceneCode.GDStuffObjects1[i].getPointY("")) - (gdjs.Race_32sceneCode.GDStuffObjects1[i].getHeight()));
}
}}

}


};gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDSpawnerObjects2Objects = Hashtable.newFrom({"Spawner": gdjs.Race_32sceneCode.GDSpawnerObjects2});
gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects = Hashtable.newFrom({"Foe": gdjs.Race_32sceneCode.GDFoeObjects2});
gdjs.Race_32sceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDPlayerObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDPlayerObjects2[k] = gdjs.Race_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomFloat(4) / Math.max(1, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) / 10));
}}

}


};gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects = Hashtable.newFrom({"Foe": gdjs.Race_32sceneCode.GDFoeObjects2});
gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects = Hashtable.newFrom({"Foe": gdjs.Race_32sceneCode.GDFoeObjects2});
gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects = Hashtable.newFrom({"Foe": gdjs.Race_32sceneCode.GDFoeObjects2});
gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Race_32sceneCode.GDPlayerObjects2});
gdjs.Race_32sceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Race_32sceneCode.GDFoeObjects3, gdjs.Race_32sceneCode.GDFoeObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDFoeObjects4.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDFoeObjects4[i].getX() < -(1280) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDFoeObjects4[k] = gdjs.Race_32sceneCode.GDFoeObjects4[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDFoeObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects4 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects4.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.Race_32sceneCode.GDFoeObjects3, gdjs.Race_32sceneCode.GDFoeObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDFoeObjects4.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDFoeObjects4[i].getX() > 2560 ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDFoeObjects4[k] = gdjs.Race_32sceneCode.GDFoeObjects4[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDFoeObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects4 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects4.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.Race_32sceneCode.GDExplosionObjects2});
gdjs.Race_32sceneCode.eventsList17 = function(runtimeScene) {

};gdjs.Race_32sceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn") >= runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Spawner"), gdjs.Race_32sceneCode.GDSpawnerObjects2);
gdjs.Race_32sceneCode.GDFoeObjects2.length = 0;

{gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDSpawnerObjects2Objects);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects, (( gdjs.Race_32sceneCode.GDSpawnerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDSpawnerObjects2[0].getPointX("")), (( gdjs.Race_32sceneCode.GDSpawnerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDSpawnerObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].getBehavior("Resizable").setSize((gdjs.Race_32sceneCode.GDFoeObjects2[i].getWidth()) * 7.5, (gdjs.Race_32sceneCode.GDFoeObjects2[i].getHeight()) * 7.5);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.random(4));
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].setX(gdjs.Race_32sceneCode.GDFoeObjects2[i].getX() - (gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].returnVariable(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomFloatInRange(80, 95));
}
}
{ //Subevents
gdjs.Race_32sceneCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Foe"), gdjs.Race_32sceneCode.GDFoeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects, gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].setVariableBoolean(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "25b1631f4979c4cb1eeb17ffe2d2231e65749a5b330f5c6731154be98694402b_Explosion 9.aac", 5, false, 10000 / Math.sqrt((((( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getCenterXInScene()) - (( gdjs.Race_32sceneCode.GDFoeObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDFoeObjects2[0].getCenterXInScene())) * ((( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getCenterXInScene()) - (( gdjs.Race_32sceneCode.GDFoeObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDFoeObjects2[0].getCenterXInScene()))) + (((( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getCenterYInScene()) - (( gdjs.Race_32sceneCode.GDFoeObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDFoeObjects2[0].getCenterYInScene())) * ((( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getCenterYInScene()) - (( gdjs.Race_32sceneCode.GDFoeObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDFoeObjects2[0].getCenterYInScene())))), gdjs.randomFloatInRange(0.8, 1.2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Foe"), gdjs.Race_32sceneCode.GDFoeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDFoeObjects2Objects, gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects2 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].setVariableBoolean(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(1), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Foe"), gdjs.Race_32sceneCode.GDFoeObjects2);

for (gdjs.Race_32sceneCode.forEachIndex3 = 0;gdjs.Race_32sceneCode.forEachIndex3 < gdjs.Race_32sceneCode.GDFoeObjects2.length;++gdjs.Race_32sceneCode.forEachIndex3) {
gdjs.Race_32sceneCode.GDFoeObjects3.length = 0;


gdjs.Race_32sceneCode.forEachTemporary3 = gdjs.Race_32sceneCode.GDFoeObjects2[gdjs.Race_32sceneCode.forEachIndex3];
gdjs.Race_32sceneCode.GDFoeObjects3.push(gdjs.Race_32sceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects3.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects3[i].setX(gdjs.Race_32sceneCode.GDFoeObjects3[i].getX() + (gdjs.Race_32sceneCode.GDFoeObjects3[i].getVariables().getFromIndex(0).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
{ //Subevents: 
gdjs.Race_32sceneCode.eventsList16(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Foe"), gdjs.Race_32sceneCode.GDFoeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDFoeObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariableBoolean(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDFoeObjects2[k] = gdjs.Race_32sceneCode.GDFoeObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDFoeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects2 */
gdjs.Race_32sceneCode.GDExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Race_32sceneCode.mapOfGDgdjs_9546Race_959532sceneCode_9546GDExplosionObjects2Objects, (( gdjs.Race_32sceneCode.GDFoeObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDFoeObjects2[0].getCenterXInScene()) - 60, (( gdjs.Race_32sceneCode.GDFoeObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDFoeObjects2[0].getCenterYInScene()) - 60, "");
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDExplosionObjects2[i].getBehavior("Resizable").setSize(120, 120);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Foe"), gdjs.Race_32sceneCode.GDFoeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDFoeObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariableBoolean(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(2), false) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDFoeObjects2[k] = gdjs.Race_32sceneCode.GDFoeObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDFoeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDFoeObjects2.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDFoeObjects2[i].getX() < (( gdjs.Race_32sceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Race_32sceneCode.GDPlayerObjects2[0].getPointX("")) - (gdjs.Race_32sceneCode.GDFoeObjects2[i].getWidth()) ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDFoeObjects2[k] = gdjs.Race_32sceneCode.GDFoeObjects2[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDFoeObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDFoeObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDFoeObjects2.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDFoeObjects2[i].setVariableBoolean(gdjs.Race_32sceneCode.GDFoeObjects2[i].getVariables().getFromIndex(2), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Race_32sceneCode.GDExplosionObjects2);

for (gdjs.Race_32sceneCode.forEachIndex3 = 0;gdjs.Race_32sceneCode.forEachIndex3 < gdjs.Race_32sceneCode.GDExplosionObjects2.length;++gdjs.Race_32sceneCode.forEachIndex3) {
gdjs.Race_32sceneCode.GDExplosionObjects3.length = 0;


gdjs.Race_32sceneCode.forEachTemporary3 = gdjs.Race_32sceneCode.GDExplosionObjects2[gdjs.Race_32sceneCode.forEachIndex3];
gdjs.Race_32sceneCode.GDExplosionObjects3.push(gdjs.Race_32sceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Race_32sceneCode.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDExplosionObjects3[i].setX(gdjs.Race_32sceneCode.GDExplosionObjects3[i].getX() - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 4));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Race_32sceneCode.GDExplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Race_32sceneCode.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Race_32sceneCode.GDExplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Race_32sceneCode.GDExplosionObjects1[k] = gdjs.Race_32sceneCode.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Race_32sceneCode.GDExplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Race_32sceneCode.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Race_32sceneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Race_32sceneCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Race_32sceneCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Race_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Race_32sceneCode.GDRestartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trails"), gdjs.Race_32sceneCode.GDTrailsObjects1);
{for(var i = 0, len = gdjs.Race_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationSpeedScale(0);
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDBoundaryObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDBoundaryObjects1[i].setZOrder(0);
}
for(var i = 0, len = gdjs.Race_32sceneCode.GDTrailsObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDTrailsObjects1[i].setZOrder(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn");
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomFloatInRange(5, 10));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.randomFloat(1000));
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/opaloka.mp3", 4, true, 100, 1);
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDRestartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Race_32sceneCode.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Race_32sceneCode.GDRestartObjects1[i].setCenterPositionInScene(640,360);
}
}
{ //Subevents
gdjs.Race_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Race_32sceneCode.eventsList2(runtimeScene);
}


{


gdjs.Race_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Race_32sceneCode.eventsList12(runtimeScene);
}


{


gdjs.Race_32sceneCode.eventsList13(runtimeScene);
}


{


gdjs.Race_32sceneCode.eventsList14(runtimeScene);
}


{


gdjs.Race_32sceneCode.eventsList18(runtimeScene);
}


};

gdjs.Race_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Race_32sceneCode.GDBoundaryObjects1.length = 0;
gdjs.Race_32sceneCode.GDBoundaryObjects2.length = 0;
gdjs.Race_32sceneCode.GDBoundaryObjects3.length = 0;
gdjs.Race_32sceneCode.GDBoundaryObjects4.length = 0;
gdjs.Race_32sceneCode.GDBoundaryObjects5.length = 0;
gdjs.Race_32sceneCode.GDTrailsObjects1.length = 0;
gdjs.Race_32sceneCode.GDTrailsObjects2.length = 0;
gdjs.Race_32sceneCode.GDTrailsObjects3.length = 0;
gdjs.Race_32sceneCode.GDTrailsObjects4.length = 0;
gdjs.Race_32sceneCode.GDTrailsObjects5.length = 0;
gdjs.Race_32sceneCode.GDSpeedometerObjects1.length = 0;
gdjs.Race_32sceneCode.GDSpeedometerObjects2.length = 0;
gdjs.Race_32sceneCode.GDSpeedometerObjects3.length = 0;
gdjs.Race_32sceneCode.GDSpeedometerObjects4.length = 0;
gdjs.Race_32sceneCode.GDSpeedometerObjects5.length = 0;
gdjs.Race_32sceneCode.GDFoeObjects1.length = 0;
gdjs.Race_32sceneCode.GDFoeObjects2.length = 0;
gdjs.Race_32sceneCode.GDFoeObjects3.length = 0;
gdjs.Race_32sceneCode.GDFoeObjects4.length = 0;
gdjs.Race_32sceneCode.GDFoeObjects5.length = 0;
gdjs.Race_32sceneCode.GDSpawnerObjects1.length = 0;
gdjs.Race_32sceneCode.GDSpawnerObjects2.length = 0;
gdjs.Race_32sceneCode.GDSpawnerObjects3.length = 0;
gdjs.Race_32sceneCode.GDSpawnerObjects4.length = 0;
gdjs.Race_32sceneCode.GDSpawnerObjects5.length = 0;
gdjs.Race_32sceneCode.GDExplosionObjects1.length = 0;
gdjs.Race_32sceneCode.GDExplosionObjects2.length = 0;
gdjs.Race_32sceneCode.GDExplosionObjects3.length = 0;
gdjs.Race_32sceneCode.GDExplosionObjects4.length = 0;
gdjs.Race_32sceneCode.GDExplosionObjects5.length = 0;
gdjs.Race_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Race_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Race_32sceneCode.GDScoreObjects3.length = 0;
gdjs.Race_32sceneCode.GDScoreObjects4.length = 0;
gdjs.Race_32sceneCode.GDScoreObjects5.length = 0;
gdjs.Race_32sceneCode.GDLineLightJoystickObjects1.length = 0;
gdjs.Race_32sceneCode.GDLineLightJoystickObjects2.length = 0;
gdjs.Race_32sceneCode.GDLineLightJoystickObjects3.length = 0;
gdjs.Race_32sceneCode.GDLineLightJoystickObjects4.length = 0;
gdjs.Race_32sceneCode.GDLineLightJoystickObjects5.length = 0;
gdjs.Race_32sceneCode.GDStuffSpawnerObjects1.length = 0;
gdjs.Race_32sceneCode.GDStuffSpawnerObjects2.length = 0;
gdjs.Race_32sceneCode.GDStuffSpawnerObjects3.length = 0;
gdjs.Race_32sceneCode.GDStuffSpawnerObjects4.length = 0;
gdjs.Race_32sceneCode.GDStuffSpawnerObjects5.length = 0;
gdjs.Race_32sceneCode.GDStuffObjects1.length = 0;
gdjs.Race_32sceneCode.GDStuffObjects2.length = 0;
gdjs.Race_32sceneCode.GDStuffObjects3.length = 0;
gdjs.Race_32sceneCode.GDStuffObjects4.length = 0;
gdjs.Race_32sceneCode.GDStuffObjects5.length = 0;
gdjs.Race_32sceneCode.GDRestartObjects1.length = 0;
gdjs.Race_32sceneCode.GDRestartObjects2.length = 0;
gdjs.Race_32sceneCode.GDRestartObjects3.length = 0;
gdjs.Race_32sceneCode.GDRestartObjects4.length = 0;
gdjs.Race_32sceneCode.GDRestartObjects5.length = 0;
gdjs.Race_32sceneCode.GDBurgerMenuObjects1.length = 0;
gdjs.Race_32sceneCode.GDBurgerMenuObjects2.length = 0;
gdjs.Race_32sceneCode.GDBurgerMenuObjects3.length = 0;
gdjs.Race_32sceneCode.GDBurgerMenuObjects4.length = 0;
gdjs.Race_32sceneCode.GDBurgerMenuObjects5.length = 0;
gdjs.Race_32sceneCode.GDLeaderboardBtObjects1.length = 0;
gdjs.Race_32sceneCode.GDLeaderboardBtObjects2.length = 0;
gdjs.Race_32sceneCode.GDLeaderboardBtObjects3.length = 0;
gdjs.Race_32sceneCode.GDLeaderboardBtObjects4.length = 0;
gdjs.Race_32sceneCode.GDLeaderboardBtObjects5.length = 0;
gdjs.Race_32sceneCode.GDTopArrowButtonObjects1.length = 0;
gdjs.Race_32sceneCode.GDTopArrowButtonObjects2.length = 0;
gdjs.Race_32sceneCode.GDTopArrowButtonObjects3.length = 0;
gdjs.Race_32sceneCode.GDTopArrowButtonObjects4.length = 0;
gdjs.Race_32sceneCode.GDTopArrowButtonObjects5.length = 0;
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects1.length = 0;
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects2.length = 0;
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects3.length = 0;
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects4.length = 0;
gdjs.Race_32sceneCode.GDBottomArrowButtonObjects5.length = 0;
gdjs.Race_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Race_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Race_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Race_32sceneCode.GDPlayerObjects4.length = 0;
gdjs.Race_32sceneCode.GDPlayerObjects5.length = 0;

gdjs.Race_32sceneCode.eventsList19(runtimeScene);

return;

}

gdjs['Race_32sceneCode'] = gdjs.Race_32sceneCode;
