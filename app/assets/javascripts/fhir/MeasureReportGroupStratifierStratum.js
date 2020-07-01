const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureReportGroupStratifierStratumComponentSchema } = require('./MeasureReportGroupStratifierStratumComponent');
const { MeasureReportGroupStratifierStratumPopulationSchema } = require('./MeasureReportGroupStratifierStratumPopulation');
const { QuantitySchema } = require('./Quantity');

const MeasureReportGroupStratifierStratumSchema = BackboneElementSchemaFunction({
  value: CodeableConceptSchema,
  component: [MeasureReportGroupStratifierStratumComponentSchema],
  population: [MeasureReportGroupStratifierStratumPopulationSchema],
  measureScore: QuantitySchema,
  typeName: { type: String, default: 'MeasureReportGroupStratifierStratum' },
  _type: { type: String, default: 'FHIR::MeasureReportGroupStratifierStratum' },
});

class MeasureReportGroupStratifierStratum extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierStratumSchema);
    this.typeName = 'MeasureReportGroupStratifierStratum';
    this._type = 'FHIR::MeasureReportGroupStratifierStratum';
  }
}

module.exports.MeasureReportGroupStratifierStratumSchema = MeasureReportGroupStratifierStratumSchema;
module.exports.MeasureReportGroupStratifierStratum = MeasureReportGroupStratifierStratum;
