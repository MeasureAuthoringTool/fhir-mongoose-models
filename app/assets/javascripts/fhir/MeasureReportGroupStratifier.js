const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureReportGroupStratifierStratumSchema } = require('./MeasureReportGroupStratifierStratum');

const MeasureReportGroupStratifierSchema = BackboneElementSchemaFunction({
  code: [CodeableConceptSchema],
  stratum: [MeasureReportGroupStratifierStratumSchema],
  typeName: { type: String, default: 'MeasureReportGroupStratifier' },
  _type: { type: String, default: 'FHIR::MeasureReportGroupStratifier' },
});

class MeasureReportGroupStratifier extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierSchema);
    this.typeName = 'MeasureReportGroupStratifier';
    this._type = 'FHIR::MeasureReportGroupStratifier';
  }
}

module.exports.MeasureReportGroupStratifierSchema = MeasureReportGroupStratifierSchema;
module.exports.MeasureReportGroupStratifier = MeasureReportGroupStratifier;
