const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { QuantityComparatorSchema } = require('./QuantityComparator');

const QuantitySchema = ElementSchemaFunction({
  value: PrimitiveDecimalSchema,
  comparator: QuantityComparatorSchema,
  unit: PrimitiveStringSchema,
  system: PrimitiveUriSchema,
  code: PrimitiveCodeSchema,
  typeName: { type: String, default: 'Quantity' },
  _type: { type: String, default: 'FHIR::Quantity' },
});

class Quantity extends mongoose.Document {
  constructor(object) {
    super(object, QuantitySchema);
    this.typeName = 'Quantity';
    this._type = 'FHIR::Quantity';
  }
}

function QuantitySchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    value: PrimitiveDecimalSchema,
    comparator: QuantityComparatorSchema,
    unit: PrimitiveStringSchema,
    system: PrimitiveUriSchema,
    code: PrimitiveCodeSchema,
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.QuantitySchemaFunction = QuantitySchemaFunction;
module.exports.QuantitySchema = QuantitySchema;
module.exports.Quantity = Quantity;
