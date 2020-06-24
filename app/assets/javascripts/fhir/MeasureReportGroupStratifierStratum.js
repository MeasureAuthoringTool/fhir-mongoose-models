const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureReportGroupStratifierStratumComponentSchema } = require('./MeasureReportGroupStratifierStratumComponent');
const { MeasureReportGroupStratifierStratumPopulationSchema } = require('./MeasureReportGroupStratifierStratumPopulation');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportGroupStratifierStratumSchema = BackboneElementSchemaFunction({
   value : CodeableConceptSchema,
   component : [MeasureReportGroupStratifierStratumComponentSchema],
   population : [MeasureReportGroupStratifierStratumPopulationSchema],
   measureScore : QuantitySchema,
   fhirTitle: { type: String, default: 'MeasureReportGroupStratifierStratum' },
});

class MeasureReportGroupStratifierStratum extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierStratumSchema);
    this._type = 'FHIR::MeasureReportGroupStratifierStratum';
  }
};


module.exports.MeasureReportGroupStratifierStratumSchema = MeasureReportGroupStratifierStratumSchema;
module.exports.MeasureReportGroupStratifierStratum = MeasureReportGroupStratifierStratum;
