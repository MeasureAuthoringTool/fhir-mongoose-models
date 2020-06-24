const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { FamilyHistoryStatusSchema } = require('./FamilyHistoryStatus');
const { FamilyMemberHistoryConditionSchema } = require('./FamilyMemberHistoryCondition');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FamilyMemberHistorySchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   status : FamilyHistoryStatusSchema,
   dataAbsentReason : CodeableConceptSchema,
   patient : ReferenceSchema,
   date : DateTime,
   name : String,
   relationship : CodeableConceptSchema,
   sex : CodeableConceptSchema,
   bornPeriod : PeriodSchema,
   bornDate : FHIRDate,
   bornString : String,
   ageAge : AgeSchema,
   ageRange : RangeSchema,
   ageString : String,
   estimatedAge : Boolean,
   deceasedBoolean : Boolean,
   deceasedAge : AgeSchema,
   deceasedRange : RangeSchema,
   deceasedDate : FHIRDate,
   deceasedString : String,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   note : [AnnotationSchema],
   condition : [FamilyMemberHistoryConditionSchema],
   fhirTitle: { type: String, default: 'FamilyMemberHistory' },
});

class FamilyMemberHistory extends mongoose.Document {
  constructor(object) {
    super(object, FamilyMemberHistorySchema);
    this._type = 'FHIR::FamilyMemberHistory';
  }
};


module.exports.FamilyMemberHistorySchema = FamilyMemberHistorySchema;
module.exports.FamilyMemberHistory = FamilyMemberHistory;
