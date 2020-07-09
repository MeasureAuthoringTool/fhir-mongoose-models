const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerMonomerSetStartingMaterialSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerMonomerSetSchema } = require('./allSchemaHeaders.js');

SubstancePolymerMonomerSetSchema.add(BackboneElementSchema);
SubstancePolymerMonomerSetSchema.remove('id');
SubstancePolymerMonomerSetSchema.add({
  ratioType: CodeableConceptSchema,
  startingMaterial: [SubstancePolymerMonomerSetStartingMaterialSchema],
});

module.exports.SubstancePolymerMonomerSetSchema = SubstancePolymerMonomerSetSchema;
