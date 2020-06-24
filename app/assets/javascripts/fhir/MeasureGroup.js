const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MeasureGroupPopulationSchema } = require('./MeasureGroupPopulation');
const { MeasureGroupStratifierSchema } = require('./MeasureGroupStratifier');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MeasureGroupSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   description : String,
   population : [MeasureGroupPopulationSchema],
   stratifier : [MeasureGroupStratifierSchema],
   fhirTitle: { type: String, default: 'MeasureGroup' },
});

class MeasureGroup extends mongoose.Document {
  constructor(object) {
    super(object, MeasureGroupSchema);
    this._type = 'FHIR::MeasureGroup';
  }
};


module.exports.MeasureGroupSchema = MeasureGroupSchema;
module.exports.MeasureGroup = MeasureGroup;
