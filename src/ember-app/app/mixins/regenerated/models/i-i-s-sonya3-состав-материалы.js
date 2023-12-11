import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  материалы: DS.belongsTo('i-i-s-sonya3-материалы', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-sonya3-расход-денег', { inverse: 'составМатериалы', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-sonya3-состав-материалы.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-sonya3-состав-материалы.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-sonya3-состав-материалы.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставМатериалыE', 'i-i-s-sonya3-состав-материалы', {
    количество: attr('Количество', { index: 0 }),
    материалы: belongsTo('i-i-s-sonya3-материалы', 'Материалы', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
