const { ElementSchema } = require('./Element');
const { UseSchema } = require('./allSchemaHeaders.js');

UseSchema.add(ElementSchema);
UseSchema.remove('id');
UseSchema.add({
  value: String,
});

module.exports.UseSchema = UseSchema;
