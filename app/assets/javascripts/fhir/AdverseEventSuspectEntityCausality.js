const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AdverseEventSuspectEntityCausalitySchema } = require('./allSchemaHeaders.js');

AdverseEventSuspectEntityCausalitySchema.add(BackboneElementSchema);
AdverseEventSuspectEntityCausalitySchema.remove('id');
AdverseEventSuspectEntityCausalitySchema.add({
  assessment: CodeableConceptSchema,
  productRelatedness: PrimitiveStringSchema,
  author: ReferenceSchema,
  method: CodeableConceptSchema,
});

module.exports.AdverseEventSuspectEntityCausalitySchema = AdverseEventSuspectEntityCausalitySchema;
