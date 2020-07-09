const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./allSchemaHeaders.js');

ValueSetComposeIncludeConceptDesignationSchema.add(BackboneElementSchema);
ValueSetComposeIncludeConceptDesignationSchema.remove('id');
ValueSetComposeIncludeConceptDesignationSchema.add({
  language: PrimitiveCodeSchema,
  use: CodingSchema,
  value: PrimitiveStringSchema,
});

module.exports.ValueSetComposeIncludeConceptDesignationSchema = ValueSetComposeIncludeConceptDesignationSchema;
