const { AdministrativeGenderSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ObservationRangeCategorySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { ObservationDefinitionQualifiedIntervalSchema } = require('./allSchemaHeaders.js');

ObservationDefinitionQualifiedIntervalSchema.add(BackboneElementSchema);
ObservationDefinitionQualifiedIntervalSchema.remove('id');
ObservationDefinitionQualifiedIntervalSchema.add({
  category: ObservationRangeCategorySchema,
  range: RangeSchema,
  context: CodeableConceptSchema,
  appliesTo: [CodeableConceptSchema],
  gender: AdministrativeGenderSchema,
  age: RangeSchema,
  gestationalAge: RangeSchema,
  condition: PrimitiveStringSchema,
});

module.exports.ObservationDefinitionQualifiedIntervalSchema = ObservationDefinitionQualifiedIntervalSchema;
