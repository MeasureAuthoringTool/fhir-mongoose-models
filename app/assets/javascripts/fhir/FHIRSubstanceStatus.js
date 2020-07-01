const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const FHIRSubstanceStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'FHIRSubstanceStatus' },
  _type: { type: String, default: 'FHIR::FHIRSubstanceStatus' },
});

class FHIRSubstanceStatus extends mongoose.Document {
  constructor(object) {
    super(object, FHIRSubstanceStatusSchema);
    this.typeName = 'FHIRSubstanceStatus';
    this._type = 'FHIR::FHIRSubstanceStatus';
  }
}

module.exports.FHIRSubstanceStatusSchema = FHIRSubstanceStatusSchema;
module.exports.FHIRSubstanceStatus = FHIRSubstanceStatus;
