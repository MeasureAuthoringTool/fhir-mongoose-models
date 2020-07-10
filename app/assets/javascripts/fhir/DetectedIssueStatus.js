const { ElementSchema } = require('./Element');
const { DetectedIssueStatusSchema } = require('./allSchemaHeaders.js');

DetectedIssueStatusSchema.add(ElementSchema);
DetectedIssueStatusSchema.remove('id');
DetectedIssueStatusSchema.add({
  value: String,
});

module.exports.DetectedIssueStatusSchema = DetectedIssueStatusSchema;
