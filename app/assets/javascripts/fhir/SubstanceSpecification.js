const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationCodeSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationMoietySchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationNameSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationPropertySchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationRelationshipSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./allSchemaHeaders.js');
const { SubstanceSpecificationSchema } = require('./allSchemaHeaders.js');

SubstanceSpecificationSchema.add(DomainResourceSchema);
SubstanceSpecificationSchema.remove('id');
SubstanceSpecificationSchema.add({
  identifier: IdentifierSchema,
  type: CodeableConceptSchema,
  status: CodeableConceptSchema,
  domain: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  source: [ReferenceSchema],
  comment: PrimitiveStringSchema,
  moiety: [SubstanceSpecificationMoietySchema],
  property: [SubstanceSpecificationPropertySchema],
  referenceInformation: ReferenceSchema,
  structure: SubstanceSpecificationStructureSchema,
  code: [SubstanceSpecificationCodeSchema],
  name: [SubstanceSpecificationNameSchema],
  molecularWeight: [SubstanceSpecificationStructureIsotopeMolecularWeightSchema],
  relationship: [SubstanceSpecificationRelationshipSchema],
  nucleicAcid: ReferenceSchema,
  polymer: ReferenceSchema,
  protein: ReferenceSchema,
  sourceMaterial: ReferenceSchema,
});

module.exports.SubstanceSpecificationSchema = SubstanceSpecificationSchema;
