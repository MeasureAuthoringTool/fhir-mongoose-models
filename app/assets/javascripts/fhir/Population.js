const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { RangeSchema } = require('./allSchemaHeaders.js');
const { PopulationSchema } = require('./allSchemaHeaders.js');

PopulationSchema.add(BackboneElementSchema);
PopulationSchema.remove('id');
PopulationSchema.add({
  ageRange: RangeSchema,
  ageCodeableConcept: CodeableConceptSchema,
  gender: CodeableConceptSchema,
  race: CodeableConceptSchema,
  physiologicalCondition: CodeableConceptSchema,
});

module.exports.PopulationSchema = PopulationSchema;
