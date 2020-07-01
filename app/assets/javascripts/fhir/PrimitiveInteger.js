const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveIntegerSchema = ElementSchemaFunction({
  value: Number,
  typeName: { type: String, default: 'PrimitiveInteger' },
  _type: { type: String, default: 'FHIR::PrimitiveInteger' },
});

class PrimitiveInteger extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveIntegerSchema);
    this.typeName = 'PrimitiveInteger';
    this._type = 'FHIR::PrimitiveInteger';
  }
}

function PrimitiveIntegerSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    value: Number,
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.PrimitiveIntegerSchemaFunction = PrimitiveIntegerSchemaFunction;
module.exports.PrimitiveIntegerSchema = PrimitiveIntegerSchema;
module.exports.PrimitiveInteger = PrimitiveInteger;
