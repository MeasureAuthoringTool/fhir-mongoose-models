const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { SubstanceAmountSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerMonomerSetStartingMaterialSchema } = require('./allSchemaHeaders.js');

SubstancePolymerMonomerSetStartingMaterialSchema.add(BackboneElementSchema);
SubstancePolymerMonomerSetStartingMaterialSchema.remove('id');
SubstancePolymerMonomerSetStartingMaterialSchema.add({
  material: CodeableConceptSchema,
  type: CodeableConceptSchema,
  isDefining: PrimitiveBooleanSchema,
  amount: SubstanceAmountSchema,
});

module.exports.SubstancePolymerMonomerSetStartingMaterialSchema = SubstancePolymerMonomerSetStartingMaterialSchema;
