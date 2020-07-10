const { DomainResourceSchema } = require('./DomainResource');
const { OperationOutcomeIssueSchema } = require('./allSchemaHeaders.js');
const { OperationOutcomeSchema } = require('./allSchemaHeaders.js');

OperationOutcomeSchema.add(DomainResourceSchema);
OperationOutcomeSchema.remove('id');
OperationOutcomeSchema.add({
  issue: [OperationOutcomeIssueSchema],
});

module.exports.OperationOutcomeSchema = OperationOutcomeSchema;
