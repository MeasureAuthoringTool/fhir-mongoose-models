const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { ImagingStudySeriesInstanceSchema } = require('./ImagingStudySeriesInstance');
const { ImagingStudySeriesPerformerSchema } = require('./ImagingStudySeriesPerformer');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { ReferenceSchema } = require('./Reference');

const ImagingStudySeriesSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'ImagingStudySeries' },
  _type: { type: String, default: 'FHIR::ImagingStudySeries' },
});

class ImagingStudySeries extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySeriesSchema);
    this.typeName = 'ImagingStudySeries';
    this._type = 'FHIR::ImagingStudySeries';
  }
}

module.exports.ImagingStudySeriesSchema = ImagingStudySeriesSchema;
module.exports.ImagingStudySeries = ImagingStudySeries;
