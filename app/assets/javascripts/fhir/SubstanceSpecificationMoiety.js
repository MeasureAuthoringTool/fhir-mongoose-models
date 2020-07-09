const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { QuantitySchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationMoietySchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationMoietySchema.add(BackboneElementSchema);
SubstanceSpecificationMoietySchema.remove('id');
SubstanceSpecificationMoietySchema.add({
  role: CodeableConceptSchema,
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  stereochemistry: CodeableConceptSchema,
  opticalActivity: CodeableConceptSchema,
  molecularFormula: PrimitiveStringSchema,
  amountQuantity: QuantitySchema,
  amountString: PrimitiveStringSchema,
});

module.exports.SubstanceSpecificationMoietySchema = SubstanceSpecificationMoietySchema;
