const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ImmunizationEducationSchema } = require('./allSchemaHeaders.js');
const { ImmunizationPerformerSchema } = require('./allSchemaHeaders.js');
const { ImmunizationProtocolAppliedSchema } = require('./allSchemaHeaders.js');
const { ImmunizationReactionSchema } = require('./allSchemaHeaders.js');
const { ImmunizationStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { ImmunizationSchema } = require('./allSchemaHeaders.js');

ImmunizationSchema.add(DomainResourceSchema);
ImmunizationSchema.remove('id');
ImmunizationSchema.add({
  identifier: [IdentifierSchema],
  status: ImmunizationStatusSchema,
  statusReason: CodeableConceptSchema,
  vaccineCode: CodeableConceptSchema,
  patient: ReferenceSchema,
  encounter: ReferenceSchema,
  occurrenceDateTime: PrimitiveDateTimeSchema,
  occurrenceString: PrimitiveStringSchema,
  recorded: PrimitiveDateTimeSchema,
  primarySource: PrimitiveBooleanSchema,
  reportOrigin: CodeableConceptSchema,
  location: ReferenceSchema,
  manufacturer: ReferenceSchema,
  lotNumber: PrimitiveStringSchema,
  expirationDate: PrimitiveDateSchema,
  site: CodeableConceptSchema,
  route: CodeableConceptSchema,
  doseQuantity: SimpleQuantitySchema,
  performer: [ImmunizationPerformerSchema],
  note: [AnnotationSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  isSubpotent: PrimitiveBooleanSchema,
  subpotentReason: [CodeableConceptSchema],
  education: [ImmunizationEducationSchema],
  programEligibility: [CodeableConceptSchema],
  fundingSource: CodeableConceptSchema,
  reaction: [ImmunizationReactionSchema],
  protocolApplied: [ImmunizationProtocolAppliedSchema],
});

module.exports.ImmunizationSchema = ImmunizationSchema;
