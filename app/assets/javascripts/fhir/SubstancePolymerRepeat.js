const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIntegerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatRepeatUnitSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatSchema } = require('./allSchemaHeaders.js');

SubstancePolymerRepeatSchema.add(BackboneElementSchema);
SubstancePolymerRepeatSchema.remove('id');
SubstancePolymerRepeatSchema.add({
  numberOfUnits: PrimitiveIntegerSchema,
  averageMolecularFormula: PrimitiveStringSchema,
  repeatUnitAmountType: CodeableConceptSchema,
  repeatUnit: [SubstancePolymerRepeatRepeatUnitSchema],
});

module.exports.SubstancePolymerRepeatSchema = SubstancePolymerRepeatSchema;
