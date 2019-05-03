/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an application',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'AlatinAcademy',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container or applications with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'disciplinaId',
    message: 'what discipline must it have?',
    default: 21,
  }, {
    type: 'confirm',
    name: 'hasPremium',
    message: 'does it have premium feature?',
    default: true,
  }, {
    type: 'input',
    name: 'titoloApplicazione',
    message: 'What is its title?',
    default: 'Academy Generator',
  }, {
    type: 'input',
    name: 'homePage',
    message: 'What is its home page?',
    default: '/',
  }, {
    type: 'input',
    name: 'hasClassi',
    message: 'Does it uses classes?',
    default: false,
  }],
  actions: () => {
    // Generate index.js, index.test.js, selectors.js and selectors.test.js

    const actions = [{
      type: 'add',
      path: '../../app/applications/{{properCase name}}/index.js',
      templateFile: './application/class.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/applications/{{properCase name}}/tests/index.test.js',
      templateFile: './application/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/applications/{{properCase name}}/selectors.js',
      templateFile: './application/selectors.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/applications/{{properCase name}}/tests/selectors.test.js',
      templateFile: './application/selectors.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/applications/{{properCase name}}/reducer.js',
      templateFile: './application/reducer.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/applications/{{properCase name}}/tests/reducer.test.js',
      templateFile: './application/reducer.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/applications/{{properCase name}}/configuration.js',
      templateFile: './application/configuration.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
