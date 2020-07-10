const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ClaimPayeeSchema } = require('./allSchemaHeaders.js');

ClaimPayeeSchema.add(BackboneElementSchema);
ClaimPayeeSchema.remove('id');
ClaimPayeeSchema.add({
  type: CodeableConceptSchema,
  party: ReferenceSchema,
});

module.exports.ClaimPayeeSchema = ClaimPayeeSchema;
