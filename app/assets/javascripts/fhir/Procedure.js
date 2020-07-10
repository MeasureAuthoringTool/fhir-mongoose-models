const { AgeSchema } = require('./allSchemaHeaders.js');
const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ProcedureFocalDeviceSchema } = require('./allSchemaHeaders.js');
const { ProcedurePerformerSchema } = require('./allSchemaHeaders.js');
const { ProcedureStatusSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ProcedureSchema } = require('./allSchemaHeaders.js');

ProcedureSchema.add(DomainResourceSchema);
ProcedureSchema.remove('id');
ProcedureSchema.add({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: ProcedureStatusSchema,
  statusReason: CodeableConceptSchema,
  category: CodeableConceptSchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  performedDateTime: PrimitiveDateTimeSchema,
  performedPeriod: PeriodSchema,
  performedString: PrimitiveStringSchema,
  performedAge: AgeSchema,
  performedRange: RangeSchema,
  recorder: ReferenceSchema,
  asserter: ReferenceSchema,
  performer: [ProcedurePerformerSchema],
  location: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  bodySite: [CodeableConceptSchema],
  outcome: CodeableConceptSchema,
  report: [ReferenceSchema],
  complication: [CodeableConceptSchema],
  complicationDetail: [ReferenceSchema],
  followUp: [CodeableConceptSchema],
  note: [AnnotationSchema],
  focalDevice: [ProcedureFocalDeviceSchema],
  usedReference: [ReferenceSchema],
  usedCode: [CodeableConceptSchema],
});

module.exports.ProcedureSchema = ProcedureSchema;
