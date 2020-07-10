const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySeriesInstanceSchema } = require('./allSchemaHeaders.js');

ImagingStudySeriesInstanceSchema.add(BackboneElementSchema);
ImagingStudySeriesInstanceSchema.remove('id');
ImagingStudySeriesInstanceSchema.add({
  uid: PrimitiveIdSchema,
  sopClass: CodingSchema,
  number: PrimitiveUnsignedIntSchema,
  title: PrimitiveStringSchema,
});

module.exports.ImagingStudySeriesInstanceSchema = ImagingStudySeriesInstanceSchema;
