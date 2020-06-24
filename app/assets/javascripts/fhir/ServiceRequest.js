const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');
const { ServiceRequestIntentSchema } = require('./ServiceRequestIntent');
const { ServiceRequestPrioritySchema } = require('./ServiceRequestPriority');
const { ServiceRequestStatusSchema } = require('./ServiceRequestStatus');
const { TimingSchema } = require('./Timing');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ServiceRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   replaces : [ReferenceSchema],
   requisition : IdentifierSchema,
   status : ServiceRequestStatusSchema,
   intent : ServiceRequestIntentSchema,
   category : [CodeableConceptSchema],
   priority : ServiceRequestPrioritySchema,
   doNotPerform : Boolean,
   code : CodeableConceptSchema,
   orderDetail : [CodeableConceptSchema],
   quantityQuantity : QuantitySchema,
   quantityRatio : RatioSchema,
   quantityRange : RangeSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   occurrenceTiming : TimingSchema,
   asNeededBoolean : Boolean,
   asNeededCodeableConcept : CodeableConceptSchema,
   authoredOn : DateTime,
   requester : ReferenceSchema,
   performerType : CodeableConceptSchema,
   performer : [ReferenceSchema],
   locationCode : [CodeableConceptSchema],
   locationReference : [ReferenceSchema],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   insurance : [ReferenceSchema],
   supportingInfo : [ReferenceSchema],
   specimen : [ReferenceSchema],
   bodySite : [CodeableConceptSchema],
   note : [AnnotationSchema],
   patientInstruction : String,
   relevantHistory : [ReferenceSchema],
   fhirTitle: { type: String, default: 'ServiceRequest' },
});

class ServiceRequest extends mongoose.Document {
  constructor(object) {
    super(object, ServiceRequestSchema);
    this._type = 'FHIR::ServiceRequest';
  }
};


module.exports.ServiceRequestSchema = ServiceRequestSchema;
module.exports.ServiceRequest = ServiceRequest;
