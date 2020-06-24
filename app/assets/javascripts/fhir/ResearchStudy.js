const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { ResearchStudyArmSchema } = require('./ResearchStudyArm');
const { ResearchStudyObjectiveSchema } = require('./ResearchStudyObjective');
const { ResearchStudyStatusSchema } = require('./ResearchStudyStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResearchStudySchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   title : String,
   protocol : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : ResearchStudyStatusSchema,
   primaryPurposeType : CodeableConceptSchema,
   phase : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   focus : [CodeableConceptSchema],
   condition : [CodeableConceptSchema],
   contact : [ContactDetailSchema],
   relatedArtifact : [RelatedArtifactSchema],
   keyword : [CodeableConceptSchema],
   location : [CodeableConceptSchema],
   description : String,
   enrollment : [ReferenceSchema],
   period : PeriodSchema,
   sponsor : ReferenceSchema,
   principalInvestigator : ReferenceSchema,
   site : [ReferenceSchema],
   reasonStopped : CodeableConceptSchema,
   note : [AnnotationSchema],
   arm : [ResearchStudyArmSchema],
   objective : [ResearchStudyObjectiveSchema],
   fhirTitle: { type: String, default: 'ResearchStudy' },
});

class ResearchStudy extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudySchema);
    this._type = 'FHIR::ResearchStudy';
  }
};


module.exports.ResearchStudySchema = ResearchStudySchema;
module.exports.ResearchStudy = ResearchStudy;
