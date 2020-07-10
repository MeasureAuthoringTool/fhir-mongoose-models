const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationNameOfficialSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationNameSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationNameSchema.add(BackboneElementSchema);
SubstanceSpecificationNameSchema.remove('id');
SubstanceSpecificationNameSchema.add({
  name: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  status: CodeableConceptSchema,
  preferred: PrimitiveBooleanSchema,
  language: [CodeableConceptSchema],
  domain: [CodeableConceptSchema],
  jurisdiction: [CodeableConceptSchema],
  synonym: [SubstanceSpecificationNameSchema],
  translation: [SubstanceSpecificationNameSchema],
  official: [SubstanceSpecificationNameOfficialSchema],
  source: [ReferenceSchema],
});

module.exports.SubstanceSpecificationNameSchema = SubstanceSpecificationNameSchema;
