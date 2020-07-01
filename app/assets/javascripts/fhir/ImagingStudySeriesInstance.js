const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');

const ImagingStudySeriesInstanceSchema = BackboneElementSchemaFunction({
  uid: PrimitiveIdSchema,
  sopClass: CodingSchema,
  number: PrimitiveUnsignedIntSchema,
  title: PrimitiveStringSchema,
  typeName: { type: String, default: 'ImagingStudySeriesInstance' },
  _type: { type: String, default: 'FHIR::ImagingStudySeriesInstance' },
});

class ImagingStudySeriesInstance extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySeriesInstanceSchema);
    this.typeName = 'ImagingStudySeriesInstance';
    this._type = 'FHIR::ImagingStudySeriesInstance';
  }
}

module.exports.ImagingStudySeriesInstanceSchema = ImagingStudySeriesInstanceSchema;
module.exports.ImagingStudySeriesInstance = ImagingStudySeriesInstance;
