const { ElementSchema } = require('./Element');
const { NarrativeStatusSchema } = require('./allSchemaHeaders.js');

NarrativeStatusSchema.add(ElementSchema);
NarrativeStatusSchema.remove('id');
NarrativeStatusSchema.add({
  value: String,
});

module.exports.NarrativeStatusSchema = NarrativeStatusSchema;
