const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { ReferenceSchema } = require('./Reference');

const MeasureReportGroupStratifierStratumPopulationSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  count: PrimitiveIntegerSchema,
  subjectResults: ReferenceSchema,
  typeName: { type: String, default: 'MeasureReportGroupStratifierStratumPopulation' },
  _type: { type: String, default: 'FHIR::MeasureReportGroupStratifierStratumPopulation' },
});

class MeasureReportGroupStratifierStratumPopulation extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierStratumPopulationSchema);
    this.typeName = 'MeasureReportGroupStratifierStratumPopulation';
    this._type = 'FHIR::MeasureReportGroupStratifierStratumPopulation';
  }
}

module.exports.MeasureReportGroupStratifierStratumPopulationSchema = MeasureReportGroupStratifierStratumPopulationSchema;
module.exports.MeasureReportGroupStratifierStratumPopulation = MeasureReportGroupStratifierStratumPopulation;
