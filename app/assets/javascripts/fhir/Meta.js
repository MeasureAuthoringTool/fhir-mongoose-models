const { CodingSchema } = require('./allSchemaHeaders.js');
const { ElementSchema } = require('./Element');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveInstantSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { MetaSchema } = require('./allSchemaHeaders.js');

MetaSchema.add(ElementSchema);
MetaSchema.remove('id');
MetaSchema.add({
  versionId: PrimitiveIdSchema,
  lastUpdated: PrimitiveInstantSchema,
  source: PrimitiveUriSchema,
  profile: [PrimitiveCanonicalSchema],
  security: [CodingSchema],
  tag: [CodingSchema],
});

module.exports.MetaSchema = MetaSchema;
