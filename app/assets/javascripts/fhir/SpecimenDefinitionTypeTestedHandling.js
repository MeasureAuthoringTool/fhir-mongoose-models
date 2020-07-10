const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DurationSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedHandlingSchema } = require('./allSchemaHeaders.js');

SpecimenDefinitionTypeTestedHandlingSchema.add(BackboneElementSchema);
SpecimenDefinitionTypeTestedHandlingSchema.remove('id');
SpecimenDefinitionTypeTestedHandlingSchema.add({
  temperatureQualifier: CodeableConceptSchema,
  temperatureRange: RangeSchema,
  maxDuration: DurationSchema,
  instruction: PrimitiveStringSchema,
});

module.exports.SpecimenDefinitionTypeTestedHandlingSchema = SpecimenDefinitionTypeTestedHandlingSchema;
