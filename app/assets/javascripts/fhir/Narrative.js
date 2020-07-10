const { ElementSchema } = require('./Element');
const { NarrativeStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveXhtmlSchema } = require('./allSchemaHeaders.js');
const { NarrativeSchema } = require('./allSchemaHeaders.js');

NarrativeSchema.add(ElementSchema);
NarrativeSchema.remove('id');
NarrativeSchema.add({
  status: NarrativeStatusSchema,
  div: PrimitiveXhtmlSchema,
});

module.exports.NarrativeSchema = NarrativeSchema;
