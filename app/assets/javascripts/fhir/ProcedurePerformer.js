const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ProcedurePerformerSchema } = require('./allSchemaHeaders.js');

ProcedurePerformerSchema.add(BackboneElementSchema);
ProcedurePerformerSchema.remove('id');
ProcedurePerformerSchema.add({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
});

module.exports.ProcedurePerformerSchema = ProcedurePerformerSchema;
