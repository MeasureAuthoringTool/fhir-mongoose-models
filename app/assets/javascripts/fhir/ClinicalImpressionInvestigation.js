const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ClinicalImpressionInvestigationSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  item: [ReferenceSchema],
  typeName: { type: String, default: 'ClinicalImpressionInvestigation' },
  _type: { type: String, default: 'FHIR::ClinicalImpressionInvestigation' },
});

class ClinicalImpressionInvestigation extends mongoose.Document {
  constructor(object) {
    super(object, ClinicalImpressionInvestigationSchema);
    this.typeName = 'ClinicalImpressionInvestigation';
    this._type = 'FHIR::ClinicalImpressionInvestigation';
  }
}

module.exports.ClinicalImpressionInvestigationSchema = ClinicalImpressionInvestigationSchema;
module.exports.ClinicalImpressionInvestigation = ClinicalImpressionInvestigation;
