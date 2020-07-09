const { ElementSchema } = require('./Element');
const { IssueSeveritySchema } = require('./allSchemaHeaders.js');

IssueSeveritySchema.add(ElementSchema);
IssueSeveritySchema.remove('id');
IssueSeveritySchema.add({
  value: String,
});

module.exports.IssueSeveritySchema = IssueSeveritySchema;
