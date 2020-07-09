const { AnnotationSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { RelatedArtifactSchema } = require('./allSchemaHeaders.js');
const { ResearchStudyArmSchema } = require('./allSchemaHeaders.js');
const { ResearchStudyObjectiveSchema } = require('./allSchemaHeaders.js');
const { ResearchStudyStatusSchema } = require('./allSchemaHeaders.js');
const { ResearchStudySchema } = require('./allSchemaHeaders.js');

ResearchStudySchema.add(DomainResourceSchema);
ResearchStudySchema.remove('id');
ResearchStudySchema.add({
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
});

module.exports.ResearchStudySchema = ResearchStudySchema;
