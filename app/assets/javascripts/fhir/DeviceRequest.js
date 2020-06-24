const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DeviceRequestParameterSchema } = require('./DeviceRequestParameter');
const { DeviceRequestStatusSchema } = require('./DeviceRequestStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RequestIntentSchema } = require('./RequestIntent');
const { RequestPrioritySchema } = require('./RequestPriority');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   priorRequest : [ReferenceSchema],
   groupIdentifier : IdentifierSchema,
   status : DeviceRequestStatusSchema,
   intent : RequestIntentSchema,
   priority : RequestPrioritySchema,
   codeReference : ReferenceSchema,
   codeCodeableConcept : CodeableConceptSchema,
   parameter : [DeviceRequestParameterSchema],
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   occurrenceTiming : TimingSchema,
   authoredOn : DateTime,
   requester : ReferenceSchema,
   performerType : CodeableConceptSchema,
   performer : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   insurance : [ReferenceSchema],
   supportingInfo : [ReferenceSchema],
   note : [AnnotationSchema],
   relevantHistory : [ReferenceSchema],
   fhirTitle: { type: String, default: 'DeviceRequest' },
});

class DeviceRequest extends mongoose.Document {
  constructor(object) {
    super(object, DeviceRequestSchema);
    this._type = 'FHIR::DeviceRequest';
  }
};


module.exports.DeviceRequestSchema = DeviceRequestSchema;
module.exports.DeviceRequest = DeviceRequest;
