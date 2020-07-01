const mongoose = require('mongoose/browser');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { FamilyHistoryStatusSchema } = require('./FamilyHistoryStatus');
const { FamilyMemberHistoryConditionSchema } = require('./FamilyMemberHistoryCondition');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const FamilyMemberHistorySchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  status: FamilyHistoryStatusSchema,
  dataAbsentReason: CodeableConceptSchema,
  patient: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  name: PrimitiveStringSchema,
  relationship: CodeableConceptSchema,
  sex: CodeableConceptSchema,
  bornPeriod: PeriodSchema,
  bornDate: PrimitiveDateSchema,
  bornString: PrimitiveStringSchema,
  ageAge: AgeSchema,
  ageRange: RangeSchema,
  ageString: PrimitiveStringSchema,
  estimatedAge: PrimitiveBooleanSchema,
  deceasedBoolean: PrimitiveBooleanSchema,
  deceasedAge: AgeSchema,
  deceasedRange: RangeSchema,
  deceasedDate: PrimitiveDateSchema,
  deceasedString: PrimitiveStringSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  condition: [FamilyMemberHistoryConditionSchema],
  typeName: { type: String, default: 'FamilyMemberHistory' },
  _type: { type: String, default: 'FHIR::FamilyMemberHistory' },
});

class FamilyMemberHistory extends mongoose.Document {
  constructor(object) {
    super(object, FamilyMemberHistorySchema);
    this.typeName = 'FamilyMemberHistory';
    this._type = 'FHIR::FamilyMemberHistory';
  }
}

module.exports.FamilyMemberHistorySchema = FamilyMemberHistorySchema;
module.exports.FamilyMemberHistory = FamilyMemberHistory;
