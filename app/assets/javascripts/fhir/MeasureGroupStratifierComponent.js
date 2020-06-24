const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureGroupStratifierComponentSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   description : String,
   criteria : ExpressionSchema,
   fhirTitle: { type: String, default: 'MeasureGroupStratifierComponent' },
});

class MeasureGroupStratifierComponent extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupStratifierComponentSchema);
    this._type = 'FHIR::MeasureGroupStratifierComponent';
  }
};


module.exports.MeasureGroupStratifierComponentSchema = MeasureGroupStratifierComponentSchema;
module.exports.MeasureGroupStratifierComponent = MeasureGroupStratifierComponent;
