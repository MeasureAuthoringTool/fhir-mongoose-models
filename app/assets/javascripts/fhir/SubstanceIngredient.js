const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { RatioSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceIngredientSchema } = require('./allSchemaHeaders.js');

SubstanceIngredientSchema.add(BackboneElementSchema);
SubstanceIngredientSchema.remove('id');
SubstanceIngredientSchema.add({
  quantity: RatioSchema,
  substanceCodeableConcept: CodeableConceptSchema,
  substanceReference: ReferenceSchema,
});

module.exports.SubstanceIngredientSchema = SubstanceIngredientSchema;
