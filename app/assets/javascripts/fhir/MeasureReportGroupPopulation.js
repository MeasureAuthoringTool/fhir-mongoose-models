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

const MeasureReportGroupPopulationSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   count : Number,
   subjectResults : ReferenceSchema,
   fhirTitle: { type: String, default: 'MeasureReportGroupPopulation' },
});

class MeasureReportGroupPopulation extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupPopulationSchema);
    this._type = 'FHIR::MeasureReportGroupPopulation';
  }
};


module.exports.MeasureReportGroupPopulationSchema = MeasureReportGroupPopulationSchema;
module.exports.MeasureReportGroupPopulation = MeasureReportGroupPopulation;
