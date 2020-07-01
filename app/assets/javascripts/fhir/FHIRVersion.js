const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FHIRVersionSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FHIRVersion' },
  _type: { type: String, default: 'FHIR::FHIRVersion' },
});

class FHIRVersion extends mongoose.Document {
  constructor(object) {
    super(object, FHIRVersionSchema);
    this.typeName = 'FHIRVersion';
    this._type = 'FHIR::FHIRVersion';
  }
}

module.exports.FHIRVersionSchema = FHIRVersionSchema;
module.exports.FHIRVersion = FHIRVersion;
