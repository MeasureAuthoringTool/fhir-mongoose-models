const { BackboneElementSchema } = require('./BackboneElement');
const { DaysOfWeekSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');
const { LocationHoursOfOperationSchema } = require('./allSchemaHeaders.js');

LocationHoursOfOperationSchema.add(BackboneElementSchema);
LocationHoursOfOperationSchema.remove('id');
LocationHoursOfOperationSchema.add({
  daysOfWeek: [DaysOfWeekSchema],
  allDay: PrimitiveBooleanSchema,
  openingTime: PrimitiveTimeSchema,
  closingTime: PrimitiveTimeSchema,
});

module.exports.LocationHoursOfOperationSchema = LocationHoursOfOperationSchema;
