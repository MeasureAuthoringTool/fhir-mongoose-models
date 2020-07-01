const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const ClinicalImpressionFindingSchema = BackboneElementSchemaFunction({
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  basis: PrimitiveStringSchema,
  typeName: { type: String, default: 'ClinicalImpressionFinding' },
  _type: { type: String, default: 'FHIR::ClinicalImpressionFinding' },
});

class ClinicalImpressionFinding extends mongoose.Document {
  constructor(object) {
    super(object, ClinicalImpressionFindingSchema);
    this.typeName = 'ClinicalImpressionFinding';
    this._type = 'FHIR::ClinicalImpressionFinding';
  }
}

module.exports.ClinicalImpressionFindingSchema = ClinicalImpressionFindingSchema;
module.exports.ClinicalImpressionFinding = ClinicalImpressionFinding;
