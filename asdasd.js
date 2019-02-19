const {
    highlight,
    logger,
    tasks
} = require('./packages/pwa-buildpack/dist/Utilities/logging');

const log = logger();

[
    'await',
    'complete',
    'error',
    'debug',
    'fatal',
    'fav',
    'info',
    'note',
    'pause',
    'pending',
    'star',
    'start',
    'success',
    'warn',
    'watch',
    'log',
    'secure',
    'ready',
    'bonus'
].forEach((type, i) => {
    setTimeout(() => {
        log[type](`A logline of type ${highlight(type)}. This is super dumb.`);
        log[
            type
        ](`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ${highlight(
            'Richard McClintock'
        )}, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and ${highlight(
            'going through the cites of the word in classical literature'
        )}, discovered the undoubtable source.
`);
    }, i * 250);
});

const spin = tasks('Building');
spin.start('Peregrine');
setTimeout(() => spin.succeed('Peregrine'), 3500 * 2);
setTimeout(() => spin.start('Buildpack'), 1500 * 2);
setTimeout(() => spin.start('Validation'), 3000 * 2);
setTimeout(() => spin.fail('Buildpack', new Error('woah!')), 4000 * 2);
setTimeout(() => spin.succeed('Validation'), 4000 * 2);
