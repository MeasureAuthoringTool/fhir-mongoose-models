const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ClinicalImpressionStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ClinicalImpressionStatus' },
  _type: { type: String, default: 'FHIR::ClinicalImpressionStatus' },
});

class ClinicalImpressionStatus extends mongoose.Document {
  constructor(object) {
    super(object, ClinicalImpressionStatusSchema);
    this.typeName = 'ClinicalImpressionStatus';
    this._type = 'FHIR::ClinicalImpressionStatus';
  }
}

module.exports.ClinicalImpressionStatusSchema = ClinicalImpressionStatusSchema;
module.exports.ClinicalImpressionStatus = ClinicalImpressionStatus;
