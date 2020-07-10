const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySeriesInstanceSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySeriesPerformerSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySeriesSchema } = require('./allSchemaHeaders.js');

ImagingStudySeriesSchema.add(BackboneElementSchema);
ImagingStudySeriesSchema.remove('id');
ImagingStudySeriesSchema.add({
  uid: PrimitiveIdSchema,
  number: PrimitiveUnsignedIntSchema,
  modality: CodingSchema,
  description: PrimitiveStringSchema,
  numberOfInstances: PrimitiveUnsignedIntSchema,
  endpoint: [ReferenceSchema],
  bodySite: CodingSchema,
  laterality: CodingSchema,
  specimen: [ReferenceSchema],
  started: PrimitiveDateTimeSchema,
  performer: [ImagingStudySeriesPerformerSchema],
  instance: [ImagingStudySeriesInstanceSchema],
});

module.exports.ImagingStudySeriesSchema = ImagingStudySeriesSchema;
