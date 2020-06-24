const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureReportGroupStratifierStratumSchema } = require('./MeasureReportGroupStratifierStratum');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportGroupStratifierSchema = BackboneElementSchemaFunction({
   code : [CodeableConceptSchema],
   stratum : [MeasureReportGroupStratifierStratumSchema],
   fhirTitle: { type: String, default: 'MeasureReportGroupStratifier' },
});

class MeasureReportGroupStratifier extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierSchema);
    this._type = 'FHIR::MeasureReportGroupStratifier';
  }
};


module.exports.MeasureReportGroupStratifierSchema = MeasureReportGroupStratifierSchema;
module.exports.MeasureReportGroupStratifier = MeasureReportGroupStratifier;
