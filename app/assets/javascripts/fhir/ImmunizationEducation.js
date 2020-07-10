const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ImmunizationEducationSchema } = require('./allSchemaHeaders.js');

ImmunizationEducationSchema.add(BackboneElementSchema);
ImmunizationEducationSchema.remove('id');
ImmunizationEducationSchema.add({
  documentType: PrimitiveStringSchema,
  reference: PrimitiveUriSchema,
  publicationDate: PrimitiveDateTimeSchema,
  presentationDate: PrimitiveDateTimeSchema,
});

module.exports.ImmunizationEducationSchema = ImmunizationEducationSchema;
