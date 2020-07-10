const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { EncounterLocationStatusSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { EncounterLocationSchema } = require('./allSchemaHeaders.js');

EncounterLocationSchema.add(BackboneElementSchema);
EncounterLocationSchema.remove('id');
EncounterLocationSchema.add({
  location: ReferenceSchema,
  status: EncounterLocationStatusSchema,
  physicalType: CodeableConceptSchema,
  period: PeriodSchema,
});

module.exports.EncounterLocationSchema = EncounterLocationSchema;
