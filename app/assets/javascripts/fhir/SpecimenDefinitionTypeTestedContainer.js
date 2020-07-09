const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SimpleQuantitySchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedContainerAdditiveSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedContainerSchema } = require('./allSchemaHeaders.js');

SpecimenDefinitionTypeTestedContainerSchema.add(BackboneElementSchema);
SpecimenDefinitionTypeTestedContainerSchema.remove('id');
SpecimenDefinitionTypeTestedContainerSchema.add({
  material: CodeableConceptSchema,
  type: CodeableConceptSchema,
  cap: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  capacity: SimpleQuantitySchema,
  minimumVolumeSimpleQuantity: SimpleQuantitySchema,
  minimumVolumeString: PrimitiveStringSchema,
  additive: [SpecimenDefinitionTypeTestedContainerAdditiveSchema],
  preparation: PrimitiveStringSchema,
});

module.exports.SpecimenDefinitionTypeTestedContainerSchema = SpecimenDefinitionTypeTestedContainerSchema;
