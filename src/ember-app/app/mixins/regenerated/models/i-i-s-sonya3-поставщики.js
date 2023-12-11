import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string'),
  номерТелефона: DS.attr('number')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-sonya3-поставщики.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-sonya3-поставщики.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-sonya3-поставщики.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикиE', 'i-i-s-sonya3-поставщики', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 })
  });

  modelClass.defineProjection('ПоставщикиL', 'i-i-s-sonya3-поставщики', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 })
  });
};
