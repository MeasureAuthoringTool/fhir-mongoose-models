const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { ClinicalImpressionFindingSchema } = require('./ClinicalImpressionFinding');
const { ClinicalImpressionInvestigationSchema } = require('./ClinicalImpressionInvestigation');
const { ClinicalImpressionStatusSchema } = require('./ClinicalImpressionStatus');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClinicalImpressionSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ClinicalImpressionStatusSchema,
   statusReason : CodeableConceptSchema,
   code : CodeableConceptSchema,
   description : String,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   effectiveDateTime : DateTime,
   effectivePeriod : PeriodSchema,
   date : DateTime,
   assessor : ReferenceSchema,
   previous : ReferenceSchema,
   problem : [ReferenceSchema],
   investigation : [ClinicalImpressionInvestigationSchema],
   protocol : [String],
   summary : String,
   finding : [ClinicalImpressionFindingSchema],
   prognosisCodeableConcept : [CodeableConceptSchema],
   prognosisReference : [ReferenceSchema],
   supportingInfo : [ReferenceSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'ClinicalImpression' },
});

class ClinicalImpression extends mongoose.Document {
  constructor(object) {
    super(object, ClinicalImpressionSchema);
    this._type = 'FHIR::ClinicalImpression';
  }
};


module.exports.ClinicalImpressionSchema = ClinicalImpressionSchema;
module.exports.ClinicalImpression = ClinicalImpression;
