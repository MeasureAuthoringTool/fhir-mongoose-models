const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRSubstanceStatusSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceIngredientSchema } = require('./allSchemaHeaders.js');
const { SubstanceInstanceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSchema } = require('./allSchemaHeaders.js');

SubstanceSchema.add(DomainResourceSchema);
SubstanceSchema.remove('id');
SubstanceSchema.add({
  identifier: [IdentifierSchema],
  status: FHIRSubstanceStatusSchema,
  category: [CodeableConceptSchema],
  code: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  instance: [SubstanceInstanceSchema],
  ingredient: [SubstanceIngredientSchema],
});

module.exports.SubstanceSchema = SubstanceSchema;
