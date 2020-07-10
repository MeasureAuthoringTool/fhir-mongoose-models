const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionTypeTestedSchema } = require('./allSchemaHeaders.js');
const { SpecimenDefinitionSchema } = require('./allSchemaHeaders.js');

SpecimenDefinitionSchema.add(DomainResourceSchema);
SpecimenDefinitionSchema.remove('id');
SpecimenDefinitionSchema.add({
  identifier: IdentifierSchema,
  typeCollected: CodeableConceptSchema,
  patientPreparation: [CodeableConceptSchema],
  timeAspect: PrimitiveStringSchema,
  _collection: [CodeableConceptSchema],
  typeTested: [SpecimenDefinitionTypeTestedSchema],
});

module.exports.SpecimenDefinitionSchema = SpecimenDefinitionSchema;
