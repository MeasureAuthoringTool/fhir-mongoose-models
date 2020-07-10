const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CareTeamParticipantSchema } = require('./allSchemaHeaders.js');
const { CareTeamStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { CareTeamSchema } = require('./allSchemaHeaders.js');

CareTeamSchema.add(DomainResourceSchema);
CareTeamSchema.remove('id');
CareTeamSchema.add({
  identifier: [IdentifierSchema],
  status: CareTeamStatusSchema,
  category: [CodeableConceptSchema],
  name: PrimitiveStringSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  period: PeriodSchema,
  participant: [CareTeamParticipantSchema],
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  managingOrganization: [ReferenceSchema],
  telecom: [ContactPointSchema],
  note: [AnnotationSchema],
});

module.exports.CareTeamSchema = CareTeamSchema;
