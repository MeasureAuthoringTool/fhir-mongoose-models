const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImagingStudySeriesInstanceSchema = BackboneElementSchemaFunction({
   uid : String,
   sopClass : CodingSchema,
   number : Number,
   title : String,
   fhirTitle: { type: String, default: 'ImagingStudySeriesInstance' },
});

class ImagingStudySeriesInstance extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySeriesInstanceSchema);
    this._type = 'FHIR::ImagingStudySeriesInstance';
  }
};


module.exports.ImagingStudySeriesInstanceSchema = ImagingStudySeriesInstanceSchema;
module.exports.ImagingStudySeriesInstance = ImagingStudySeriesInstance;
