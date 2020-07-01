const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ResearchStudyArmSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  typeName: { type: String, default: 'ResearchStudyArm' },
  _type: { type: String, default: 'FHIR::ResearchStudyArm' },
});

class ResearchStudyArm extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudyArmSchema);
    this.typeName = 'ResearchStudyArm';
    this._type = 'FHIR::ResearchStudyArm';
  }
}

module.exports.ResearchStudyArmSchema = ResearchStudyArmSchema;
module.exports.ResearchStudyArm = ResearchStudyArm;
