const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImmunizationPerformerSchema } = require('./allSchemaHeaders.js');

ImmunizationPerformerSchema.add(BackboneElementSchema);
ImmunizationPerformerSchema.remove('id');
ImmunizationPerformerSchema.add({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
});

module.exports.ImmunizationPerformerSchema = ImmunizationPerformerSchema;
