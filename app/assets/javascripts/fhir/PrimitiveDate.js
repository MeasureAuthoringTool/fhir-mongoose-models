const { ElementSchema } = require('./Element');
const { PrimitiveDateSchema } = require('./allSchemaHeaders.js');

PrimitiveDateSchema.add(ElementSchema);
PrimitiveDateSchema.remove('id');
PrimitiveDateSchema.add({
  value: Date,
});

module.exports.PrimitiveDateSchema = PrimitiveDateSchema;
