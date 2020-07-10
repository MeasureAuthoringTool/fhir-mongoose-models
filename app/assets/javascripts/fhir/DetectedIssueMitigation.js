const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { DetectedIssueMitigationSchema } = require('./allSchemaHeaders.js');

DetectedIssueMitigationSchema.add(BackboneElementSchema);
DetectedIssueMitigationSchema.remove('id');
DetectedIssueMitigationSchema.add({
  action: CodeableConceptSchema,
  date: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
});

module.exports.DetectedIssueMitigationSchema = DetectedIssueMitigationSchema;
