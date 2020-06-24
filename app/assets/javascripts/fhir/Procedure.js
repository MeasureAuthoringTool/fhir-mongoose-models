const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AgeSchema } = require('./Age');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ProcedureFocalDeviceSchema } = require('./ProcedureFocalDevice');
const { ProcedurePerformerSchema } = require('./ProcedurePerformer');
const { ProcedureStatusSchema } = require('./ProcedureStatus');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProcedureSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : ProcedureStatusSchema,
   statusReason : CodeableConceptSchema,
   category : CodeableConceptSchema,
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   performedDateTime : DateTime,
   performedPeriod : PeriodSchema,
   performedString : String,
   performedAge : AgeSchema,
   performedRange : RangeSchema,
   recorder : ReferenceSchema,
   asserter : ReferenceSchema,
   performer : [ProcedurePerformerSchema],
   location : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   bodySite : [CodeableConceptSchema],
   outcome : CodeableConceptSchema,
   report : [ReferenceSchema],
   complication : [CodeableConceptSchema],
   complicationDetail : [ReferenceSchema],
   followUp : [CodeableConceptSchema],
   note : [AnnotationSchema],
   focalDevice : [ProcedureFocalDeviceSchema],
   usedReference : [ReferenceSchema],
   usedCode : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'Procedure' },
});

class Procedure extends mongoose.Document {
  constructor(object) {
    super(object, ProcedureSchema);
    this._type = 'FHIR::Procedure';
  }
};


module.exports.ProcedureSchema = ProcedureSchema;
module.exports.Procedure = Procedure;
