// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill';
import serializerEnzyme from 'enzyme-to-json/serializer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';


class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

expect.addSnapshotSerializer(serializerEnzyme);
Enzyme.configure({ adapter: new Adapter() });
global.window.matchMedia = jest.fn(() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
global.window.open = jest.fn();
global.window.location = {
  pathname: '',
};
global.window.print = jest.fn();
global.window.scrollTo = jest.fn();
global.localStorage = new LocalStorageMock();

beforeEach(() => {
  console.error = jest.fn((error) => { // eslint-disable-line no-console
    throw new Error(error);
  });
});
