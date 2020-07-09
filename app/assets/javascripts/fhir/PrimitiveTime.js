const { ElementSchema } = require('./Element');
const { PrimitiveTimeSchema } = require('./allSchemaHeaders.js');

PrimitiveTimeSchema.add(ElementSchema);
PrimitiveTimeSchema.remove('id');
PrimitiveTimeSchema.add({
  value: Date,
});

module.exports.PrimitiveTimeSchema = PrimitiveTimeSchema;
