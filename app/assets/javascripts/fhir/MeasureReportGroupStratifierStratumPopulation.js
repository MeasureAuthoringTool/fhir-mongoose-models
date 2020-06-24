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

const MeasureReportGroupStratifierStratumPopulationSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   count : Number,
   subjectResults : ReferenceSchema,
   fhirTitle: { type: String, default: 'MeasureReportGroupStratifierStratumPopulation' },
});

class MeasureReportGroupStratifierStratumPopulation extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierStratumPopulationSchema);
    this._type = 'FHIR::MeasureReportGroupStratifierStratumPopulation';
  }
};


module.exports.MeasureReportGroupStratifierStratumPopulationSchema = MeasureReportGroupStratifierStratumPopulationSchema;
module.exports.MeasureReportGroupStratifierStratumPopulation = MeasureReportGroupStratifierStratumPopulation;
