const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConditionEvidenceSchema } = require('./allSchemaHeaders.js');

ConditionEvidenceSchema.add(BackboneElementSchema);
ConditionEvidenceSchema.remove('id');
ConditionEvidenceSchema.add({
  code: [CodeableConceptSchema],
  detail: [ReferenceSchema],
});

module.exports.ConditionEvidenceSchema = ConditionEvidenceSchema;
