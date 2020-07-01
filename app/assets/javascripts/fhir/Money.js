const mongoose = require('mongoose/browser');
const { CurrencyCodeSchema } = require('./CurrencyCode');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');

const MoneySchema = ElementSchemaFunction({
  value: PrimitiveDecimalSchema,
  currency: CurrencyCodeSchema,
  typeName: { type: String, default: 'Money' },
  _type: { type: String, default: 'FHIR::Money' },
});

class Money extends mongoose.Document {
  constructor(object) {
    super(object, MoneySchema);
    this.typeName = 'Money';
    this._type = 'FHIR::Money';
  }
}

module.exports.MoneySchema = MoneySchema;
module.exports.Money = Money;
