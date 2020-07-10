const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ResearchSubjectStatusSchema } = require('./allSchemaHeaders.js');
const { ResearchSubjectSchema } = require('./allSchemaHeaders.js');

ResearchSubjectSchema.add(DomainResourceSchema);
ResearchSubjectSchema.remove('id');
ResearchSubjectSchema.add({
  identifier: [IdentifierSchema],
  status: ResearchSubjectStatusSchema,
  period: PeriodSchema,
  study: ReferenceSchema,
  individual: ReferenceSchema,
  assignedArm: PrimitiveStringSchema,
  actualArm: PrimitiveStringSchema,
  consent: ReferenceSchema,
});

module.exports.ResearchSubjectSchema = ResearchSubjectSchema;
