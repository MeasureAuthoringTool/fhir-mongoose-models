const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const MeasureReportGroupStratifierStratumComponentSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  value: CodeableConceptSchema,
  typeName: { type: String, default: 'MeasureReportGroupStratifierStratumComponent' },
  _type: { type: String, default: 'FHIR::MeasureReportGroupStratifierStratumComponent' },
});

class MeasureReportGroupStratifierStratumComponent extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierStratumComponentSchema);
    this.typeName = 'MeasureReportGroupStratifierStratumComponent';
    this._type = 'FHIR::MeasureReportGroupStratifierStratumComponent';
  }
}

module.exports.MeasureReportGroupStratifierStratumComponentSchema = MeasureReportGroupStratifierStratumComponentSchema;
module.exports.MeasureReportGroupStratifierStratumComponent = MeasureReportGroupStratifierStratumComponent;
