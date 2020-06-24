const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { ImagingStudySeriesInstanceSchema } = require('./ImagingStudySeriesInstance');
const { ImagingStudySeriesPerformerSchema } = require('./ImagingStudySeriesPerformer');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImagingStudySeriesSchema = BackboneElementSchemaFunction({
   uid : String,
   number : Number,
   modality : CodingSchema,
   description : String,
   numberOfInstances : Number,
   endpoint : [ReferenceSchema],
   bodySite : CodingSchema,
   laterality : CodingSchema,
   specimen : [ReferenceSchema],
   started : DateTime,
   performer : [ImagingStudySeriesPerformerSchema],
   instance : [ImagingStudySeriesInstanceSchema],
   fhirTitle: { type: String, default: 'ImagingStudySeries' },
});

class ImagingStudySeries extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySeriesSchema);
    this._type = 'FHIR::ImagingStudySeries';
  }
};


module.exports.ImagingStudySeriesSchema = ImagingStudySeriesSchema;
module.exports.ImagingStudySeries = ImagingStudySeries;
