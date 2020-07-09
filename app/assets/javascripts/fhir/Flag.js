const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FlagStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { FlagSchema } = require('./allSchemaHeaders.js');

FlagSchema.add(DomainResourceSchema);
FlagSchema.remove('id');
FlagSchema.add({
  identifier: [IdentifierSchema],
  status: FlagStatusSchema,
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  period: PeriodSchema,
  encounter: ReferenceSchema,
  author: ReferenceSchema,
});

module.exports.FlagSchema = FlagSchema;
