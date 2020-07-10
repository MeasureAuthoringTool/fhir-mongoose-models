const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PropertyTypeSchema } = require('./allSchemaHeaders.js');
const { CodeSystemPropertySchema } = require('./allSchemaHeaders.js');

CodeSystemPropertySchema.add(BackboneElementSchema);
CodeSystemPropertySchema.remove('id');
CodeSystemPropertySchema.add({
  code: PrimitiveCodeSchema,
  uri: PrimitiveUriSchema,
  description: PrimitiveStringSchema,
  type: PropertyTypeSchema,
});

module.exports.CodeSystemPropertySchema = CodeSystemPropertySchema;
