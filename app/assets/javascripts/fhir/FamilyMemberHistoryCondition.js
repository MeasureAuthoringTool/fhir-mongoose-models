const mongoose = require('mongoose/browser');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');

const FamilyMemberHistoryConditionSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  outcome: CodeableConceptSchema,
  contributedToDeath: PrimitiveBooleanSchema,
  onsetAge: AgeSchema,
  onsetRange: RangeSchema,
  onsetPeriod: PeriodSchema,
  onsetString: PrimitiveStringSchema,
  note: [AnnotationSchema],
  typeName: { type: String, default: 'FamilyMemberHistoryCondition' },
  _type: { type: String, default: 'FHIR::FamilyMemberHistoryCondition' },
});

class FamilyMemberHistoryCondition extends mongoose.Document {
  constructor(object) {
    super(object, FamilyMemberHistoryConditionSchema);
    this.typeName = 'FamilyMemberHistoryCondition';
    this._type = 'FHIR::FamilyMemberHistoryCondition';
  }
}

module.exports.FamilyMemberHistoryConditionSchema = FamilyMemberHistoryConditionSchema;
module.exports.FamilyMemberHistoryCondition = FamilyMemberHistoryCondition;
