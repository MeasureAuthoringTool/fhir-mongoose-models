const { ElementSchema } = require('./Element');
const { ConstraintSeveritySchema } = require('./allSchemaHeaders.js');

ConstraintSeveritySchema.add(ElementSchema);
ConstraintSeveritySchema.remove('id');
ConstraintSeveritySchema.add({
  value: String,
});

module.exports.ConstraintSeveritySchema = ConstraintSeveritySchema;
