const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { RequestGroupActionSchema } = require('./RequestGroupAction');
const { RequestIntentSchema } = require('./RequestIntent');
const { RequestPrioritySchema } = require('./RequestPriority');
const { RequestStatusSchema } = require('./RequestStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RequestGroupSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   replaces : [ReferenceSchema],
   groupIdentifier : IdentifierSchema,
   status : RequestStatusSchema,
   intent : RequestIntentSchema,
   priority : RequestPrioritySchema,
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   authoredOn : DateTime,
   author : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   note : [AnnotationSchema],
   action : [RequestGroupActionSchema],
   fhirTitle: { type: String, default: 'RequestGroup' },
});

class RequestGroup extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupSchema);
    this._type = 'FHIR::RequestGroup';
  }
};


module.exports.RequestGroupSchema = RequestGroupSchema;
module.exports.RequestGroup = RequestGroup;
