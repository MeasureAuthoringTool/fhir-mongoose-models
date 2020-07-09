const { ElementSchema } = require('./Element');
const { AppointmentStatusSchema } = require('./allSchemaHeaders.js');

AppointmentStatusSchema.add(ElementSchema);
AppointmentStatusSchema.remove('id');
AppointmentStatusSchema.add({
  value: String,
});

module.exports.AppointmentStatusSchema = AppointmentStatusSchema;
