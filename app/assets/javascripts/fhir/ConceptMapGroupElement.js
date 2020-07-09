const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapGroupElementTargetSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupElementSchema } = require('./allSchemaHeaders.js');

ConceptMapGroupElementSchema.add(BackboneElementSchema);
ConceptMapGroupElementSchema.remove('id');
ConceptMapGroupElementSchema.add({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  target: [ConceptMapGroupElementTargetSchema],
});

module.exports.ConceptMapGroupElementSchema = ConceptMapGroupElementSchema;
