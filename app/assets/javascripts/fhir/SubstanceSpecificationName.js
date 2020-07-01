const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');
const { SubstanceSpecificationNameOfficialSchema } = require('./SubstanceSpecificationNameOfficial');

const SubstanceSpecificationNameSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  type: CodeableConceptSchema,
  status: CodeableConceptSchema,
  preferred: PrimitiveBooleanSchema,
  language: [CodeableConceptSchema],
  domain: [CodeableConceptSchema],
  jurisdiction: [CodeableConceptSchema],
  synonym: [SubstanceSpecificationNameSchema],
  translation: [SubstanceSpecificationNameSchema],
  official: [SubstanceSpecificationNameOfficialSchema],
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceSpecificationName' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationName' },
});

class SubstanceSpecificationName extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationNameSchema);
    this.typeName = 'SubstanceSpecificationName';
    this._type = 'FHIR::SubstanceSpecificationName';
  }
}

module.exports.SubstanceSpecificationNameSchema = SubstanceSpecificationNameSchema;
module.exports.SubstanceSpecificationName = SubstanceSpecificationName;
