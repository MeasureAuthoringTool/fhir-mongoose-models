const { BackboneElementSchema } = require('./BackboneElement');
const { CodeSystemConceptDesignationSchema } = require('./allSchemaHeaders.js');
const { CodeSystemConceptPropertySchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { CodeSystemConceptSchema } = require('./allSchemaHeaders.js');

CodeSystemConceptSchema.add(BackboneElementSchema);
CodeSystemConceptSchema.remove('id');
CodeSystemConceptSchema.add({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  definition: PrimitiveStringSchema,
  designation: [CodeSystemConceptDesignationSchema],
  property: [CodeSystemConceptPropertySchema],
  concept: [CodeSystemConceptSchema],
});

module.exports.CodeSystemConceptSchema = CodeSystemConceptSchema;
