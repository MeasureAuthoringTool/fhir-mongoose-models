const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CommunicationPayloadSchema } = require('./CommunicationPayload');
const { CommunicationPrioritySchema } = require('./CommunicationPriority');
const { CommunicationStatusSchema } = require('./CommunicationStatus');
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

const CommunicationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   inResponseTo : [ReferenceSchema],
   status : CommunicationStatusSchema,
   statusReason : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   priority : CommunicationPrioritySchema,
   medium : [CodeableConceptSchema],
   subject : ReferenceSchema,
   topic : CodeableConceptSchema,
   about : [ReferenceSchema],
   encounter : ReferenceSchema,
   sent : DateTime,
   received : DateTime,
   recipient : [ReferenceSchema],
   sender : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   payload : [CommunicationPayloadSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'Communication' },
});

class Communication extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationSchema);
    this._type = 'FHIR::Communication';
  }
};


module.exports.CommunicationSchema = CommunicationSchema;
module.exports.Communication = Communication;
