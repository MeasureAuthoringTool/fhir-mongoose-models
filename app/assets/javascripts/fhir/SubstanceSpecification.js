const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SubstanceSpecificationCodeSchema } = require('./SubstanceSpecificationCode');
const { SubstanceSpecificationMoietySchema } = require('./SubstanceSpecificationMoiety');
const { SubstanceSpecificationNameSchema } = require('./SubstanceSpecificationName');
const { SubstanceSpecificationPropertySchema } = require('./SubstanceSpecificationProperty');
const { SubstanceSpecificationRelationshipSchema } = require('./SubstanceSpecificationRelationship');
const { SubstanceSpecificationStructureSchema } = require('./SubstanceSpecificationStructure');
const { SubstanceSpecificationStructureIsotopeMolecularWeightSchema } = require('./SubstanceSpecificationStructureIsotopeMolecularWeight');

const SubstanceSpecificationSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'SubstanceSpecification' },
  _type: { type: String, default: 'FHIR::SubstanceSpecification' },
});

class SubstanceSpecification extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationSchema);
    this.typeName = 'SubstanceSpecification';
    this._type = 'FHIR::SubstanceSpecification';
  }
}

module.exports.SubstanceSpecificationSchema = SubstanceSpecificationSchema;
module.exports.SubstanceSpecification = SubstanceSpecification;
