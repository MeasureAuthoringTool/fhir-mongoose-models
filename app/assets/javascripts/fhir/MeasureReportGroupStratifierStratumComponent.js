const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportGroupStratifierStratumComponentSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   value : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'MeasureReportGroupStratifierStratumComponent' },
});

class MeasureReportGroupStratifierStratumComponent extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupStratifierStratumComponentSchema);
    this._type = 'FHIR::MeasureReportGroupStratifierStratumComponent';
  }
};


module.exports.MeasureReportGroupStratifierStratumComponentSchema = MeasureReportGroupStratifierStratumComponentSchema;
module.exports.MeasureReportGroupStratifierStratumComponent = MeasureReportGroupStratifierStratumComponent;
