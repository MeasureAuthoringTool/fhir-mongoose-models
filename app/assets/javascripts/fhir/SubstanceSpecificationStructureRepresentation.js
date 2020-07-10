const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureRepresentationSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationStructureRepresentationSchema.add(BackboneElementSchema);
SubstanceSpecificationStructureRepresentationSchema.remove('id');
SubstanceSpecificationStructureRepresentationSchema.add({
  type: CodeableConceptSchema,
  representation: PrimitiveStringSchema,
  attachment: AttachmentSchema,
});

module.exports.SubstanceSpecificationStructureRepresentationSchema = SubstanceSpecificationStructureRepresentationSchema;
