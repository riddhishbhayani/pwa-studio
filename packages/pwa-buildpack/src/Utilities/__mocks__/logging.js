const { types } = jest.requireActual('../logging');

const mockLogger = Object.keys(types).reduce(
    (mock, type) => ({
        ...mock,
        [type]: jest.fn()
    }),
    {}
);

const mockSpinner = {
    start: jest.fn(),
    succeed: jest.fn(),
    fail: jest.fn()
};

module.exports = {
    highlight: x => x,
    mockLogger,
    mockSpinner,
    logger: () => mockLogger,
    spinner: () => mockSpinner
};
