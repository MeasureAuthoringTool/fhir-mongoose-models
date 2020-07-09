const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedContainerAdditiveSchema } = require('./allSchemaHeaders.js');

SpecimenDefinitionTypeTestedContainerAdditiveSchema.add(BackboneElementSchema);
SpecimenDefinitionTypeTestedContainerAdditiveSchema.remove('id');
SpecimenDefinitionTypeTestedContainerAdditiveSchema.add({
  additiveCodeableConcept: CodeableConceptSchema,
  additiveReference: ReferenceSchema,
});

module.exports.SpecimenDefinitionTypeTestedContainerAdditiveSchema = SpecimenDefinitionTypeTestedContainerAdditiveSchema;
