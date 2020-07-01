const mongoose = require('mongoose/browser');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuantitySchema } = require('./Quantity');
const { QuantitySchemaFunction } = require('./Quantity');

const SimpleQuantitySchema = QuantitySchemaFunction({
  value: PrimitiveDecimalSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
  typeName: { type: String, default: 'SimpleQuantity' },
  _type: { type: String, default: 'FHIR::SimpleQuantity' },
});

class SimpleQuantity extends mongoose.Document {
  constructor(object) {
    super(object, SimpleQuantitySchema);
    this.typeName = 'SimpleQuantity';
    this._type = 'FHIR::SimpleQuantity';
  }
}

module.exports.SimpleQuantitySchema = SimpleQuantitySchema;
module.exports.SimpleQuantity = SimpleQuantity;
