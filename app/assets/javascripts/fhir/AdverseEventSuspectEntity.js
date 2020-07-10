const { AdverseEventSuspectEntityCausalitySchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AdverseEventSuspectEntitySchema } = require('./allSchemaHeaders.js');

AdverseEventSuspectEntitySchema.add(BackboneElementSchema);
AdverseEventSuspectEntitySchema.remove('id');
AdverseEventSuspectEntitySchema.add({
  instance: ReferenceSchema,
  causality: [AdverseEventSuspectEntityCausalitySchema],
});

module.exports.AdverseEventSuspectEntitySchema = AdverseEventSuspectEntitySchema;
