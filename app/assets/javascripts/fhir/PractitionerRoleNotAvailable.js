const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PractitionerRoleNotAvailableSchema } = require('./allSchemaHeaders.js');

PractitionerRoleNotAvailableSchema.add(BackboneElementSchema);
PractitionerRoleNotAvailableSchema.remove('id');
PractitionerRoleNotAvailableSchema.add({
  description: PrimitiveStringSchema,
  during: PeriodSchema,
});

module.exports.PractitionerRoleNotAvailableSchema = PractitionerRoleNotAvailableSchema;
