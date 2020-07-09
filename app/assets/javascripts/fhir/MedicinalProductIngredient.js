const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSpecifiedSubstanceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSubstanceSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductIngredientSchema } = require('./allSchemaHeaders.js');

MedicinalProductIngredientSchema.add(DomainResourceSchema);
MedicinalProductIngredientSchema.remove('id');
MedicinalProductIngredientSchema.add({
  identifier: IdentifierSchema,
  role: CodeableConceptSchema,
  allergenicIndicator: PrimitiveBooleanSchema,
  manufacturer: [ReferenceSchema],
  specifiedSubstance: [MedicinalProductIngredientSpecifiedSubstanceSchema],
  substance: MedicinalProductIngredientSubstanceSchema,
});

module.exports.MedicinalProductIngredientSchema = MedicinalProductIngredientSchema;
