gdjs.StartupCode = {};
gdjs.StartupCode.GDTitleObjects1= [];
gdjs.StartupCode.GDTitleObjects2= [];
gdjs.StartupCode.GDStartBtObjects1= [];
gdjs.StartupCode.GDStartBtObjects2= [];
gdjs.StartupCode.GDPlayerObjects1= [];
gdjs.StartupCode.GDPlayerObjects2= [];


gdjs.StartupCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets/accel.wav");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "assets/adrift.mp3");
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "assets/opaloka.mp3");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets/slowingdown.wav");
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "", 0);
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "HUD", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartBt"), gdjs.StartupCode.GDStartBtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartupCode.GDStartBtObjects1.length;i<l;++i) {
    if ( gdjs.StartupCode.GDStartBtObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartupCode.GDStartBtObjects1[k] = gdjs.StartupCode.GDStartBtObjects1[i];
        ++k;
    }
}
gdjs.StartupCode.GDStartBtObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Race scene", false);
}}

}


};

gdjs.StartupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartupCode.GDTitleObjects1.length = 0;
gdjs.StartupCode.GDTitleObjects2.length = 0;
gdjs.StartupCode.GDStartBtObjects1.length = 0;
gdjs.StartupCode.GDStartBtObjects2.length = 0;
gdjs.StartupCode.GDPlayerObjects1.length = 0;
gdjs.StartupCode.GDPlayerObjects2.length = 0;

gdjs.StartupCode.eventsList0(runtimeScene);

return;

}

gdjs['StartupCode'] = gdjs.StartupCode;
