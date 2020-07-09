const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationCodeSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationCodeSchema.add(BackboneElementSchema);
SubstanceSpecificationCodeSchema.remove('id');
SubstanceSpecificationCodeSchema.add({
  code: CodeableConceptSchema,
  status: CodeableConceptSchema,
  statusDate: PrimitiveDateTimeSchema,
  comment: PrimitiveStringSchema,
  source: [ReferenceSchema],
});

module.exports.SubstanceSpecificationCodeSchema = SubstanceSpecificationCodeSchema;
