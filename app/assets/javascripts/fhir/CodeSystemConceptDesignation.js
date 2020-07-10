const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CodeSystemConceptDesignationSchema } = require('./allSchemaHeaders.js');

CodeSystemConceptDesignationSchema.add(BackboneElementSchema);
CodeSystemConceptDesignationSchema.remove('id');
CodeSystemConceptDesignationSchema.add({
  language: PrimitiveCodeSchema,
  use: CodingSchema,
  value: PrimitiveStringSchema,
});

module.exports.CodeSystemConceptDesignationSchema = CodeSystemConceptDesignationSchema;
