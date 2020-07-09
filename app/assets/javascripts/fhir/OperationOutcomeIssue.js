const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IssueSeveritySchema } = require('./allSchemaHeaders.js');
const { IssueTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { OperationOutcomeIssueSchema } = require('./allSchemaHeaders.js');

OperationOutcomeIssueSchema.add(BackboneElementSchema);
OperationOutcomeIssueSchema.remove('id');
OperationOutcomeIssueSchema.add({
  severity: IssueSeveritySchema,
  code: IssueTypeSchema,
  details: CodeableConceptSchema,
  diagnostics: PrimitiveStringSchema,
  location: [PrimitiveStringSchema],
  expression: [PrimitiveStringSchema],
});

module.exports.OperationOutcomeIssueSchema = OperationOutcomeIssueSchema;
