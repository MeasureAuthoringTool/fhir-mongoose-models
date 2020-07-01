const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FHIRAllTypesSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FHIRAllTypes' },
  _type: { type: String, default: 'FHIR::FHIRAllTypes' },
});

class FHIRAllTypes extends mongoose.Document {
  constructor(object) {
    super(object, FHIRAllTypesSchema);
    this.typeName = 'FHIRAllTypes';
    this._type = 'FHIR::FHIRAllTypes';
  }
}

module.exports.FHIRAllTypesSchema = FHIRAllTypesSchema;
module.exports.FHIRAllTypes = FHIRAllTypes;
