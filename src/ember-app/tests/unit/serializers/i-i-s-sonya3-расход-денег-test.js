import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sonya3-расход-денег', 'Unit | Serializer | i-i-s-sonya3-расход-денег', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sonya3-расход-денег',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sonya3-банк',
    'transform:i-i-s-sonya3-единицы',
    'transform:i-i-s-sonya3-тип-прихода',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
