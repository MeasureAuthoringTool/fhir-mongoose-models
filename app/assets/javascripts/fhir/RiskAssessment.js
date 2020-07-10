const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RiskAssessmentPredictionSchema } = require('./allSchemaHeaders.js');
const { RiskAssessmentStatusSchema } = require('./allSchemaHeaders.js');
const { RiskAssessmentSchema } = require('./allSchemaHeaders.js');

RiskAssessmentSchema.add(DomainResourceSchema);
RiskAssessmentSchema.remove('id');
RiskAssessmentSchema.add({
  identifier: [IdentifierSchema],
  basedOn: ReferenceSchema,
  parent: ReferenceSchema,
  status: RiskAssessmentStatusSchema,
  method: CodeableConceptSchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrencePeriod: PeriodSchema,
  condition: ReferenceSchema,
  performer: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  basis: [ReferenceSchema],
  prediction: [RiskAssessmentPredictionSchema],
  mitigation: PrimitiveStringSchema,
  note: [AnnotationSchema],
});

module.exports.RiskAssessmentSchema = RiskAssessmentSchema;
