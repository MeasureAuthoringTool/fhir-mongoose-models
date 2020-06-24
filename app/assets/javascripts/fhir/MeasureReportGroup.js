const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureReportGroupPopulationSchema } = require('./MeasureReportGroupPopulation');
const { MeasureReportGroupStratifierSchema } = require('./MeasureReportGroupStratifier');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureReportGroupSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   population : [MeasureReportGroupPopulationSchema],
   measureScore : QuantitySchema,
   stratifier : [MeasureReportGroupStratifierSchema],
   fhirTitle: { type: String, default: 'MeasureReportGroup' },
});

class MeasureReportGroup extends mongoose.Document {
  constructor(object) {
    super(object, MeasureReportGroupSchema);
    this._type = 'FHIR::MeasureReportGroup';
  }
};


module.exports.MeasureReportGroupSchema = MeasureReportGroupSchema;
module.exports.MeasureReportGroup = MeasureReportGroup;
