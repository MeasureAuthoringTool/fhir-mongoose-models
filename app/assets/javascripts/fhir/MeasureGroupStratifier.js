const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { MeasureGroupStratifierComponentSchema } = require('./MeasureGroupStratifierComponent');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureGroupStratifierSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   description : String,
   criteria : ExpressionSchema,
   component : [MeasureGroupStratifierComponentSchema],
   fhirTitle: { type: String, default: 'MeasureGroupStratifier' },
});

class MeasureGroupStratifier extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupStratifierSchema);
    this._type = 'FHIR::MeasureGroupStratifier';
  }
};


module.exports.MeasureGroupStratifierSchema = MeasureGroupStratifierSchema;
module.exports.MeasureGroupStratifier = MeasureGroupStratifier;
