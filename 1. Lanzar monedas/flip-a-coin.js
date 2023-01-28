function tossCoin() {
    return Math.random() > 0.5 ? 'heads' : 'tails';
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            // console.log(`${result} was flipped`);
            if (result === 'heads') {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                return resolve(`it took ${attempts} to flip five "heads"`);
            }
            if (attempts > 100) {
                return reject('se superaron los 100 intentos');
            }
        }
    });
}

fiveHeads()
.then((res) => console.log(res))
.catch((error) => console.log(error));
console.log('when does this run now?');