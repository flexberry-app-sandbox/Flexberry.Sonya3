import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sonya3-клиенты-l');
  this.route('i-i-s-sonya3-клиенты-e',
  { path: 'i-i-s-sonya3-клиенты-e/:id' });
  this.route('i-i-s-sonya3-клиенты-e.new',
  { path: 'i-i-s-sonya3-клиенты-e/new' });
  this.route('i-i-s-sonya3-материалы-l');
  this.route('i-i-s-sonya3-материалы-e',
  { path: 'i-i-s-sonya3-материалы-e/:id' });
  this.route('i-i-s-sonya3-материалы-e.new',
  { path: 'i-i-s-sonya3-материалы-e/new' });
  this.route('i-i-s-sonya3-поставщики-l');
  this.route('i-i-s-sonya3-поставщики-e',
  { path: 'i-i-s-sonya3-поставщики-e/:id' });
  this.route('i-i-s-sonya3-поставщики-e.new',
  { path: 'i-i-s-sonya3-поставщики-e/new' });
  this.route('i-i-s-sonya3-приход-денег-l');
  this.route('i-i-s-sonya3-приход-денег-e',
  { path: 'i-i-s-sonya3-приход-денег-e/:id' });
  this.route('i-i-s-sonya3-приход-денег-e.new',
  { path: 'i-i-s-sonya3-приход-денег-e/new' });
  this.route('i-i-s-sonya3-расход-денег-l');
  this.route('i-i-s-sonya3-расход-денег-e',
  { path: 'i-i-s-sonya3-расход-денег-e/:id' });
  this.route('i-i-s-sonya3-расход-денег-e.new',
  { path: 'i-i-s-sonya3-расход-денег-e/new' });
  this.route('i-i-s-sonya3-регистр-l');
  this.route('i-i-s-sonya3-регистр-e',
  { path: 'i-i-s-sonya3-регистр-e/:id' });
  this.route('i-i-s-sonya3-регистр-e.new',
  { path: 'i-i-s-sonya3-регистр-e/new' });
  this.route('i-i-s-sonya3-состав-товара-l');
  this.route('i-i-s-sonya3-состав-товара-e',
  { path: 'i-i-s-sonya3-состав-товара-e/:id' });
  this.route('i-i-s-sonya3-состав-товара-e.new',
  { path: 'i-i-s-sonya3-состав-товара-e/new' });
  this.route('i-i-s-sonya3-товары-l');
  this.route('i-i-s-sonya3-товары-e',
  { path: 'i-i-s-sonya3-товары-e/:id' });
  this.route('i-i-s-sonya3-товары-e.new',
  { path: 'i-i-s-sonya3-товары-e/new' });
  this.route('i-i-s-sonya3-услуги-l');
  this.route('i-i-s-sonya3-услуги-e',
  { path: 'i-i-s-sonya3-услуги-e/:id' });
  this.route('i-i-s-sonya3-услуги-e.new',
  { path: 'i-i-s-sonya3-услуги-e/new' });
});

export default Router;
