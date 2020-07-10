const { BackboneElementSchema } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { PractitionerRoleAvailableTimeSchema } = require('./allSchemaHeaders.js');

PractitionerRoleAvailableTimeSchema.add(BackboneElementSchema);
PractitionerRoleAvailableTimeSchema.remove('id');
PractitionerRoleAvailableTimeSchema.add({
  daysOfWeek: [DaysOfWeekSchema],
  allDay: PrimitiveBooleanSchema,
  availableStartTime: PrimitiveTimeSchema,
  availableEndTime: PrimitiveTimeSchema,
});

module.exports.PractitionerRoleAvailableTimeSchema = PractitionerRoleAvailableTimeSchema;
