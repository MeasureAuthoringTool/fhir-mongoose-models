const { BackboneElementSchema } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { HealthcareServiceAvailableTimeSchema } = require('./allSchemaHeaders.js');

HealthcareServiceAvailableTimeSchema.add(BackboneElementSchema);
HealthcareServiceAvailableTimeSchema.remove('id');
HealthcareServiceAvailableTimeSchema.add({
  daysOfWeek: [DaysOfWeekSchema],
  allDay: PrimitiveBooleanSchema,
  availableStartTime: PrimitiveTimeSchema,
  availableEndTime: PrimitiveTimeSchema,
});

module.exports.HealthcareServiceAvailableTimeSchema = HealthcareServiceAvailableTimeSchema;
