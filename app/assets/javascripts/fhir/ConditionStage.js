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

const ConditionStageSchema = BackboneElementSchemaFunction({
   summary : CodeableConceptSchema,
   assessment : [ReferenceSchema],
   type : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'ConditionStage' },
});

class ConditionStage extends mongoose.Document {
  constructor(object) {
    super(object, ConditionStageSchema);
    this._type = 'FHIR::ConditionStage';
  }
};


module.exports.ConditionStageSchema = ConditionStageSchema;
module.exports.ConditionStage = ConditionStage;
