import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sonya3-состав-товара', 'Unit | Model | i-i-s-sonya3-состав-товара', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sonya3-клиенты',
    'model:i-i-s-sonya3-материалы',
    'model:i-i-s-sonya3-поставщики',
    'model:i-i-s-sonya3-приход-денег',
    'model:i-i-s-sonya3-расход-денег',
    'model:i-i-s-sonya3-регистр',
    'model:i-i-s-sonya3-состав-материалы',
    'model:i-i-s-sonya3-состав-товара',
    'model:i-i-s-sonya3-состав-товары',
    'model:i-i-s-sonya3-состав-услуги',
    'model:i-i-s-sonya3-товары',
    'model:i-i-s-sonya3-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
