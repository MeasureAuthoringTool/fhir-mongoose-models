const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ReferenceSchema } = require('./Reference');
const { RequestGroupActionSchema } = require('./RequestGroupAction');
const { RequestIntentSchema } = require('./RequestIntent');
const { RequestPrioritySchema } = require('./RequestPriority');
const { RequestStatusSchema } = require('./RequestStatus');

const RequestGroupSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  instantiatesCanonical: [PrimitiveCanonicalSchema],
  instantiatesUri: [PrimitiveUriSchema],
  basedOn: [ReferenceSchema],
  replaces: [ReferenceSchema],
  groupIdentifier: IdentifierSchema,
  status: RequestStatusSchema,
  intent: RequestIntentSchema,
  priority: RequestPrioritySchema,
  code: CodeableConceptSchema,
  subject: ReferenceSchema,
  encounter: ReferenceSchema,
  authoredOn: PrimitiveDateTimeSchema,
  author: ReferenceSchema,
  reasonCode: [CodeableConceptSchema],
  reasonReference: [ReferenceSchema],
  note: [AnnotationSchema],
  action: [RequestGroupActionSchema],
  typeName: { type: String, default: 'RequestGroup' },
  _type: { type: String, default: 'FHIR::RequestGroup' },
});

class RequestGroup extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupSchema);
    this.typeName = 'RequestGroup';
    this._type = 'FHIR::RequestGroup';
  }
}

module.exports.RequestGroupSchema = RequestGroupSchema;
module.exports.RequestGroup = RequestGroup;
