const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { ReferenceSchema } = require('./Reference');

const MeasureReportGroupPopulationSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  count: PrimitiveIntegerSchema,
  subjectResults: ReferenceSchema,
  typeName: { type: String, default: 'MeasureReportGroupPopulation' },
  _type: { type: String, default: 'FHIR::MeasureReportGroupPopulation' },
});

class MeasureReportGroupPopulation extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupPopulationSchema);
    this.typeName = 'MeasureReportGroupPopulation';
    this._type = 'FHIR::MeasureReportGroupPopulation';
  }
}

module.exports.MeasureReportGroupPopulationSchema = MeasureReportGroupPopulationSchema;
module.exports.MeasureReportGroupPopulation = MeasureReportGroupPopulation;
