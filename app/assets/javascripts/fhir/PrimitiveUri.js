const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveUriSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PrimitiveUri' },
  _type: { type: String, default: 'FHIR::PrimitiveUri' },
});

class PrimitiveUri extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveUriSchema);
    this.typeName = 'PrimitiveUri';
    this._type = 'FHIR::PrimitiveUri';
  }
}

function PrimitiveUriSchemaFunction(add, options) {
  const extended = new mongoose.Schema({
    value: String,
  }, options);

  if (add) {
    extended.add(add);
  }
  return extended;
}

module.exports.PrimitiveUriSchemaFunction = PrimitiveUriSchemaFunction;
module.exports.PrimitiveUriSchema = PrimitiveUriSchema;
module.exports.PrimitiveUri = PrimitiveUri;
