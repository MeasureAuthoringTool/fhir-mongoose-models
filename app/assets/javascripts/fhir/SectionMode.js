const { ElementSchema } = require('./Element');
const { SectionModeSchema } = require('./allSchemaHeaders.js');

SectionModeSchema.add(ElementSchema);
SectionModeSchema.remove('id');
SectionModeSchema.add({
  value: String,
});

module.exports.SectionModeSchema = SectionModeSchema;
