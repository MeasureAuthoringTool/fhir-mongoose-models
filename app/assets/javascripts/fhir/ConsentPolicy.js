const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ConsentPolicySchema } = require('./allSchemaHeaders.js');

ConsentPolicySchema.add(BackboneElementSchema);
ConsentPolicySchema.remove('id');
ConsentPolicySchema.add({
  authority: PrimitiveUriSchema,
  uri: PrimitiveUriSchema,
});

module.exports.ConsentPolicySchema = ConsentPolicySchema;
