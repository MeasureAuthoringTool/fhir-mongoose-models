const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { HealthcareServiceNotAvailableSchema } = require('./allSchemaHeaders.js');

HealthcareServiceNotAvailableSchema.add(BackboneElementSchema);
HealthcareServiceNotAvailableSchema.remove('id');
HealthcareServiceNotAvailableSchema.add({
  description: PrimitiveStringSchema,
  during: PeriodSchema,
});

module.exports.HealthcareServiceNotAvailableSchema = HealthcareServiceNotAvailableSchema;
