const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { ClinicalImpressionFindingSchema } = require('./allSchemaHeaders.js');
const { ClinicalImpressionInvestigationSchema } = require('./allSchemaHeaders.js');
const { ClinicalImpressionStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClinicalImpressionSchema } = require('./allSchemaHeaders.js');

ClinicalImpressionSchema.add(DomainResourceSchema);
ClinicalImpressionSchema.remove('id');
ClinicalImpressionSchema.add({
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
});

module.exports.ClinicalImpressionSchema = ClinicalImpressionSchema;
