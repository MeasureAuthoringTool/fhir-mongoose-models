const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ResearchStudyObjectiveSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  typeName: { type: String, default: 'ResearchStudyObjective' },
  _type: { type: String, default: 'FHIR::ResearchStudyObjective' },
});

class ResearchStudyObjective extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudyObjectiveSchema);
    this.typeName = 'ResearchStudyObjective';
    this._type = 'FHIR::ResearchStudyObjective';
  }
}

module.exports.ResearchStudyObjectiveSchema = ResearchStudyObjectiveSchema;
module.exports.ResearchStudyObjective = ResearchStudyObjective;
