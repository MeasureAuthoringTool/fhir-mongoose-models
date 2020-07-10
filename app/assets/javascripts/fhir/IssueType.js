const { ElementSchema } = require('./Element');
const { IssueTypeSchema } = require('./allSchemaHeaders.js');

IssueTypeSchema.add(ElementSchema);
IssueTypeSchema.remove('id');
IssueTypeSchema.add({
  value: String,
});

module.exports.IssueTypeSchema = IssueTypeSchema;
