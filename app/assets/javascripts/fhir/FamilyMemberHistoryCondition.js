const mongoose = require('mongoose/browser');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FamilyMemberHistoryConditionSchema = BackboneElementSchemaFunction({
   code : CodeableConceptSchema,
   outcome : CodeableConceptSchema,
   contributedToDeath : Boolean,
   onsetAge : AgeSchema,
   onsetRange : RangeSchema,
   onsetPeriod : PeriodSchema,
   onsetString : String,
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'FamilyMemberHistoryCondition' },
});

class FamilyMemberHistoryCondition extends mongoose.Document {
  constructor(object) {
    super(object, FamilyMemberHistoryConditionSchema);
    this._type = 'FHIR::FamilyMemberHistoryCondition';
  }
};


module.exports.FamilyMemberHistoryConditionSchema = FamilyMemberHistoryConditionSchema;
module.exports.FamilyMemberHistoryCondition = FamilyMemberHistoryCondition;
