const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { ResearchStudyArmSchema } = require('./ResearchStudyArm');
const { ResearchStudyObjectiveSchema } = require('./ResearchStudyObjective');
const { ResearchStudyStatusSchema } = require('./ResearchStudyStatus');

const ResearchStudySchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  title: PrimitiveStringSchema,
  protocol: [ReferenceSchema],
  partOf: [ReferenceSchema],
  status: ResearchStudyStatusSchema,
  primaryPurposeType: CodeableConceptSchema,
  phase: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  focus: [CodeableConceptSchema],
  condition: [CodeableConceptSchema],
  contact: [ContactDetailSchema],
  relatedArtifact: [RelatedArtifactSchema],
  keyword: [CodeableConceptSchema],
  location: [CodeableConceptSchema],
  description: PrimitiveMarkdownSchema,
  enrollment: [ReferenceSchema],
  period: PeriodSchema,
  sponsor: ReferenceSchema,
  principalInvestigator: ReferenceSchema,
  site: [ReferenceSchema],
  reasonStopped: CodeableConceptSchema,
  note: [AnnotationSchema],
  arm: [ResearchStudyArmSchema],
  objective: [ResearchStudyObjectiveSchema],
  typeName: { type: String, default: 'ResearchStudy' },
  _type: { type: String, default: 'FHIR::ResearchStudy' },
});

class ResearchStudy extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudySchema);
    this.typeName = 'ResearchStudy';
    this._type = 'FHIR::ResearchStudy';
  }
}

module.exports.ResearchStudySchema = ResearchStudySchema;
module.exports.ResearchStudy = ResearchStudy;
