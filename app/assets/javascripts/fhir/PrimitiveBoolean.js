const { ElementSchema } = require('./Element');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');

PrimitiveBooleanSchema.add(ElementSchema);
PrimitiveBooleanSchema.remove('id');
PrimitiveBooleanSchema.add({
  value: Boolean,
});

module.exports.PrimitiveBooleanSchema = PrimitiveBooleanSchema;
