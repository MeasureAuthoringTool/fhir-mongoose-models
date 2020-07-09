const { ElementSchema } = require('./Element');
const { SequenceTypeSchema } = require('./allSchemaHeaders.js');

SequenceTypeSchema.add(ElementSchema);
SequenceTypeSchema.remove('id');
SequenceTypeSchema.add({
  value: String,
});

module.exports.SequenceTypeSchema = SequenceTypeSchema;
