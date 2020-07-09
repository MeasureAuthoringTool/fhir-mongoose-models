const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySeriesSchema } = require('./allSchemaHeaders.js');
const { ImagingStudyStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUnsignedIntSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ImagingStudySchema } = require('./allSchemaHeaders.js');

ImagingStudySchema.add(DomainResourceSchema);
ImagingStudySchema.remove('id');
ImagingStudySchema.add({
  identifier: [IdentifierSchema],
  status: ImagingStudyStatusSchema,
  modality: [CodingSchema],
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  started: PrimitiveDateTimeSchema,
  basedOn: [ReferenceSchema],
  referrer: ReferenceSchema,
  interpreter: [ReferenceSchema],
  endpoint: [ReferenceSchema],
  numberOfSeries: PrimitiveUnsignedIntSchema,
  numberOfInstances: PrimitiveUnsignedIntSchema,
  procedureReference: ReferenceSchema,
  procedureCode: [CodeableConceptSchema],
  location: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  description: PrimitiveStringSchema,
  series: [ImagingStudySeriesSchema],
});

module.exports.ImagingStudySchema = ImagingStudySchema;
