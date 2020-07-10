const { ElementSchema } = require('./Element');
const { EnrollmentRequestStatusSchema } = require('./allSchemaHeaders.js');

EnrollmentRequestStatusSchema.add(ElementSchema);
EnrollmentRequestStatusSchema.remove('id');
EnrollmentRequestStatusSchema.add({
  value: String,
});

module.exports.EnrollmentRequestStatusSchema = EnrollmentRequestStatusSchema;
