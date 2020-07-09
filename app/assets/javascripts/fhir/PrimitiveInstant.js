const { ElementSchema } = require('./Element');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');

PrimitiveInstantSchema.add(ElementSchema);
PrimitiveInstantSchema.remove('id');
PrimitiveInstantSchema.add({
  value: Date,
});

module.exports.PrimitiveInstantSchema = PrimitiveInstantSchema;
