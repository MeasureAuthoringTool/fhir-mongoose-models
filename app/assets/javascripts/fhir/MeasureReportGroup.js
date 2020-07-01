const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureReportGroupPopulationSchema } = require('./MeasureReportGroupPopulation');
const { MeasureReportGroupStratifierSchema } = require('./MeasureReportGroupStratifier');
const { QuantitySchema } = require('./Quantity');

const MeasureReportGroupSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  population: [MeasureReportGroupPopulationSchema],
  measureScore: QuantitySchema,
  stratifier: [MeasureReportGroupStratifierSchema],
  typeName: { type: String, default: 'MeasureReportGroup' },
  _type: { type: String, default: 'FHIR::MeasureReportGroup' },
});

class MeasureReportGroup extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupSchema);
    this.typeName = 'MeasureReportGroup';
    this._type = 'FHIR::MeasureReportGroup';
  }
}

module.exports.MeasureReportGroupSchema = MeasureReportGroupSchema;
module.exports.MeasureReportGroup = MeasureReportGroup;
