const { ElementSchema } = require('./Element');
const { StrandTypeSchema } = require('./allSchemaHeaders.js');

StrandTypeSchema.add(ElementSchema);
StrandTypeSchema.remove('id');
StrandTypeSchema.add({
  value: String,
});

module.exports.StrandTypeSchema = StrandTypeSchema;
