const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionActorSchema } = require('./allSchemaHeaders.js');

ConsentProvisionActorSchema.add(BackboneElementSchema);
ConsentProvisionActorSchema.remove('id');
ConsentProvisionActorSchema.add({
  role: CodeableConceptSchema,
  reference: ReferenceSchema,
});

module.exports.ConsentProvisionActorSchema = ConsentProvisionActorSchema;
