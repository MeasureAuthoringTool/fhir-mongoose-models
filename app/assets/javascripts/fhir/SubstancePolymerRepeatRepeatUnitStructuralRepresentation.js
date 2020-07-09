const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema } = require('./allSchemaHeaders.js');

SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema.add(BackboneElementSchema);
SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema.remove('id');
SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema.add({
  type: CodeableConceptSchema,
  representation: PrimitiveStringSchema,
  attachment: AttachmentSchema,
});

module.exports.SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema = SubstancePolymerRepeatRepeatUnitStructuralRepresentationSchema;
