const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DetectedIssueEvidenceSchema } = require('./allSchemaHeaders.js');

DetectedIssueEvidenceSchema.add(BackboneElementSchema);
DetectedIssueEvidenceSchema.remove('id');
DetectedIssueEvidenceSchema.add({
  code: [CodeableConceptSchema],
  detail: [ReferenceSchema],
});

module.exports.DetectedIssueEvidenceSchema = DetectedIssueEvidenceSchema;
