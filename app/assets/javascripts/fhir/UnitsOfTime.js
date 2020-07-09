const { ElementSchema } = require('./Element');
const { UnitsOfTimeSchema } = require('./allSchemaHeaders.js');

UnitsOfTimeSchema.add(ElementSchema);
UnitsOfTimeSchema.remove('id');
UnitsOfTimeSchema.add({
  value: String,
});

module.exports.UnitsOfTimeSchema = UnitsOfTimeSchema;
