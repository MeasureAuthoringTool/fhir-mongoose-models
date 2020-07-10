const { MetaSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ResourceSchema } = require('./allSchemaHeaders.js');

ResourceSchema.add({
  id: String,
  meta: MetaSchema,
  implicitRules: PrimitiveUriSchema,
  language: PrimitiveCodeSchema,
  resourceType: String,
});

module.exports.ResourceSchema = ResourceSchema;
