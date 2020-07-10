const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ChargeItemPerformerSchema } = require('./allSchemaHeaders.js');

ChargeItemPerformerSchema.add(BackboneElementSchema);
ChargeItemPerformerSchema.remove('id');
ChargeItemPerformerSchema.add({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
});

module.exports.ChargeItemPerformerSchema = ChargeItemPerformerSchema;
