const { ElementSchema } = require('./Element');
const { EnrollmentResponseStatusSchema } = require('./allSchemaHeaders.js');

EnrollmentResponseStatusSchema.add(ElementSchema);
EnrollmentResponseStatusSchema.remove('id');
EnrollmentResponseStatusSchema.add({
  value: String,
});

module.exports.EnrollmentResponseStatusSchema = EnrollmentResponseStatusSchema;
