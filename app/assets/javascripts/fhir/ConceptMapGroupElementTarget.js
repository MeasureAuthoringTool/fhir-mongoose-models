const { BackboneElementSchema } = require('./BackboneElement');
const { ConceptMapEquivalenceSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupElementTargetDependsOnSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ConceptMapGroupElementTargetSchema } = require('./allSchemaHeaders.js');

ConceptMapGroupElementTargetSchema.add(BackboneElementSchema);
ConceptMapGroupElementTargetSchema.remove('id');
ConceptMapGroupElementTargetSchema.add({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  equivalence: ConceptMapEquivalenceSchema,
  comment: PrimitiveStringSchema,
  dependsOn: [ConceptMapGroupElementTargetDependsOnSchema],
  product: [ConceptMapGroupElementTargetDependsOnSchema],
});

module.exports.ConceptMapGroupElementTargetSchema = ConceptMapGroupElementTargetSchema;
