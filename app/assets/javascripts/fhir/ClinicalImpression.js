const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { ClinicalImpressionFindingSchema } = require('./ClinicalImpressionFinding');
const { ClinicalImpressionInvestigationSchema } = require('./ClinicalImpressionInvestigation');
const { ClinicalImpressionStatusSchema } = require('./ClinicalImpressionStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');

const ClinicalImpressionSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: ClinicalImpressionStatusSchema,
  statusReason: CodeableConceptSchema,
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  effectiveDateTime: PrimitiveDateTimeSchema,
  effectivePeriod: PeriodSchema,
  date: PrimitiveDateTimeSchema,
  assessor: ReferenceSchema,
  previous: ReferenceSchema,
  problem: [ReferenceSchema],
  investigation: [ClinicalImpressionInvestigationSchema],
  protocol: [PrimitiveUriSchema],
  summary: PrimitiveStringSchema,
  finding: [ClinicalImpressionFindingSchema],
  prognosisCodeableConcept: [CodeableConceptSchema],
  prognosisReference: [ReferenceSchema],
  supportingInfo: [ReferenceSchema],
  note: [AnnotationSchema],
  typeName: { type: String, default: 'ClinicalImpression' },
  _type: { type: String, default: 'FHIR::ClinicalImpression' },
});

class ClinicalImpression extends mongoose.Document {
  constructor(object) {
    super(object, ClinicalImpressionSchema);
    this.typeName = 'ClinicalImpression';
    this._type = 'FHIR::ClinicalImpression';
  }
}

module.exports.ClinicalImpressionSchema = ClinicalImpressionSchema;
module.exports.ClinicalImpression = ClinicalImpression;
