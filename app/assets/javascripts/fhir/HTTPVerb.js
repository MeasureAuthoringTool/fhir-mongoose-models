const { ElementSchema } = require('./Element');
const { HTTPVerbSchema } = require('./allSchemaHeaders.js');

HTTPVerbSchema.add(ElementSchema);
HTTPVerbSchema.remove('id');
HTTPVerbSchema.add({
  value: String,
});

module.exports.HTTPVerbSchema = HTTPVerbSchema;
