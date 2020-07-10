const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitivePositiveIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AccountCoverageSchema } = require('./allSchemaHeaders.js');

AccountCoverageSchema.add(BackboneElementSchema);
AccountCoverageSchema.remove('id');
AccountCoverageSchema.add({
  coverage: ReferenceSchema,
  priority: PrimitivePositiveIntSchema,
});

module.exports.AccountCoverageSchema = AccountCoverageSchema;
