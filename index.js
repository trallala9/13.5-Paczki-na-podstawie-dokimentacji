var osInfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/env':
                process.stdout.write(process.env.lang);
                break;
            case '/getOSinfo':
                osInfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!');
                break;
        }
    }
});

//prosta aplikacja oparta na Node.js
/*process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
            // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
            /*var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});

//Badamy srodowisko-zadanie.
/*process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        switch (instruction) {
            case 'pokaz':
                console.log(process.env);
                process.exit();
                break;
            case 'kliknij':

                console.log(process.versions);
                process.exit();
                break;
            default:
                console.log(global);
                process.exit();

        };
    }
});*/

//Wprowadzenie do modulow



/*function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}*/
