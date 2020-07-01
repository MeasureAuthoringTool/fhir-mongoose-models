const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const PrimitiveInstantSchema = ElementSchemaFunction({
  value: Date,
  typeName: { type: String, default: 'PrimitiveInstant' },
  _type: { type: String, default: 'FHIR::PrimitiveInstant' },
});

class PrimitiveInstant extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveInstantSchema);
    this.typeName = 'PrimitiveInstant';
    this._type = 'FHIR::PrimitiveInstant';
  }
}

module.exports.PrimitiveInstantSchema = PrimitiveInstantSchema;
module.exports.PrimitiveInstant = PrimitiveInstant;
