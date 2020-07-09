const { AccountCoverageSchema } = require('./allSchemaHeaders.js');
const { AccountGuarantorSchema } = require('./allSchemaHeaders.js');
const { AccountStatusSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AccountSchema } = require('./allSchemaHeaders.js');

AccountSchema.add(DomainResourceSchema);
AccountSchema.remove('id');
AccountSchema.add({
  identifier: [IdentifierSchema],
  status: AccountStatusSchema,
  type: CodeableConceptSchema,
  name: PrimitiveStringSchema,
  subject: [ReferenceSchema],
  servicePeriod: PeriodSchema,
  coverage: [AccountCoverageSchema],
  owner: ReferenceSchema,
  description: PrimitiveStringSchema,
  guarantor: [AccountGuarantorSchema],
  partOf: ReferenceSchema,
});

module.exports.AccountSchema = AccountSchema;
