(function(){
    'use strict';

    const webtask = require('maker-webtask');
    const mios = require('mios-vera');

    let onError = error => {
        console.log(error);
    };

    let turnDeviceOn = message => {
        let isOn = message.command === "on";
        let deviceName = message.name;

        mios.sendCommand(deviceName, isOn, onError);
    };
    
    webtask.run('mios', 5, turnDeviceOn, onError);
})();