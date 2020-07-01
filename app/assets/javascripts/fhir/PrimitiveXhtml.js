const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveXhtmlSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'PrimitiveXhtml' },
  _type: { type: String, default: 'FHIR::PrimitiveXhtml' },
});

class PrimitiveXhtml extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveXhtmlSchema);
    this.typeName = 'PrimitiveXhtml';
    this._type = 'FHIR::PrimitiveXhtml';
  }
}

module.exports.PrimitiveXhtmlSchema = PrimitiveXhtmlSchema;
module.exports.PrimitiveXhtml = PrimitiveXhtml;
