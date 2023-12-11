import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  приходДенег: DS.belongsTo('i-i-s-sonya3-приход-денег', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-sonya3-расход-денег', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-sonya3-регистр.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  приходДенег: {
    descriptionKey: 'models.i-i-s-sonya3-регистр.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-sonya3-регистр.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрE', 'i-i-s-sonya3-регистр', {
    iD: attr('ID', { index: 0 }),
    расходДенег: belongsTo('i-i-s-sonya3-расход-денег', 'Расход денег', {
      iD: attr('ID', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'iD' }),
    приходДенег: belongsTo('i-i-s-sonya3-приход-денег', 'Приход денег', {
      iD: attr('ID', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'iD' })
  });

  modelClass.defineProjection('РегистрL', 'i-i-s-sonya3-регистр', {
    iD: attr('ID', { index: 0 }),
    расходДенег: belongsTo('i-i-s-sonya3-расход-денег', 'ID', {
      iD: attr('ID', { index: 1 })
    }, { index: -1, hidden: true }),
    приходДенег: belongsTo('i-i-s-sonya3-приход-денег', 'ID', {
      iD: attr('ID', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
