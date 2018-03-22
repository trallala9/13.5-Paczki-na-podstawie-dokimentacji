var os = require('os');
var time = require('./timeConvert');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log('System:'.green, type);
    console.log('Release:'.rainbow, release);
    console.log('CPU model:'.trap, cpu);
    console.log('Uptime: '.underline.yellow, (uptime), 'sec');
    console.log('Uptime: ~'.red, time.sec2hour(uptime));
    console.log('User name:'.blue, userInfo.username);
    console.log('Home dir:'.inverse, userInfo.homedir);
}

exports.print = getOSinfo;
