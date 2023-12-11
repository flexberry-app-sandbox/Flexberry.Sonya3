import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSonya3КлиентыLForm from './forms/i-i-s-sonya3-клиенты-l';
import IISSonya3МатериалыLForm from './forms/i-i-s-sonya3-материалы-l';
import IISSonya3ПоставщикиLForm from './forms/i-i-s-sonya3-поставщики-l';
import IISSonya3ПриходДенегLForm from './forms/i-i-s-sonya3-приход-денег-l';
import IISSonya3РасходДенегLForm from './forms/i-i-s-sonya3-расход-денег-l';
import IISSonya3РегистрLForm from './forms/i-i-s-sonya3-регистр-l';
import IISSonya3СоставТовараLForm from './forms/i-i-s-sonya3-состав-товара-l';
import IISSonya3ТоварыLForm from './forms/i-i-s-sonya3-товары-l';
import IISSonya3УслугиLForm from './forms/i-i-s-sonya3-услуги-l';
import IISSonya3КлиентыEForm from './forms/i-i-s-sonya3-клиенты-e';
import IISSonya3МатериалыEForm from './forms/i-i-s-sonya3-материалы-e';
import IISSonya3ПоставщикиEForm from './forms/i-i-s-sonya3-поставщики-e';
import IISSonya3ПриходДенегEForm from './forms/i-i-s-sonya3-приход-денег-e';
import IISSonya3РасходДенегEForm from './forms/i-i-s-sonya3-расход-денег-e';
import IISSonya3РегистрEForm from './forms/i-i-s-sonya3-регистр-e';
import IISSonya3СоставТовараEForm from './forms/i-i-s-sonya3-состав-товара-e';
import IISSonya3ТоварыEForm from './forms/i-i-s-sonya3-товары-e';
import IISSonya3УслугиEForm from './forms/i-i-s-sonya3-услуги-e';
import IISSonya3КлиентыModel from './models/i-i-s-sonya3-клиенты';
import IISSonya3МатериалыModel from './models/i-i-s-sonya3-материалы';
import IISSonya3ПоставщикиModel from './models/i-i-s-sonya3-поставщики';
import IISSonya3ПриходДенегModel from './models/i-i-s-sonya3-приход-денег';
import IISSonya3РасходДенегModel from './models/i-i-s-sonya3-расход-денег';
import IISSonya3РегистрModel from './models/i-i-s-sonya3-регистр';
import IISSonya3СоставМатериалыModel from './models/i-i-s-sonya3-состав-материалы';
import IISSonya3СоставТовараModel from './models/i-i-s-sonya3-состав-товара';
import IISSonya3СоставТоварыModel from './models/i-i-s-sonya3-состав-товары';
import IISSonya3СоставУслугиModel from './models/i-i-s-sonya3-состав-услуги';
import IISSonya3ТоварыModel from './models/i-i-s-sonya3-товары';
import IISSonya3УслугиModel from './models/i-i-s-sonya3-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sonya3-клиенты': IISSonya3КлиентыModel,
    'i-i-s-sonya3-материалы': IISSonya3МатериалыModel,
    'i-i-s-sonya3-поставщики': IISSonya3ПоставщикиModel,
    'i-i-s-sonya3-приход-денег': IISSonya3ПриходДенегModel,
    'i-i-s-sonya3-расход-денег': IISSonya3РасходДенегModel,
    'i-i-s-sonya3-регистр': IISSonya3РегистрModel,
    'i-i-s-sonya3-состав-материалы': IISSonya3СоставМатериалыModel,
    'i-i-s-sonya3-состав-товара': IISSonya3СоставТовараModel,
    'i-i-s-sonya3-состав-товары': IISSonya3СоставТоварыModel,
    'i-i-s-sonya3-состав-услуги': IISSonya3СоставУслугиModel,
    'i-i-s-sonya3-товары': IISSonya3ТоварыModel,
    'i-i-s-sonya3-услуги': IISSonya3УслугиModel
  },

  'application-name': 'Sonya3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sonya3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sonya3',
          title: 'Sonya3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        sonya3: {
          caption: 'Sonya3',
          title: 'Sonya3',
          'i-i-s-sonya3-расход-денег-l': {
            caption: 'Расход денег',
            title: ''
          },
          'i-i-s-sonya3-состав-товара-l': {
            caption: 'Состав товара',
            title: ''
          },
          'i-i-s-sonya3-регистр-l': {
            caption: 'Регистр',
            title: ''
          },
          'i-i-s-sonya3-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-sonya3-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-sonya3-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-sonya3-приход-денег-l': {
            caption: 'Приход денег',
            title: ''
          },
          'i-i-s-sonya3-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          },
          'i-i-s-sonya3-материалы-l': {
            caption: 'Материалы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-sonya3-клиенты-l': IISSonya3КлиентыLForm,
    'i-i-s-sonya3-материалы-l': IISSonya3МатериалыLForm,
    'i-i-s-sonya3-поставщики-l': IISSonya3ПоставщикиLForm,
    'i-i-s-sonya3-приход-денег-l': IISSonya3ПриходДенегLForm,
    'i-i-s-sonya3-расход-денег-l': IISSonya3РасходДенегLForm,
    'i-i-s-sonya3-регистр-l': IISSonya3РегистрLForm,
    'i-i-s-sonya3-состав-товара-l': IISSonya3СоставТовараLForm,
    'i-i-s-sonya3-товары-l': IISSonya3ТоварыLForm,
    'i-i-s-sonya3-услуги-l': IISSonya3УслугиLForm,
    'i-i-s-sonya3-клиенты-e': IISSonya3КлиентыEForm,
    'i-i-s-sonya3-материалы-e': IISSonya3МатериалыEForm,
    'i-i-s-sonya3-поставщики-e': IISSonya3ПоставщикиEForm,
    'i-i-s-sonya3-приход-денег-e': IISSonya3ПриходДенегEForm,
    'i-i-s-sonya3-расход-денег-e': IISSonya3РасходДенегEForm,
    'i-i-s-sonya3-регистр-e': IISSonya3РегистрEForm,
    'i-i-s-sonya3-состав-товара-e': IISSonya3СоставТовараEForm,
    'i-i-s-sonya3-товары-e': IISSonya3ТоварыEForm,
    'i-i-s-sonya3-услуги-e': IISSonya3УслугиEForm
  },

});

export default translations;
