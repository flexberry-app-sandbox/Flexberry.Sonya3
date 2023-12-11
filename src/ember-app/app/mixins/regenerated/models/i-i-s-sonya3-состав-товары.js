import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-sonya3-товары', { inverse: null, async: false }),
  приходДенег: DS.belongsTo('i-i-s-sonya3-приход-денег', { inverse: 'составТовары', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-sonya3-состав-товары.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-sonya3-состав-товары.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  приходДенег: {
    descriptionKey: 'models.i-i-s-sonya3-состав-товары.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставТоварыE', 'i-i-s-sonya3-состав-товары', {
    количество: attr('Количество', { index: 0 }),
    товары: belongsTo('i-i-s-sonya3-товары', 'Товары', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
