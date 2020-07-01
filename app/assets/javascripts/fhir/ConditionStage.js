const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const ConditionStageSchema = BackboneElementSchemaFunction({
  summary: CodeableConceptSchema,
  assessment: [ReferenceSchema],
  type: CodeableConceptSchema,
  typeName: { type: String, default: 'ConditionStage' },
  _type: { type: String, default: 'FHIR::ConditionStage' },
});

class ConditionStage extends mongoose.Document {
  constructor(object) {
    super(object, ConditionStageSchema);
    this.typeName = 'ConditionStage';
    this._type = 'FHIR::ConditionStage';
  }
}

module.exports.ConditionStageSchema = ConditionStageSchema;
module.exports.ConditionStage = ConditionStage;
