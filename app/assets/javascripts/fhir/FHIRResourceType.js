const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FHIRResourceTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FHIRResourceType' },
  _type: { type: String, default: 'FHIR::FHIRResourceType' },
});

class FHIRResourceType extends mongoose.Document {
  constructor(object) {
    super(object, FHIRResourceTypeSchema);
    this.typeName = 'FHIRResourceType';
    this._type = 'FHIR::FHIRResourceType';
  }
}

module.exports.FHIRResourceTypeSchema = FHIRResourceTypeSchema;
module.exports.FHIRResourceType = FHIRResourceType;
