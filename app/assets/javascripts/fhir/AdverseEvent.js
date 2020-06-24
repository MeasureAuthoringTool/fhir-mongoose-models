const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AdverseEventActualitySchema } = require('./AdverseEventActuality');
const { AdverseEventSuspectEntitySchema } = require('./AdverseEventSuspectEntity');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AdverseEventSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   actuality : AdverseEventActualitySchema,
   category : [CodeableConceptSchema],
   event : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   date : DateTime,
   detected : DateTime,
   recordedDate : DateTime,
   resultingCondition : [ReferenceSchema],
   location : ReferenceSchema,
   seriousness : CodeableConceptSchema,
   severity : CodeableConceptSchema,
   outcome : CodeableConceptSchema,
   recorder : ReferenceSchema,
   contributor : [ReferenceSchema],
   suspectEntity : [AdverseEventSuspectEntitySchema],
   subjectMedicalHistory : [ReferenceSchema],
   referenceDocument : [ReferenceSchema],
   study : [ReferenceSchema],
   fhirTitle: { type: String, default: 'AdverseEvent' },
});

class AdverseEvent extends mongoose.Document {
  constructor(object) {
    super(object, AdverseEventSchema);
    this._type = 'FHIR::AdverseEvent';
  }
};


module.exports.AdverseEventSchema = AdverseEventSchema;
module.exports.AdverseEvent = AdverseEvent;
