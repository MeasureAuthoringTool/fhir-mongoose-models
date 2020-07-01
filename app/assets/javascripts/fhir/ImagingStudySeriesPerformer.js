const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ImagingStudySeriesPerformerSchema = BackboneElementSchemaFunction({
  function: CodeableConceptSchema,
  actor: ReferenceSchema,
  typeName: { type: String, default: 'ImagingStudySeriesPerformer' },
  _type: { type: String, default: 'FHIR::ImagingStudySeriesPerformer' },
});

class ImagingStudySeriesPerformer extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudySeriesPerformerSchema);
    this.typeName = 'ImagingStudySeriesPerformer';
    this._type = 'FHIR::ImagingStudySeriesPerformer';
  }
}

module.exports.ImagingStudySeriesPerformerSchema = ImagingStudySeriesPerformerSchema;
module.exports.ImagingStudySeriesPerformer = ImagingStudySeriesPerformer;
