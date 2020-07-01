const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveStringSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PrimitiveString' },
  _type: { type: String, default: 'FHIR::PrimitiveString' },
});

class PrimitiveString extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveStringSchema);
    this.typeName = 'PrimitiveString';
    this._type = 'FHIR::PrimitiveString';
  }
}

function PrimitiveStringSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    value: String,
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.PrimitiveStringSchemaFunction = PrimitiveStringSchemaFunction;
module.exports.PrimitiveStringSchema = PrimitiveStringSchema;
module.exports.PrimitiveString = PrimitiveString;
