const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImagingStudySeriesPerformerSchema = BackboneElementSchemaFunction({
   function : CodeableConceptSchema,
   actor : ReferenceSchema,
   fhirTitle: { type: String, default: 'ImagingStudySeriesPerformer' },
});

class ImagingStudySeriesPerformer extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySeriesPerformerSchema);
    this._type = 'FHIR::ImagingStudySeriesPerformer';
  }
};


module.exports.ImagingStudySeriesPerformerSchema = ImagingStudySeriesPerformerSchema;
module.exports.ImagingStudySeriesPerformer = ImagingStudySeriesPerformer;
