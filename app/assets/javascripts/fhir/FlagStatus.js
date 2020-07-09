const { ElementSchema } = require('./Element');
const { FlagStatusSchema } = require('./allSchemaHeaders.js');

FlagStatusSchema.add(ElementSchema);
FlagStatusSchema.remove('id');
FlagStatusSchema.add({
  value: String,
});

module.exports.FlagStatusSchema = FlagStatusSchema;
