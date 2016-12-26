# mios-vera-example
An example of how to use mios vera home automation using maker and webtask (from IFTTT)

# Usage
1. Follow the ![steps to setup a webtask queue](https://github.com/rguerra712/webtask-queue/) and the environment variables needed
1. If you know what range of ports your vera device is running, add it to the environment variable `MIOS_VERA_IP_RANGE`
  1. e.g. `MIOS_VERA_IP_RANGE=100-140`
1. Install the package via `npm install mios-vera-example`
1. Run the application `npm run mios-vera-example`
