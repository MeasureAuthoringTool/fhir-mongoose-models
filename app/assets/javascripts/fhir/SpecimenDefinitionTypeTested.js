const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SpecimenContainedPreferenceSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedContainerSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedHandlingSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedSchema } = require('./allSchemaHeaders.js');

SpecimenDefinitionTypeTestedSchema.add(BackboneElementSchema);
SpecimenDefinitionTypeTestedSchema.remove('id');
SpecimenDefinitionTypeTestedSchema.add({
  isDerived: PrimitiveBooleanSchema,
  type: CodeableConceptSchema,
  preference: SpecimenContainedPreferenceSchema,
  container: SpecimenDefinitionTypeTestedContainerSchema,
  requirement: PrimitiveStringSchema,
  retentionTime: DurationSchema,
  rejectionCriterion: [CodeableConceptSchema],
  handling: [SpecimenDefinitionTypeTestedHandlingSchema],
});

module.exports.SpecimenDefinitionTypeTestedSchema = SpecimenDefinitionTypeTestedSchema;
