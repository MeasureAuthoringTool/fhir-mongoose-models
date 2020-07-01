const mongoose = require('mongoose/browser');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');
const { QuantityComparatorSchema } = require('./QuantityComparator');

const MoneyQuantitySchema = QuantitySchemaFunction({
  value: PrimitiveDecimalSchema,
  comparator: QuantityComparatorSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
  typeName: { type: String, default: 'MoneyQuantity' },
  _type: { type: String, default: 'FHIR::MoneyQuantity' },
});

class MoneyQuantity extends mongoose.Document {
  constructor(object) {
    super(object, MoneyQuantitySchema);
    this.typeName = 'MoneyQuantity';
    this._type = 'FHIR::MoneyQuantity';
  }
}

module.exports.MoneyQuantitySchema = MoneyQuantitySchema;
module.exports.MoneyQuantity = MoneyQuantity;
