import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПриходаEnum from '../enums/i-i-s-sonya3-тип-прихода';

export default FlexberryEnum.extend({
  enum: ТипПриходаEnum,
  sourceType: 'IIS.Sonya3.ТипПрихода'
});
