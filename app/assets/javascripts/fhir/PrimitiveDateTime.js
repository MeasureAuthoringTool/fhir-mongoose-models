const { ElementSchema } = require('./Element');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');

PrimitiveDateTimeSchema.add(ElementSchema);
PrimitiveDateTimeSchema.remove('id');
PrimitiveDateTimeSchema.add({
  value: Date,
});

module.exports.PrimitiveDateTimeSchema = PrimitiveDateTimeSchema;
