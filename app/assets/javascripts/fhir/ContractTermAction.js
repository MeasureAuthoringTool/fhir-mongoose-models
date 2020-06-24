const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContractTermActionSubjectSchema } = require('./ContractTermActionSubject');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { TimingSchema } = require('./Timing');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractTermActionSchema = BackboneElementSchemaFunction({
   doNotPerform : Boolean,
   type : CodeableConceptSchema,
   subject : [ContractTermActionSubjectSchema],
   intent : CodeableConceptSchema,
   linkId : [String],
   status : CodeableConceptSchema,
   context : ReferenceSchema,
   contextLinkId : [String],
   occurrenceDateTime : DateTime,
   occurrencePeriod : PeriodSchema,
   occurrenceTiming : TimingSchema,
   requester : [ReferenceSchema],
   requesterLinkId : [String],
   performerType : [CodeableConceptSchema],
   performerRole : CodeableConceptSchema,
   performer : ReferenceSchema,
   performerLinkId : [String],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   reason : [String],
   reasonLinkId : [String],
   note : [AnnotationSchema],
   securityLabelNumber : [Number],
   fhirTitle: { type: String, default: 'ContractTermAction' },
});

class ContractTermAction extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermActionSchema);
    this._type = 'FHIR::ContractTermAction';
  }
};


module.exports.ContractTermActionSchema = ContractTermActionSchema;
module.exports.ContractTermAction = ContractTermAction;
