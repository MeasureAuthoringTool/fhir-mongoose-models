const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./allSchemaHeaders.js');
const { ValueSetComposeIncludeConceptSchema } = require('./allSchemaHeaders.js');

ValueSetComposeIncludeConceptSchema.add(BackboneElementSchema);
ValueSetComposeIncludeConceptSchema.remove('id');
ValueSetComposeIncludeConceptSchema.add({
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  designation: [ValueSetComposeIncludeConceptDesignationSchema],
});

module.exports.ValueSetComposeIncludeConceptSchema = ValueSetComposeIncludeConceptSchema;
