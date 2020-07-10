const { ElementSchema } = require('./Element');
const { DetectedIssueSeveritySchema } = require('./allSchemaHeaders.js');

DetectedIssueSeveritySchema.add(ElementSchema);
DetectedIssueSeveritySchema.remove('id');
DetectedIssueSeveritySchema.add({
  value: String,
});

module.exports.DetectedIssueSeveritySchema = DetectedIssueSeveritySchema;
